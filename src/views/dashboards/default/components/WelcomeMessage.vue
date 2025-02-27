<template>
    <v-container class="text-left mt-5">
      <v-row justify="left">
        <v-col cols="12" sm="8" md="6">
          <v-card class="pa-5 rounded-xl messagecard" flat>
            <v-card-title class="text-h4 text-sm-h5 text-xs-h6 greeting-text">{{ greeting }},</v-card-title>
            <v-card-subtitle class="text-h5 text-sm-h6 text-xs-body-1 typewriter name-text">
              <span>{{ displayedUsername }}</span><span class="cursor"></span>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "Ajay Kumar",
        displayedUsername: "",
        index: 0,
        greeting: this.getGreeting()
      };
    },
    mounted() {
      this.typeWriterEffect();
    },
    methods: {
      typeWriterEffect() {
        if (this.index < this.username.length) {
          this.displayedUsername += this.username[this.index];
          this.index++;
          setTimeout(this.typeWriterEffect, 300);
        } else {
          setTimeout(() => {
            this.displayedUsername = "";
            this.index = 0;
            this.typeWriterEffect();
          }, 1500);
        }
      },
      getGreeting() {
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 12) return "Good Morning";
        if (hour >= 12 && hour < 16) return "Good Afternoon";
        if (hour >= 16 && hour < 20) return "Good Evening";
        return "Good Night";
      }
    }
  };
  </script>
  
  <style scoped>
  .typewriter {
    white-space: nowrap;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
  }
  
  .name-text {
  font-size: 32px !important;
  color: #084e9d;
  font-weight: 700;
  opacity: 1.0 !important;
}
 
.greeting-text{
    font-size: 22px !important;
    color: #666666;
}

  .cursor {
    border-right: 3px solid black;
    display: inline-block;
    animation: blink 0.8s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  
  .messagecard {
    background: transparent !important;
  }
  </style>
  