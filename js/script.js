const { createApp } = Vue

  createApp({
    data() {
      return {
        apiUrl: './server.php'
      }
    },
    methods: {
      getData(){
        axios.get(this.apiUrl).then((response)=>{
          console.log(response)
        })
      }
    },
    created(){
      this.getData()
    }
  }).mount('#app')