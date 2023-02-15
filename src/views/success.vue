<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Educational profile</v-tab>
      <v-tab value="two">Health profile</v-tab>
      <v-tab value="three">Career Profile</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>



              <v-text-field v-model="secondaryschoolname" :rules="rules" label="Secondary School Name"></v-text-field>
              <v-text-field v-model="bac2major" :rules="rules" label="Bac 2 Major"></v-text-field>
              <v-row cols="12">
                <v-col>
                  <v-text-field v-model="email" :rules="rules" label="Grade 10"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="email" :rules="rules" label="Grade 11"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="email" :rules="rules" label="Grade 12"></v-text-field>
                </v-col>
              </v-row>
              <v-file-input label="Upload Certificate"></v-file-input>

              <v-checkbox v-model="bs" label="Do you have BS Certificate?"></v-checkbox>
              <div v-if="bs">
                <v-text-field v-model="bsuniversityname" :rules="rules" label="University Name"></v-text-field>
                <v-text-field v-model="bsuniversitymajor" :rules="rules" label="University Major"></v-text-field>
                <v-text-field v-model="bscompetedcredit" :rules="rules" label="Competed Credit"></v-text-field>
                <v-text-field v-model="bsgpa" :rules="rules" label="GPA"></v-text-field>
                <v-file-input label="Upload BS Certificate"></v-file-input>
              </div>

              <v-checkbox v-model="ms" label="Do you have Master Certificate?"></v-checkbox>
              <div v-if="ms">
                <v-text-field v-model="msuniversityname" :rules="rules" label="University Name"></v-text-field>
                <v-text-field v-model="msuniversitymajor" :rules="rules" label="University Major"></v-text-field>
                <v-text-field v-model="mscompetedcredit" :rules="rules" label="Competed Credit"></v-text-field>
                <v-text-field v-model="msgpa" :rules="rules" label="GPA"></v-text-field>
                <v-file-input label="Upload Master Certificate"></v-file-input>
              </div>

              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-window-item>

        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-file-input label="Health report"></v-file-input>
              <v-file-input label="Chronic diseases"></v-file-input>
              <v-file-input label="Allergy"></v-file-input>
              <v-file-input label="Vaccination report"></v-file-input>
              <v-file-input label="NSSF number (if available)"></v-file-input>
              <v-file-input label="Insurance Docs (if available)"></v-file-input>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-window-item>

        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field v-model="major" :rules="rules" label="Major"></v-text-field>
              <v-checkbox v-model="prevexp" label="Do you have previous experience?"></v-checkbox>
              <div v-if="prevexp">
                <v-text-field v-model="pcompanyname" :rules="rules" label="Company name"></v-text-field>
                <v-text-field v-model="pyearsofexperience" :rules="rules" label="Years of experience"></v-text-field>
                <v-text-field v-model="pposition" :rules="rules" label="Position"></v-text-field>
                <v-text-field v-model="presponsibilities" :rules="rules" label="Responsibilities"></v-text-field>
              </div>
              <v-checkbox v-model="currentpos" label="Do you have previous experience?"></v-checkbox>
              <div v-if="currentpos">
                <v-text-field v-model="ccompanyname" :rules="rules" label="Company name"></v-text-field>
                <v-text-field v-model="cyearsofexperience" :rules="rules" label="Years of experience"></v-text-field>
                <v-text-field v-model="cposition" :rules="rules" label="Position"></v-text-field>
                <v-text-field v-model="cresponsibilities" :rules="rules" label="Responsibilities"></v-text-field>
              </div>
              <v-file-input label="CV"></v-file-input>
              <v-text-field v-model="portfolio" :rules="rules" label="Portfolio"></v-text-field>
              <v-text-field v-model="linkedinprofile" :rules="rules" label="Linked In Profile"></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      tab: "one",
      bs: false,
      ms: false,
      prevexp:false,
      currentpos:false
    }
  },

  methods: {
  }
};
</script>