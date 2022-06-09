import React from 'react';

const SyncCalendar = ({ color = '#788590', ...props }) => (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M18 11v1.5c3.19 0 5.09 3.55 3.33 6.21l-1.09-1.09C21.06 15.96 19.85 14 18 14v1.5l-2.25-2.25L18 11Zm0 11v-1.5c-3.19 0-5.09-3.55-3.33-6.21l1.09 1.09C14.94 17.04 16.15 19 18 19v-1.5l2.25 2.25L18 22Zm1-19h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a5.919 5.919 0 0 1-1.5-2H5V8h14v2.59c.71.11 1.39.35 2 .72V5a2 2 0 0 0-2-2Z"
            fill={color}
        />
        <circle cx={20} cy={5} r={4} fill="#FF8C00" />
    </svg>
);

export default SyncCalendar;
