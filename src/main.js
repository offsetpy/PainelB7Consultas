import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { md2 } from 'vuetify/blueprints'

createApp(App).use(autoAnimatePlugin).mount('#app');

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md2,
});
const app = createApp(App);

app.use(router);
app.use(autoAnimatePlugin);
app.use(vuetify);

app.mount('#app');
