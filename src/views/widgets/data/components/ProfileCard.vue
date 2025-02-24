<template>
    <v-card class="profile-card">
      <v-card-item>
        <v-avatar size="100" class="mb-4">
          <v-img :src="profile.avatar" alt="Avatar"></v-img>
        </v-avatar>
  
        <v-card-title class="text-center">{{ profile.name }}</v-card-title>
        <v-card-subtitle class="text-center">{{ profile.role }}</v-card-subtitle>
  
        <v-row justify="center" class="mt-4">
          <v-col cols="4" class="text-center">
            <div>{{ profile.posts }}</div>
            <small>Posts</small>
          </v-col>
          <v-col cols="4" class="text-center">
            <div>{{ profile.projects }}</div>
            <small>Projects</small>
          </v-col>
          <v-col cols="4" class="text-center">
            <div>{{ profile.members }}</div>
            <small>Members</small>
          </v-col>
        </v-row>
      </v-card-item>
  
      <v-divider></v-divider>
  
      <v-list density="compact" nav>
        <v-list-item 
          v-for="(item, index) in menuItems" 
          :key="index"
          :to="item.to"  
          link 
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg', // Replace with your default avatar or dynamic logic
          name: 'Stebin Ben',
          role: 'Full Stack Developer',
          posts: 86,
          projects: 40,
          members: '4.5K'
        },
        menuItems: [
          { title: 'Personal Information', icon: 'mdi-account', to: '/profile' }, // Add your routes
          { title: 'Payment', icon: 'mdi-cash', to: '/payment' },
          { title: 'Change Password', icon: 'mdi-lock-reset', to: '/change-password' },
          { title: 'Settings', icon: 'mdi-settings', to: '/settings' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .profile-card {
    width: 300px; /* Adjust as needed */
    margin: 20px auto; /* Center the card */
  }
  </style>