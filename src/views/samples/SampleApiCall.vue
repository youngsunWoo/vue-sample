<template>
  <div class="sample-container">
    <h1> Sample View for Api call</h1>
      user id : <input v-model="id" />
      <br>
      <br>
      <button @click="clickEvent">call Get</button>
  </div>
</template>

<script>
import {getUsers, getUserById} from '@/api/users'

export default {
  name: 'apiCallSample',
  data() {
    return {
      id : ''
    }
  },
  methods : {
    clickEvent() {
      if (!this.id){
          getUsers().then(r => {
            //TODO 
            //Do something after api call Processe
            console.log(r)
            });
      } else {
          getUserById(this.id).then(r => {
            //Do something after api call Processe
            console.log(r)
            });
      }

    },
  },
}
  
</script>
