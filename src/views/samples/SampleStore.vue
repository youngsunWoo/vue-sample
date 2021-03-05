<template>
  <div>
    <h1> Sample View for Vuex</h1>
    <p> userid : {{userId}} </p>
    <p> name : {{name}} </p>
    <p> userName : {{userName}} </p>
    <p> useremail : {{email}} </p>

    <button @click="callStoreActions">callActions</button>
    <button @click="callMutations">callMutations</button>
  </div>
</template>


<script>

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      id: '',
      //access store state values directiy
      //recommended using mapGetters in computed
      email: this.$store.state.users.email,
    }
  },
  methods : {
    //call store's Acitons
    callStoreActions() {
      const params = {id : 1}
      this.$store.dispatch('users/FETCH_USERS', params);
      //this.$store.dispatch('{namespace}/{functionName},{paramObject});
    },
    //call store's Mutations
    callMutations(){
      const newName = 'name' 
      this.$store.commit('users/SET_USERNAME', newName);
      //this.$store.commit('{namespace}/{functionName},{paramObject});
    }
  },
  computed: {
    //get store state values by Getter
    ...mapGetters([
      'userId',
      'name',
      'userName'
    ])
  },
}
</script>
