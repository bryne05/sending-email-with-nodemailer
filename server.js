const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const nodemailer = require('nodemailer');

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });


app.post('/send_mail', function(req,res){
  let senderEmail = req.body.senderEmail;
  let senderPass = req.body.senderPass;
  let sendTo = req.body.sendTo;
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
  
  let info = transporter.sendMail({
      from: '"Bryne Babasa"', // sender address
      to: sendTo, // list of receivers
      subject: "test89", // Subject line
      text: "123", // plain text body
      html: "<b>mais part 2</b>", // html body
    });


  res.send({message: "Message sent: " + info.messageId})
})

const port = process.env.PORT || 3000;
app.listen(port);