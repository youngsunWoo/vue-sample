<template>
  <div>
    <h1>User View</h1>
    <p> userid : {{userId}} </p>
    <p> useremail : {{email}} </p>

    <button @click="callActions">UserInfo</button>
  </div>
</template>


<script>

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      id: '',
      name: '',
      userName : '',
      //access store state values directiy
      //recommended using mapGetters in computed
      email: this.$store.state.users.email,
    }
  },
  methods : {
    //call store's Acitons
    callStoreActions() {
      const params = {}
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
    //get store statues by Getter
    ...mapGetters([
      'userId'
    ])
  },
}
</script>
