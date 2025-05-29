import './App.css';
import RandomGif from './components/RandomGif';
import TagGif from './components/TagGif';

function App() {
  const numStars = 10; // Number of stars to render

  return (
    <>
      <div className="stars-container">
        {[...Array(numStars)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center gap-8 p-4 bg-transparent text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Random GIF Generator</h1>
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl">
          <RandomGif />
          <TagGif />
        </div>
      </div>
    </>
  );
}

export default App;
