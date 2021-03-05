<template>
    <h1>User View</h1>
</template>


<script>

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      id: '',
      name: '',
      userName : '',
      email: '',
    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
}
</script>
