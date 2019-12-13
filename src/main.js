import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vClickOutside from 'v-click-outside'
import * as fb from 'firebase'
import VueXgplayer from 'vue-xgplayer'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    url: '/images/video-player-loading.png',
    width: 100,
    height: 40
  },
  playsinline: true
})
Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
)
Vue.use(vClickOutside)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyBWv4P_gveY9kNFNS0iBlAvPlSwJPHnRYY",
      authDomain: "stepdemy.firebaseapp.com",
      databaseURL: "https://stepdemy.firebaseio.com",
      projectId: "stepdemy",
      storageBucket: "stepdemy.appspot.com",
      messagingSenderId: "772950602466",
      appId: "1:772950602466:web:190da94a530c0bf61824bb",
      measurementId: "G-V6N93MXXHZ"
    };
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.auth().onAuthStateChanged(
      user => {
        if (user) {
          this.$store.dispatch('autoLoginUser', user)
        }
      }
    )



  }
}).$mount('#app')