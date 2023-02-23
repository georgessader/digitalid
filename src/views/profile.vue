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

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
          sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add
          a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
    <!-- <h4>
    {{ infos }}
  </h4> -->
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