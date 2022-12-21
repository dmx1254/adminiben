// Function verify if e-mail address user is valid witth nodemailer

const nodemailer = require("nodemailer");
const CodeModel = require("../modals/code.models");

//Function sendEmail verify is email is valid with Nodemailer
const sendEmail = async (email) => {
  //Function generated my code to sending my check e-mail
  codeGenerated = () => {
    const generateRandomCode =
      "0123456789abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let myCode = "";
    for (let i = 0; i < 4; i++) {
      let code = Math.floor(Math.random() * generateRandomCode.length);
      myCode += generateRandomCode[code];
    }
    return myCode;
  };

  const codeSending = codeGenerated();
  const doc = new CodeModel();
  doc.code = codeSending;
  await doc.save();

  //Function sending e-mail to users who's register
  const transporter = await nodemailer.createTransport({
    host: "mail.ibendouma.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  let mailOptions = {
    from: "<service@ibendouma.com>",
    to: email,
    subject: "Hello from iBendouma",
    text: "copier le code et verifier votre identité",
    html: `<b>copier le code et verifier votre identité</b>
        <div style="color: #ff0000">${codeSending}</div>
    
    `, // html body
  };

  await transporter.sendMail(mailOptions, (error, res) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email is sent", res);
    }
  });
};

module.exports = sendEmail;
