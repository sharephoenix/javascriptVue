new Vue({
    el:"#vue-app",// element:id, html 中的根容易
    data:{      // 用于数据的存储
        name:'',
        age:'',
        address:'上海'
    },
    methods:{
        logName: function () {  
            this.name = this.$refs.name.value
        },
        logAge: function () {  
            this.age = this.$refs.age.value
        }
    },
    computed:{}
});