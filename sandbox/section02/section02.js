new Vue({
    el: "#app",
    data: {
        value:0
    },
    computed:{
        result:function(){
            return this.value < 37 ? "Not there yet" : "done";
        }
    },
    watch:{
        result:function(value){
            var self = this;
            setTimeout(function(){
                self.value = 0;
            },1000);
        }
    }
})
