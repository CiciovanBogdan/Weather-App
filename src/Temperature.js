import React, { useState } from "react";

export const Temperature = () => {
    const [tempValue, setTempValue] = useState(10);
    const [tempColor, setTempColor] = useState("cold");

    const increaseTemperature = () => {
        const newTemp = tempValue + 1

        if(newTemp >= 15) {
            setTempColor('hot')
        }

        setTempValue(newTemp)
    }

    const decreaseTemperature = () => {
        const newTemp = tempValue - 1

        if(newTemp < 15) {
            setTempColor('cold')
        }

        setTempValue(newTemp)
    }

    return (
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${tempColor}`}>{tempValue}&#8451;</div>
            </div>
            <div className="button-container">
                <button onClick={() => increaseTemperature()} disabled={tempValue === 30}>+</button>
                <button onClick={() => decreaseTemperature()} disabled={tempValue === 0}>-</button>
            </div>
        </div>
    );
}