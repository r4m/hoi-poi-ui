import React from 'react';

const Hubspot = ({ color = '#788590', ...props }) => (
    <svg {...props} viewBox="0 0 24 24">
        <path
            fill={color}
            d="M17.356 8.585V6.204c.33-.148.609-.381.805-.674.195-.292.3-.632.302-.98v-.054c0-1.013-.86-1.834-1.92-1.834h-.057c-.51 0-.998.193-1.358.537-.36.344-.562.81-.562 1.297v.054c.001.348.106.688.302.98.196.293.475.526.805.674v2.381a5.565 5.565 0 0 0-2.585 1.087L6.248 4.585a1.96 1.96 0 0 0 .077-.515 2 2 0 0 0-.362-1.148 2.145 2.145 0 0 0-.97-.763 2.258 2.258 0 0 0-1.25-.12c-.42.08-.805.275-1.108.564a2.04 2.04 0 0 0-.594 1.057c-.084.4-.042.816.121 1.194s.44.701.796.929a2.217 2.217 0 0 0 2.267.073l6.733 5.005c-.605.873-.92 1.9-.905 2.946a5.053 5.053 0 0 0 .989 2.922l-2.048 1.957a1.835 1.835 0 0 0-.512-.08c-.352 0-.695.1-.987.287-.292.186-.52.451-.654.761s-.169.651-.1.98c.068.33.238.632.486.869s.565.399.91.464c.344.066.7.032 1.025-.096.325-.128.602-.345.798-.624.195-.28.3-.607.3-.943a1.608 1.608 0 0 0-.084-.488l2.026-1.936c.661.485 1.43.82 2.247.979a5.713 5.713 0 0 0 2.468-.066 5.555 5.555 0 0 0 2.186-1.096 5.239 5.239 0 0 0 1.457-1.904 5.012 5.012 0 0 0-.252-4.589 5.313 5.313 0 0 0-1.659-1.747 5.612 5.612 0 0 0-2.294-.872Zm-.84 7.833a2.92 2.92 0 0 1-1.096-.182 2.821 2.821 0 0 1-.935-.575 2.678 2.678 0 0 1-.628-.878 2.575 2.575 0 0 1 0-2.083c.146-.33.359-.628.628-.877a2.82 2.82 0 0 1 .935-.575 2.865 2.865 0 0 1 3.014.633c.505.499.787 1.165.787 1.859s-.28 1.36-.785 1.86c-.504.499-1.191.792-1.917.817"
        />
    </svg>
);

export default Hubspot;
