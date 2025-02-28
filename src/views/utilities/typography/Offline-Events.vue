<template>
  <h1 class="title">Offline Events</h1>
  <v-container fluid>
    <v-row>
      <v-col cols="12" v-for="event in events" :key="event.id">
        <v-card class="event-card">
          <div class="event-image-container">
            <v-img :src="event.image" height="300px" class="event-image">
              <v-chip class="event-type" color="primary" small>{{ event.type }}</v-chip>
            </v-img>
          </div>
          <v-container class="event-details">
            <div class="event-content">
              <v-row align="center" class="date-time-row">
                <div class="icon-wrapper">
                  <i class="pi pi-calendar icon"></i>
                </div>
                <span>{{ event.date }}</span>
                <div class="icon-wrapper ml-4">
                  <i class="pi pi-clock icon"></i>
                </div>
                <span>{{ event.time }}</span>
              </v-row>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-description">{{ event.description }}</p>
              <v-row align="center" class="location-row">
                <div class="icon-wrapper">
                  <i class="pi pi-map-marker icon"></i>
                </div>
                <span>{{ event.location }}</span>
              </v-row>
              <v-btn color="primary" class="view-button">View</v-btn>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OfflineEventImage from '@/assets/images/Offline-event.jpg';

export default {
  data() {
    return {
      events: [
        {
          id: 1,
          image: OfflineEventImage,
          type: 'Offline Local Meet',
          date: '09-03-25',
          time: '08:00:00 am',
          title: 'RB Chennai Business Meet (09032025)',
          description: 'RB Chennai Business Networking Meet. Venue : Pride Hotel, Kilpauk',
          location: 'New Delhi, India'
        },
        {
          id: 2,
          image: OfflineEventImage,
          type: 'Offline National Meet',
          date: '18-07-25',
          time: '08:00:00 am',
          title: 'RB Business Networking Meet (18072025)',
          description: 'RB 9th National Business Networking Meet Venue : The Capitol Hotel, No.3 Raj Bhavan Road',
          location: 'Bengaluru, India'
        },
        {
          id: 3,
          image: OfflineEventImage,
          type: 'Offline National Meet',
          date: '18-07-25',
          time: '08:00:00 am',
          title: 'RB Business Networking Meet (18072025)',
          description: 'RB 9th National Business Networking Meet Venue : The Capitol Hotel, No.3 Raj Bhavan Road',
          location: 'Bengaluru, India'
        }
      ]
    };
  }
};
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
}

.event-image-container {
  position: relative;
  flex: 1;
}

.event-image {
  width: 100%;
}

.event-type {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffffff;
}

.event-details {
  flex: 2;
  display: flex;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  padding-left: 32px;
}

.event-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.date-time-row,
.location-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.event-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-top: 20px;
}

.event-description {
  font-size: 1rem;
  margin: 0;
  margin-bottom: 20px;
}

.view-button {
  margin-top: 20px;
  align-self: flex-start;
  min-width: 120px; 
  max-width: 200px; 
  width: 100%; 
  height: 42px;
}

.title{
  font-weight: 600;
  padding-bottom: 20px;
}

.icon-wrapper {
  width: 32px;
  height: 32px;
  background-color: #084e9d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: white;
  font-size: 16px;
}

@media (max-width: 768px) {
  .event-card {
    flex-direction: column;
    padding: 16px 0;
  }


  .event-type {
  position: absolute;
  right: 20px;
}

  .event-image {
    height: auto;
    border-radius: 10px;
  }

  .event-details {
    padding: 16px;
    padding-top: 40px;
    align-items: flex-start;
    padding-left: 24px;
  }

  .event-content {
    gap: 12px;
  }
}
</style>