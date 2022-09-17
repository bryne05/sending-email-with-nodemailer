const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      senderEmail: '',
      senderPass: '',
      message: '',
      sendTo: ''
    }
  },
  methods:{
    send(){
      axios({
        method: 'post',
        url: 'http://localhost:3000/send_mail/',
        data: {
          senderEmail: this.senderEmail,
          senderPass: this.senderPass
        }
      }).then((res)=>{
        this.message = res.data.message
      });

    }
  }
}).mount('#app')