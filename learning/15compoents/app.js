
Vue.component("greeting",{
    template:`
     <div>
     <p>{{name}}:大家好，给大脚介绍一个女朋友</p>
     <button v-on:click="changeName">ChangeName</button>
     </div>
    `,
    data:function () {  
        return {
            name:"鹿晗"
        }
    },
    methods:{
        changeName:function () {  
            this.name = "Henry";
        }
    }
})

new Vue({
    el:"#vue-app-one",// element:id, html 中的根容易
});

new Vue({
    el:"#vue-app-two",// element:id, html 中的根容易
});