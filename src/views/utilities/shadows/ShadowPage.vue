<template>
  <v-container>
    <v-row>
      <!-- Left Section -->
      <v-col cols="12" md="4" class="fixed-section">
        <profile-details />
        <bonus-points />
        <membership-renewal />
      </v-col>
      
      <!-- Right Section -->
      <v-col cols="12" md="8" class="scrollable-section">
        <info-details />
        <business-info />
        <specialised-in />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileDetails from "./components/ProfileDetails.vue";
import BonusPoints from "./components/BonusPoints.vue";
import MembershipRenewal from "./components/MembershipRenewal.vue";
import InfoDetails from "./components/InfoDetails.vue";
import BusinessInfo from "./components/BusinessInfo.vue";
import SpecialisedIn from "./components/SpecialisedIn.vue";

export default {
  components: {
    ProfileDetails,
    BonusPoints,
    MembershipRenewal,
    InfoDetails,
    BusinessInfo,
    SpecialisedIn,
  },
};
</script>

<style scoped>
.fixed-section {
  position: sticky;
  top: 0;
}
.scrollable-section {
  max-height: 100vh;
  overflow-y: auto;
  padding-left: 16px;
}
</style>
