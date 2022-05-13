import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseSDK } from '@/services/sdk'
import { getAuth } from "firebase/auth"

// let app
// getAuth().onAuthStateChanged(async user => {
//   if (!app) {
    
//     createApp(App).use(router, firebaseSDK,).mount('#app')
    
    
//     if (user) {
//       // await user.uid   //user login
//     } else {
//       // await user  //not user login
//     }
  
//   }
// });


// 1. Assign app to a variable
let app = createApp(App)
getAuth().onAuthStateChanged(async user => {
  if (user) {
    // 2. Assign the global variable before mounting
    app.config.globalProperties.$allPosts = []

    // 3. Use router and mount app
    app.use(router, firebaseSDK,).mount('#app')
  }
})


