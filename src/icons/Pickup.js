import * as React from "react";

function SvgPickup(props) {
    return (
        <svg baseProfile="tiny" viewBox="0 0 512 512" overflow="visible" {...props}>
            <path
                fill={props.fill}
                d="M326 446.9c33.5 17 71.9 25.4 96.4 4.5 12.9-12.3 25.2-25.2 36.7-38.8 11.4-13.1 10-32.9-3-44.3-.3-.3-.6-.5-1-.8l-78-62.4c-9.8-7.8-23.4-9-34.4-3.1l-46.3 24.9c-40.1-30-74.5-66.8-101.8-108.7l-5.1-7.8 29.1-44.1c6.9-10.5 7-24.1.1-34.6l-54.9-83.4c-9.6-14.5-29.1-18.4-43.5-8.8-.3.2-.7.5-1 .7-14.6 10.2-28.6 21.2-42 33-23.6 22.9-17.7 60.6-4.5 96.4C113 280.3 218.1 392.5 326 446.9z"
            />
        </svg>
    );
}

export default SvgPickup;