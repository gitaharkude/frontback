var app = new Vue({
    el: '#app',
    data: function() {
      return {
          userData: {
              Id:'',
            fname:'',
            Lname:'',
            Email:''

         
        },
      
      isSubmitted: false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
    
    
    });