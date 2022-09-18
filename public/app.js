const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      senderEmail: '',
      senderPass: '',
      message: '',
      sendTo: '',
      messageBody:'',
      server:'',
      port:'',
      subject:'',
      from:'',
      attachPath:''
    }
  },
  methods:{
    send(){
      axios({
        method: 'post',
        url: 'http://localhost:3000/send_mail/',
        data: {
          senderEmail: this.senderEmail,
          senderPass: this.senderPass,
          sendTo: this.sendTo,
          messageBody: this.messageBody,
          server: this.server,
          port: this.port,
          subject: this.subject,
          from: this.from,
          attachPath: this.attachPath
        }
      }).then((res)=>{
        this.message = res.data.message
      });

    }
  }
}).mount('#app')