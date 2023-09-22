import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  data(){return{
    meetup: {id:'', title:''},
  }},
  watch:{
    meetup: {
      async handler(newValue) {
       const meetupResource= await fetchMeetupById(newValue.id);
       this.meetup.title = meetupResource.title;
      },
      deep: true
    }
  }
});

createApp(App).mount('#app');
