<template>
  <div class="app-container">
    <h3> sample Page for Form</h3>

    <form ref="form" :model="form" labwidth="120px">
      <p> id </p>
      <input v-model="form.id" />

      <p> name </p>
      <input v-model="form.name" />
     
      <p> email </p>
      <input v-model="form.email" />
      <select v-model="form.eAdress" placeholder="please select ">
        <option label="@nice.co.kr" value="NICE" />
        <option label="@naver.com" value="NAVER" />
      </select>
      
      <br> 
      <br> 
      
      <div>
        <button type="primary" @click="onSubmit">Create</button>
        <!-- <button @click="onCancel">Cancel</button> -->
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        email: '',
        eAdress: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      alert('submit!')
    }
  },
}
</script>
