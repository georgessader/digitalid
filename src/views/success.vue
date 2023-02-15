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
                <v-text-field v-model="bsuniversityname" :rules="rules"
                  label="University Name"></v-text-field>
                <v-text-field v-model="bsuniversitymajor" :rules="rules"
                  label="University Major"></v-text-field>
                <v-text-field v-model="bscompetedcredit" :rules="rules"
                  label="Competed Credit"></v-text-field>
                <v-text-field v-model="bsgpa" :rules="rules" label="GPA"></v-text-field>
                <v-file-input label="Upload BS Certificate"></v-file-input>
              </div>

              <v-checkbox v-model="ms" label="Do you have Master Certificate?"></v-checkbox>
              <div v-if="ms">
                <v-text-field v-model="msuniversityname" :rules="rules"
                  label="University Name"></v-text-field>
                <v-text-field v-model="msuniversitymajor" :rules="rules"
                  label="University Major"></v-text-field>
                <v-text-field v-model="mscompetedcredit" :rules="rules"
                  label="Competed Credit"></v-text-field>
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
              <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-window-item>

        <v-window-item>
          <v-sheet width="400" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
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
      ms: false
    }
  },

  methods: {
  }
};
</script>