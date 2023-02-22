<template>
  <h4>
    {{ infos }}
  <a style="width: 100%; text-align: center;" href="/#/continueprofile">Complete your profile</a>
  </h4>
  
</template>

<script>

export default {
  data() {
    return {
     infos:""
    }
  },

  methods: {
    async getinfos() {
      try {
        console.log(sessionStorage.getItem('id'))
        const response = await this.$http.get('http://localhost:8000/users/details/' + sessionStorage.getItem('id'));
        this.infos=response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    }
  },
  created() {
    if(!sessionStorage.getItem('id'))
      this.$router.push({ path: '/' })
    this.$root.$emit('loadApp')
    this.getinfos()
  }
};
</script>