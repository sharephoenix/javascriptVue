var one= new Vue({
    el:"#vue-app-one",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        title:"app-one 的内容"
    },
    methods:{
        changeValue:function () {  
            two.title = two.title + "1";
        }
    },
    computed:{
        greet:function () {  
            return "Hello App One"
        }
    }
});

var two = new Vue({
    el:"#vue-app-two",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        title:"app-two 的内容"
    },
    methods:{
        changeValue:function () {  
            one.title = one.title + "1";
        }
    },
    computed:{
        greet:function () {  
            return "Hello App Two"
        }
    }
});
// 这里可以重新修改 各个组件中的值 
// two.title = "app two 的 title 也发上变化了"