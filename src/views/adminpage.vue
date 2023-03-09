<template>
  <v-card class="mx-auto" max-width="100%">

    <v-card-title v-for="i in infos">
      {{i["first_name"]+" "+i["middle_name"]+" "+i["last_name"]}}
      <v-btn type="submit" class="ml-2" color="blue" @click="viewinfo(i['id'])"><p class="mt-4" style="color: white;">View</p></v-btn>
    </v-card-title>


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
        const response = await this.$http.get('http://localhost:8000/users/all/' + sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    },
    viewinfo(id) {
      this.$router.push({path: '/viewuser/'+id })
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