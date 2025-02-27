<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({ item: Object, level: Number });
import SvgSprite from '@/components/shared/SvgSprite.vue';

const relativeURL = ref(import.meta.env.BASE_URL || ''); // Fixing BASE_URL assignment
</script>

<template>
  <!---Single Item-->
  <v-list-item
    v-if="props.item.getURL === true"
    :to="item.type === 'external' ? '' : item.to"
    :href="`${relativeURL}${item.to}`"
    rounded
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <!---If icon-->
    <template #prepend>
      <SvgSprite v-if="props.item.icon" :name="props.item.icon" />
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>

    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-0 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>

    <!---If any chip or label-->
    <template #append v-if="item.chip">
      <v-chip
        :color="item.chipColor"
        class="sidebarchip hide-menu"
        size="small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>

  <!--- Else Case -->
  <v-list-item
    v-else
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <!---If icon-->
    <template #prepend>
      <SvgSprite v-if="props.item.icon" :name="props.item.icon" />
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>

    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-0 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>

    <!---If any chip or label-->
    <template #append v-if="item.chip">
      <v-chip
        :color="item.chipColor"
        class="sidebarchip hide-menu"
        size="small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>
