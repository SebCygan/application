<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
Sorry this page requires a login    </p>
    <form @submit.prevent="login">
      <label><input v-model="email" placeholder="email"></label>
      
      <label><input id="passwordBox" v-model="pass" placeholder="password" type="password"></label><br>

      <button type="submit">login</button>
      <p v-if="error" class="error">Username/Password Incorrect</p>
      
    </form>
  </div>
</template>

<script>
  import auth from '../auth'
  export default {
    data () {
      return {
        email: 'joe@example.com',
        pass: '',
        error: false
      }
    },
    methods: {
      login () {
        auth.login(this.email, this.pass, loggedIn => {
          if (!loggedIn) {
            this.pass = ''    
            this.error = true

            } else {
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      }
    }
  }
  
</script>

<style scoped>
  .error {
    color: red;
  }
</style>