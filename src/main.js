import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseSDK} from '@/services/sdk'

createApp(App).use(router, firebaseSDK).mount('#app')
