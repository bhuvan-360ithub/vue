<template>
    <v-card class="event-details-card elevation-2">
      <v-img :src="eventData.image" class="event-image" contain></v-img>
      <v-card-title class="title-text">{{ eventData.title }}</v-card-title>
      <v-card-subtitle class="subtitle-text">{{ eventData.description }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" class="detail-item">
            <v-icon left color="primary">mdi-map-marker</v-icon>
            <span>{{ eventData.venue }}</span>
          </v-col>
          <v-col cols="12" class="detail-item">
            <v-icon left color="primary">mdi-calendar</v-icon>
            <span>{{ eventData.date }}</span>
          </v-col>
          <v-col cols="12" class="detail-item">
            <v-icon left color="primary">mdi-clock</v-icon>
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
    text-align: center;
    margin-bottom: 5px;
}

.subtitle-text {
    font-size: 1rem;
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 10px;
}

.detail-item {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #34495e;
    padding: 4px 0;
}

.detail-item v-icon {
    margin-right: 6px;
}
</style>
