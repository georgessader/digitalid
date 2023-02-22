<template>
  <v-card style="width:fit-content;margin:auto;">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Educational profile</v-tab>
      <v-tab value="two">Health profile</v-tab>
      <v-tab value="three">Career Profile</v-tab>
    </v-tabs>



    <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->




    <v-card-text>
      <v-window v-model="tab">
        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>

              <v-radio-group v-model="ctype">
                <v-radio label="School" value="1"></v-radio>
                <v-radio label="University" value="2"></v-radio>
              </v-radio-group>

              <v-text-field v-model="collname" label="College Name"></v-text-field>
              <v-text-field v-model="major" label="Major"></v-text-field>
              <v-text-field v-model="gpa" label="GPA"></v-text-field>
              <v-text-field v-model="creditcompleted" label="Credits Completed"></v-text-field>

              <v-btn type="submit" block class="mt-2" color="success" @click="addEducation">Submit</v-btn>
            </v-form>
          </v-sheet>

          <!-- display -->
          <h1 style="text-align: center; margin-top: 40px;">My Educations</h1>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent v-for="(e, i) in educations['detail']">

              <v-radio-group v-model="e['type']">
                <v-radio label="School" value="1"></v-radio>
                <v-radio label="University" value="2"></v-radio>
              </v-radio-group>

              <v-text-field v-model="e['college_name']" label="College Name"></v-text-field>
              <v-text-field v-model="e['major']" label="Major"></v-text-field>
              <v-text-field v-model="e['gpa']" label="GPA"></v-text-field>
              <v-text-field v-model="e['credits_completed']" label="Credits Completed"></v-text-field>
              <v-btn type="submit" block class="mt-2" color="success"
                @click="editEducation(e['id'], e['type'], e['college_name'], e['major'], e['gpa'], e['credits_completed'])">Edit</v-btn>
              <v-btn type="submit" block class="mt-2" color="delete" @click="deleteEducation(e['id'])">Delete</v-btn>
            </v-form>
          </v-sheet>




        </v-window-item>





        <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->







        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field v-model="chronic_disease" label="Chronic Disease"></v-text-field>
              <v-text-field v-model="allergy" label="Allergy"></v-text-field>
              <v-text-field v-model="nssf_number" label="NSSF Number"></v-text-field>
              <v-btn type="submit" block class="mt-2" color="success" @click="addHealth">Submit</v-btn>
            </v-form>
          </v-sheet>

          <h1 style="text-align: center; margin-top: 40px;">My Health</h1>


          <v-form @submit.prevent v-for="(h, i) in health['detail']">
            <v-text-field v-model="h['chronic_disease']" label="Chronic Disease"></v-text-field>
            <v-text-field v-model="h['allergy']" label="Allergy"></v-text-field>
            <v-text-field v-model="h['nssf_number']" label="NSSF Number"></v-text-field>
            <v-btn type="submit" block class="mt-2" color="success"
              @click="editHealth(h['id'],h['chronic_disease'],h['allergy'],h['nssf_number'])">Edit</v-btn>
            <v-btn type="submit" block class="mt-2" color="delete" @click="deleteHealth(h['id'])">Delete</v-btn>

          </v-form>
        </v-window-item>




        <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->





        <v-window-item>
          <!-- <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field v-model="major" label="Major"></v-text-field>
              <v-checkbox v-model="prevexp" label="Do you have previous experience?"></v-checkbox>
              <div v-if="prevexp">
                <v-text-field v-model="pcompanyname" label="Company name"></v-text-field>
                <v-text-field v-model="pyearsofexperience" label="Years of experience"></v-text-field>
                <v-text-field v-model="pposition" label="Position"></v-text-field>
                <v-text-field v-model="presponsibilities" label="Responsibilities"></v-text-field>
              </div>
              <v-checkbox v-model="currentpos" label="Do you have previous experience?"></v-checkbox>
              <div v-if="currentpos">
                <v-text-field v-model="ccompanyname" label="Company name"></v-text-field>
                <v-text-field v-model="cyearsofexperience" label="Years of experience"></v-text-field>
                <v-text-field v-model="cposition" label="Position"></v-text-field>
                <v-text-field v-model="cresponsibilities" label="Responsibilities"></v-text-field>
              </div>
              <v-file-input label="CV"></v-file-input>
              <v-text-field v-model="portfolio" label="Portfolio"></v-text-field>
              <v-text-field v-model="linkedinprofile" label="Linked In Profile"></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet> -->
        </v-window-item>
      </v-window>
      <h4 style="color:green;">
        {{ status }}
      </h4>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      tab: "one",
      prevexp: false,
      currentpos: false,
      status: "",

      ctype: "",
      collname: "",
      major: "",
      gpa: "",
      creditcompleted: "",
      educations: [],



      chronic_disease: "",
      allergy: "",
      nssf_number: "",
      health: [],

    }
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get('http://localhost:8000/educations/' + sessionStorage.getItem('email'));
        if (response.status == 200) {
          this.educations = response.data;
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }



      try {
        const response = await this.$http.get('http://localhost:8000/health/' + sessionStorage.getItem('email'));
        if (response.status == 200) {
          this.health = response.data;
          console.log(this.health)
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }

    },
    async addEducation() {
      try {
        let st = {
          "user": sessionStorage.getItem('email'),
          "type": this.ctype,
          "major": this.major,
          "credits_completed": this.creditcompleted,
          "gpa": this.gpa,
          "college_name": this.collname
        }
        const response = await this.$http.post('http://localhost:8000/educations/create', st);
        if (response.status == 200) {
          this.status = "Success!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },
    async addHealth() {
      try {
        let st = {
          "user": sessionStorage.getItem('email'),
          "chronic_disease": this.chronic_disease,
          "allergy": this.allergy,
          "nssf_number": this.nssf_number
        }
        const response = await this.$http.post('http://localhost:8000/health/create', st);
        if (response.status == 200) {
          this.status = "Success!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },
    async editEducation(id, type, colname, major, gpa, credits) {
      try {
        let st = {
          "type": type,
          "major": major,
          "credits_completed": credits,
          "gpa": gpa,
          "college_name": colname
        }
        const response = await this.$http.patch('http://localhost:8000/educations/' + id, st);
        if (response.status == 200) {
          this.status = "Success!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },
    async editHealth(id, cc,a,nssf) {
      try {
        let st = {
          "chronic_disease": cc,
          "allergy": a,
          "nssf_number": nssf
        }
        const response = await this.$http.patch('http://localhost:8000/health/' + id, st);
        if (response.status == 200) {
          this.status = "Success!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },
    async deleteEducation(id) {
      try {
        const response = await this.$http.delete('http://localhost:8000/educations/' + id);
        if (response.status == 200) {
          this.status = "Deleted!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    },
    async deleteHealth(id) {
      try {
        const response = await this.$http.delete('http://localhost:8000/health/' + id);
        if (response.status == 200) {
          this.status = "Deleted!"
          location.reload();
        }
        console.log(response.status);
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }
    }
  },
  created() {
    if (!sessionStorage.getItem('id'))
      this.$router.push({ path: '/' })
    this.$root.$emit('loadApp')
    this.getData()
  }
};
</script>