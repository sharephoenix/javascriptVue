new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        health:100,
        ended:false
    },
    methods:{
        punch:function () {  
            this.health -= 10;
            if (this.health <= 0){
                this.ended = true;
            } 
        },
        restart:function () {  
            this.health = 100;
            this.ended = false;
        }
    },
    computed:{}
});