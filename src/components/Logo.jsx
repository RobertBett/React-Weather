import React from 'react';
import partlyCloudy from '../assets/weather-icons/cloudy-day-1.svg';
import mostlyCloudy from '../assets/weather-icons/cloudy.svg';
import thunderStorm from '../assets/weather-icons/thunder.svg';
import sunny from '../assets/weather-icons/day.svg';
import rainy from '../assets/weather-icons/rainy-6.svg';


const getLogo =(props)=>{

    let theLogo = props.condition;
    switch (theLogo){
    case 'Cloudy':
        theLogo = mostlyCloudy;
        break;
    case 'Partly Cloudy':
        theLogo = partlyCloudy;
        break;
    case 'Mostly Cloudy':
        theLogo = mostlyCloudy;
        break;
    case 'Servere Thunderstorms':
    case 'Thunderstroms':
        theLogo = thunderStorm;
        break;
    case 'Scattered Thunderstorms':
    case 'Showers':
    case 'Scattered Showers':
        theLogo = rainy;
        break;
    case 'Mostly Sunny':
    case 'Sunny' :
    case 'Fair' :
        theLogo = sunny;
        break;
    default:
        /* eslint no-console: 1 */
        console.log('Still Works');
    }
    return (
        <div>
            <img src={ theLogo } alt="whatever" className="weather-logo"/>
        </div>
    );
};

export default getLogo;