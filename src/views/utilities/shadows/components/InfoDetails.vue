<template>
  <v-card class="pa-4">
    <v-container>
      <h3 class="mb-4">Personal Info</h3>
      <v-row
        v-for="info in infoDetails"
        :key="info.label"
        align="center"
        class="mb-2 info-row"
        no-gutters
      >
        <v-col cols="auto" class="pa-0 ma-0">
          <div class="icon-container">
            <i :class="info.icon"></i>
          </div>
        </v-col>

        <v-col class="pa-0 ma-0 ml-3">
          <div class="text-content">
            <span class="font-weight-normal">{{ info.label }}</span>
            <span class="info-value font-weight-bold value">{{ info.value }}</span>
          </div>
        </v-col>
      </v-row>

      <h4 class="mt-4">About Me</h4>
      <p class="mt-2">Lorem ipsum odor amet, consectetuer adipiscing elit. Platea ridiculus non justo primis venenatis quam dapibus suspendisse. Nunc sapien tempor elementum finibus bibendum dictum. Quis a amet interdum vestibulum ac velit urna.</p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      infoDetails: [
        { icon: 'pi pi-heart', label: 'Blood Group', value: 'A+' },
        { icon: 'pi pi-calendar', label: 'Birthday', value: '12 Dec 1990' },
        { icon: 'pi pi-gift', label: 'Anniversary', value: '5 June 2015' },
        { icon: 'pi pi-star', label: 'Interests', value: 'Reading, Traveling' },
        { icon: 'pi pi-user', label: 'Spouse Name', value: 'Jane Doe' },
        { icon: 'pi pi-briefcase', label: 'Spouse Occupation', value: 'Engineer' }
      ]
    };
  }
};
</script>

<style scoped>
.icon-container {
  background-color: #084e9d;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

/* Container for label and value, aligned left */
.text-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.info-value {
  font-size: 0.9rem;
  color: #555;
}

/* Optional - Add some vertical spacing if needed */
.info-row {
  align-items: center;
}

.value{
  font-size: 18px;
  font-weight: 500 !important;
  color: black;
}
</style>

