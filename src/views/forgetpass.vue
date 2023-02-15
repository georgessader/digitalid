<template>
  <v-sheet width="400" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>


<script>

export default {
  data() {
    return {
    }
  },

  methods: {
  }
};
</script>