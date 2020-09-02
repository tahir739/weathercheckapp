import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ selectedCountry }) => {

    const key = '88bc0a664cc6bde52ae137d7b81f011f';
    const [currentWeather, setCurrentWeather] = useState('');

    useEffect(() => {
        axios.get('http://api.weatherstack.com/current', {
            params: {
                access_key: key,
                query: selectedCountry.capital
            }
        }).then(response => {
            setCurrentWeather(response.data.current);
        })
    }, [])

    return (
        <div className="weather">
            <h4>
                <img className='weather-image' src={currentWeather.weather_icons} alt='weather icon' />
                {selectedCountry.capital}
            </h4>
            <p><label className='label'>Current Temperature:</label> {currentWeather.temperature} celsius </p>
            <p><label className='label'>Feelslike:</label> {currentWeather.feelslike}</p>
            <p><label className='label'>Current Weather: </label> {currentWeather.weather_descriptions}</p>
        </div>
    )
}

export default Weather;