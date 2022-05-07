import { getAuth, onAuthStateChanged } from "firebase/auth";


const checkUserAuth = async () => {
   const auth = await getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid , '  user uid');
      // const uid = user.uid;
       return true
      // ...
    } else {
      // User is signed out
      return false
    }
  });
  
}


export default checkUserAuth

