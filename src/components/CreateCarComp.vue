<template>
  <div class="CreateCar border col-12">
    <form @submit.prevent="createCar()">
    <div class="form-group">
      <label for="make">Make</label>
      <input type="text" name="make" id="" class="form-control" placeholder="Enter Make..." aria-describedby="helpId" v-model="newCar.make">
    </div>

    <div class="form-group">
      <label for="model">Model</label>
      <input type="text" name="model" id="" class="form-control" placeholder="Enter Model..." aria-describedby="helpId" v-model="newCar.model">
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" name="price" id="" class="form-control" placeholder="Enter Price..." aria-describedby="helpId" v-model="newCar.price">
    </div>

    <div class="form-group">
      <label for="year">Year</label>
      <input type="number" name="year" id="" class="form-control" placeholder="Enter Year..." aria-describedby="helpId" v-model="newCar.year">
    </div>

    <div class="form-group">
      <label for="img">Image</label>
      <input type="url" name="img" id="" class="form-control" placeholder="Enter Img..." aria-describedby="helpId" v-model="newCar.imgUrl">
    </div>
    <button type="submit" class="btn btn-success mb-3">Submit</button>
    </form>
  </div>
</template>

<script>
  export default{
    name: 'create-car',
    data(){
      return{
        newCar: {}
      }
    },
    methods: {
      createCar(){
        this.$store.dispatch('createCar', this.newCar)
        this.newCar = {}
      }
    }
  }
</script>

<style>
  .cars{
    outline: 1px solid black
  }
</style>