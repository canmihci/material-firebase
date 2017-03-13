<template>
  <div class="dashboard-logo-container">
    <div class="dashboard-logo">
      <img class="logo-image" src="../assets/logo.png" alt="Logo"><span class="logo-text">Test App</span>
    </div>
  </div>
</template>

<script>
import Logo from '../assets/logo.png'
console.log(Logo)

export default {
  name: 'dashboard-logo',
  components: {},
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Megrim');
  .dashboard-logo-container{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eef1f6;
  }
  .dashboard-logo{
    font-family: 'Megrim', cursive;
    font-size: 1.5em;
  }
  .logo-image{
    height: 22px;
  }
  .logo-text{

  }
</style>
