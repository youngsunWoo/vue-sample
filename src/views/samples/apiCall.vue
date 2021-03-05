<template>
  <div class="sample-container">
    <h1> Sample View for Api call</h1>
      <button @click="getAllUsers">테스트</button>
  </div>
</template>

<script>
import {getUsers} from '@/api/users'

export default {
  name: 'apiCallSample',
  method: {
    getAllUsers(){

      console.log(this.form)
      alert('submit!')

      // getUsers()
      // .then(r => {
      //   console.log(r) 
      // })
    }
  },
  beforeMount (){ //동적 호출 
      getUsers().then(r => {console.log(r) })
  }

}
  
</script>
