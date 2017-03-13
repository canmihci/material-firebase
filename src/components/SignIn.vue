<template>
  <el-row class = "full-height flex-container" id="main">
    <el-row class= "flex-item"><p></p></el-row>

    <el-row class= "flex-item">
      <el-col :xs="6" :sm="8" :md="9" :lg="9"><p></p></el-col>

      <el-col :xs="12" :sm="8" :md="6" :lg="6" class="">
        <el-row class = "panel">
          <el-row class = "text-center">
            <img src="../assets/logo.png" alt="" class="logo">
          </el-row>
          <el-row>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" :label-position="'top'">
              <el-form-item prop="email">
                <el-input v-model="ruleForm.email" placeholder="E-mail" auto-complete="on" type="email"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="Password" type="password"></el-input>
              </el-form-item>
              <el-form-item class = "flex-container centered">
                <p class="float-left flex-item" style="margin: 0px">No account?
                  <router-link to="/sign-up">Sign up</router-link> here.
                </p>
                <el-button type="primary" @click="submitForm('ruleForm')" class="float-right flex-item">Login</el-button>
              </el-form-item>
            </el-form>
          </el-row>



        </el-row>
      </el-col>

      <el-col :xs="6" :sm="8":md="9" :lg="9"><p></p></el-col>


    </el-row>

    <el-row class= "flex-item"><p></p></el-row>


  </el-row>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'sign-in',
    data () {
      return {
        ruleForm: {
          email: '',
          password: ''
        },
        rules: {
          email: [
            { required: true, message: 'Please enter your email', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
            { min: 6, message: 'Length should be at least 6 characters', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm)

            firebase.auth().signInWithEmailAndPassword(this.ruleForm.email, this.ruleForm.password).catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code
              var errorMessage = error.message
              console.log(errorCode + ' ' + errorMessage)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main {
    background: url('../assets/1080.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
