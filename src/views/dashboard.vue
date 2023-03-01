<template>
  <v-sheet width="500" class="mx-auto">
    <v-form @submit.prevent>
      <v-radio-group v-model="dtype">
        <v-radio label="Doc 1" value="1"></v-radio>
        <v-radio label="Doc 2" value="2"></v-radio>
      </v-radio-group>
      <v-text-field v-model="expdate" label="Expectation Date" type="date"></v-text-field>
      <v-textarea label="Label" variant="outlined" v-model="comment"></v-textarea>
      <v-btn block class="mt-2" color="success" @click="sendreq">Send Request</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>

export default {
  data() {
    return {
      expdate: "",
      dtype:"",
      comment:"",
    }
  },

  methods: {
    async sendreq() {
      try {
        let st={
          "user":sessionStorage.getItem('id'),
          "expected_date":this.expdate,
          "document_type":this.dtype,
          "comment":this.comment
        }
        console.log(sessionStorage.getItem('id'))
        const response = await this.$http.post('http://localhost:8000/docs/create',st);
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    }
  }
};
</script>