<template>
  <v-container class="d-flex justify-center pa-0" fluid>
    <v-card class="w-100">
      <v-carousel 
        v-model="currentImage" 
        cycle 
        hide-delimiters 
        show-arrows="hover"
        @mouseenter="stopAutoScroll" 
        @mouseleave="startAutoScroll"
      >
        <v-carousel-item 
          v-for="(image, index) in imagesToUse" 
          :key="index" 
          class="image-container"
        >
          <img :src="image" alt="Banner" class="responsive-image" />
        </v-carousel-item>
      </v-carousel>

      <!-- Dots (Indicators) -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// ✅ Using `src/assets/`
import img1 from '@/assets/images/analytics/RB-1.png';
import img2 from '@/assets/images/analytics/RB-2.jpg';
import img3 from '@/assets/images/analytics/RB-3.jpg';

const images = [img1, img2, img3];

// ✅ Using `public/`
const imagesPublic = [
  '/images/analytics/RB-1.png',
  '/images/analytics/RB-2.jpg',
  '/images/analytics/RB-3.jpg',
];

// 👉 Change this if using `public/`
const imagesToUse = images; // or `imagesPublic`

const currentImage = ref(0);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % imagesToUse.length;
  }, 3000);
};

const stopAutoScroll = () => {
  clearInterval(intervalId);
};
</script>

<style scoped>
/* Ensures the image width is 100% and height adjusts automatically */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.responsive-image {
  width: 100%;
  height: auto ; /* This ensures the height matches the image's aspect ratio */
  max-height: 100vh; /* Adjust this to control maximum height */
}

.v-card {
  height: auto !important;
}

.v-carousel {
  height: auto !important;
}

.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto !important;
}

.responsive-image {
  width: 100%;
  height: auto; /* Ensures it maintains the original image aspect ratio */
  max-height: 100vh;
  object-fit: contain;
}

.v-carousel :deep(.v-btn--icon) {
  display: none !important;
}
.v-carousel :deep(.v-carousel__controls) {
  display: none !important;
}


</style>
