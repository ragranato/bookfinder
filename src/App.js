import { useState, useEffect } from 'react';
import './App.styles.scss';

function App() {
  const [ selection, setSelection ] = useState('');

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${selection}&key=API`);
  })

  return (
    <div className="App">
      <div className='book-selector'>
        <h1>Find Your Next Book</h1>
        <form className="genre-form">
          <div>
            <label className="genre-label">Choose a Genre</label>
            <select className="selections">
              <option>Select One</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="science fiction">Science Fiction</option>
              <option value="romance">Romance</option>
              <option value="horror">Horror</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
