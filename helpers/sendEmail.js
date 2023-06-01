const nodemailer = require("nodemailer");



async function sendEmail(email,verify,templeate) {

  
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rezowan311410@gmail.com", // generated ethereal user
        pass: "xmwfrtphzfjywgok", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'rezowan311410@gmail.com', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: templeate(verify), // html body
    });
}


module.exports = sendEmail