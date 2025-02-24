<template>
    <div>
      <h2>Personal Information</h2>
      <p>Name: {{ userData.name }}</p>
      <p>Designation: {{ userData.designation }}</p>
      </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['userData']);
  </script>