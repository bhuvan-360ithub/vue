<template>
  <v-container>
    <!-- Event Basic Details -->
    <v-card class="pa-4 mb-4">
  <v-card-title class="text-left eventtitle">{{ event.title }}</v-card-title>
  <v-card-text>
    <p class="mb-4 text-left eventdescription">{{ event.description }}</p>
    <v-row class="align-center">
      <v-col cols="auto" class="d-flex align-center mr-4">
        <font-awesome-icon icon="map-marker-alt" class="event-icon mr-2" />
        <span class="event-details-text">{{ event.location }}</span>
      </v-col>
      <v-col cols="auto" class="d-flex align-center mr-4">
        <font-awesome-icon icon="calendar-alt" class="event-icon mr-2" />
        <span class="event-details-text">{{ event.date }}</span>
      </v-col>
      <v-col cols="auto" class="d-flex align-center">
        <font-awesome-icon icon="clock" class="event-icon mr-2" />
        <span class="event-details-text">{{ event.time }}</span>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>


    <!-- Event Cost Details -->
    <v-card class="pa-4 mb-4">
      <v-card-text>
        <v-row class="d-flex justify-space-between eventcost" v-for="(value, key) in costDetails" :key="key">
          <v-col>{{ key }}</v-col>
          <v-col class="text-right eventcost">Rs. {{ value | currency }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Additional Cost -->
    <v-card class="pa-4 mb-4">
      <v-card-text>
        <v-row class="d-flex justify-space-between cost-text">
          <v-col>Additional Cost</v-col>
        </v-row>
        <v-row class="d-flex justify-space-between">
          <v-col cols="1">
            <v-checkbox v-model="includeAddon"></v-checkbox>
          </v-col>
          <v-col>
            <v-row class="d-flex justify-space-between eventcost" v-for="(value, key) in addonDetails" :key="key">
              <v-col>{{ key }}</v-col>
              <v-col class="text-right eventcost">Rs. {{ value | currency }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Final Total -->
    <v-card class="pa-4 mb-4">
      <v-card-text>
        <v-row class="d-flex justify-space-between eventcost" v-for="(value, key) in finalTotals" :key="key">
          <v-col>{{ key }}</v-col>
          <v-col class="text-right eventcost">Rs. {{ value | currency }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Payment Section -->
    <v-card class="pa-4 mb-4">
      <v-card-text>
        <v-row class="d-flex justify-space-between total-text">
          <v-col><strong>Total:</strong></v-col>
          <v-col class="text-right totaltext"><strong>Rs.{{ finalAmount | currency }}</strong></v-col>
        </v-row>
        <v-btn block color="primary" class="custom-button">Pay Now for Event</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMapMarkerAlt, faCalendarAlt, faClock);

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      event: {
        title: "RB Thane Business Meet (Date Yet To Decide)",
        description: "RB Thane Business Networking Meet. Expecting Members From Thane, Mumbai, Navi Mumbai, Nashik & From Near By Cities. Venue : Param Banquets",
        location: "New Delhi, India",
        date: "2025-03-15",
        time: "6:00 PM",
      },
      costDetails: {
        "Event Cost": 1000,
        "Convenience Fee (2%)": 20,
        "GST (18%)": 180,
        "Total": 1200,
      },
      addonDetails: {
        "Addon Fee": 500,
        "Convenience Fee (2%)": 10,
        "GST (18%)": 90,
        "Addon Total": 600,
      },
      finalTotals: {
        "Total Cost": 1800,
        "Convenience Fee (2%)": 30,
        "GST": 270,
      },
      finalAmount: 2100,
      includeAddon: false,
    };
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(value);
    },
  },
};


</script>

<style scoped>
.eventtitle{
  font-size: 30px;
  font-weight: 600;
}

.eventdescription{
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
}
.event-details{
  font-size: 20px;
  font-weight: 600;
  color: #084e9d;
}

.eventcost{
  font-size: 18px;
  font-weight: 500;
}

.custom-button {
  padding: 12px 16px;
  font-size: 16px;
  height: 48px;
  margin-top: 18px;
}

.total-text{
  font-size: 20px;
  font-weight: 400;
}

.cost-text{
  font-size: 22px;
  font-weight: 500;
  color: #084e9d;
}

.event-icon {
  font-size: 1.2rem; /* Adjust icon size */
  color: #084e9d; /* Adjust icon color */
}

.event-details-text {
  font-size: 20px; /* Adjust text size */
  font-weight: 500; /* Optionally make it bolder */
}
</style>