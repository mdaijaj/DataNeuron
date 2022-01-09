import './App.css'; 
import Navbar from './components/navbar';
import TextModel from './components/text_model';
import TextStory from './components/text_story';

const App=()=>{
    return (
      <>
      <div className='main'>
        <Navbar/>
        <TextModel/>
        <TextStory/>
      </div>
      </>
    )
}

export default App;

