

<template>
  <v-card class="mx-auto" max-width="100%">

    <!-- <v-card-title v-for="i in infos">
      {{i["first_name"]+" "+i["middle_name"]+" "+i["last_name"]}}
      <v-btn type="submit" class="ml-2" color="blue" @click="viewinfo(i['id'])"><p class="mt-4" style="color: white;">View</p></v-btn>
    </v-card-title> -->
    <table style="border-collapse: collapse;">
      <tr>
        <th >
          Id
        </th>
        <th >
          First Name
        </th>
        <th >
          Middle Name
        </th>
        <th >
          Last Name
        </th>
        <th >
          Email
        </th>
        <th >
          Phone number
        </th>
        <th >
          Admin
        </th>
        <th >
          Verification
        </th>
        <th >
          Action
         </th>
      </tr> 
    <tbody>
      <tr
        v-for="i in infos"
      >
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["id"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["first_name"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["middle_name"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["last_name"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["email"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["phone_number"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["admin"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">{{ i["user_verified"] }}</td>
        <td style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;"> <v-btn type="submit" class="ml-2" color="blue" @click="viewinfo(i['id'])"><p class="mt-4" style="color: white;">View</p></v-btn>
        </td>
      </tr>
    </tbody>
  </table>


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