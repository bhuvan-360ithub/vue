<template>
  <div class="pricing-container">
    <PricingCard 
      :days="365" 
      description="Basic Plan\nIdeal for individuals" 
      :baseAmount="3500" 
      :registrationFee="1000" 
      :convenienceFee="(1000 * 0.025)" 
      :gst="((1000 + 200 + (1000 * 0.025)) * 0.18)" 
    />
    <PricingCard 
      :days="360" 
      description="Standard Plan\nBest for small teams" 
      :baseAmount="2500" 
      :registrationFee="300" 
      :convenienceFee="(2500 * 0.025)" 
      :gst="((2500 + 300 + (2500 * 0.025)) * 0.18)" 
    />
    <PricingCard 
      :days="720" 
      description="Premium Plan\nPerfect for enterprises" 
      :baseAmount="4500" 
      :registrationFee="500" 
      :convenienceFee="(4500 * 0.025)" 
      :gst="((4500 + 500 + (4500 * 0.025)) * 0.18)" 
    />
  </div>
</template>

<script>
import PricingCard from "./components/PricingCard.vue";

export default {
  components: { PricingCard },
};
</script>

<style scoped>
.pricing-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
}
</style>
