const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
            listaDischi : [],
            activeId : 0,
            showInfo: false
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.listaDischi = res.data;
                console.log(this.listaDischi);
            })
        },

        getInfoCard(){
            this.showInfo = true;
            // salvo in selectedDisc il disco attivo
            const selectedDisc = this.listaDischi[this.activeId]
            console.log(selectedDisc);
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');