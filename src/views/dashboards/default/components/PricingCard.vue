<template>
    <v-card class="pricing-card" elevation="4">
      <v-card-title class="text-h6 font-weight-bold text-center">
        {{ plan.name }}
      </v-card-title>
      <v-card-subtitle class="text-center text-h5 font-weight-bold mt-2">
        ${{ plan.price }} <span class="text-subtitle-1">/ month</span>
      </v-card-subtitle>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="(feature, index) in plan.features" :key="index">
            <v-list-item-icon>
              <v-icon color="primary">mdi-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ feature }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" class="text-white" rounded>Purchase Plan</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      plan: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .pricing-card {
    max-width: 350px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  </style>