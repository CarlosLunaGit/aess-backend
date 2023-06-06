const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourGmail@gmail.com',
      pass: 'yourPassword',
    },
  });

  let mailOptions = {
    from: email,
    to: 'aess.technologies@gmail.com',
    subject: `New message from ${name} - ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};

module.exports = {
  sendEmail,
};
