import { db} from '@/services/sdk'      
import { collection, onSnapshot} from "firebase/firestore";


let listenerRealTime = []

onSnapshot(collection(db, "posts"), (doc) => {
    let changes = doc.docChanges()

    for (const change of changes) {
        // console.log("Current data: ", e.doc.data())
        if (change.type == 'removed') {
            
             console.log('remove', listenerRealTime); 
            listenerRealTime = listenerRealTime.filter(x => x.id != change.doc.data().id)
            console.log('remove 2: ', listenerRealTime);    
            return
        }
        
        if (change.type == 'added') {
            listenerRealTime.push(change.doc.data())
            // console.log('global ',  this.$allPosts);
        }
         
    }
  
})


export default listenerRealTime
