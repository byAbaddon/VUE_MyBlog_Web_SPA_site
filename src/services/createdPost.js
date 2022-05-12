import {db} from '@/services/sdk'
import { collection, addDoc } from "firebase/firestore"; 


const addPost = async (post) => {

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      ...post  
    })
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e.error)
  }

}


export default addPost