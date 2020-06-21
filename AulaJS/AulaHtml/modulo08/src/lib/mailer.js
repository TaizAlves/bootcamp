const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "abbeeda716b7e9",
      pass: "c757773e10cad1"
    }
  });

