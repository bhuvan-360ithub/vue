<script setup lang="ts">
// imported components
import WelcomeBanner from './components/WelcomeBanner.vue';
import ChartCards from '@/views/widgets/chart/components/ChartCards.vue';
import RepeatCustomer from '@/views/widgets/chart/components/RepeatCustomer.vue';
import ProjectOverview from '@/views/widgets/chart/components/ProjectOverview.vue';
// import UserCard from '@/views/widgets/statistics/components/UserCard.vue';
import ProjectCard from './components/ProjectCard.vue';
import ProfileCarousel from '@/views/widgets/data/components/TransactionCard.vue';
import TotalIncome from '@/views/widgets/chart/components/TotalIncome.vue';
import CoffeeMeet from '@/views/widgets/data/components/CoffeeMeet.vue';
import Headline from '@/views/widgets/Headline.vue';
import Datacard from '@/views/widgets/chart/components/Datacard.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { mdi } from '@mdi/js';
library.add(fas);
console.log("topRightIcon path:", new URL('@/assets/images/badge.png', import.meta.url).href);

const profileData1 = [
  {
    avatarText: 'AB',
    name: 'Abhishek',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
  {
    avatarText: 'AB',
    name: 'Raj',
    userId: 'RB0099',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
  {
    avatarText: 'AB',
    name: 'Kiran',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
];


const profileData2 = [
  {
    avatarText: 'AB',
    name: 'Abhishek',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
    rating: 3.8,
  },
  {
    avatarText: 'AB',
    name: 'Kiran',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
  {
    avatarText: 'AB',
    name: 'Raj',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
];


const profileData3 = [
  {
    avatarText: 'AB',
    name: 'Abhishek',
    userId: 'RB0009',
    details: [
      { icon: 'fa-briefcase', text: 'Information Technology' },
      { icon: 'fa-location-dot', text: 'Bengaluru' },
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href,
    rating: 4,
  },
];

const profileData4 = [
  {
    avatarText: 'AB',
    name: 'Abhishek',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
  {
    avatarText: 'AB',
    name: 'Kiran',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
  {
    avatarText: 'AB',
    name: 'Raj',
    userId: 'RB0009',
    details: [{ icon: 'fa-briefcase', text: 'Information Technology' },
    { icon: 'fa-location-dot', text: 'Bengaluru' },
    { icon: 'fa-gauge-simple-high', text: 'Quarterly Active Score: 56' }
    ],
    avatarImage: new URL('@/assets/images/profile.png', import.meta.url).href, 
  },
];


const cards = [
  { icon: '@/assets/images/Coffemeet.', number: 5, text: "Meet Online" },
  { icon: '@/assets/images/calendar-check.svg', number: 12, text: "RB Meet" },
  { icon: '@/assets/images/account-group.svg', number: 8, text: "Coffee Meet" },
  { icon: '@/assets/images/video.svg', number: 15, text: "Connects Given" },
  { icon: '@/assets/images/phone.svg', number: 10, text: "Guest" },
  { icon: '@/assets/images/briefcase.svg', number: 7, text: "Training" }
];

const cards2 = [
  { icon: '@/assets/images/users.svg', number: 5, text: "Meet Online" },
  { icon: '@/assets/images/calendar-check.svg', number: 12, text: "RB Meet" },
  { icon: '@/assets/images/account-group.svg', number: 8, text: "Coffee Meet" },
  { icon: '@/assets/images/video.svg', number: 15, text: "Connects Given" },
  { icon: '@/assets/images/phone.svg', number: 10, text: "Guest" },
  { icon: '@/assets/images/graduation-cap.svg', number: 7, text: "Training" }
];
</script>

<template>
  <!-- -------------------------------------------------------------------- -->
  <!-- welcome banner -->
  <!-- -------------------------------------------------------------------- -->
  <v-row class="my-0">
    <v-col cols="12">
      <WelcomeBanner />
    </v-col>
  </v-row>
<v-container fluid class="pa-0">
  <v-row class="align-start" justify="center" no-gutters>
  <v-col cols="12" md="5" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
    <Headline text="Welcome to RB Family" />
    <ProfileCarousel :profiles="profileData1" />
    <Headline text="Active Member" />
    <ProfileCarousel :profiles="profileData2" />
    <Headline text="Coffee Meet" />
    <ProfileCarousel :profiles="profileData2" />
  </v-col>
  <v-col cols="12" md="5" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
    <Headline text="Business Given" />
    <chart-cards />
    <Headline text="Star Member" />
    <ProfileCarousel :profiles="profileData2" />
    <Headline text="RB Meet" />
    <coffee-meet />
  </v-col>
</v-row>
</v-container>
  
<Headline text="My Reports" />
<v-row justify="center" align="center" class="gap-2">
    <v-col
      v-for="(item, index) in cards"
      :key="index"
      cols="12" sm="4" md="2"
      class="d-flex justify-center"
    >
      <Datacard :icon="item.icon" :number="item.number" :text="item.text" />
    </v-col>
    <v-col
      v-for="(item, index) in cards2"
      :key="index"
      cols="12" sm="4" md="2"
      class="d-flex justify-center"
    >
      <Datacard :icon="item.icon" :number="item.number" :text="item.text" />
    </v-col>
  </v-row>



</template>

<style lang="scss" scoped>
.v-row > *:last-child {
  margin-bottom: 0 !important;
}
</style>\

