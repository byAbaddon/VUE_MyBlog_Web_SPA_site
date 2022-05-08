import { collection, getDocs } from "firebase/firestore"; 
import { db} from '@/services/sdk'

const getAllPosts = async () => {

  const querySnapshot = await getDocs(collection(db, "posts"))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })

}


export default getAllPosts