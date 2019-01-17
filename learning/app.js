new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        error:false,
        success:false,
        name:"alexluan",
        job:"vue 开发",
        firstnumber:1,
        secondnumber:2,
        website:'http://www.baidu.com',
        jstag:"<a href = 'http://bing.com'>Bing</a>"
    },
    methods:{
        greet: function(content) {
            let current = 'good morning!' + this.name
            this.name = content
            return current + " " + this.name
        }
    },
    computed:{}
});