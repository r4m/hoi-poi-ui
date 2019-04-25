import React from 'react';

function Warning({ color, ...props }) {
    return (
        <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M17.9436326,17.4 C18.0187891,17.4 18.0187891,17.55 17.9436326,17.625 C17.9436326,17.85 17.7933194,18 17.5678497,18 L0.356993737,18 C0.206680585,18 0.131524008,17.925 0.0563674322,17.775 C-0.0187891441,17.7 -0.0187891441,17.55 0.0563674322,17.4 L8.6993737,0.225 C8.77453027,-0.075 9.22546973,-0.075 9.37578288,0.225 L17.9436326,17.4 Z M9,16 C9.55228475,16 10,15.5522847 10,15 C10,14.4477153 9.55228475,14 9,14 C8.44771525,14 8,14.4477153 8,15 C8,15.5522847 8.44771525,16 9,16 Z M9,6 C8.44771525,6 8,6.44771525 8,7 L8,12 C8,12.5522847 8.44771525,13 9,13 C9.55228475,13 10,12.5522847 10,12 L10,7 C10,6.44771525 9.55228475,6 9,6 Z"
                    fill={color}
                />
            </g>
        </svg>
    );
}

export default React.memo(Warning);
