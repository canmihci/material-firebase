<template>
  <el-row class="full-height">
    <el-col class="full-height" :span="3">
      <DashboardLogo></DashboardLogo>
      <div class="full-span-without-logo flex-container">
        <VerticalNav></VerticalNav>
        <div class="flex-item blank-dashboard-area"></div>
      </div>
    </el-col>
    <el-col class="full-height" :span="21">
      <HorizontalNav></HorizontalNav>
      <el-button @click='testFunc'>Clicky</el-button>
      <ContentContainer></ContentContainer>
    </el-col>
  </el-row>
</template>

<script>
import HorizontalNav from './HorizontalNav'
import VerticalNav from './VerticalNav'
import ContentContainer from './ContentContainer'
import DashboardLogo from './DashboardLogo'
import MainInstance from '../main'

export default {
  name: 'dashboard',
  components: { HorizontalNav, VerticalNav, ContentContainer, DashboardLogo },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    testFunc () {
      MainInstance.$firebaseRefs.anArray.push({'yo': 'whadup'})
    }
  },
  created () {
    console.log(MainInstance)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blank-dashboard-area {
    background-color: #eef1f6;
  }
  .full-span-without-logo {
    height: calc(100% - 60px);
  }
</style>
