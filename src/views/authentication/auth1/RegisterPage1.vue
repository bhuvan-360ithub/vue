<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <!-- Left Image Section -->
      <v-col v-if="!isMobile" cols="12" md="7" class="image-section">
        <v-img src="/your-image.jpg" class="full-height"></v-img>
      </v-col>

      <!-- Right Registration & OTP Section -->
      <v-col cols="12" md="5" class="login-section">
        <v-card flat class="login-box">
          <transition name="slide-fade" mode="out-in">
            <div v-if="step === 1" key="step1" class="content-box">
              <v-img src="/RB logo.png" class="logo center-logo" contain></v-img>
              <h2 class="align-left large-text">Register to Continue</h2>
              <p class="align-left description">Fill out the form to sign up and access your account now!</p>
              <v-text-field v-model="companyName" label="Company Name" variant="outlined" class="input-field full-width text-large"></v-text-field>
              <v-text-field v-model="name" label="Name" variant="outlined" class="input-field full-width text-large"></v-text-field>
              <v-text-field v-model="phone" label="Phone Number" variant="outlined" maxlength="10" @keypress="allowOnlyNumbers" class="input-field full-width text-large"></v-text-field>
              <v-text-field v-model="email" label="Email Address" variant="outlined" class="input-field full-width text-large" @input="validateEmail"></v-text-field>

              <v-select
                v-model="referredBy"
                label="Referred By"
                variant="outlined"
                :items="referralOptions"
                class="input-field full-width text-large"
                @update:modelValue="checkRBMember"
              ></v-select>

              <v-btn block color="primary" :disabled="!isFormValid" @click="sendOTP" class="register-btn">Register Now</v-btn>
            </div>

            <div v-else key="step2" class="content-box">
              <v-img src="/RB logo.png" class="logo center-logo" contain></v-img>
              <div class="back-button-container align-left">
                <v-btn variant="text" class="back-button" @click="goBack">
                  <i class="pi pi-arrow-left back-icon"></i> Back
                </v-btn>
              </div>
              <h2 class="align-left">Enter OTP sent to {{ phone }}</h2>
              <p class="align-left description">Please enter the OTP sent to your mobile number.</p>
              <v-row justify="start" class="otp-container">
                <v-col v-for="(digit, index) in 4" :key="index" cols="3">
                  <v-text-field ref="otpInputs" v-model="otp[index]" maxlength="1" variant="outlined" class="otp-box" @input="focusNext(index)" @keypress="allowOnlyNumbers"></v-text-field>
                </v-col>
              </v-row>
              <p class="resend-otp-text" :class="{'active-resend': timer === 0}" @click="timer === 0 ? resendOTP() : null">
                {{ timer > 0 ? `Resend OTP in ${timer} sec` : 'Resend OTP' }}
              </p>
              <v-btn block color="primary" :disabled="!isOtpValid" @click="verifyOTP" class="send-otp-btn">Confirm OTP</v-btn>
            </div>
          </transition>
        </v-card>
      </v-col>
    </v-row>

    <!-- RB Member Selection Dialog -->
    <v-dialog v-model="showRBMemberPopup" max-width="500px">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>Select RB Member</span>
          <v-btn icon variant="text" @click="showRBMemberPopup = false">
            <i class="pi pi-times"></i>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field
  v-model="searchRBMember"
  placeholder="Search Member"
  hide-details="auto"
  variant="outlined"
  class="custom-text-field"
></v-text-field>

          <v-list class="scrollable-list">
            <v-list-item v-for="member in filteredRBMembers" :key="member.id" @click="selectRBMember(member)">
              {{ member.name }}
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      companyName: '',
      name: '',
      phone: '',
      email: '',
      referredBy: '',
      otp: ['', '', '', ''],
      referralOptions: ['RB System', 'RB Social Media', 'Ex - RB Member', 'RB Members'],
      showRBMemberPopup: false,
      searchRBMember: '',
      rbMembers: Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `RB Member ${i + 1}` })),
      selectedRBMember: null,
      isMobile: false,
      isEmailValid: false,
      timer: 30,
      interval: null
    };
  },
  computed: {
    isFormValid() {
      return this.companyName && this.name && this.phone.length === 10 && this.isEmailValid && this.referredBy;
    },
    isOtpValid() {
      return this.otp.join('').length === 4;
    },
    filteredRBMembers() {
      if (!this.searchRBMember) return this.rbMembers;
      return this.rbMembers.filter(member =>
        member.name.toLowerCase().includes(this.searchRBMember.toLowerCase())
      );
    }
  },
  methods: {
    allowOnlyNumbers(event) {
      if (!/\d/.test(event.key)) event.preventDefault();
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      this.isEmailValid = emailPattern.test(this.email);
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
      if (this.otp[index] && index < 3) this.$refs.otpInputs[index + 1].focus();
    },
    startTimer() {
      this.timer = 30;
      clearInterval(this.interval);
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
    },
    checkRBMember(value) {
      if (value === 'RB Members') {
        this.showRBMemberPopup = true;
      } else {
        this.showRBMemberPopup = false;
      }
    },
    selectRBMember(member) {
      this.selectedRBMember = member;
      this.referredBy = `RB Member - ${member.name}`;
      this.showRBMemberPopup = false;
    }
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
}
.login-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
}
.login-box {
  max-width: 400px;
}
.center-logo {
  display: block;
  margin: 0 auto 20px auto;
  width: 80px;
}
.scrollable-list {
  max-height: 300px;
  overflow-y: auto;
}
.register-btn, .send-otp-btn {
  margin-top: 10px;
  height: 50px;
}
.otp-box >>> input {
  text-align: center;
  font-size: 24px;
}
.description {
  font-size: 16px;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
}
.otp-box >>> input {
  text-align: center;
  font-size: 24px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
.resend-otp-text {
  cursor: pointer;
}
.v-container {
  padding: 0 !important;
}
</style>
