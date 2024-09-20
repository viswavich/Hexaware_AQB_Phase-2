import React from 'react';

const SubjectSelector = ({ subjects, onSelect }) => {
    return (
        <div>
            <h3>Select a Subject:</h3>
            {subjects.map((subject, index) => (
                <button key={index} onClick={() => onSelect(subject)}>
                    {subject}
                </button>
            ))}
        </div>
    );
};

export default SubjectSelector;
