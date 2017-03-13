<template>
  <div id="app">
    <router-view></router-view>
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

#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
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
  padding: 30px 30px 0px 30px;
}

</style>
