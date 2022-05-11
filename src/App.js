import './App.css';
import Button from './components/Button';
import Gif from './components/Gif';
import { useState } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [gif, setGif] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const data = await response.json();
    setGif(data);
  };
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      <h3>Use Giphy API to generate a random gif!</h3>
      <form onSubmit={handleSubmit}>
        <Button value="Generate a GIF" />
      </form>
      <Gif gif={gif} />
    </div>
  );
}

export default App;
