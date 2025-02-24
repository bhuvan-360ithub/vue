<template>
    <v-card class="pa-4">
      <h2 class="text-h5 mb-4">Personal Information</h2>
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="First Name" v-model="formData.firstName"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Last Name" v-model="formData.lastName"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Email Address" v-model="formData.email" type="email"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Phone Number" v-model="formData.phone" type="tel"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Date of Birth" v-model="formData.dob" type="date"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Designation" v-model="formData.designation"></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="saveInfo">Save</v-btn>
      </v-form>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps, ref, watch } from 'vue';
  
  const props = defineProps({
    userData: Object,
  });
  
  const formData = ref({ ...props.userData });
  
  watch(props.userData, (newVal) => {
    formData.value = { ...newVal };
  });
  
  const saveInfo = () => {
    console.log('Saved Data:', formData.value);
  };
  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: auto;
  }
  </style>