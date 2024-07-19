'use client'

// components/SwitchDivs.js
// components/SwitchDivs.js
import React, { useState } from 'react';

const SwitchDivs = () => {
    const [activeDiv, setActiveDiv] = useState(0);

    const divs = [
        { id: 0, content: 'Div 1 Content' },
        { id: 1, content: 'Div 2 Content' },
        { id: 2, content: 'Div 3 Content' }
    ];

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
                {divs.map((div, index) => (
                    <button key={index} onClick={() => setActiveDiv(div.id)}>
                        Show Div {div.id + 1}
                    </button>
                ))}
            </div>
            <div>
                {divs.map((div) => (
                    <div key={div.id} style={{ display: activeDiv === div.id ? 'block' : 'none' }}>
                        <p>{div.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwitchDivs;
