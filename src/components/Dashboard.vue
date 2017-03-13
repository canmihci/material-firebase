<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Uygulamam</h2>
    </md-toolbar>

    <div>
      <p>İçerik</p>
    </div>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h4>Testing</h4>
        </div>
        <md-list>
          <md-list-item href="https://www.google.com">
            <md-icon>move_to_inbox</md-icon> <span>Link 1</span>
          </md-list-item>

          <md-list-item class="md-inset">
            <span>Çıkış</span>
            <button class="md-icon-button md-list-action" @click="signOut">
              <md-icon class="md-primary">exit_to_app</md-icon>
            </button>
          </md-list-item>

        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'dashboard',
  components: { },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    signOut () {
      console.log('yes')
      firebase.auth().signOut()
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    padding: 16px;
  }
</style>
