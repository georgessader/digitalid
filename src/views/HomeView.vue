<template>
  <v-sheet width="500" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field v-model="username" :rules="rules" label="UserName"></v-text-field>
      <v-text-field v-model="password" :rules="rules" label="Password"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
      <a style="width: 100%; text-align: center;" href="/#/register">Register</a>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({

  }),
}
</script>