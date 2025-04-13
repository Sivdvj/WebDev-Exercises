import React, { useState } from 'react'; 

function TemperatureConverter() { 
    const [celsius, setCelsius] = useState(0); 
    const [fahrenheit, setFahrenheit] = useState(32); 
    const handleCelsiusChange = (e) => { 
        const newCelsius = parseFloat(e.target.value); 
        setCelsius(newCelsius);
        setFahrenheit(((newCelsius * 9/5) + 32).toFixed(2)); 
    }; 
    const handleFahrenheitChange = (e) => { 
        const newFahrenheit = parseFloat(e.target.value); 
        setFahrenheit(newFahrenheit);
        setCelsius(((newFahrenheit - 32) * 5/9).toFixed(2)); 
    }; 
    return ( 
        <div> 
            <h2>Temperature Converter</h2> 
            <div> 
                Celsius: 
                <input  
                    type="number" 
                    value={celsius} 
                    onChange={handleCelsiusChange} 
                    style={{ marginLeft: '10px' }} 
                /> 
            </div> 
            <div style={{ marginTop: '10px' }}> 
                Fahrenheit: 
                <input type="number" 
                    value={fahrenheit} 
                    onChange={handleFahrenheitChange} 
                    style={{ marginLeft: '10px' }} 
                /> 
            </div> 
        </div> 
    ); 
} 
export default TemperatureConverter;