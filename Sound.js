import React from 'react';

const SoundButton = () => {
    // Function to play the sound
    const playSound = () => {
        const audio = new Audio('/wrong.mp3');
        audio.play();
    };

    return (
        <div>
            <button onClick={playSound} className="btn btn-primary">Wrong Answer</button>
        </div>
    );
};

export default SoundButton;
