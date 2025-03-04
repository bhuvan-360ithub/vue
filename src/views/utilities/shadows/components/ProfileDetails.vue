<template>
  <v-card class="pa-4">
    <v-container>

      <!-- Logo & Company Name - Vertically Centered -->
      <v-row align="center" class="company-header">
        <v-col cols="2" class="logo-col">
          <v-avatar size="50">
            <v-img :src="companyLogo" alt="Company Logo" />
          </v-avatar>
        </v-col>
        <v-col cols="10" class="company-name">
          <h3>{{ companyName }}</h3>
        </v-col>
      </v-row>

      <!-- Image Row - Reduced Gap -->
      <v-row justify="center" class="image-row" no-gutters>
        <v-col cols="3" class="image-col" v-for="(image, index) in images" :key="index">
          <v-img :src="image" height="40" contain></v-img>
        </v-col>
      </v-row>

      <!-- Profile Section -->
      <v-row class="text-center profile-container">
        <v-col>
          <div class="profile-wrapper">
            <v-avatar size="200" class="profile-img">
              <v-img :src="profileImage" alt="Profile Image" />
            </v-avatar>
            <v-chip class="rb-id" color="primary">{{ rbId }}</v-chip>
          </div>
          <h2 class="username">{{ userName }}</h2>
          <p class="designation">{{ designation }}</p>

          <div class="contact-info" v-for="(contact, index) in contacts" :key="index">
            <i :class="contact.icon" class="icon-bg"></i>
            <span class="values">{{ contact.value }}</span>
          </div>
        </v-col>
      </v-row>
      <hr class="divider">

      <!-- Social Links -->
      <v-row justify="center" class="social-links">
        <v-btn v-for="(social, index) in socialLinks" :key="index" icon class="icon-bg">
          <i :class="social.icon" class="white-icon"></i>
        </v-btn>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import companyLogo from "@/assets/images/RB logo.png";
import profileImage from "@/assets/images/Profile.png";

export default {
  name: "ProfileDetails",
  data() {
    return {
      companyLogo,
      companyName: "Tech Solutions",
      images: [
        companyLogo,
        companyLogo,
        companyLogo,
        companyLogo
      ],
      profileImage,
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
.company-header {
  align-items: center;
  margin-bottom: 8px;
}

.logo-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4px; 
}

.company-name {
  display: flex;
  align-items: center;
}

.company-name h3 {
  margin: 0;
  font-size: 20px;
}

.image-row {
  margin-bottom: 12px;
  row-gap: 4px; 
}

.image-col {
  padding: 2px; 
}


.profile-wrapper {
  position: relative;
  display: inline-block;
}

.profile-img {
  border-radius: 15px;
}

.rb-id {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #084e9d;
  color: white !important;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 14px !important;
  z-index: 10;
}

.username {
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
}

.designation {
  font-size: 16px;
  margin-bottom: 16px;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.values {
  font-size: 18px;
  font-weight: 500;
}

.icon-bg {
  background-color: #084e9d;
  border-radius: 50%;
  color: white;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.white-icon {
  color: white;
  font-size: 1.2em;
}

.social-links {
  padding-top: 16px;
}

.divider{
  margin: 15px;
  opacity: 0.4;
}
</style>
