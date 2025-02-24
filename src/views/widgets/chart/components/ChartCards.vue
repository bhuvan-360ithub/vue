<template>
 <v-carousel
    hide-delimiters
    height="auto"
    cycle
    show-arrows="false"
    show-arrows-on-hover="false"
    @mouseenter="stopAutoScroll"
    @mouseleave="startAutoScroll"
  >
    <v-carousel-item v-for="(transaction, index) in transactions" :key="index">
      <v-card class="mx-auto pa-3 elevated-card" max-width="600">
        <v-row align="center" justify="space-between" class="text-center">
          <!-- Sender Section -->
          <v-col cols="4" class="d-flex flex-column align-center">
            <v-avatar size="56">
              <v-img :src="transaction.sender.photo" alt="Sender Photo"></v-img>
            </v-avatar>
            <p class="mt-2 name">{{ transaction.sender.name }}</p>
            <p class="text-caption">{{ transaction.sender.id }}</p>
          </v-col>

          <!-- Middle Section -->
          <v-col cols="4" class="d-flex flex-column justify-center text-center">
            <p>Thanks for giving business to</p>
            <p><strong>{{ transaction.receiver.id }}</strong> worth amount</p>
            <p class="text-h6 font-weight-bold">₹ {{ transaction.amount }}</p>
          </v-col>

          <!-- Receiver Section -->
          <v-col cols="4" class="d-flex flex-column align-center">
            <v-avatar size="56">
              <v-img :src="transaction.receiver.photo" alt="Receiver Photo"></v-img>
            </v-avatar>
            <p class="mt-2 name">{{ transaction.receiver.name }}</p>
            <p class="text-caption">{{ transaction.receiver.id }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          sender: {
            name: "Rahul Sharma",
            id: "RB0009",
            photo: new URL('@/assets/images/profile.png', import.meta.url).href,
          },
          receiver: {
            name: "Ankit Verma",
            id: "RB0099",
            photo: new URL('@/assets/images/profile.png', import.meta.url).href,
          },
          amount: 50000
        },
        {
          sender: {
            name: "Rahul Sharma",
            id: "RB0009",
            photo: new URL('@/assets/images/profile.png', import.meta.url).href,
          },
          receiver: {
            name: "Ankit Verma",
            id: "RB0099",
            photo: new URL('@/assets/images/profile.png', import.meta.url).href,
          },
          amount: 50000
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  max-width: 600px;
  width: 100%;
}

.elevated-card {
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: white;
  padding: auto;
}

.name{
  font-size: 18px;
  font-weight: 600  ;
}

.text-caption{
  font-size: 20px !important;
  font-weight: 700;
}

.text-h6{
  font-size: 22px !important;
  color: #084e9d;
}

::v-deep(.v-carousel__prev),
::v-deep(.v-carousel__next) {
  display: none !important;
  visibility: hidden !important;
}
::v-deep(.v-btn.v-btn--variant-text.v-btn--icon) {
  display: none !important;
}


.v-carousel__controls {
  display: none !important;
  visibility: hidden !important;
}

.v-btn.v-btn--icon.v-carousel__control {
  display: none !important;
}

/* Hide the default carousel controls (arrows and indicators) */
/* ::v-deep .v-carousel__prev,
::v-deep .v-carousel__next,
::v-deep .v-carousel__controls {
  display: none !important;
  visibility: hidden !important;
} */

.v-carousel :deep(.v-btn--icon) {
  display: none !important;
}
</style>
