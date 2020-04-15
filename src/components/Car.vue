<template>
  <div class="cars col-3">
    <img class="img-fluid" :src="carData.img" alt="">
  </div>
</template>

<script>
  export default{
    name: 'car',
    props: ["carData"],
    data(){
      return{

      }
    },
    methods: {}
  }
</script>

<style>
  .cars{
    outline: 1px solid black
  }
</style>