import * as React from 'react';

function ChangeLog({ color = '#A9B1B9', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                fill={color}
                d="M15 8h-2.09c-.21-.58-.76-1-1.41-1-.65 0-1.2.42-1.41 1H8c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1Zm-3.5 0c.275 0 .5.225.5.5s-.225.5-.5.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5Zm1 7H9v-1h3.5v1Zm1.5-2H9v-1h5v1Zm0-2H9v-1h5v1Z"
            />
            <path
                fill={color}
                fillRule="evenodd"
                d="m23 8.358-1.846.445C19.695 2.99 14.082-.288 8.61 1.478 3.14 3.245-.11 9.384 1.35 15.198c1.264 5.035 5.33 7.577 9.32 7.841 5.312.509 9.941-2.75 10.65-7.736l-2.644-.557c-.375 2.978-3.22 5.261-6.545 5.652-3.575.235-7.378-2.304-8.306-6-1.093-4.353 1.348-8.966 5.446-10.29 4.097-1.322 8.315 1.14 9.408 5.494l-1.88.956 4.51 2.75L23 8.358Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default ChangeLog;
