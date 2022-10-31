import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

const Bold = ({ color = colors.neutral700, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
        <path
            d="M688.898 500.456c53.251-36.715 90.551-97.058 90.551-153.005 0-123.969-96.028-219.425-219.425-219.425h-342.883v767.965h386.178c114.688 0 203.543-93.25 203.543-207.861 0-83.38-47.254-154.687-117.972-187.677zM381.706 265.164h164.566c45.571 0 82.286 36.791 82.286 82.286s-36.715 82.286-82.286 82.286h-164.566v-164.566zM573.703 758.851h-191.99v-164.566h191.99c45.571 0 82.286 36.715 82.286 82.286s-36.715 82.286-82.286 82.286z"
            fill={color}
        />
    </svg>
);

export default React.memo(Bold);
