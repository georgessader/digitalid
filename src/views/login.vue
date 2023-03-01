<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="email" label="UserName"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <a style="width: 100%; text-align: center;" href="/#/forgetpassword">Forget Password</a>
      <v-btn block class="mt-2" color="success" @click="register">Log In</v-btn>
      <a style="width: 100%; text-align: center;" href="/#/register">Register</a><br>
    </v-form>
    <h4 style="color:red;">
      {{ status }}
    </h4>
  </v-sheet>
</template>


<script>
export default {
  data() {
    return {
      email: "georgess@hotmail.com",
      password: "IIIIiiii0000_",
      status:""
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
        if(response.status==200)
        {
          // http://localhost:8080/#/home
          sessionStorage.setItem("email", this.email);
          sessionStorage.setItem("id", response.data["id"]);
          sessionStorage.setItem("admin", response.data["admin"]);
          this.$router.push({ path: '/profile' })
        }
        console.log(response.status);
      } catch (error) {
        this.status="Email or password incorrect"
        console.log(error);
      }
    }
  }
};
</script>