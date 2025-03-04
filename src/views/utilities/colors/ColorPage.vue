<template>
  <v-container>
    <v-row>
      <!-- Left Section (Event Details) -->
      <v-col cols="12" md="4" class="event-left">
        <EventDetails :eventData="eventData" />
      </v-col>

      <!-- Right Section (Event Pricing) -->
      <v-col cols="12" md="8" class="event-right">
        <v-container>
          <EventPricing :basePrice="eventData.basePrice" />
          <EventPricing :title="'Additional Cost'" :isAddon="true" :addonPrice="eventData.addonPrice" />
          <EventPricing  :basePrice="eventData.totalPrice" />
          <EventPricing :isFinal="true" :totalPrice="eventData.finalTotal" />
        </v-container>
        <!-- <v-btn block color="primary" class="mt-3">Pay Now</v-btn> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OfflineEventImage from '@/assets/images/Offline-event.jpg';
import EventDetails from "./components/EventDetails.vue";
import EventPricing from "./components/EventPricing.vue";


export default {
  components: { EventDetails, EventPricing },
  data() {
    return {
      eventData: {
        image: OfflineEventImage,
        title: "RB Chennai Business Meet (09032025)",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus in eleifend sollicitudin lacus convallis tempus. Sit velit euismod eu senectus fames montes lacus efficitur taciti?",
        venue: "City Hall, Downtown",
        date: "March 15, 2025",
        time: "6:00 PM - 10:00 PM",
        basePrice: 500,
        addonPrice: 100,
        totalPrice: 600,
        finalTotal: 700
      }
    };
  }
};
</script>

<style scoped>
.event-left {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: transparent;
  padding: 16px;
}
.event-right {
  overflow-y: auto;
  max-height: 100vh;
  padding: 16px;
}
@media (max-width: 960px) {
  .event-left {
    position: relative;
    height: auto;
    overflow: visible;
  }
  .event-right {
    max-height: none;
  }
}
</style>
