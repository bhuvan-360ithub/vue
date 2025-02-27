<template>
    <v-card class="pa-4">
      <v-container>
        <v-row align="center">
          <v-col cols="3">
            <v-avatar size="50">
              <v-img :src="companyLogo" alt="Company Logo" />
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <h3>{{ companyName }}</h3>
          </v-col>
        </v-row>
        
        <v-row justify="center" class="image-row">
          <v-col cols="3" v-for="(image, index) in images" :key="index">
            <v-img :src="image" height="50" contain></v-img>
          </v-col>
        </v-row>
        
        <v-row class="text-center profile-container">
          <v-col>
            <div class="profile-wrapper">
              <v-avatar size="100" class="profile-img">
                <v-img :src="profileImage" alt="Profile Image" />
                <v-chip class="rb-id" color="primary">RB ID: {{ rbId }}</v-chip>
              </v-avatar>
            </div>
            <h2>{{ userName }}</h2>
            <p>{{ designation }}</p>
            
            <div class="contact-info" v-for="(contact, index) in contacts" :key="index">
              <i :class="contact.icon" class="icon-bg"></i>
              <span>{{ contact.value }}</span>
            </div>
          </v-col>
        </v-row>
        
        <v-row justify="center" class="social-links">
          <v-btn v-for="(social, index) in socialLinks" :key="index" icon class="icon-bg">
            <i :class="social.icon" class="white-icon"></i>
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "ProfileDetails",
    data() {
      return {
        companyLogo: "https://via.placeholder.com/50",
        companyName: "Tech Solutions",
        images: [
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50"
        ],
        profileImage: "https://via.placeholder.com/100",
        rbId: "RB98765",
        userName: "John Doe",
        designation: "Software Engineer",
        contacts: [
          { icon: "pi pi-phone", value: "+91 98765 43210" },
          { icon: "pi pi-whatsapp", value: "+91 98765 43210" },
          { icon: "pi pi-envelope", value: "john.doe@example.com" },
          { icon: "pi pi-globe", value: "www.johndoe.com" }
        ],
        socialLinks: [
          { icon: "pi pi-facebook" },
          { icon: "pi pi-instagram" },
          { icon: "pi pi-linkedin" },
          { icon: "pi pi-twitter" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .icon-bg {
    background-color: #084e9d;
    border-radius: 50%;
    color: white;
    margin-right: 10px;
    padding: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }
  .white-icon {
    color: white;
    font-size: 1.2em;
  }
  .profile-img {
    border-radius: 15px;
    position: relative;
  }
  .rb-id {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #084e9d;
    color: white;
    padding: 4px 12px;
    border-radius: 999px;
    font-weight: bold;
    transform: translate(50%, -50%);
  }
  .contact-info {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .image-row {
    margin-bottom: 16px;
  }
  .profile-wrapper {
    position: relative;
    display: inline-block;
  }
  </style>
  