import React from 'react'
import { useState, useEffect } from 'react';

function Horoscope(sign) {
    //const [currentHoroscopeData, setCurrentHoroscopeData] = useState();

    // useEffect( () => {
    //     fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`, {
    //         "method": "POST",
    //         "headers": {
    //             "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "c69ac320d9msh4f92145a07ef9a5p11a204jsnffcc7b05808d"
    //         }
    //     })
    //     .then(response => {
    //         console.log(sign);
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('data', data);
    //         setCurrentHoroscopeData(data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }, [])

    return (
        <div>
            <div className="sign-info">
            </div>
            <p>Sign Information</p>

            <div className="yesterday">
            <p>Yesterday</p>
            </div>
            <div className="today">
            <p>Today</p>
            </div>
            <div className="tomorrow">
            <p>Tomorrow</p>
            </div>

            <div className="daily-horoscope">
                <p>horoscope</p>
            </div>

    
        </div>
    )
}

export default Horoscope;
