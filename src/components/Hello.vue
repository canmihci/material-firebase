<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click='toggleGender'>Not {{ gender }}?</el-button>
    <el-radio-group v-model='gender' @input='changeGender'>
      <el-radio-button label="male">Male</el-radio-button>
      <el-radio-button label="female">Female</el-radio-button>
    </el-radio-group>
    <router-link tag="el-button" to='dashboard'>Dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      'gender': this.$store.state.user.gender
    }
  },
  computed: {
    msg () {
      return 'Hello ' + (this.gender === 'male' ? 'mister' : 'miss') + '!'
    }
  },
  methods: {
    changeGender () {
      this.$store.dispatch('changeGender', this.gender)
    },
    toggleGender () {
      this.gender = (this.gender === 'male' ? 'female' : 'male')
      console.log(this.gender)
      this.$store.dispatch('changeGender', this.gender)
    }
  },
  created () {
    console.log('created')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
