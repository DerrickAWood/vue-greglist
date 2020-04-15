<template>
  <div class="cars col-12">
    <!-- i will build a bunch of car components for each car -->
    <div class="row">
      cars component
      <!-- car deetz go here -->
    </div>
  </div>
</template>

<script>
  import Car from './Car.vue'
  export default {
    name: 'cars',
    data() {
      return {

      }
    },
    created(){
      this.$store.dispatch("getCars")
    },
    methods: {}
  }
</script>

<style>
  .cars {
    outline: 1px solid black;
  }
</style>