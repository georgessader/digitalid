<template>
  <v-sheet width="500" class="mx-auto">
    <a href="#/uploads/education/69109fb9-b661-4a17-ac35-9e4a55e0bc44/s.pdf" target="_blank">see</a>
    <v-form @submit.prevent>
      <v-radio-group v-model="dtype">
        <v-radio label="Driving license" value="1"></v-radio>
        <v-radio label="Passport" value="2"></v-radio>
        <v-radio label="Crminal history" value="3"></v-radio>
      </v-radio-group>
      <v-text-field v-model="expdate" label="Expected Date" type="date"></v-text-field>
      <v-textarea label="Label" variant="outlined" v-model="comment"></v-textarea>
      <v-btn block class="mt-2" color="success" @click="sendreq">Send Request</v-btn>
      <p>{{ status }}</p>
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
      status:"",
    }
  },

  methods: {
    openpdf(x)
    {
      window.open(x);
    },
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
        if(response.status==200)
        {
          this.infos = response.data;
          this.status="Request Sent";
        }
      } catch (error) {
        this.status = "Email or password incorrect"
        console.log(error);
      }
    }
  }
};
</script>