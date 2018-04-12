<template>
  <div class="welcome">
    <button class="log-out" @click="logOut">Log out</button>
    <h3>Another Page</h3>
    <router-link tag="h4" to="welcome">Welcome Page</router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'another-page',
    data () {
      return {

      }
    },
    methods: {
      logOut () {
        firebase.auth().signOut()
          .then(
            (success) => {
              this.$router.replace('login')
            },
            (error) => {
              alert('Oops. ' + error.message)
            }
          )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .log-out {
    position: absolute;
    top: 2em;
    right: 2em;
    background: #41B883;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.1em;
    border-radius: 0.2em;
    padding: 0.5em 1em;
  }
  h4 {
    color: #41B883;
    cursor: pointer;
  }
</style>
