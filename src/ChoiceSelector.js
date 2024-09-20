import React from 'react';

const ChoiceSelector = ({ choices, onSelect }) => {
    return (
        <div>
            <h3>Select a Choice:</h3>
            {choices.map((choice, index) => (
                <button key={index} onClick={() => onSelect(choice)}>
                    {choice}
                </button>
            ))}
        </div>
    );
};

export default ChoiceSelector;
