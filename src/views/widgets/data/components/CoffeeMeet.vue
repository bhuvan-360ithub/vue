<template>
  <v-carousel cycle hide-delimiters height="250px">
    <v-carousel-item v-for="(event, index) in events" :key="index">
      <v-card class="custom-card">
        <!-- Top Section -->
        <v-container class="py-4 px-10">
<v-row justify="space-between" align="center">
  <!-- Host Section -->
  <v-col cols="5" class="d-flex flex-column align-center">
    <div class="text-caption font-weight-medium text-grey">Hosted by</div>
    <v-avatar size="55" class="mt-1 user-image">
      <img :src="event.host.photo" alt="Host Photo" />
    </v-avatar>
    <div class="text-subtitle-1 font-weight-bold mt-1">{{ event.host.name }}</div>
    <div class="text-caption text-grey-darken-1">{{ event.host.id }}</div>
  </v-col>

  <!-- Participant Section -->
  <v-col cols="5" class="d-flex flex-column align-center">
    <div class="text-caption font-weight-medium text-grey">With</div>
    <v-avatar size="55" class="mt-1 user-image">
      <img :src="event.participant.photo" alt="Participant Photo" />
    </v-avatar>
    <div class="text-subtitle-1 font-weight-bold mt-1">{{ event.participant.name }}</div>
    <div class="text-caption text-grey-darken-1">{{ event.participant.id }}</div>
  </v-col>
</v-row>
</v-container>

        <!-- Bottom Section -->
        <v-divider></v-divider>
        <v-container class="py-3">
          <v-row justify="space-between" align="center">
            <v-col cols="6" class="d-flex align-center">
              <v-icon class="mr-2 text-primary">mdi-calendar</v-icon>
              <span class="text-caption text-grey-darken-2">{{ event.eventDate }}</span>
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-end">
              <v-icon class="mr-2 text-primary">mdi-map-marker</v-icon>
              <span class="text-caption text-grey-darken-2">{{ event.eventLocation }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          host: {
            photo: new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "John Doe",
            id: "H12345"
          },
          participant: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Jane Smith",
            id: "P67890"
          },
          eventDate: "12 Feb 2025",
          eventLocation: "New Delhi"
        },
        {
          host: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Alice Johnson",
            id: "H67890"
          },
          participant: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Bob Brown",
            id: "P54321"
          },
          eventDate: "15 Feb 2025",
          eventLocation: "Mumbai"
        },
        {
          host: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Alice Johnson",
            id: "H67890"
          },
          participant: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Bob Brown",
            id: "P54321"
          },
          eventDate: "15 Feb 2025",
          eventLocation: "Mumbai"
        },
        {
          host: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Alice Johnson",
            id: "H67890"
          },
          participant: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Bob Brown",
            id: "P54321"
          },
          eventDate: "15 Feb 2025",
          eventLocation: "Mumbai"
        }, {
          host: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Alice Johnson",
            id: "H67890"
          },
          participant: {
            photo:  new URL('@/assets/images/profile.png', import.meta.url).href,
            name: "Bob Brown",
            id: "P54321"
          },
          eventDate: "15 Feb 2025",
          eventLocation: "Mumbai"
        }
      ]
    };
  }
};
</script>

<style scoped>
.custom-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  height: 250px;
  margin: auto;
  padding-bottom: 10px;
}

.v-avatar img {
  border-radius: 50%;
  border: 2px solid #ddd;
}

.text-grey {
  color: #757575 !important;
}

.text-primary {
  color: #1976d2 !important;
}

.text-subtitle-1{
  font-size: 18px !important;
  font-weight: 500;
}

.text-caption{
  font-size: 18px !important;
  font-weight: 600;
}

.user-image img{
  height: 85px;
  width: 85px;
}

.v-carousel :deep(.v-btn--icon) {
display: none !important;
}
</style>
