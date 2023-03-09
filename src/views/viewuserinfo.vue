<template>
  <v-card class="mx-auto" max-width="100%">
   

    <v-card-title>
      {{infos["first_name"]+" "+infos["middle_name"]+" "+infos["last_name"]}}
    </v-card-title>

    <v-card-subtitle>
      {{ "ID number: "+infos["id_number"] }}<br>
      {{ "DOB: "+infos["date_of_birth"] }}<br>
      {{ "Country: "+infos["country"] }}<br>
      {{ "City: "+infos["city"] }}<br>
      {{ "Email: "+infos["email"] }}<br>
      {{ "Phone number: "+infos["phone_number"] }}
    </v-card-subtitle>

    <v-btn v-if="infos['admin']=='0'" type="submit" class="ml-2" color="blue" @click="assignAdmin()">
      <p class="mt-4" style="color: white;">Assign Admin</p>
    </v-btn>
    <v-btn v-else type="submit" class="ml-2" color="blue" @click="removeAdmin()">
      <p class="mt-4" style="color: white;">Remove Admin</p>
    </v-btn>

    <div v-if="infos['user_verification_status']!='verified'">
      <v-checkbox label="Id Image Verified" v-model="id_image_verified"></v-checkbox>
      <v-checkbox label="Selfy Verfied" v-model="selfie_verified"></v-checkbox>
      <v-btn type="submit" class="ml-2" color="blue" @click="verifyUser()">
        <p class="mt-4" style="color: white;">Verify User</p>
      </v-btn>
    </div>
   




  </v-card>
</template>

<script>

export default {
  data() {
    return {
      infos: "",
      show: false,
      id_image_verified:false,
      selfie_verified:false
    }
  },

  methods: {
    async getinfos() {
      try {
        const response = await this.$http.get('http://localhost:8000/users/details/' + this.$route.params.userId);
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    },
    async assignAdmin() {
      try {
        const response = await this.$http.post('http://localhost:8000/users/admin/assign/'+this.$route.params.userId+'/'+sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async removeAdmin() {
      try {
        const response = await this.$http.post('http://localhost:8000/users/admin/remove/'+this.$route.params.userId+'/'+sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async verifyUser() {
      try {
        let st = {
          "id_image_verified": this.id_image_verified,
          "selfie_verified": this.selfie_verified
        }
        const response = await this.$http.patch('http://localhost:8000/users/verify/'+this.$route.params.userId+'/'+sessionStorage.getItem('id'),st);
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    }
  },
  created() {
    console.log(this.$route.params.userId)
    if (!sessionStorage.getItem('id'))
      this.$router.push({ path: '/' })
    this.$root.$emit('loadApp')
    this.getinfos()
  }
};
</script>