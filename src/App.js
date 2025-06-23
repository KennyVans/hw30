import React from 'react';
import SwapiComponent from './features/swapi/SwapiComponent';
import { useDispatch } from 'react-redux';
import { clearCharacter } from './features/swapi/swapiSlice';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <SwapiComponent />
      <footer>
        <div className="swapi-buttons">
          <button onClick={() => dispatch(clearCharacter())}>
            Очистити
          </button>
        </div>
        <p style={{ marginTop: 10 }}>
        </p>
      </footer>

    </div>
  );
}

export default App;