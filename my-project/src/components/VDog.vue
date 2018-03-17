<template>
     <div>
       <p>This's a dog</p> <br>
       <button @click="getParam">get age</button>
       <p>{{$route.params.age}}</p>
     </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'dog',
      age: 2
    }
  },
  methods: {
    getParam() {
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>

</style>