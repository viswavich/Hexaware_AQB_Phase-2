import React from 'react';

const TopicSelector = ({ topics, onSelect }) => {
    return (
        <div>
            <h3>Select a Topic:</h3>
            {topics.map((topic, index) => (
                <button key={index} onClick={() => onSelect(topic)}>
                    {topic}
                </button>
            ))}
        </div>
    );
};

export default TopicSelector;
