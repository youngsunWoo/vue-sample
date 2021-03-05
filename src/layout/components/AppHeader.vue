<template>
  <div>
    <h2> this is app Header</h2>
         <p>레이아웃 미적용 페이지</p>
         <router-link to="/test" tag="li" >
            <a class="nav-link">testPage</a>
         </router-link> 
         <router-link to="/not/exist/url" tag="li" >
            <a class="nav-link">404</a>
         </router-link>
         <p>레이아웃 적용 페이지</p>
          <router-link to="/" tag="li" >
            <a class="nav-link">메인페이지  </a>
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
