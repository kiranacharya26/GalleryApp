
import './App.css';
import Title from './components/Title'
import FromUpload from './components/Formupload'
import Grid from './components/ImageGrid'
import Modal from './components/Modal'
import { useState } from 'react';


const App = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <FromUpload />
      <Grid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
