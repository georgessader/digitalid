<template>
  <v-sheet width="500" class="mx-auto">
    <!-- "../../../digitalid-backend/uploads/education/69109fb9-b661-4a17-ac35-9e4a55e0bc44/s.png" -->
    <!-- <p @click="openpdf('C:/Users/User/digitalid/digitalid-backend/uploads/education/69109fb9-b661-4a17-ac35-9e4a55e0bc44/s.png')">test</p> -->
    <a href="@/assets/images/s.pdf" target="_blank">see</a>
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