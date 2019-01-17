new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        age:30,
        x:0,
        y:0
    },
    methods:{
        add: function () { 
            this.age++
        },
        substract: function () {  
            this.age--
        },
        updateXY: function (event) {
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY; 
        },
        stopmoving: function (evnet) {
            event.stopPropagation();  
        },
        alert: function () { 
            alert('this is my alert stop preevent')
        }
    },
    computed:{}
});