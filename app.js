const app = Vue.createApp({
    data() {
        return {
            showMovies: true,
            movies:[
                {title: "Game of Thrones", producer:  "George Robert", img: 'assets/GOT.jpg', isFav: true},
                {title: "Army of the Dead", producer:  "Zack Snyder", img: 'assets/army.jpg', isFav: false},
                {title: "Power", producer:  "Michael Scott",img: 'assets/power.jpg', isFav: true}
            
        ]
        }
    },
    methods:{
        toggleShowMovies(){
            this.showMovies= !this.showMovies
        },
        toggleFav(item){
            item.isFav=!item.isFav

        }
        
    },
    computed: {
        filteredMovies(){
            return this.movies.filter((item)=> item.isFav)
        }

    }
})
app.mount('#app')