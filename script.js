const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
            listaDischi : []
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.listaDischi = res.data;
                console.log(this.listaDischi);
            })
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');