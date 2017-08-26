new Vue({
        el: '#exercise',
        data: {
            value: 'Hello World!'
        },
        methods:{
            showAlert: function(){
                alert("It worked");
            },
            storeValue: function(event){
                this.value = event.target.value;
            }
        }
    });
