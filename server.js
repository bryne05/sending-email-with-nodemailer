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
  let messageBody = req.body.messageBody;
  let port = req.body.port;
  let server = req.body.server;
  let subject = req.body.subject;
  let from = req.body.from;
  let attachPath = req.body.attachPath;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: server, //smtp.gmail.com
    port: port,
    secure: true, // true for 465, false for other ports
    auth: {
      user: senderEmail, 
      pass: senderPass, 
    },
  });

  // send mail with defined transport object
  
  let info = transporter.sendMail({
      from: `"${from}" <${senderEmail}>`, // sender address
      to: sendTo, // list of receivers
      subject: subject, // Subject line
      attachments: [{
        path: attachPath ? `${attachPath}` : ''
        }
      ],
      txt:'',
      html: messageBody,
    });
    console.log(attachPath);
  res.send({message: "Message successfully sent to " + sendTo})
})

const port = process.env.PORT || 3000;
app.listen(port);