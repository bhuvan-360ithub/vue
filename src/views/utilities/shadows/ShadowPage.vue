<template>
  <v-container fluid>
    <v-row>
      <!-- Left Section - 4 columns on md+, full width on xs -->
      <v-col cols="12" md="4">
        <div class="left-section">
          <profile-details />
          <bonus-points />
          <membership-renewal />
          <specialised-in />
        </div>
      </v-col>

      <!-- Right Section - 8 columns on md+, full width on xs -->
      <v-col cols="12" md="8">
        <div class="right-section">
          <info-details />
          <business-info />
          
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileDetails from './components/ProfileDetails.vue'
import BonusPoints from './components/BonusPoints.vue'
import MembershipRenewal from './components/MembershipRenewal.vue'
import InfoDetails from './components/InfoDetails.vue'
import BusinessInfo from './components/BusinessInfo.vue'
import SpecialisedIn from './components/SpecialisedIn.vue'

export default {
  components: {
    ProfileDetails,
    BonusPoints,
    MembershipRenewal,
    InfoDetails,
    BusinessInfo,
    SpecialisedIn
  }
}
</script>

<style scoped>
.left-section, .right-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
