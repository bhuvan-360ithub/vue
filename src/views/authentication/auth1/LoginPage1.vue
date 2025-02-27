<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <!-- Left Image Section -->
      <v-col v-if="!isMobile" cols="12" md="7" class="image-section">
        <v-img src="/your-image.jpg" class="full-height"></v-img>
      </v-col>
      
      <!-- Right Login Section -->
      <v-col cols="12" md="5" class="login-section">
        <v-card flat class="login-box">
          <transition name="slide-fade" mode="out-in">
            <div v-if="step === 1" key="step1" class="content-box">
              <v-img src="/RB logo.png" class="logo center-logo" contain></v-img>
              <h2 class="align-left large-text">Enter Mobile Number to Continue</h2>
              <p class="align-left description">Please enter your 10-digit mobile number to proceed.</p>
              <v-text-field v-model="mobile" label="Mobile Number" variant="outlined" maxlength="10" @keypress="allowOnlyNumbers" hide-details class="input-field mobile-input"></v-text-field>
              <v-btn block color="primary" :disabled="!isMobileValid" @click="sendOTP" class="send-otp-btn align-left">Send OTP</v-btn>
            </div>
            <div v-else key="step2" class="content-box">
              <v-img src="/RB logo.png" class="logo center-logo" contain></v-img>
              <div class="back-button-container align-left">
                <v-btn variant="text" class="back-button" @click="goBack">
                  <i class="pi pi-arrow-left back-icon"></i> Back
                </v-btn>
              </div>
              <h2 class="align-left">Enter OTP sent to {{ mobile }}</h2>
              <p class="align-left">Please enter the OTP sent to your mobile number.</p>
              <v-row justify="start" class="otp-container">
                <v-col v-for="(digit, index) in 4" :key="index" cols="3">
                  <v-text-field ref="otpInputs" v-model="otp[index]" maxlength="1" variant="outlined" class="otp-box" @input="focusNext(index)" @keypress="allowOnlyNumbers"></v-text-field>
                </v-col>
              </v-row>
              <p class="resend-otp-text" :class="{'active-resend': timer === 0}" @click="timer === 0 ? resendOTP() : null" :style="timer > 0 ? 'pointer-events: none; user-select: none;' : ''">
                {{ timer > 0 ? `Resend OTP in ${timer} sec` : 'Resend OTP' }}
              </p>
              <v-btn block color="primary" :disabled="!isOtpValid" @click="verifyOTP" class="send-otp-btn">Confirm OTP</v-btn>
            </div>
          </transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      mobile: '',
      otp: ['', '', '', ''],
      timer: 30,
      isMobile: false,
      interval: null
    };
  },
  computed: {
    isMobileValid() {
      return this.mobile.length === 10;
    },
    isOtpValid() {
      return this.otp.join('').length === 4;
    }
  },
  methods: {
    allowOnlyNumbers(event) {
      if (!/\d/.test(event.key)) {
        event.preventDefault();
      }
    },
    sendOTP() {
      this.step = 2;
      this.startTimer();
    },
    goBack() {
      this.step = 1;
      this.otp = ['', '', '', ''];
      clearInterval(this.interval);
      this.timer = 30;
    },
    focusNext(index) {
      if (this.otp[index] && index < 3) {
        this.$refs.otpInputs[index + 1].focus();
      }
    },
    startTimer() {
      this.timer = 30;
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);
    },
    resendOTP() {
      this.startTimer();
    },
    verifyOTP() {
      alert('OTP Verified!');
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }
};
</script>

<style scoped>
.image-section {
  background: url('/Business-network.jpg') center/cover no-repeat;
  height: 100vh;
}
.full-height {
  height: 100%;
  width: 100%;
}
.login-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
}
.login-box {
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.content-box {
  padding: 20px;
}
.input-field {
  margin-bottom: 20px;
}
.mobile-input >>> input {
  font-size: 28px;
  padding: 12px;
}
.send-otp-btn {
  margin-top: 10px;
  height: 50px;
  font-size: 16px;
}
.otp-box >>> input {
  text-align: center;
  font-size: 24px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
.align-left {
  text-align: left;
  width: 100%;
  margin-bottom: 10px;
}

.description{
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.large-text {
  font-size: 22px;
  font-weight: 600;
}
.otp-container {
  margin-bottom: 20px;
}
.back-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.back-button {
  text-transform: none;
  font-size: 16px;
}
.back-icon {
  margin-right: 5px;
}
.center-logo {
  display: block;
  margin: 0 auto 20px auto;
  width: 80px;
}
.resend-otp-text {
  cursor: pointer;
  text-align: left;
  user-select: none;
  margin-bottom: 10px;
}
.active-resend {
  color: #084e9d;
  font-weight: 500;
}

.v-container{
  padding: 0 !important;
}
</style>
