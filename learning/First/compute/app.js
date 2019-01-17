new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        a:0,
        b:0,
        age:0
    },
    methods:{
        addToA: function () { 
            console.log('methods addToA') 
            return this.a + this.age;
        },
        addToB: function () {
            console.log('methodsS addToB')  
            return this.b + this.age;
        }
    },
    computed:{
        // addToA: function () {  
        //     console.log('computed addToA')
        //     return this.a + this.age;
        // },
        // addToB: function () {  
        //     console.log('computed addToB')
        //     return this.b + this.age;
        // }
    }
});