<template>
  <div class="sample-container">
      <button @click="clickEvent">excel Down</button>
  </div>
</template>

<script>

export default {
  name: 'apiCallSample',
  data() {
    return {
      list : [
        {id : 1 , name :'name1' , age:11, nickName :'nickname1',tel:'00'},
        {id : 2 , name :'name2' , age:43, nickName :'nickname2',tel:'01'},
        {id : 3 , name :'name3' , age:29, nickName :'nickname3',tel:'02'},
        {id : 4 , name :'name4' , age:32, nickName :'nickname4',tel:'03'},
      ],
      downloadLoading: false,
      filename: 'file',
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  methods : {
    clickEvent() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'name', 'age', 'nickName']
        const filterVal = ['id', 'name', 'age', 'nickName']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {return v[j]}))
    }
  }
}
  
</script>
