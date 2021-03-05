<template>
  <div class="sample-container">
    <h3> sample Page </h3>
      <router-link to="/samples/apiCall" tag="li" >
        <a class="nav-link">api Call</a>
      </router-link>
      <router-link to="/samples/store" tag="li" >
         <a class="nav-link">store</a>
      </router-link>
      <router-link to="/samples/form" tag="li" >
         <a class="nav-link">form</a>
      </router-link>
      <router-link to="/samples/form2" tag="li" >
         <a class="nav-link">form2</a>
      </router-link>
      <router-link to="/samples/router?user_id=1" tag="li" >
         <a class="nav-link">router with Param</a>
      </router-link>  
  </div>
</template>

<script>

export default {
  name: 'Sample',
}
  
</script>
