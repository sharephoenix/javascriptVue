new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        changeColor:false,
        changeLength:false
    },
    methods:{
    },
    computed:{
        compClasses:function () {  
            return {
                changeColor:this.changeColor,
                changeLength:this.changeLength
            }
        }
    }
}); 