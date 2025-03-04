<template>
    <v-card class="pa-4 text-center bonus-card">
      <v-container>
        <div class="icon-container mx-auto mb-3">
          <i class="pi pi-star"></i>
        </div>
        <h3 class="bonus-title">Bonus Points</h3>
        <p class="bonus-score">{{ points }}</p>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        points: 2500
      };
    }
  };
  </script>
  
  <style scoped>
  .bonus-card {
    width: 100%;
    height: auto;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-container {
    background-color: #084e9d;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .bonus-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .bonus-score {
    font-size: 36px;
    font-weight: 600;
    color: #084e9d;
    margin-bottom: 5px;
  }
  .bonus-subtext {
    font-size: 0.8rem;
    color: gray;
  }
  </style>