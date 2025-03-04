<template>
  <v-card class="event-details-card elevation-2">
      <v-img :src="eventData.image" class="event-image" contain></v-img>

      <v-card-title class="title-text">{{ eventData.title }}</v-card-title>
      <v-card-subtitle class="subtitle-text">{{ eventData.description }}</v-card-subtitle>

      <v-card-text>
          <v-row>
              <v-col cols="12" class="detail-item">
                  <span class="icon-wrapper">
                      <i class="pi pi-map-marker"></i>
                  </span>
                  <span>{{ eventData.venue }}</span>
              </v-col>
              <v-col cols="12" class="detail-item">
                  <span class="icon-wrapper">
                      <i class="pi pi-calendar"></i>
                  </span>
                  <span>{{ eventData.date }}</span>
              </v-col>
              <v-col cols="12" class="detail-item">
                  <span class="icon-wrapper">
                      <i class="pi pi-clock"></i>
                  </span>
                  <span>{{ eventData.time }}</span>
              </v-col>
          </v-row>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
      eventData: Object
  }
};
</script>

<style scoped>
.event-details-card {
  background: #ffffff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.event-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.title-text {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
  text-align: left;
  white-space: normal; 
  word-break: break-word;
}

.subtitle-text {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 10px;
  text-align: left;
  white-space: normal; 
  word-break: break-word; 
}


.detail-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #34495e;
  padding: 6px 0;
}

.icon-wrapper {
  width: 30px;
  height: 30px;
  background-color: #084e9d;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.icon-wrapper i {
  font-size: 1rem;
}
</style>
