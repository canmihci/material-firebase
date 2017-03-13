<template>
  <div id="main" class="flex-container centered">
    <div class= "flex"></div>

    <div class= "flex">

    <div class = "panel login-panel flex">
      <div class = "text-center">
        <img src="../assets/logo.png" alt="" class="logo">
      </div>
      <div>
        <form novalidate @submit.prevent="submitForm">
          <md-input-container>
            <label>E-posta</label>
            <md-input type="email" v-model="email"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Şifre</label>
            <md-input type="password" v-model="password"></md-input>
          </md-input-container>
          <input type="submit" Value="Giriş" class="md-button md-raised md-primary md-theme-default" style="width: 100%; margin: 16px 0px 16px 0px !important;">
          <md-layout>
            <span class="md-caption"><router-link to="/">< Geri</router-link></span>
          </md-layout>

        </form>
      </div>
    </div>

    </div>
    <div class= "flex"></div>


  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'sign-in',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm () {
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
  #main {
    /*background: url('../assets/1080.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;*/
    height: 100%;
  }
  .flex-align-center {
    align-items: center;
  }
  .login-panel {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
