new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        name:'',
        age:''
    },
    methods:{
        logName: function () {  
            console.log("输入 namge")
        },
        logAge: function () {  
            console.log("输入 age")
        }
    },
    computed:{}
});