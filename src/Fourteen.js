import React, { useEffect, useState } from 'react'

export default function Fourteen() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ac25f77785a5d5a90c94b0e5b547a38a`)
                    .then((response) => response.json())
                    .then((data) => setWeather(data))
                    .catch((error) => console.error('Error fetching weather data:', error))
            }, (error) => {
                console.error('Geolocation error:', error)
            })
        }
    }, [])

    return (
        <div>
            {weather ? (
                <div>
                    <h2>Current Weather</h2>
                    {weather.main && weather.weather ? (
                        <>
                            <p>Temperature: {weather.main.temp}</p>
                            <p>Condition: {weather.weather[0].description}</p>
                        </>
                    ) : (
                        <p>Weather data not available.</p>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
