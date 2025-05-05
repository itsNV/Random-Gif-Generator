
import './App.css';
import RandomGif from './components/RandomGif';
import TagGif from './components/TagGif';


function App() {
  return (
    <div className="lg:w-screen h-screen flex items-center lg:gap-36 justify-center bg-gradient-to-r from-blue-900 to-red-900 flex-wrap">
     
      
      <RandomGif />
      <TagGif />  
      
    </div>
  );
}

export default App;
