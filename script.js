var app = new Vue({
    el: '#app',
    data: {
        // gameTimer: '00:00'
    },
    computed: {
        gameTimer: function() {
            return '00:00';
        }
    }
});
