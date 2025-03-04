<template>
  <v-card class="pa-4">
    <v-container>
      <h3 class="mb-4">Business Info</h3>
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

      </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      infoDetails: [
        { icon: 'pi pi-heart', label: 'Industry', value: 'Information Technology' },
        { icon: 'pi pi-calendar', label: 'Company', value: 'IT Service Private Limited' },
        { icon: 'pi pi-gift', label: 'Designation', value: 'Founder and CEO' },
        { icon: 'pi pi-star', label: 'Communication Address', value: '228, SAVIRAM, 1ST Crs, 39th Main Rd, KAS Officers Colony, BTM 2nd Stage, Bengaluru, Karnataka, 560068 (India)' },
        { icon: 'pi pi-star', label: 'Billing Address', value: '228, SAVIRAM, 1ST Crs, 39th Main Rd, KAS Officers Colony, BTM 2nd Stage, Bengaluru, Karnataka, 560068 (India)' },
        { icon: 'pi pi-user', label: 'Business Cateogory', value: 'App, Website & ERP Solution' },
        { icon: 'pi pi-briefcase', label: 'City', value: 'Bengaluru' },
        { icon: 'pi pi-briefcase', label: 'State', value: 'Karnataka' },
        { icon: 'pi pi-briefcase', label: 'No. of Employees', value: '40' },
        { icon: 'pi pi-briefcase', label: 'No. of Branches', value: '02' },
        { icon: 'pi pi-briefcase', label: 'Focused Market', value: 'Local/National/International' },
        { icon: 'pi pi-briefcase', label: 'Experience in Current Business', value: '10' },
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

