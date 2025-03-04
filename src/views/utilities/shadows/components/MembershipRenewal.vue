<template>
  <v-card class="pa-4 d-flex flex-column align-center justify-center text-center">
    <v-container class="d-flex flex-column align-center justify-center">
      <!-- <div class="icon-container mb-3">
        <i class="pi pi-calendar"></i>
      </div> -->
      <h3 class="head">Membership Renewal  Date</h3>
      <p class="text-h5 font-weight-bold">Expires on: {{ expiryDate }}</p>
      <v-btn color="primary" class="mt-5 renew-btn">Renew Now</v-btn>
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
  min-height: 200px; /* Adjust as needed */
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

.head{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.text-h5{
  font-size: 24px !important;
}
.renew-btn{
  height: 50px;
  width: 250px;
  font-size: 18px;
}
</style>
