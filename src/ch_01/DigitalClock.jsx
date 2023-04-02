import React from "react";

function DigitalClock(props) {
    return (
        <div>
            <h1> 현재 시각 : {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

export default DigitalClock;