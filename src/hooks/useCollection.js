import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"


export const useCollection = (c) => {
  const [document, setDocument] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(collection(db, c), (snapshot) => {
      let results = []
       snapshot.docs.forEach((doc) => {
         results.push({id: doc.id, ...doc.data()})  
       })

       setDocument(results)
    })

  },[])

  return {document}
}
