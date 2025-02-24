<script setup lang="ts">
import { ref } from 'vue';
import Eventcard from '@/views/components/Eventcard.vue';

</script>

<template>
  <v-row>
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
  </v-row>
  <v-row class="mt-5">
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
    <v-col cols="12" md="4">  <Eventcard />
    </v-col>
  </v-row>
</template>
