<template>
    <v-card class="pa-4">
      <v-container>
        <h3 class="mb-4">Business Info</h3>
        <v-row v-for="info in businessDetails" :key="info.label" align="center" class="mb-2">
          <div class="icon-container">
            <i :class="info.icon"></i>
          </div>
          <span class="ml-2 font-weight-bold">{{ info.label }}:</span>
          <span class="ml-2">{{ info.value }}</span>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        businessDetails: [
          { icon: 'pi pi-briefcase', label: 'Company Name', value: 'Tech Solutions' },
          { icon: 'pi pi-map-marker', label: 'Location', value: 'New Delhi, India' },
          { icon: 'pi pi-phone', label: 'Contact', value: '+91 9876543210' },
          { icon: 'pi pi-envelope', label: 'Email', value: 'info@techsolutions.com' },
          { icon: 'pi pi-globe', label: 'Website', value: 'www.techsolutions.com' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .icon-container {
    background-color: #084e9d;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  </style>
  