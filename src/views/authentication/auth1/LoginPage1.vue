<template>
  <v-row no-gutters class="fill-height">
    <!-- Left Banner (Hidden on small screens) -->
    <v-col cols="12" md="6" class="d-none d-md-flex align-center justify-center bg-image">
    </v-col>
    
    <!-- Right Login Form (Full Height) -->
    <v-col cols="12" md="6" class="d-flex align-center justify-center px-4 full-height">
      <v-card class="pa-5" width="100%" max-width="600" elevation="0">
        <v-img src="/RB logo.png" contain height="80" class="mb-3"></v-img>
        <h2 class="text-center mb-2 titletext">Welcome! Log In to Continue</h2>
        <p class="text-center mb-4 titledescription">Enter your mobile number to continue</p>
        
        <v-text-field 
          v-model="mobile" 
          label="Mobile Number" 
          outlined 
          dense 
          type="tel"
          maxlength="10"
          counter="10"
          class="custom-input"
          @input="validateNumber"
          hide-details="auto"
          persistent-placeholder
        ></v-text-field>


        
        <v-btn :disabled="!isValid" color="primary" block class="mt-3 custom-button" @click="openOtpDialog">Submit</v-btn>
      </v-card>
    </v-col>

    <!-- OTP Dialog -->
    <v-dialog v-model="otpDialog" max-width="350">
      <v-card class="pa-6 text-center otp-card">
        <v-btn icon class="close-btn" @click="otpDialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <h3 class="mb-2">Enter OTP to Continue</h3>
        <p class="mb-4">The OTP has been sent to your number</p>
        
        <div class="otp-container">
          <v-text-field v-for="(digit, index) in otp" :key="index" v-model="otp[index]" 
            outlined dense type="text" maxlength="1" class="otp-box bordered-otp" @input="focusNext(index)">
          </v-text-field>
        </div>
        
        <v-btn :disabled="resendTimer > 0" text color="primary" class="mt-2" @click="resendOtp">
          Resend OTP {{ resendTimer > 0 ? `in ${resendTimer}s` : '' }}
        </v-btn>

        <v-btn :disabled="!isOtpValid" color="primary" block class="mt-3 custom-button" @click="confirmOtp">Confirm OTP</v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      isValid: false,
      otpDialog: false,
      otp: ["", "", "", ""],
      resendTimer: 30,
      timerInterval: null
    };
  },
  computed: {
    isOtpValid() {
      return this.otp.every(digit => digit.match(/^[0-9]$/));
    }
  },
  methods: {
    validateNumber() {
      this.isValid = /^[0-9]{10}$/.test(this.mobile);
    },
    openOtpDialog() {
      this.otpDialog = true;
      this.startResendTimer();
    },
    focusNext(index) {
      if (this.otp[index] && index < 3) {
        this.$refs[`otp${index + 1}`]?.focus();
      }
    },
    startResendTimer() {
      this.resendTimer = 30;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        if (this.resendTimer > 0) {
          this.resendTimer--;
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },
    resendOtp() {
      this.startResendTimer();
      alert("OTP Resent");
    },
    confirmOtp() {
      alert("OTP Confirmed: " + this.otp.join(""));
      this.otpDialog = false;
    }
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  }
};
</script>

<style scoped>
.bg-image {
  background: url('/Business-network.jpg') center/cover no-repeat;
  height: 100vh;
}

.full-height {
  height: 100vh;
}

.custom-input {
  max-width: 900px; /* Adjust width */
  font-size: 18px; 
  max-height: 250px;
}

.custom-input >>> .v-input__control {
  background-color: white !important;
  border: 1px solid #ccc;
  min-height: 60px; /* Increase height */
  font-size: 132px; /* Ensure text inside is larger */
}

.custom-input >>> .v-label {
  font-size: 18px;
  transition: all 0.3s ease-in-out;
}

.custom-input >>> .v-label.v-label--active {
  display: none; 
}

.titletext {
  font-size: 36px !important;
  font-weight: 600;
}

.titledescription {
  font-size: 22px !important;
  color: #555;
}

.custom-button {
  padding: 12px 16px;
  font-size: 16px;
  height: 48px;
  margin-top: 18px;
}

.otp-card {
  padding: 24px !important;
  border-radius: 10px;
}

.otp-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
}

.otp-box {
  width: 60px; /* Consistent width */
  height: 60px; /* Consistent height */
  text-align: center;
  font-size: 24px !important; /* Adjust for proper visibility */
  line-height: 60px; /* Center text vertically */
}

.bordered-otp >>> .v-input__control {
  border: 1px solid #808080 !important;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
