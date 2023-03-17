<template>
  <v-card class="mx-auto" max-width="100%">



    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Requested Documents</h2>
      <table style="border-collapse: collapse;">
        <tr>
          <th>
            User
          </th>
          <th>
            Document Type
          </th>
          <th>
            Requested Date
          </th>
          <th>
            Status
          </th>
          <th>
            Comment
          </th>
          <th>
            Action
          </th>
        </tr>
        <tbody>
          <tr v-for="(c, i) in docs['detail']">
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a :href="'#/viewuser/'+c['user']">{{ c['user'] }}</a>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ doctype[c["document_type"]] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["requested_date"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["status"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["comment"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-btn type="submit" class="ml-2" color="blue" @click="assignAdmin(c['id'])">
                <p class="mt-4" style="color: white;">Accept request</p>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>

  </v-card>
</template>

<script>

export default {
  data() {
    return {
      docs:[],
      doctype:{
        1:"Driving license",
        2:"Passport",
        3:"Crminal history",
      }
    }
  },

  methods: {
    async getinfos() {
      try {
        const response = await this.$http.get('http://localhost:8000/docs/all/' + sessionStorage.getItem('id'));
        if (response.status == 200) {
          this.docs = response.data;
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },

    // async assignAdmin() {
    //   try {
    //     const response = await this.$http.post('http://localhost:8000/users/admin/assign/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'));
    //     this.infos = response.data;
    //     console.log(response.data)
    //     location.reload();
    //   } catch (error) {
    //     this.status = "error"
    //     console.log(error);
    //   }
    // },
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