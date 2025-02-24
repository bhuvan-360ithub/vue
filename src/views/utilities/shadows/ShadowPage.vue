<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
  <v-card class="pa-4 text-center" >
    <v-avatar class="mt-4" size="100">
      <v-img :src="profile.image"></v-img>
    </v-avatar>
    <v-btn block class="mt-4" color="#fff" style=" border: 2px solid #084e9d; font-size: 16px; font-weight: 600; color: #084e9d; box-shadow: none;">
      RBID:
    {{ profile.rbid }}
  </v-btn>
    <v-card-title class="mt-2">{{ profile.name }}</v-card-title>
    <v-card-subtitle style="font-size: 16px;">{{ profile.designation }}</v-card-subtitle>
    <v-card-title style="font-size: 18px; font-weight: 600; color: #084e9d;">{{ profile.company }}</v-card-title>
    <!-- <div>
      <h2 class="mt-4" style="color: #333;">Social Media</h2>
      <v-btn  v-for="social in profile.socialMedia" :key="social.name"
        :href="social.link" target="_blank" icon class="ma-1 mb-8" >
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </div> -->

  </v-card>
</v-col>

      <v-col cols="12" md="8">
        <v-card>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card-text class="pa-6">
    <div class="mb-4">
      <h2>About Me:</h2>
      <p style="font-size: 18px;">{{ profile.about }}</p>
      <v-divider style="margin-top: 14px;"></v-divider>
    </div>

    <div class="mb-4 personal-info">
  <h2>Personal Info:</h2>
  <p>Name: <span class="info-value">{{ profile.name }}</span></p>
  <p>Blood Group: <span class="info-value">{{ profile.blood }}</span></p>
  <p>Birth Day: <span class="info-value">{{ profile.birthday }}</span></p>
  <p>Wedding Anniversary: <span class="info-value">{{ profile.anniversary }}</span></p>
  <p>Interest: <span class="info-value">{{ profile.interest }}</span></p>
  <p>Spouse Name: <span class="info-value">{{ profile.spousename }}</span></p>
  <p>Spouse Occupation: <span class="info-value">{{ profile.spouseoccupation }}</span></p>
  <v-divider style="margin-top: 14px;"></v-divider>
</div>

    <div class="mb-4">
      <h2>Specialised In</h2>
      <v-chip-group column>
        <v-chip v-for="skill in profile.skills" :key="skill" class="ma-1">{{ skill }}</v-chip>
      </v-chip-group>
      <v-divider style="margin-top: 14px;"></v-divider>
    </div>

    <div class="mb-4 personal-info">
  <h2>Personal Info:</h2>
  <p>
    <font-awesome-icon :icon="['fas', 'industry']" class="mr-1" style="color: #084e9d;" />
  Industry: <span class="info-value">{{ profile.industry }}</span>
</p>

  <p>
    <font-awesome-icon :icon="['fas', 'briefcase']" class="mr-1" style="color: #084e9d;" />
    Company: <span class="info-value">{{ profile.company }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'id-card']" class="mr-1" style="color: #084e9d;" />
    Designation: <span class="info-value">{{ profile.designation }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'location-arrow']" class="mr-1" style="color: #084e9d;" />
    Communication Address: <span class="info-value">{{ profile.communicationaddress }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'location-arrow']" class="mr-1" style="color: #084e9d;" />
    Billing Address: <span class="info-value">{{ profile.billingaddress }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'briefcase']" class="mr-1" style="color: #084e9d;" />
    Business Cateogory: <span class="info-value">{{ profile.businesscategory }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" style="color: #084e9d;" />
    City: <span class="info-value">{{ profile.city }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" style="color: #084e9d;" />
    State: <span class="info-value">{{ profile.state }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'user-group']" class="mr-1" style="color: #084e9d;" />
    No. of Employees: <span class="info-value">{{ profile.employees }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'building']" class="mr-1" style="color: #084e9d;" />
    No. of Branches: <span class="info-value">{{ profile.branches }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'earth-asia']" class="mr-1" style="color: #084e9d;" />
    Focused Market: <span class="info-value">{{ profile.market }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'medal']" class="mr-1" style="color: #084e9d;" />
    Experience in Current Business: <span class="info-value">{{ profile.experience }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'phone']" class="mr-1" style="color: #084e9d;" />
    Mobile Number: <span class="info-value">{{ profile.contactPhone }}</span></p>
  <p>
    <font-awesome-icon :icon="['fab', 'whatsapp']" class="mr-1" style="color: #084e9d;" />
    Whatsapp: <span class="info-value">{{ profile.whatsapp }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" style="color: #084e9d;" />
    Mail Id: <span class="info-value">{{ profile.contactEmail }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'globe']" class="mr-1" style="color: #084e9d;" />
    Website: <span class="info-value">{{ profile.website }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'star']" class="mr-1" style="color: #084e9d;" />
    Best Connects for Collaboration: <span class="info-value">{{ profile.connections }}</span></p>
  <p>
    <font-awesome-icon :icon="['fas', 'ranking-star']" class="mr-1" style="color: #084e9d;" />
    Achievements: <span class="info-value">{{ profile.achievements }}</span></p>
  <v-divider style="margin-top: 14px;"></v-divider>
</div>

    <!-- <div>
      <h2>Social Media</h2>
      <v-btn v-for="social in profile.socialMedia" :key="social.name"
        :href="social.link" target="_blank" icon class="ma-1">
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </div> -->
  </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'primeicons/primeicons.css';
export default {
  data() {
    return {
      tab: null,
      profile: {
        image: '/RB logo.png', // Replace with your image URL
        name: 'Akshay Kumar',
        title: 'Founder and CEO',
        rbid: "RB0009",
        location: 'Georgia, Washington D.C',
        followers: '12.2k',
        following: '128',
        about: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        blood: 'A +ve',
        birthday: '02 Jan 1990',
        anniversary: '13 July 2017',
        interest: 'Photography, Traveling, Reading',
        spousename: '',
        spouseoccupation: '',
        skills: ['ERP', 'Data Analysis', 'Marketing Strategy', 'Graphic Design', 'Content Creation', 'Market Research', 'Client Relations'],
        industry :'Information Technology',
        company :'RB Infotech',
        designation :'Founder and CEO',
        communicationaddress :'228, SAVIRAM, 1ST Crs, 39th Main Rd, KAS Officers Colony, BTM 2nd Stage, Bengaluru, Karnataka - 560080 (India)',
        billingaddress :'228, SAVIRAM, 1ST Crs, 39th Main Rd, KAS Officers Colony, BTM 2nd Stage, Bengaluru, Karnataka - 560080 (India)',
        businesscategory :'App, Website & ERP Solution',
        city: 'Bengaluru',
        state: 'Karnataka',
        employees: '10',
        branches: '1',
        market: 'Local/National/International',
        experience: '5 Years',
        contactEmail: 'your.email@example.com',
        contactPhone: '+(91) 99061 87021',
        whatsapp: '+(91) 99061 87021',
        website: 'www.yourwebsite.com',
        connections: 'Marketing, Sales, Business Development, IT',
        achievements: 'Best IT Company of the Year 2021',
        // socialMedia: [
        // { name: 'Github', link: 'https://github.com/spruko', icon: ['fab', 'github'] },
        // { name: 'Twitter', link: 'twitter.com/spruko.me', icon: 'mdi-twitter' },
        // { name: 'Linkedin', link: 'linkedin.com/in/spruko', icon: 'mdi-linkedin' },
        // { name: 'My Portfolio', link: 'spruko.com/', icon: 'mdi-web' }
        // ]
      }
    };
  }
};
</script>

<style scoped>
.label {
  color: #084e9d;
  margin-right: 8px; /* Adjust the gap as needed */
  font-weight: normal; /* Optional: If you don't want the labels to be bold */
}

/* Add some spacing between the <p> elements if needed */
  .personal-info {
    color: #333;
    font-size: 18px;
  }

  .personal-info p {
    margin: 18px 0;
  }

  .info-value {
    font-size: 16px;
    font-weight: 500;
    color: #000000; /* Blue color for emphasis */
  }

h2{
  font-size: 22px;
  color: #084e9d;
  margin-bottom: 8px;
  font-weight: 600;
}

</style>