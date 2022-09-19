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
      attachPath:'',

      //ListBox
      cantInsertSingle: false,
      newEmail: '',
      selected: [],
      options: []
    }
  },
  methods:{
    send(){
      
      let data = {
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
      if(this.selected.length != 0){
        data.sendTo = this.selected
      }else{
        data.sendTo = this.sendTo
      }

      axios({
        method: 'post',
        url: 'http://localhost:3000/send_mail/',
        data: data
      }).then((res)=>{
        this.message = res.data.message
        alert(this.message)
      });
    },
    addToList(){
      this.options.push({value:this.newEmail})
      this.newEmail = ''
      this.sendTo = ''
      this.cantInsertSingle = true
      
    },
    deleteAll(){
      this.options = []
      this.selected = []
      this.cantInsertSingle = false
    }

  }
}).mount('#app')