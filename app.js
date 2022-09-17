

async function main() {
  const nodemailer = require("nodemailer");
  // balak ko sana kukunin lang yung values doon sa text box tapos ipapasok nya dito hahaha
    let senderEmail = "";
    let senderPass = "";
    let sendTo = "202011020@gordoncollege.edu.ph";
    // let sender = document.getElementById("senderEmail").value;
    // let senderPass = document.getElementById("senderPass").value;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: senderEmail, 
        pass: senderPass, 
      },
    });
  
    // send mail with defined transport object
    
    let info = await transporter.sendMail({
        from: '"Bryne Babasa"', // sender address
        to: sendTo, // list of receivers
        subject: "test89", // Subject line
        text: "123", // plain text body
        html: "<b>mais part 2</b>", // html body
      });
    
   
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
  
  }
  //hindi talaga kasama yung function send nayan pinag eexperimentohan ko lang ahaaha
  //main().catch(console.error);
  function send(){
     main().catch(console.error);
  }
