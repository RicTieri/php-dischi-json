const { createApp } = Vue

  createApp({
    data() {
      return {
        apiUrl: './server.php',
        songs: [],
      }
    },
    methods: {
      getData(){
        axios.get(this.apiUrl).then((response)=>{
          this.songs = response.data
        })
      }
    },
    created(){
      this.getData()
    }
  }).mount('#app')