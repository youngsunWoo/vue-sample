<template>
  <div>
        <app-header />
        <div class="main-container">
          <app-main />
        </div>
        <app-footer />
  </div>
</template>

<script>
import { AppHeader, AppFooter, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppFooter,
    AppMain
  }, 
}
</script> 

<style scoped>
.amain-container {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
