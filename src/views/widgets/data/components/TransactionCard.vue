<template>
  <v-container class="parent-container" fluid>
    <v-card class="w-100 profile-card-container">
      <v-carousel
        v-if="profiles.length > 0"
        v-model="currentProfile"
        cycle
        hide-delimiters
        show-arrows="false"
        height="500px"
        @mouseenter="stopAutoScroll"
        @mouseleave="startAutoScroll"
      >
        <v-carousel-item v-for="profile in profiles" :key="profile.userId" class="carousel-item">
          <v-card class="profile-card d-flex align-center" :color="profile.cardColor || 'white'">  
            <v-avatar size="100" class="avatar">
              <v-img v-if="profile.avatarImage" :src="profile.avatarImage" alt="Profile Image"></v-img>
              <span v-else class="text-h5 font-weight-bold">{{ profile.avatarText }}</span>
            </v-avatar>

            <div class="details">
              <div class="user-info">
                <v-card-title class="text-h3 font-weight-semibold mb-0">{{ profile.name }}</v-card-title>
                <span class="user-id">({{ profile.userId }})</span>
              </div>

              <div class="detail-items">
                <div v-for="(detail, i) in profile.details" :key="i" class="d-flex align-center detail-item">
                  <font-awesome-icon :icon="detail.icon" class="mr-2" style="color: #084e9d" />
                  <span class="detail-text">{{ detail.text }}</span>
                </div>
              </div>
            </div>

            <div class="top-right" v-if="profile.rating !== undefined && profile.rating !== null">
              <v-rating
                :length="5"
                :size="32"
                :model-value="+profile.rating" 
                active-color="primary"
                readonly
              />
            </div>
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <div v-else>Loading...</div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const props = defineProps<{
  profiles: {
    type: Array<{
      avatarText?: string;
      avatarImage?: string;
      name: string;
      userId: string;
      details: Array<{ icon: string; text: string }>;
      cardColor?: string;
      rating?: number;
    }>;
    required: true;
  };
}>();

const currentProfile = ref(0);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    currentProfile.value = (currentProfile.value + 1) % props.profiles.length;
  }, 3000);
};

const stopAutoScroll = () => {
  clearInterval(intervalId);
};
</script>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 !important;
  margin: 0 auto !important;
}

.profile-card-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.v-carousel {
  height: 250px !important;
}

.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px !important;
}

.profile-card {
  width: 100%;
  height: 250px;
  margin: 0 !important;
  padding: 16px !important;
}

.user-id {
  font-size: 18px;
  color: #555;
  font-weight: 500;
}

.avatar {
  flex-shrink: 0;
  margin-right: 28px;
}

.details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.user-info {
  display: flex;
  align-items: center;
}

.detail-items {
  margin-top: 3px;
}

.detail-item {
  margin-bottom: 4px;
}

.detail-text {
  font-size: 18px;
  font-weight: 500;
}

.top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}

.v-carousel :deep(.v-btn--icon) {
  display: none !important;
}
</style>
