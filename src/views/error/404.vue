<template>

   <div>
     <h1>{{ message }}</h1>
   </div>
       
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return 'This is 404 Not Found Page'
    }
  }
}
</script>
