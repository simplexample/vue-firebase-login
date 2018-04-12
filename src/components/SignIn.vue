<template>
  <div class="sign-in">
    <h2 class="sign-in__title">Sign in</h2>
    <input @keyup.enter="signIn" v-model="email" type="text" class="sign-in__input" placeholder="email">
    <input @keyup.enter="signIn" v-model="password" type="password" class="sign-in__input" placeholder="password">
    <button @click="signIn" class="sign-in__button">Sign in</button>
    <p class="sign-in__info">No account? <router-link class="sign-in__info-link" to="/sign-up">Sign up</router-link></p>
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
      signIn () {
        if (this.validated) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
              (user) => {
                this.$router.replace('welcome')
              },
              (error) => {
                alert('Oh dear... ' + error.message)
              }
            )
        }
      }
    },
    computed: {
      validated () {
        return ![this.email.length, this.password.length].includes(0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sign-in {
    margin: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    &__input,
    &__button {
      margin: 0.25em;
      padding: 0.75em;
    }
    &__input {
      border: 1px solid #ccc;
    }
    &__button {
      margin-top: 2em;
      align-self: center;
      background: #41B883;
      color: white;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.1em;
      border-radius: 0.2em;
      padding: 0.5em 1em;
    }
    &__info {
      font-size: 0.9rem;
      font-weight: 600;
      &-link {
        text-decoration: none;
        color: #41B883;
      }
    }
  }
</style>
