<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


body {
  margin: 0px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background: url('./assets/1080.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}

.full-height {
  height: 100vh;
}
.full-span {
  height: 100%;
}
.flex-container {
  display: flex;
  flex-direction: column;
}

.text-center {
  text-align: center;
}


.flex-item {
  flex: 1;
}

.float-right{
  float: right;
}

.float-left{
  float: left;
}

.centered{
  justify-content: center;
}

.el-menu--horizontal {
  padding-right: 10px !important;
}

.el-menu--horizontal > .el-menu-item {
  float: right !important;
}

.el-menu--horizontal > .el-submenu {
  float: right !important;
}

.panel {
  background-color: white;
  padding: 20px 60px 20px 60px;
}

</style>
