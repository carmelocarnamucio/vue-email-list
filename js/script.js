var app = new Vue({
   el: "#app",
   data: {
     listEmail: []
   },
   mounted: function () {
     for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(answer => {
        let email = answer.data.response;
        this.listEmail.push(answer.data.response)
      })
     }
   }
});
