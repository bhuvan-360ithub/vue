<template>
  <v-card class="pa-4">
    <v-container>
      <h3 class="mb-4">Personal Info</h3>
      <v-row
        v-for="info in infoDetails"
        :key="info.label"
        align="center"
        class="mb-2"
        no-gutters
      >
        <!-- Icon Column (No Extra Space) -->
        <v-col auto class="pa-0 ma-0 d-flex align-center">
          <div class="icon-container">
            <i :class="info.icon"></i>
          </div>
        </v-col>

        <!-- Text Column (Increased Spacing) -->
        <v-col class="pa-0 ma-0 d-flex flex-column ml-4">
          <span class="font-weight-bold">{{ info.label }}</span>
          <span>{{ info.value }}</span>
        </v-col>
      </v-row>

      <h4 class="mt-4">About Me</h4>
      <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque eu augue cursus venenatis.</p>
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
  width: 35px; /* Adjusted size */
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}
</style>
x