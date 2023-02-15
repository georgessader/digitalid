<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First Name"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="rules"
        label="Last Name"
      ></v-text-field>
      <v-text-field
        v-model="age"
        :rules="rules"
        label="Age"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>


<script>
  export default {
    data: () => ({
         
    }),
  }
</script>