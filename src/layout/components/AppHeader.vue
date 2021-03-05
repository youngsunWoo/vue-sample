<template>
  <div>
    <h1> this is app Header</h1>
    <h2> menu </h2>
         <router-link to="/form/index" tag="li" >
            <a class="nav-link">Form</a>
         </router-link>
         <router-link to="/samples/index" tag="li" >
            <a class="nav-link">샘플페이지  </a>
         </router-link>
  </div>

</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
