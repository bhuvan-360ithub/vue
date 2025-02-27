<template>
  <v-card class="pa-4 d-flex flex-column align-center justify-center text-center">
    <v-container class="d-flex flex-column align-center justify-center">
      <div class="icon-container mb-3">
        <i class="pi pi-calendar"></i>
      </div>
      <h3>Membership Renewal</h3>
      <p class="text-h5 font-weight-bold">Expires on: {{ expiryDate }}</p>
      <v-btn color="primary" class="mt-3">Renew Now</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      expiryDate: "30 June 2025"
    };
  }
};
</script>

<style scoped>
.v-card {
  min-height: 250px; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container {
  background-color: #084e9d;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>
