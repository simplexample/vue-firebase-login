<template>
  <div class="sign-up">
    <h2 class="sign-up__title">Sign up</h2>
    <input @keyup.enter="signUp" v-model="email" type="text" class="sign-up__input" placeholder="email">
    <input @keyup.enter="signUp" v-model="password" type="password" class="sign-up__input" placeholder="password" ref="password">
    <button class="sign-up__button" @click="signUp">Sign up</button>
    <p class="sign-up__info">Have an account? <router-link class="sign-up__info-link" to="/">Sign in</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'sign-up',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp () {
        if (this.validated) {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
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
  .sign-up {
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
