import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from './swapiSlice';
import './SwapiComponent.css';

const SwapiComponent = () => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.swapi.character);
    const status = useSelector((state) => state.swapi.status);
    const error = useSelector((state) => state.swapi.error);

    return (
        <div className="swapi-container">
            <h1>SWAPI</h1>
            <div className="swapi-buttons">
                <button onClick={() => dispatch(fetchCharacter())}>Get info</button>
            </div>

            {status === 'loading' && <p className="swapi-status">Loading...</p>}
            {error && <p className="swapi-error">{error}</p>}
            {character && (
                <pre className="swapi-result">
                    {JSON.stringify(character, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default SwapiComponent;