import { useEffect, useState } from 'react'
import {projectFirestore} from '../firebase/config'

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() =>{
       const unSub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc =>{
                documents.push({...doc.data(),id:doc.id})
            })
            setDocs(documents)
        })
        return () => unSub()
    },[collection])
    return {docs}
}

export default useFireStore
