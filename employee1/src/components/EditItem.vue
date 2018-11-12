<template>
    <div>
        <h1>Update</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">Return to Items</router-link></div>
    </div>

        <form v-on:submit.prevent="update">
            <div class="form-group">
                <label>Emp Id</label>
                <input type="number" class="form-control" v-model="userdata.employeeId">
            </div>
            <div class="form-group">
                <label>Frist name</label>
                <input type="text" class="form-control" v-model="userdata.firstName">
            </div>

            <div class="form-group">
                <label>Last name</label>
                <input type="text" class="form-control" v-model="userdata.lastName">
            </div>
            <div class="form-group">
                <label>email</label>
                <input type="text" class="form-control" v-model="userdata.email">
            </div>
            <div class="form-group">
                <label>gender</label>
                <input type="text" class="form-control" v-model="userdata.gender">
            </div>
            <div class="form-group">
                <label>city</label>
                <input type="text" class="form-control" v-model="userdata.city">
            </div>
        <div class="form-group">
               <!--<button class="btn btn-primary">Update</button>-->
               <td><button class="btn btn-danger" v-on:click="update(userdata.employeeId)">update</button></td>
        </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userdata: {}
      //console.log(userdata)
    }
  },
  created: function () {
    this.getItem()
  },
  methods: {
    getItem () {
    //  subham url
   // alert(this.$route.params.id)
      let uri = 'http://localhost:3040/employee/' + this.$route.params.id
      this.axios.get(uri).then((response) => {
        debugger
        //alert(response.data[0].employeeId)
        this.userdata = response.data
      })
    },
    update (employeeId) {
      // subham url
      
      debugger
      let uri = 'http://localhost:3040/employee/'+employeeId
      debugger
      this.axios.put(uri, JSON.stringify(this.userdata), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.$router.push({name: 'DisplayItem'})
      })
    }
  }
}
</script>
