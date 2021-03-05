<template>
  <div class="app-container">
    <h3> sample Page for Form with v-model, Store   </h3>
    input : <input v-model="input_name"/> 
    <br>
    store.user.name : {{name}}
  </div>
</template>


<script>

import {mapGetters} from 'vuex'
export default {
  computed : {
    //when input data change store.user data is also changed
    input_name : {
      get(){
        return this.$store.state.users.name
      },
      set(value){
        this.$store.commit('users/SET_NAME', value);
      }
    }, 
    ...mapGetters([
      'name',
    ])
    

  },
  methods: {
    onSubmit() {
      console.log(this.form)
      alert('submit!')
    }
  },
}
</script>
