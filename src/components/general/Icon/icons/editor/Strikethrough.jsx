import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Strikethrough = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
        <path
            d="M261.502 419.602c2.104 4.21 5.261 8.981 7.926 13.191h242.557c-33.68-11.577-54.235-23.646-74.231-36.837-25.748-17.402-38.872-38.449-38.872-63.71v0.011c0-0.068 0-0.131 0-0.199 0-12.562 2.899-24.443 7.86-34.541 5.261-11.017 13.119-20.488 23.154-28.907l-0.284 0.208c11.062-8.422 23.68-14.907 38.174-19.151 15.227-4.702 33.68-6.805 54.235-6.805l-0.087 0.001c0.575-0.005 1.155-0.009 1.731-0.009 19.318 0 37.912 3.085 54.068 8.426l0.787 0.235c14.518 4.996 27.683 12.894 38.717 22.919l0.056 0.051c10.294 9.542 18.25 21.568 23.098 35.732 5.261 13.682 7.926 28.415 7.926 44.695h158.358c0-34.732-6.805-66.305-19.996-95.282-13.191-28.907-32.134-54.167-56.833-75.216-24.208-21.051-54.167-37.89-88.896-49.466-35.292-12.070-73.741-17.894-116.333-17.894l0.18 0.001c-1.184-0.011-2.368-0.016-3.553-0.016-39.634 0-77.972 5.564-111.347 15.238-34.17 10.593-64.201 25.329-89.458 43.714-25.257 18.943-44.695 41.606-58.379 67.917-14.243 26.803-21.051 55.78-21.051 87.847 0 33.68 6.805 62.657 20.488 87.915zM985.591 590.662v1.053h-203.617l-0.457-0.829c3.261 5.498 6.238 11.182 9.366 18.16 11.017 24.767 16.277 53.186 16.277 84.757l-0.003-0.171c0.020 1.12 0.027 2.245 0.027 3.371 0 31.567-7.366 61.41-19.952 86.751-13.191 26.311-32.134 48.974-56.343 66.868s-53.676 31.573-87.847 41.606c-34.239 9.962-72.691 14.737-114.788 14.737-25.257 0-50.519-2.667-75.776-6.877-25.189-4.769-49.466-11.577-72.619-20.559-23.154-8.911-44.695-20.488-64.129-34.17-20.068-13.682-36.905-29.96-51.64-48.411l0.385 0.518c-14.478-18.735-26.057-39.818-34.556-64.157-8.418-23.716-12.629-54.235-12.629-83.215l156.255 0.025c0.072 23.014 4.914 44.903 13.191 63.682l0.257 0.639c6.861 15.289 17.413 28.563 30.756 38.864l-0.372-0.263c13.975 10.26 30.015 17.875 48.296 22.291 18.384 4.769 39.502 6.877 62.094 6.877 19.996 0 37.89-2.595 53.114-6.805l0.796-0.195c13.503-3.87 25.971-10.195 36.604-18.258l0.167-0.123c9.25-7.224 16.746-16.585 21.938-27.801 4.769-11.017 7.368-22.591 7.368-34.732 0-13.682-2.104-25.748-5.824-36.274-4.138-11.017-11.507-21.051-22.591-29.96-11.084-8.981-26.311-17.962-45.817-26.873-7.86-3.157-19.434-6.805-28.907-10.525h-506.231v-105.244h947.212v105.244z"
            fill={color}
        />
    </svg>
);

export default React.memo(Strikethrough);
