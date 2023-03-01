<template>
  <!-- <iframe width="1000" height="1000" src="C:\Users\User\digitalid\digitalid-backend\uploads\education\69109fb9-b661-4a17-ac35-9e4a55e0bc44\SV_Math_2021_2_En.pdf"></iframe> -->
  <a href="C:\Users\User\digitalid\digitalid-backend\uploads\education\69109fb9-b661-4a17-ac35-9e4a55e0bc44\SV_Math_2021_2_En.pdf">see</a>
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