import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/ import the fontawesome core /
import { library } from '@fortawesome/fontawesome-svg-core'

/ import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/ import specific icons /
import { faUserSecret, faBars, faCode, faSun, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons'

import { faTwitter, faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/ add icons to the library /
library.add(faUserSecret, faGithub, faTwitter, faBars, faCode, faMoon, faSun, faXmark, faFacebook, faInstagram, faLinkedin)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
