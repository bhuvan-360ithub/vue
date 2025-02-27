<template>
    <div class="pricing-card">
      <div class="left-section">
        <h2>{{ days }} Days</h2>
        <p v-for="line in description.split('\n')" :key="line">{{ line }}</p>
        <button class="purchase-btn">Purchase Plan</button>
      </div>
      <div class="right-section">
        <div class="pricing-item">
          <div class="left-content">
            <i class="pi pi-check-circle check-icon"></i>
            <span class="label">Package Amount</span>
          </div>
          <span class="amount">₹{{ baseAmount.toFixed(2) }}</span>
        </div>
        <div class="pricing-item">
          <div class="left-content">
            <i class="pi pi-check-circle check-icon"></i>
            <span class="label">One Time Registration</span>
          </div>
          <span class="amount">₹{{ registrationFee.toFixed(2) }}</span>
        </div>
        <div class="pricing-item">
          <div class="left-content">
            <i class="pi pi-check-circle check-icon"></i>
            <span class="label">Convenience Fee (2.5%)</span>
          </div>
          <span class="amount">₹{{ convenienceFee.toFixed(2) }}</span>
        </div>
        <div class="pricing-item">
          <div class="left-content">
            <i class="pi pi-check-circle check-icon"></i>
            <span class="label">GST (18.0%)</span>
          </div>
          <span class="amount">₹{{ gst.toFixed(2) }}</span>
        </div>
        <hr />
        <div class="pricing-item total">
          <div class="left-content">
            <span class="label">Package Total</span>
          </div>
          <span class="amount">₹{{ totalAmount.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      days: Number,
      description: String,
      baseAmount: Number,
      registrationFee: Number,
      convenienceFee: Number,
      gst: Number,
    },
    computed: {
      totalAmount() {
        return this.baseAmount + this.registrationFee + this.convenienceFee + this.gst;
      }
    }
  };
  </script>
  
  <style scoped>
  .pricing-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
  }
  
  .left-section {
    flex: 1;
    /* padding-right: 20px; */
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .right-section {
    flex: 1;
    background: #f5f5f5;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .pricing-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  }
  
  .left-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .check-icon {
    color: #084e9d;
  }
  
  .amount {
    margin-left: auto;
    font-weight: bold;
  }
  
  .total {
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .purchase-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    align-self: flex-start;
  }
  </style>
  