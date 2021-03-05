<template>
  <div>
    <h1> Sample View for Vuex</h1>
    <p> userid : {{queryId}} </p>  
  </div>
</template>


<script>
export default {
  computed: {
    queryId : function(){
      return this.$route.query.user_id 
    },
  },
}
</script>
