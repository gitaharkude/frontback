<template>
    <div>
        <h1>Employee Details</h1>

        
        <div class="row">
          <div class="col-md-10"></div>
          
          <div class="col-md-4">
            <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create employee</router-link>
          </div>
        </div><br />
        <div class="form-group">
        <input type="text" name="search" v-model="search" placeholder="search employee">
        <div  v-for="item in filteritems" :key="item.employeeId"></div>
        </div>

          
        
        <table class="table table-hover">
            <thead>
            <tr>
                <td>Emp ID</td>
                <td>First Name</td>
                <td>Last name</td>
                <td>Email</td>
                <td>Gender</td>
                <td>City</td>
                <td>Actions</td>
            </tr>
            </thead>
    

            <tbody>
                <tr v-for="item in items" :key="item.employeeId">
                    <td>{{ item.employeeId }}</td>
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.city }}</td>
                    <td><router-link :to="{name: 'EditItem', params: { id: item.employeeId }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteItem(item.employeeId)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      search:''
    }
  },
  created: function () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
    //  subham url
      let uri = 'http://localhost:3040/employee'
      this.axios.get(uri).then((response) => {
        debugger;
        this.items = response.data
      })
    },
    deleteItem (employeeId) {
    //  subham url
    let uri= 'http://localhost:3040/employee' + employeeId
    this.axios.delete(uri,JSON.stringify(this.userdata), {
      headers: {
        'Access-control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.$router.go();
      })
    },
     fetchItems () {
    //  subham url
      let uri = 'http://localhost:3040/employee'
      this.axios.get(uri).then((response) => {
        this.items = response.data
      })
     },

    filteritems(items){
     let uri= 'http://localhost:3040/employee/' + employeeId
    this.axios.delete(uri,JSON.stringify(this.userdata), {
      headers: {
        'Access-control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.$router.go();
      })
    },
     /*filteritems (items) {
      return this.items.filter((item)  =>  {
        return item.match(this.items)
      });
     }*/

  },
 /* computed:{
    filteritems:function(){
      return this.items((item)=>{
        return item.title.match(this.search);
});
    }*/
}
</script>
