import './App.css';
import Button from './components/Button';
import Heading from './components/Heading';
import Gif from './components/Gif';

function App() {
  return (
    <div className="App">
      <h1>Giphy Generator</h1>
      <Button />
      <Heading />
      <Gif />
    </div>
  );
}

export default App;
