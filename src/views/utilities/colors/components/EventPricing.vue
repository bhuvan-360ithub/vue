<template>
    <v-card class="event-pricing-card">
      <v-card-title>
        <v-row align="center" no-gutters>
          <v-col cols="auto" v-if="isAddon" class="d-flex align-center">
            <v-checkbox v-model="includeAddon" class="mr-2 checkbox-align" dense></v-checkbox>
            <span class="headline">{{ title }}</span>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <template v-if="!isFinal">
          <v-row>
            <v-col class="fields" cols="6">Base Price</v-col>
            <v-col cols="6" class="text-right value">{{ basePrice | currency }}</v-col>
          </v-row>
          <v-row v-if="isAddon">
            <v-col cols="6" class="fee-label">Addon Fee</v-col>
            <v-col cols="6" class="text-right label-price">{{ addonPrice | currency }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="fee-label">Convenience Fee (2%)</v-col>
            <v-col cols="6" class="text-right label-price">{{ convenienceFee | currency }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="fee-label">GST (18%)</v-col>
            <v-col cols="6" class="text-right label-price">{{ gst | currency }}</v-col>
          </v-row>
          <hr class="divider">
        </template>
        
        <v-row>
          <v-col cols="6" class="font-weight-bold total-label">{{ isFinal ? 'Grand Total' : 'Total' }}</v-col>
          <v-col cols="6" class="text-right font-weight-bold total-value">{{ computedTotal | currency }}</v-col>
        </v-row>
        <v-row v-if="isFinal" class="mt-4">
          <v-col>
            <v-btn color="primary" block>Pay Now</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      basePrice: {
        type: Number,
        default: 500
      },
      addonPrice: {
        type: Number,
        default: 100
      },
      isAddon: Boolean,
      isFinal: Boolean,
      firstTotal: {
        type: Number,
        default: 601
      },
      secondTotal: {
        type: Number,
        default: 150
      },
      thirdTotal: {
        type: Number,
        default: 722
      }
    },
    data() {
      return {
        includeAddon: false
      };
    },
    computed: {
      convenienceFee() {
        return ((this.basePrice + (this.isAddon ? this.addonPrice : 0)) * 0.02).toFixed(2);
      },
      gst() {
        return (((this.basePrice + (this.isAddon ? this.addonPrice : 0) + parseFloat(this.convenienceFee)) * 0.18)).toFixed(2);
      },
      computedTotal() {
        if (this.isFinal) {
          return (
            parseFloat(this.firstTotal) +
            (this.includeAddon ? parseFloat(this.secondTotal) : 0) +
            parseFloat(this.thirdTotal)
          ).toFixed(2);
        }
        return (
          parseFloat(this.basePrice) +
          (this.isAddon ? parseFloat(this.addonPrice) : 0) +
          parseFloat(this.convenienceFee) +
          parseFloat(this.gst)
        ).toFixed(2);
      }
    },
    filters: {
      currency(value) {
        return `₹${parseFloat(value).toFixed(2)}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .event-pricing-card {
    margin-bottom: 16px;
    padding: 16px;
    background: #ffffff;
    border-radius: 8px;
  }
  .headline {
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }
  .checkbox-align {
    display: flex;
    align-items: center;
  }

  .fields{
    font-size: 18px;
    font-weight: 500;
  }

  .value{
    font-size: 18px;
    font-weight: 600;
    text-align: right;
  }

  .fee-label{
    font-size: 18px;
    font-weight: 500;
  }

  .label-price{
    font-size: 18px;
    font-weight: 600;
    text-align: right;
  }

  .total-label{
    font-size: 20px;
    font-weight: 600;
  }

  .total-value{
    font-size: 22px;
    font-weight: 600;
    text-align: right;
  }
  .divider{
    margin: 10px;
    opacity: 0.4;
  }
  </style>
  