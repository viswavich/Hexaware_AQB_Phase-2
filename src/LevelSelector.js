import React from 'react';

const LevelSelector = ({ levels, onSelect }) => {
    return (
        <div>
            <h3>Select Difficulty Level:</h3>
            {levels.map((level, index) => (
                <button key={index} onClick={() => onSelect(level)}>
                    {level}
                </button>
            ))}
        </div>
    );
};

export default LevelSelector;
