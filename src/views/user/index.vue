<template>
    <h1>UserView</h1>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'User',
  computed: {
     ...mapState("userInfo", {
        allItems: 'userId',
     }),
    ...mapGetters([
      'user/userId'
    ])
  }
}
</script>
