const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(res =>{
                console.log(res.data);
            })
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');