<template>
  <div>
    <h1>Employee Details</h1>
    <form v-on:submit.prevent="AddDetails">
     <!-- <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Emp Id:</label>
            <input type="number" class="form-control" v-model="userdata.Id" required>
          </div>
        </div>
        </div>-->

        <div class="">
          <div class="col-md-6">
            <div class="form-group">
              <label>first name:</label>
              <input type="text" class="form-control col-md-6" v-model="userdata.firstName" required />
            </div>
          </div>
        </div><br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Last name:</label>
              <input type="text" class="form-control col-md-4" v-model="userdata.lastName" required />
            </div>
          </div>
        </div><br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Email:</label>
              <input type="email" class="form-control col-md-4" v-model="userdata.email" required />
            </div>
          </div>
        </div>
       <div class="row">
      <div class="col-md-4">
      <div class="form-group">
        Gender: <label for="male"><input type="radio" name="Gender" id="male" value="Male"
                 v-model="userdata.gender"> Male</label>
                <label for="female"> <input type="radio" name="Gender" id="female" value="Female"
                 v-model="userdata.gender"> Female
         </label>
        </div>
    </div>
    </div>
    <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>city:</label>
              <select v-model="userdata.city">
                <option disabled value="">Please select one</option>
                <option>Bangalore</option>
                <option>pune</option>
                <option>Hubli</option>
              </select>
            </div>
          </div>
        </div>
     <div class="form-group">
          <button class="btn btn-primary">Add Emp details</button>
        </div>
    </form>
  </div>
</template>
<script>

export default {
  data () {
    return {
      userdata: {}
    
    }
  },
  methods: {
    AddDetails () {
    // subhma url

      //debugger
      let uri = 'http://localhost:3040/employee'
      this.axios.post(uri, JSON.stringify(this.userdata), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        
        this.$router.push({name: 'DisplayItem'})
      }).catch((err)=>{
        //debugger
         alert(err.response.data.message)
      });
    }
  }
}
</script>
