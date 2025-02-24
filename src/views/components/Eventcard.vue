<template>
    <v-card class="pa-8 white--bg elevation-3 d-flex flex-column" height="auto">
      <!-- First Row -->
      <v-row align="center" justify="space-between">
        <v-avatar color="#0849ed" size="44">
          <span class="white--text font-weight-bold">{{ avatarText }}</span>
        </v-avatar>
        <v-chip class="text-caption" color="primary" outlined>{{ eventType }}</v-chip>
      </v-row>
      
      <!-- Second Row -->
      <v-row align="center" class="mt-5">
        <v-col>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" size="md" />
          <span class="ml-2 text-caption">{{ eventDate }}</span>
          <span class="mx-3">|</span>
          <font-awesome-icon :icon="['fas', 'clock']" size="md" />
          <span class="ml-2 text-caption">{{ eventTime }}</span>
        </v-col>
      </v-row>
      
      <!-- Third Row -->
      <v-row class="mt-3">
        <v-col>
          <h3 class="text-h6 eventtilte font-weight-bold">{{ eventTitle }}</h3>
        </v-col>
      </v-row>
      
      <!-- Fourth Row -->
      <v-row align="center" class="mt-2">
        <v-col>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" size="md" />
          <span class="ml-1 text-caption eventlocation">{{ eventLocation }}</span>
        </v-col>
      </v-row>
      
      <!-- Fifth Row -->
      <v-row class="mt-auto">
      <v-col>
        <v-btn block color="primary" class="custom-button" @click="viewEvent">View</v-btn>
      </v-col>
    </v-row>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      avatarText: {
        type: String,
        default: "RB"
      },
      eventType: {
        type: String,
        default: "Offline Local Meet"
      },
      eventDate: {
        type: String,
        default: "2025-02-15"
      },
      eventTime: {
        type: String,
        default: "10:00 AM"
      },
      eventTitle: {
        type: String,
        default: "RB Thane Business Meet (Date Yet To Decide)"
      },
      eventLocation: {
        type: String,
        default: "Delhi, India"
      }
    },
    methods: {
    viewEvent() {
      this.$router.push({ path: "/utils/colors" });
    }
  }
  };
  </script>
  
  <style scoped>
  .v-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  
  .v-card {
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .text-caption{
    font-size: 16px !important;
    font-weight: 600;
  }

  .eventtilte{
    font-size: 30px !important;
    font-weight: 500 !important;
    line-height: 40px;
  }

  .custom-button {
  padding: 12px 16px;
  font-size: 16px;
  height: 48px;
  margin-top: 18px;
}

.eventlocation{
    font-size: 20px !important;
    font-weight: 500;
}

.white--text{
    font-size: 18px;
    font-weight: 500 !important;
}
  </style>
  