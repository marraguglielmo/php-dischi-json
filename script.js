const {createApp} = Vue;

createApp({

    data(){
        return{
            apiUrl: 'server.php',
            listaDischi : [],
            activeId : 0,
            showInfo: false,
            newDisc:{
                title: '',
                author: '',
                year: '',
                poster: ''
            },
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.listaDischi = res.data;
            })
        },

        addNewDisc(){
            // effettuo la chiamata axios
            // per inviarlo a PHP lo maschero con formData (come se fosse un form)
            const data = new FormData();
            // faccio l'append delle variabili che mando in POST
            data.append('newDiscTitle', this.newDisc.title)
            data.append('newDiscAuthor', this.newDisc.author)
            data.append('newDiscYear', this.newDisc.year)
            data.append('newDiscPoster', this.newDisc.poster)

            axios.post(this.apiUrl, data)
            .then(res =>{
                // agiorno la lista
                this.listaDischi = res.data;
            })
        },

        removeDisc(index){
            // const data = new FormData();
            // data.append('deleteDisc')
            console.log(index);
        },

        getInfoCard(){
            this.showInfo = true;
            // salvo in selectedDisc il disco attivo
            const selectedDisc = this.listaDischi[this.activeId]
            console.log(selectedDisc);
        },

        closeInfoCard(){
            this.showInfo = false;
        }
    },

    mounted(){
        this.getApi();
    }
    
}).mount('#app');