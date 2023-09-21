import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',
  data() {
    return{
      count: 0,
    }
  }
});

createApp(App).mount('#app');
