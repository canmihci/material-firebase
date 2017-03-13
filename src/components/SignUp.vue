<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="" style="display: flex; align-items: center; justify-content: center">
      <form style="width: 10%" @submit.prevent="signUp">
        <div class="">
          Please sign up.
        </div>
        <div class="">
          <input type="text" name="email" value="" placeholder="E-mail" v-model="email">
        </div>
        <div class="">
          <input type="password" name="password" value="" placeholder="Password" v-model="password">
        </div>
        <div class="" style="float: right">
          <input type="submit" value="Sign Up">
        </div>
      </form>
    </div>
    <div class="">
      <p><router-link to="/">Go back</router-link></p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'sign-up',
  data () {
    return {
      msg: 'Firebase Testing App.',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      if (this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode + ' ' + errorMessage)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
