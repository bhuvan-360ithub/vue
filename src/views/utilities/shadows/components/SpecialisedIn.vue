<template>
    <v-card class="pa-4">
      <v-container>
        <h3 class="mb-4">Specialised In</h3>
        <v-row>
          <v-chip v-for="(speciality, index) in specialisations" :key="index" class="ma-1" color="primary" outlined>
            {{ speciality }}
          </v-chip>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        specialisations: [
          'Web Development',
          'Mobile Apps',
          'Cloud Solutions',
          'Cybersecurity',
          'AI & Machine Learning',
          'Blockchain'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    height: 100%;
  }
  </style>
  