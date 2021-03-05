<template>
  <div>
    <h2> this is app Header</h2>
    <h4> menu </h4>
         <router-link to="/test" tag="li" >
            <a class="nav-link">test</a>
         </router-link>
         <router-link to="/samples/index" tag="li" >
            <a class="nav-link">샘플페이지  </a>
         </router-link>
         <hr>
  </div>

</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
