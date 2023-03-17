<template>
  <v-card class="mx-auto" max-width="100%">


    <v-card-title>
      {{ infos["first_name"] + " " + infos["middle_name"] + " " + infos["last_name"] }}
    </v-card-title>

    <v-card-subtitle>
      {{ "ID number: " + infos["id_number"] }}<br>
      {{ "DOB: " + infos["date_of_birth"] }}<br>
      {{ "Country: " + infos["country"] }}<br>
      {{ "City: " + infos["city"] }}<br>
      {{ "Email: " + infos["email"] }}<br>
      {{ "Phone number: " + infos["phone_number"] }}
    </v-card-subtitle>

    <v-btn v-if="infos['admin'] == '0'" type="submit" class="ml-2" color="blue" @click="assignAdmin()">
      <p class="mt-4" style="color: white;">Assign Admin</p>
    </v-btn>
    <v-btn v-else type="submit" class="ml-2" color="blue" @click="removeAdmin()">
      <p class="mt-4" style="color: white;">Remove Admin</p>
    </v-btn>

    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Id and Selfie</h2>
      <div v-if="infos['user_verification_status'] != 'verified'" class="mb-5">
        <div style="display: flex; margin: auto; width: fit-content;">
          <div class="mr-5">
            <v-checkbox label="Id Image" v-model="id_image_verified"></v-checkbox>
            <img :src="infos['id_image']">
          </div>
          <div class="ml-5">
            <v-checkbox label="Selfie" v-model="selfie_verified"></v-checkbox>
            <img :src="infos['id_image']">
          </div>
        </div>
        <center class="mt-5">
          <v-btn type="submit" class="ml-2" color="blue" @click="verifyUser()">
            <p class="mt-4" style="color: white;">Verify User</p>
          </v-btn>
        </center>
      </div>
      <div v-else class="mt-4">
        <v-icon class="mr-2" color="green">Verified</v-icon>
        <v-icon color="green">mdi-shield-check</v-icon>
      </div>
    </v-card>




    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Education</h2>
      <table style="border-collapse: collapse;">
        <tr>
          <th>
            Type
          </th>
          <th>
            College Name
          </th>
          <th>
            Cerdit completed
          </th>
          <th>
            Major
          </th>
          <th>
            GPA
          </th>
          <th>
            Grades
          </th>
          <th>
            Verify Grades
          </th>
          <th>
            Certificate
          </th>
          <th>
            Verify Certificate
          </th>
          <th>
            Action
          </th>
        </tr>
        <tbody>
          <tr v-for="(e, i) in edcautionsUser['detail']">
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ e["type"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ e["college_name"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ e["credits_completed"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ e["major"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ e["gpa"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="e['grades'] != null" :href="e['grades']">See Document</a><span v-else>No document uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label="" v-model="grade_verify[e['id']]">
              </v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="e['certificate'] != null" :href="e['certificate']">See Document</a><span v-else>No document
                uploaded</span>
            </td>
            <td
              style="width: 10%;align-items: center; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label=""
                v-model="certifiate_verify[e['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-btn type="submit" class="ml-2" color="blue" @click="verifyEducation(e['id'])">
                <p class="mt-4" style="color: white;">Verify Education</p>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>






    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Health</h2>
      <table style="border-collapse: collapse;">
        <tr>
          <th>
            Chronic Disease
          </th>
          <th>
            Allergy
          </th>
          <th>
            NSSF number
          </th>

          <th>
            Vaccination
          </th>
          <th>
            Verify Vaccination
          </th>
          <th>
            Insurance
          </th>
          <th>
            Insurance Expiry date
          </th>
          <th>
            Verify Insurance
          </th>
          <th>
            Health
          </th>
          <th>
            Verify Health Rport
          </th>
        </tr>
        <tbody>
          <tr v-for="(h, i) in healthUser['detail']">
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ h["chronic_disease"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ h["allergy"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ h["nssf_number"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="h['vaccination_report'] != null" :href="h['vaccination_report']">See Document</a><span v-else>No
                document uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label=""
                v-model="vaccination_reportv[h['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="h['insurance_doc'] != null" :href="h['insurance_doc']">See Document</a><span v-else>No document
                uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ h["insurance_expiry_date"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label=""
                v-model="insurance_docv[h['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="h['health_report'] != null" :href="h['health_report']">See Document</a><span v-else>No document
                uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label=""
                v-model="health_reportv[h['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-btn type="submit" class="ml-2" color="blue" @click="verifyHealth(h['id'])">
                <p class="mt-4" style="color: white;">Verify Health</p>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>






    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Career</h2>
      <table style="border-collapse: collapse;">
        <tr>
          <th>
            Job Title
          </th>
          <th>
            Company name
          </th>
          <th>
            Year of experience
          </th>

          <th>
            Portfolio
          </th>
          <th>
            Linked in
          </th>
          <th>
            Cover Letter
          </th>
          <th>
            Verify Cover Letter
          </th>
          <th>
            Resume
          </th>
          <th>
            Verify Resume
          </th>
          <th>
            Action
          </th>
        </tr>
        <tbody>
          <tr v-for="(c, i) in careerUser['detail']">
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["job_title"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["company_name"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              {{ c["years_experience"] }}</td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a :href="c['portfolio_url']">Portfolio</a>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a :href="c['linkedin_url']">Linked In Profile</a>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="c['cover_letter'] != null" :href="c['cover_letter']">See Document</a><span v-else>No document
                uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;"  label="" v-model="cover_letter_verify[c['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <a v-if="c['cv'] != null" :href="c['cv']">See Document</a><span v-else>No document uploaded</span>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-checkbox style="width: 10px; margin: auto; margin-top: 20px;" label="" v-model="cv_verify[c['id']]"></v-checkbox>
            </td>
            <td
              style="width: 10%; text-align: center; border-bottom-style: solid; border-width: 1px; border-collapse: collapse;">
              <v-btn type="submit" class="ml-2" color="blue" @click="verifyCareer(c['id'])">
                <p class="mt-4" style="color: white;">Verify Career</p>
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
      infos: "",
      show: false,
      id_image_verified: false,
      selfie_verified: false,

      health_reportv: [],
      insurance_docv: [],
      vaccination_reportv: [],

      grade_verify: [],
      certifiate_verify: [],

      cv_verify: [],
      cover_letter_verify: [],

      edcautionsUser: [],
      healthUser: [],
      careerUser: [],
    }
  },

  methods: {
    async getinfos() {
      try {
        const response = await this.$http.get('http://localhost:8000/users/details/' + this.$route.params.userId);
        this.infos = response.data;
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }

      try {
        const response = await this.$http.get('http://localhost:8000/educations/' + this.$route.params.userId);
        if (response.status == 200) {
          this.edcautionsUser = response.data;
          for (var i = 0; i < this.edcautionsUser['detail'].length; i++) {
            this.grade_verify[this.edcautionsUser['detail'][i]['id']] = this.edcautionsUser['detail'][i]['grade_verified'];
            this.certifiate_verify[this.edcautionsUser['detail'][i]['id']] = this.edcautionsUser['detail'][i]['certificate_verified'];
          }
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }

      try {
        const response = await this.$http.get('http://localhost:8000/health/' + this.$route.params.userId);
        if (response.status == 200) {
          this.healthUser = response.data;
          for (var i = 0; i < this.healthUser['detail'].length; i++) {
            this.health_reportv[this.healthUser['detail'][i]['id']] = this.healthUser['detail'][i]['health_report_verified'];
            this.vaccination_reportv[this.healthUser['detail'][i]['id']] = this.healthUser['detail'][i]['vaccination_verified'];
            this.insurance_docv[this.healthUser['detail'][i]['id']] = this.healthUser['detail'][i]['insurance_verified'];
          }
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }

      try {
        const response = await this.$http.get('http://localhost:8000/career/' + this.$route.params.userId);
        if (response.status == 200) {
          this.careerUser = response.data;
          for (var i = 0; i < this.careerUser['detail'].length; i++) {
            this.cv_verify[this.careerUser['detail'][i]['id']] = this.careerUser['detail'][i]['cv_verified'];
            this.cover_letter_verify[this.careerUser['detail'][i]['id']] = this.careerUser['detail'][i]['cover_letter_verified'];
          }
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },

    async assignAdmin() {
      try {
        const response = await this.$http.post('http://localhost:8000/users/admin/assign/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async removeAdmin() {
      try {
        const response = await this.$http.post('http://localhost:8000/users/admin/remove/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'));
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async verifyUser() {
      try {
        let st = {
          "id_image_verified": this.id_image_verified,
          "selfie_verified": this.selfie_verified
        }
        const response = await this.$http.patch('http://localhost:8000/users/verify/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'), st);
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async verifyEducation(id) {
      try {
        let st = {
          "education_id": id,
          "grade_verified": this.grade_verify[id],
          "certificate_verified": this.certifiate_verify[id]
        }
        const response = await this.$http.patch('http://localhost:8000/educations/verify/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'), st);
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async verifyHealth(id) {
      try {
        let st = {
          "health_id": id,
          "health_report_verified": this.health_reportv[id],
          "vaccination_verified": this.vaccination_reportv[id],
          "insurance_verified": this.insurance_docv[id]
        }
        const response = await this.$http.patch('http://localhost:8000/health/verify/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'), st);
        this.infos = response.data;
        console.log(response.data)
        location.reload();
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    },
    async verifyCareer(id) {
      try {
        let st = {
          "career_id": id,
          "cv_verified": this.cv_verify[id],
          "cover_letter_verified": this.cover_letter_verify[id]
        }
        const response = await this.$http.patch('http://localhost:8000/career/verify/' + this.$route.params.userId + '/' + sessionStorage.getItem('id'), st);
        if (response.status == 200) {
          location.reload();
        }
      } catch (error) {
        this.status = "error"
        console.log(error);
      }
    }
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