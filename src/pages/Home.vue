<template>
  <div class="home container-fluid">
    <div class="row">
      <cars></cars>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cars from '../components/Cars.vue'

export default {
  name: 'Home',
  components: {Cars}
}
</script>
