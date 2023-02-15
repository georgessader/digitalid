<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="UserName"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="rules"
        label="Password"
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