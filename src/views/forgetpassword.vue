<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="phonenumber" label="Phone Number"></v-text-field>
      <v-text-field v-model="idnumber" label="Id Number"></v-text-field>
      <v-text-field v-model="password" label="Password" type=""></v-text-field>
      <v-btn block class="mt-2" color="success" @click="changePassword">Change Password</v-btn>
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
      phonenumber:"71409484",
      idnumber:"1122003",
      password: "IIIIiiii0000___",
      status:""
    }
  },

  methods: {
    async changePassword() {
      try {
        let st={
          "email":this.email,
          "phone_number":this.phonenumber,
          "id_number":this.idnumber,
          "password":this.password
        }
        const response = await this.$http.patch('http://localhost:8000/users/password', st);
        if(response.status==200)
        {
          this.status="Changed Successfully"
          this.$router.push({ path: '/' })
        }
        console.log(response.status);
      } catch (error) {
        this.status="Password didn't change"
        console.log(error);
      }
    }
  }
};
</script>