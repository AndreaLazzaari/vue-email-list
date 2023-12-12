

const { createApp } = Vue

createApp({
  data() {
    return {
      listaEmail: [],
      activeIndex: 0,
    }
  },
  methods:{
    createListEmail(){

        for (let index = 0; index < 10; index++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail') .then(
                (response) =>{
                console.log(response)
                this.listaEmail.push(response.data);
    });
            
        }
    
    }
  },
  created(){
    this.createListEmail()
  }
}).mount('#app')


