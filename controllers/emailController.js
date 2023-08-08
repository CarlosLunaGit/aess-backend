const { google } = require('googleapis');

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
  const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  const raw = Buffer.from(
    `From: ${email}\r\n` +
    `To: ${process.env.GMAIL_EMAIL}\r\n` +
    `Subject: New message from ${name} - ${email}\r\n` +
    `\r\n` +
    `${message}`
  ).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');

  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw
      }
    });
    console.log('Email sent:', response.data);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

module.exports = {
  sendEmail,
};
