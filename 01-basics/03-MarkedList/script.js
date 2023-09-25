import {createApp, defineComponent} from './vendor/vue.esm-browser.js';
// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const App = defineComponent({
  name: 'App',
  emailsAll: emails.map((m, index) => ({id: index, email: m, selected: false})),
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredEmails() {
      const result = JSON.parse(JSON.stringify(this.$options.emailsAll));
      if (this.search.trim())
        result.forEach(f => {
          if (f.email.toLowerCase().includes(this.search.toLowerCase()))
            f.selected = true;
        });
      return result;
    }
  }
})

createApp(App).mount('#app');
