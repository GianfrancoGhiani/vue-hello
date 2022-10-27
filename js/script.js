const HelloWorld = Vue.createApp({
    data() {
        return {
            msg: 'Hello World!!!',

        }
    },
    
});
HelloWorld.mount('#sayHi');
const ImageChanger = Vue.createApp({
    data() {
        return {
            //imgOpt: console.log(imgOpt1.value),
            optValue: '',
            imgUrl: ''
        }
    },
    methods: {
        selImg(){
            
            if (this.optValue == 'Roma' || this.optValue == 'roma'){
                this.imgUrl = 'https://ristorantecalicedoro.it/wp-content/uploads/2016/02/amazing-roma-city-wallpaper-hd1.jpg';
            } else if (this.optValue == 'Londra' || this.optValue == 'londra'){ 
                this.imgUrl = 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/12/dove-fare-il-tampone-londra-regno-unito-iStock-1265900812-1080x720.jpeg?v=457152';
            } else if (this.optValue == 'Sidney' || this.optValue == 'sidney'){
                this.imgUrl = 'https://justravel.org/wp-content/uploads/2021/02/viste-a-Sidney.jpg';
            } else {
                this.imgUrl = 'https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif'
            }
        },
        
    }
});
ImageChanger.mount('#imgSelector');
