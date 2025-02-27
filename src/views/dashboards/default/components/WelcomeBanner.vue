<template>
  <v-container class="d-flex justify-center pa-0" fluid>
    <v-card class="carousel-card" elevation="0">
      <v-carousel
        v-model="currentImage"
        cycle
        hide-delimiters
        show-arrows="hover"
        :interval="3000"
        transition="fade-transition"
        class="smooth-carousel"
        :style="{ width: containerWidth, height: containerHeight }"
        ref="carouselRef"
      >
        <v-carousel-item
          v-for="(image, index) in imagesToUse"
          :key="index"
          class="image-container"
        >
          <img
            :src="image"
            alt="Banner"
            class="responsive-image"
            ref="imageRefs"
            @load="updateContainerSize"
          />
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

import img1 from '@/assets/images/analytics/RB-1.png';
import img2 from '@/assets/images/analytics/RB-2.jpg';
import img3 from '@/assets/images/analytics/RB-3.jpg';

const imagesToUse = [img1, img2, img3];
const currentImage = ref(0);
const imageRefs = ref<HTMLImageElement[]>([]);
const carouselRef = ref();
const containerWidth = ref('800px'); // Default width
const containerHeight = ref('auto'); // Default height

onMounted(() => {
  nextTick(updateContainerSize);
  window.addEventListener('resize', updateContainerSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateContainerSize);
});

// Dynamically adjust width & height based on the first loaded image
const updateContainerSize = () => {
  nextTick(() => {
    const firstImage = imageRefs.value.find(img => img?.complete);
    if (firstImage) {
      const screenWidth = window.innerWidth;

      containerWidth.value = screenWidth < 768 ? '100%' : `${firstImage.naturalWidth}px`;
      containerHeight.value = screenWidth < 768 ? 'auto' : `${firstImage.naturalHeight}px`;
    }
  });
};
</script>

<style scoped>
.carousel-card {
  background: transparent !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smooth-carousel {
  transition: transform 0.5s ease-in-out !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: hidden;
}

.responsive-image {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

@media (max-width: 768px) {
  .responsive-image {
    object-fit: cover;
  }
}

/* Hide carousel controls */
.v-carousel :deep(.v-btn--icon),
.v-carousel :deep(.v-carousel__controls) {
  display: none !important;
}
</style>
