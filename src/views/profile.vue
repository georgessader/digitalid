<template>
  <v-card class="mx-auto" max-width="100%">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

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

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" to="/continueprofile">
        Complete my profile
      </v-btn>      
    </v-card-actions>

  </v-card>
</template>

<script>

export default {
  data() {
    return {
      infos: "",
      show: false,
    }
  },

  methods: {
    async getinfos() {
      try {
        console.log(sessionStorage.getItem('id'))
        const response = await this.$http.get('http://localhost:8000/users/details/' + sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    }
  },
  created() {
    if (!sessionStorage.getItem('id'))
      this.$router.push({ path: '/' })
    this.$root.$emit('loadApp')
    this.getinfos()
  }
};
</script>