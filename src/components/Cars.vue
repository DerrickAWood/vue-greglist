<template>
  <div class="cars col-12">
    <!-- i will build a bunch of car components for each car -->
    <div class="row">
      <create-car></create-car>
      <car v-for="car in cars" :carData="car"></car>
    </div>
      <!-- car deetz go here -->
  </div>
</template>

<script>
  import Car from './Car.vue'
  import CreateCar from "./CreateCarComp"
  export default {
    name: 'cars',
    
    data() {
      return {

      }
    },
    computed:{
      cars(){
        return this.$store.state.cars
      }
    },
    created(){
      this.$store.dispatch("getCars")
    },
    methods: {},
    components: {
      Car,
    CreateCar
    }
  }
</script>

<style>
  .cars {
    outline: 1px solid black;
  }
</style>