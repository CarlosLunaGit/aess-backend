const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.GMAIL_EMAIL,
    subject: `New message from ${name} - ${email}`,
    text: message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

module.exports = {
  sendEmail,
};
