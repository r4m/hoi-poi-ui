import React from 'react';

function Key({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="#788590"
                d="M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                id="prefix__a"
            />
        </svg>
    );
}

export default Key;
