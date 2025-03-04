<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { useAuthStore } from '@/stores/auth';

const tab = ref(null);
const authStore = useAuthStore();
const router = useRouter();

// Profile items with 'to' for navigation support
const profiledata1 = ref([
  {
    title: 'View Profile',
    icon: 'custom-user-1',
    to: '/utils/shadows'  // This is where it will navigate
  },
  {
    title: 'Terms & Conditions',
    icon: 'custom-support'
  },
  {
    title: 'Privacy Policy',
    icon: 'custom-lock'
  }
]);

// Function to handle navigation if 'to' exists
function handleNavigation(item: any) {
  if (item.to) {
    router.push(item.to);
  }
}
</script>

<template>
  <div>
    <!-- Header with Avatar and Logout -->
    <div class="d-flex align-center pa-5">
      <v-avatar size="40" class="mr-2">
        <img src="@/assets/images/users/Profile.png" width="40" alt="profile" />
      </v-avatar>
      <div>
        <h6 class="text-subtitle-1 mb-0">Ajay Kumar</h6>
        <p class="text-caption text-lightText mb-0">Admin</p>
      </div>
      <div class="ml-auto">
        <v-btn
          variant="text"
          aria-label="logout"
          color="error"
          rounded="sm"
          icon
          size="large"
          @click="authStore.logout()"
        >
          <SvgSprite name="custom-logout-1" />
        </v-btn>
      </div>
    </div>

    <v-divider></v-divider>

    <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 240px">
      <v-list class="px-2" aria-label="profile list" aria-busy="true">
        <v-list-item
          v-for="(item, index) in profiledata1"
          :key="index"
          color="primary"
          base-color="secondary"
          rounded="md"
          :value="item.title"
          class="mb-1"
          @click="handleNavigation(item)"
        >
          <template v-slot:prepend>
            <div class="mr-4">
              <SvgSprite :name="item.icon || ''" style="width: 18px; height: 18px" />
            </div>
          </template>

          <v-list-item-title class="text-h6">{{ item.title }}</v-list-item-title>
        </v-list-item>

        <!-- Logout option in list -->
        <v-list-item
          @click="authStore.logout()"
          color="primary"
          base-color="secondary"
          rounded="md"
        >
          <template v-slot:prepend>
            <div class="mr-4">
              <SvgSprite name="custom-logout-1" style="width: 18px; height: 18px" />
            </div>
          </template>
          <v-list-item-title class="text-h6">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
