<template>
  <v-card style="width:fit-content;margin:auto;">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Educational profile</v-tab>
      <v-tab value="two">Health profile</v-tab>
      <v-tab value="three">Career Profile</v-tab>
      <v-tab value="four">id and selfie</v-tab>
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


              <v-form @submit.prevent>
                <v-radio-group v-model="uptype">
                  <v-radio label="Grade" value="1"></v-radio>
                  <v-radio label="Degree" value="2"></v-radio>
                </v-radio-group>
                <v-file-input label="File" v-model="edufile"></v-file-input>
                <v-btn type="submit" block class="mt-2" color="success" @click="uploadEducation(e['id'])">Upload</v-btn>
              </v-form>
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
              @click="editHealth(h['id'], h['chronic_disease'], h['allergy'], h['nssf_number'])">Edit</v-btn>
            <v-btn type="submit" block class="mt-2" color="delete" @click="deleteHealth(h['id'])">Delete</v-btn>

            <v-form @submit.prevent>
              <v-radio-group v-model="uptype">
                <v-radio label="Health Report" value="1"></v-radio>
                <v-radio label="Vaccination Report" value="2"></v-radio>
                <v-radio label="Insurance Doc" value="3"></v-radio>
              </v-radio-group>
              <v-file-input label="File" v-model="edufile"></v-file-input>
              <v-text-field type="date" v-if="uptype == '3'" v-model="expdate" label="Expiry Date"></v-text-field>
              <v-btn type="submit" block class="mt-2" color="success" @click="uploadHealth(h['id'])">Upload</v-btn>
            </v-form>
          </v-form>
        </v-window-item>




        <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->





        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field v-model="portfolio_url" label="Portfolio Link"></v-text-field>
              <v-text-field v-model="linkedin_url" label="Linked In"></v-text-field>
              <v-text-field v-model="years_experience" label="Years of experience"></v-text-field>
              <v-text-field v-model="job_title" label="Job title"></v-text-field>
              <v-text-field v-model="company_name" label="Company Name"></v-text-field>
              <v-btn type="submit" block class="mt-2" color="success" @click="addCareer">Submit</v-btn>
            </v-form>
          </v-sheet>

          <h1 style="text-align: center; margin-top: 40px;">My Careers</h1>


          <v-form @submit.prevent v-for="(c, i) in career['detail']">
            <v-text-field v-model="c['portfolio_url']" label="Portfolio"></v-text-field>
            <v-text-field v-model="c['linkedin_url']" label="Linked In"></v-text-field>
            <v-text-field v-model="c['years_experience']" label="Years of experience"></v-text-field>
            <v-text-field v-model="c['job_title']" label="Job title"></v-text-field>
            <v-text-field v-model="c['company_name']" label="Company Name"></v-text-field>
            <v-btn type="submit" block class="mt-2" color="success"
              @click="editCareer(c['id'], c['portfolio_url'], c['linkedin_url'], c['years_experience'], c['job_title'], c['company_name'])">Edit</v-btn>
            <v-btn type="submit" block class="mt-2" color="delete" @click="deleteCareer(c['id'])">Delete</v-btn>

            <v-form @submit.prevent>
              <v-radio-group v-model="uptype">
                <v-radio label="Resume" value="1"></v-radio>
                <v-radio label="Cover Letter" value="2"></v-radio>
              </v-radio-group>
              <v-file-input label="File" v-model="edufile"></v-file-input>
              <v-btn type="submit" block class="mt-2" color="success" @click="uploadCareer(c['id'])">Upload</v-btn>
            </v-form>
          </v-form>
        </v-window-item>




        <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->





        <v-window-item>

          <v-form @submit.prevent>
            <v-file-input label="File" v-model="idFile"></v-file-input>
            <v-btn type="submit" block class="mt-2" color="success" @click="uploadId()">Upload Id</v-btn>
          </v-form>


          <v-sheet width="400" class="mx-auto" style="text-align: center;">
            <!-- <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn> -->
            <!-- <v-btn> -->
            <div id="app" class="web-camera-container">


              <v-btn block class="mt-2" color="success"
                :class="{ 'is-primary': !isCameraOpen, 'is-danger': isCameraOpen }" @click="toggleCamera">
                <span v-if="!isCameraOpen">Upload Selfie</span>
                <span v-else>Close Camera</span>
              </v-btn>

              <div v-show="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash': isShotPhoto }">

                <div class="camera-shutter" :class="{ 'flash': isShotPhoto }"></div>

                <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
              </div>

              <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
                <button type="button" class="button" @click="takePhoto">
                  <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
                </button>
              </div>

              <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                  Send
                </a>
              </div>
            </div>
            <!-- </v-btn> -->
          </v-sheet>
        </v-window-item>
      </v-window>
      <!-- <h4 style="color:green;">
        {{ status }}
      </h4> -->
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
      uptype: "",
      edufile: [],
      educations: [],



      chronic_disease: "",
      allergy: "",
      nssf_number: "",
      expdate: "",
      health: [],



      portfolio_url: "",
      linkedin_url: "",
      years_experience: "",
      job_title: "",
      company_name: "",
      career: [],

      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      idFile: []

    }
  },

  methods: {
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false;
          this.$refs.camera.srcObject = stream;
        })
        .catch(error => {
          this.isLoading = false;
          alert("May the browser didn't support or there is some errors.");
        });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
    },

    async downloadImage() {
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg");
      var blobBin = atob(canvas.split(',')[1]);
      var array = [];
      for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      var file = new Blob([new Uint8Array(array)], { type: 'image/png' });

      // console.log(canvas.getContext('2d'));
      try {
        console.log(canvas.data)
        let formData = new FormData();
        formData.append("user", sessionStorage.getItem('id'))
        formData.append("document_type", 2)
        formData.append("file", file, "camphoto.jpg")
        const response = await this.$http.post('http://localhost:8000/users/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "incorrect file type"
        console.log(error);
      }
    },
    async uploadId() {
      try {
        let formData = new FormData();
        formData.append("user", sessionStorage.getItem('id'))
        formData.append("document_type", 1)
        formData.append("file", this.idFile, "id.jpg")
        const response = await this.$http.post('http://localhost:8000/users/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.infos = response.data;
        console.log(response.data)
      } catch (error) {
        this.status = "incorrect file type"
        console.log(error);
      }
    },
    async uploadEducation(id) {
      try {
        let formData = new FormData();
        formData.append("user", sessionStorage.getItem('id'))
        formData.append("education_id", id)
        formData.append("document_type", this.uptype)
        formData.append("file", this.edufile)
        console.log(formData)
        const response = await this.$http.post('http://localhost:8000/educations/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
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
    async uploadHealth(id) {
      try {
        let formData = new FormData();
        formData.append("user", sessionStorage.getItem('id'))
        formData.append("health_id", id)
        formData.append("document_type", this.uptype)
        formData.append("expiry_date", this.expdate)
        formData.append("file", this.edufile)
        console.log(formData)
        const response = await this.$http.post('http://localhost:8000/health/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
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
    async uploadCareer(id) {
      try {
        let formData = new FormData();
        formData.append("user", sessionStorage.getItem('id'))
        formData.append("career_id", id)
        formData.append("document_type", this.uptype)
        formData.append("file", this.edufile)
        console.log(formData)
        const response = await this.$http.post('http://localhost:8000/career/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
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

    async getData() {
      try {
        const response = await this.$http.get('http://localhost:8000/educations/' + sessionStorage.getItem('id'));
        if (response.status == 200) {
          this.educations = response.data;
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }



      try {
        const response = await this.$http.get('http://localhost:8000/health/' + sessionStorage.getItem('id'));
        if (response.status == 200) {
          this.health = response.data;
          console.log(this.health)
        }
      } catch (error) {
        this.status = "Error"
        console.log(error);
      }


      try {
        const response = await this.$http.get('http://localhost:8000/career/' + sessionStorage.getItem('id'));
        if (response.status == 200) {
          this.career = response.data;
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
          "user": sessionStorage.getItem('id'),
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
          "user": sessionStorage.getItem('id'),
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
    async addCareer() {
      try {
        let st = {
          "user": sessionStorage.getItem('id'),
          "portfolio_url": this.portfolio_url,
          "linkedin_url": this.linkedin_url,
          "years_experience": this.years_experience,
          "job_title": this.job_title,
          "company_name": this.company_name
        }
        const response = await this.$http.post('http://localhost:8000/career/create', st);
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
    async editHealth(id, cc, a, nssf) {
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
    async editCareer(id, p, l, y, j, c) {
      try {
        let st = {
          "portfolio_url": p,
          "linkedin_url": l,
          "years_experience": y,
          "job_title": j,
          "company_name": c
        }
        const response = await this.$http.patch('http://localhost:8000/career/' + id, st);
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
    },
    async deleteCareer(id) {
      try {
        const response = await this.$http.delete('http://localhost:8000/career/' + id);
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