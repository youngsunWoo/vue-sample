<template>
    <h1>this is App Main</h1>
</template>
<script>
import { getSampleData} from '@/api/sample'

export default {
  name: 'mainpage',
  beforeMount (){
    getSampleData().then(r => {console.log(r) })
  }
}
</script>
