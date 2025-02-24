<template>
  <v-card class="pa-4 text-center rounded-lg" elevation="2">
    <v-container class="d-flex flex-column align-center justify-center">
      <v-avatar color="blue-lighten-2" size="48">
        <img v-if="icon" src="../../../../assets/images/Coffemeet.svg" alt="Icon" width="48" height="48">
      </v-avatar>
      <div class="text-h2 font-weight-medium mt-2">{{ number }}</div>
      <div class="text-body-2 text-grey-darken-1">{{ text }}</div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    number: {
      type: [String, Number],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    getIconPath(icon) {
      return new URL(icon, import.meta.url).href;
    }
  }
};
</script>

<style scoped>
.v-card {
  width: 240px;
  height: 180px;
}

.blue-lighten-2 {
  background-color: #084e9d;
}

.text-body-2 {
  font-size: 16px !important;
  font-weight: 600;
}

.v-avatar img { /* Style for the image inside the avatar */
  width: 100%;
  height: 100%;
  object-fit: contain; /* or cover, depending on your preference */
}
</style>