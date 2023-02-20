<template>
  
</template>

<script>
export default {
  methods: {
    async logOut() {
      try {
        const response = await this.$http.post('http://localhost:8000/users/logout/' + sessionStorage.getItem('id'));
        if (response.status == 200) {
          sessionStorage.removeItem("email")
          sessionStorage.removeItem("id")
          this.$root.$emit('loadApp')
          this.$router.push({ path: '/login' })
        }
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    }
  },
  created() {
    console.log(sessionStorage.getItem('id'));
    this.logOut();
  }
}
</script>