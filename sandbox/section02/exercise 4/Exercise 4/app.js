new Vue({
  el: '#exercise',
  data: {
      classHighlight:true,
      myStyle1: 'highlight',
      myStyle2: 'myStyle2',
      changeClass:'',
      userClass: '',
      userBoolean:true,
      userStyle:'',
      progressWidth:10

  },
  computed: {
      genClass: function(){
          return {userClass: this.userBoolean};
      }
  },
  methods: {
    startEffect: function() {
        var self = this;
        setInterval(function(){
            self.classHighlight = !self.classHighlight;
        },3000);
    },

    startProgress:function(){
        var self = this;
        setInterval(function(){
            self.progressWidth+=10;
        },1000)
    }

  }
});
