import React from 'react';

function ThumbDownOutline({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
            <path d="M649.226 54.556h-411.692c-37.965 0-70.444 22.873-84.169 55.807l-138.144 322.49c-4.118 10.521-6.403 21.499-6.403 33.395v91.487c0 50.319 41.168 91.487 91.487 91.487h288.641l-43.457 209.048-1.373 14.637c0 18.755 7.777 36.137 20.128 48.488l48.489 48.031 301.447-301.45c16.469-16.469 26.532-39.338 26.532-64.5v-457.434c0-50.315-41.168-91.487-91.487-91.487zM649.226 603.476l-198.528 198.528 61.296-244.27h-411.69v-91.487l137.229-320.206h411.692v457.434zM1015.173 603.476h-182.974v-548.922h182.974v548.922z" fill={color}></path>
        </svg>
    );
}

export default ThumbDownOutline;
