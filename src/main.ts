import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import './index.css';

import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import '@mdi/font/css/materialdesignicons.css';

// Google Fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

import { fakeBackend } from '@/utils/helpers/fake-backend';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCoffee, faBriefcase, faEnvelope, faIndustry, faBuilding, faUserGroup, faEarthAsia, faLocationDot, faLocationArrow, faIdCard, faGaugeSimpleHigh, faMedal, faPhone, faEnvelopeOpen, faGlobe, faStar, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faUser, faCoffee, faBriefcase, faEnvelope, faIndustry, faIdCard, faBuilding, faUserGroup, faEarthAsia, faLocationArrow,faGaugeSimpleHigh, faMedal, faLocationDot, faTwitter, faPhone,faEnvelopeOpen, faWhatsapp,faRankingStar, faFacebookF, faLinkedin, faStar, faGlobe);

const app = createApp(App);
fakeBackend();

app.use(router);
app.use(PerfectScrollbarPlugin);
app.component('SvgSprite', SvgSprite);
app.use(createPinia());
app.use(VueTablerIcons);
app.use(VueApexCharts);
app.use(vuetify);

// Register Font Awesome globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
