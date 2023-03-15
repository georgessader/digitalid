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
      <div v-for="(e, i) in edcautionsUser['detail']">
        <div v-if="!e['education_verified']" class="mb-5">
          <div style="display: flex; width: fit-content;">
          <v-card-subtitle>
            {{ "Type: "+e["type"] }}<br>
            {{ "College Name: "+e["college_name"] }}<br>
            {{ "Cerdit completed: "+e["credits_completed"] }}<br>
            {{ "Major: "+e["major"] }}<br>
            {{ "GPA: "+e["gpa"] }}<v-checkbox label="Verify Grade" v-model="geade_verify"></v-checkbox><br>
            {{ "Certificate: " }} <v-checkbox label="Verify Certificate" v-model="certifiate_verify"></v-checkbox><a v-if="e['certificate']!=null" :href="e['certificate']">See Document</a><span v-else>No document uploaded</span><br>
          </v-card-subtitle>
          </div>
          <v-btn type="submit" class="ml-2" color="blue" @click="verifyEducation()">
            <p class="mt-4" style="color: white;">Verify Education</p>
          </v-btn>
        </div>
        <div v-else class="mt-4">
          {{ "College Name: "+e["college_name"] }} -
          {{ "Major: "+e["major"] }}
          <v-icon class="mr-2" color="green">Verified</v-icon>
          <v-icon color="green">mdi-shield-check</v-icon>
        </div>
      </div>
    </v-card>
    

    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Health</h2>
      <div v-for="(h, i) in healthUser['detail']">
        <div v-if="h['health_verification_status']=='pending'" class="mb-5">
          <div style="display: flex; width: fit-content;">
          <v-card-subtitle>
            {{ "Chronic Disease: "+h["chronic_disease"] }}<br>
            {{ "Allergy: "+h["allergy"] }}<br>
            {{ "NSSF number: "+h["nssf_number"] }}<br>
            {{ "Insurance Expiry day: "+h["insurance_expiry_date"] }}<br>
            {{ "Vaccination report: " }}
            <v-checkbox label="Vaccination report" v-model="vaccination_reportv"></v-checkbox> <a v-if="h['vaccination_report']!=null" :href="h['vaccination_report']">See Document</a><span v-else>No document uploaded</span><br>
            {{ "Insurance Document: " }} 
            <v-checkbox label="Insurance Document" v-model="insurance_docv"></v-checkbox><a v-if="h['insurance_doc']!=null" :href="h['insurance_doc']">See Document</a><span v-else>No document uploaded</span><br>
            {{ "Health Report: " }} 
            <v-checkbox label="Health Report" v-model="health_reportv"></v-checkbox><a v-if="h['health_report']!=null" :href="h['health_report']">See Document</a><span v-else>No document uploaded</span><br>
          </v-card-subtitle>
          </div>
          <v-btn type="submit" class="ml-2" color="blue" @click="verifyHealth()">
            <p class="mt-4" style="color: white;">Verify Health</p>
          </v-btn>
        </div>
        <div v-else class="mt-4">
          {{ "Chronic Disease: "+h["chronic_disease"] }} - 
          {{ "Allergy: "+h["allergy"] }} - 
          {{ "NSSF number: "+h["nssf_number"] }}
          <v-icon class="mr-2" color="green">Verified</v-icon>
          <v-icon color="green">mdi-shield-check</v-icon>
        </div>
      </div>
    </v-card>
    

    <v-card class="mx-auto mt-5" max-width="100%">
      <h2>Career</h2>
      <div v-for="(c, i) in careerUser['detail']">
        <div v-if="c['health_verification_status']==false" class="mb-5">
          <div style="display: flex; width: fit-content;">
          <v-card-subtitle>
            {{ "Job Title: "+c["job_title"] }}<br>
            {{ "Company name: "+c["company_name"] }}<br>
            {{ "Year of experience: "+c["years_experience"] }}<br>
            <a :href="c['portfolio_url']">Portfolio</a><br>
            <a :href="c['linkedin_url']">Linked In Profile</a><br>
            {{ "Cover Letter: " }} <v-checkbox label="Cover Letter" v-model="cover_letter_verify"></v-checkbox><a v-if="c['cover_letter']!=null" :href="c['cover_letter']">See Document</a><span v-else>No document uploaded</span><br>
            {{ "Resume: " }} <v-checkbox label="CV" v-model="cv_verify"></v-checkbox><a v-if="c['cv']!=null" :href="c['cv']">See Document</a><span v-else>No document uploaded</span><br>
          </v-card-subtitle>
          </div>
          <v-btn type="submit" class="ml-2" color="blue" @click="verifyCareer()">
            <p class="mt-4" style="color: white;">Verify Career</p>
          </v-btn>
        </div>
        <div v-else class="mt-4">
          {{ "Job Title: "+c["job_title"] }} - 
          {{ "Company name: "+c["company_name"] }} - 
          {{ "Year of experience: "+c["years_experience"] }}
          <v-icon class="mr-2" color="green">Verified</v-icon>
          <v-icon color="green">mdi-shield-check</v-icon>
        </div>
      </div>
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

      health_reportv:false,
      insurance_docv:false,
      vaccination_reportv:false,

      geade_verify:false,
      certifiate_verify:false,

      cv_verify:false,
      cover_letter_verify:false,

      edcautionsUser:[],
      healthUser:[],
      careerUser:[],
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
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
      
      try {
        const response = await this.$http.get('http://localhost:8000/health/' + this.$route.params.userId);
        if (response.status == 200) {
          this.healthUser = response.data;
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
      
      try {
        const response = await this.$http.get('http://localhost:8000/career/' + this.$route.params.userId);
        if (response.status == 200) {
          this.careerUser = response.data;
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
    async verifyEducation() {
      try {
        let st = {
          "grade_verified": this.geade_verify,
          "certificate_verified": this.certifiate_verify
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
    async verifyHealth() {
      try {
        let st = {
          "health_report_verified": this.health_reportv,
          "vaccination_verified": this.vaccination_reportv,
          "insurance_verified": this.insurance_docv
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
    async verifyCareer() {
      try {
        let st = {
          "cv_verified": this.cv_verify,
          "cover_letter_verified": this.cover_letter_verify
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