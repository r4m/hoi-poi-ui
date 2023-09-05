import React from 'react';

function Drag({ color = '#788590', ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.5 7c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zm-5 0c0-.825-.675-1.5-1.5-1.5S7.5 6.175 7.5 7 8.175 8.5 9 8.5s1.5-.675 1.5-1.5zm0 5c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zm5 0c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zm-10 0c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5.675 1.5 1.5 1.5 1.5-.675 1.5-1.5zm0-5c0-.825-.675-1.5-1.5-1.5S2.5 6.175 2.5 7 3.175 8.5 4 8.5 5.5 7.825 5.5 7z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    );
}

export default React.memo(Drag);
