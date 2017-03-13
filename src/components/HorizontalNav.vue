<template>
  <div class="horizontal-nav">
    <el-menu mode="horizontal" @select="handleSelect">
      <!-- <el-menu-item index="1" @click.prevent="signOut">Sign Out</el-menu-item> -->
      <el-submenu index="1">
        <template slot="title">Workspace</template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3" @click="signOut" class="flex-container-menu-item"><icon class="menu-item-icon" name="sign-out"></icon><span class="">Sign Out</span></el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="3"><a href="#" @click.prevent="signOut">Sign Out</a></el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'horizontal-nav',
  components: {},
  data () {
    return {
      // activeIndex: '1'
    }
  },
  computed: {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    signOut () {
      firebase.auth().signOut()
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .testing{
    margin-top: 10px;
  }
  .flex-container-menu-item {
    display: flex;
    align-items: center;
  }
  .menu-item-icon {
    margin-right: 5px;
  }
</style>
