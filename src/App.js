import { useState, useEffect } from 'react'
import {db, storage} from './firebase/config'
import { ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { v4 } from 'uuid'
function App() {
  const [imageUpload, setImageUpload] = useState(null)
  const [imageList, setImageList] = useState([])
  const imageListRef = ref(storage, 'memes/')

  console.log(imageList)


  const uploadToFirebase = () => {
    if(imageUpload == null) return

    const imageRef = ref(storage, `memes/${imageUpload.name + v4()}`)

    uploadBytes(imageRef, imageUpload)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url])

      })
      
    })
  }

  const handleChange = (e) => {
    setImageUpload(e.target.files[0])

  }

  useEffect(() => {
    listAll(imageListRef)
    .then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item)
        .then((url) => {
          setImageList((prev) => [...prev, url])

        })

      })

    })
     
  },[])
  return (
    <div className="App">
      <h1 className="text-center text-2xl ">Upload Image to Firebase</h1>
      <div className="upload-image p-8">
        <input type="file" onChange={handleChange}/>
        <button onClick={uploadToFirebase}>Upload Image</button>
        {imageList.map((image) => (
          <img src={image} alt=""  className='object-cover'/>

        ))}
       

      </div>
     

    </div>
  );
}

export default App;
