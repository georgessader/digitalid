<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="email" label="UserName"></v-text-field>
      <v-text-field v-model="password" label="Password"></v-text-field>
      <a style="width: 100%; text-align: center;" href="/#/forgetpass">Forget Password</a>
      <v-btn block class="mt-2" color="success" @click="register">Log In</v-btn>
      <a style="width: 100%; text-align: center;" href="/#/register">Register</a>
    </v-form>
  </v-sheet>
</template>


<script>
export default {
  data() {
    return {
      email: "ihab-hachem@outlook.com",
      password: "sada",
    }
  },

  methods: {
    async register() {
      try {
        let st={
          "email":this.email,
          "password":this.password
        }
        const response = await this.$http.post('http://localhost:8000/users/login', st);
        this.status = response.data
        console.log(this.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>