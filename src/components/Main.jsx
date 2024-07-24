import axios from "axios"
import { useEffect } from "react"
import Load from "./Load"
import { useState } from "react"

export default function Main() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e);
    setCity(e.target[0].value)

  }
  const [weather,setWeather]=useState()
  const [city,setCity]=useState()
  const [loading, setLoading]= useState(false)
    useEffect(()=>{
        setLoading(true)
        const fetchWeather = async () =>{
            const options = {
                method: 'GET',
                url: 'https://yahoo-weather5.p.rapidapi.com/weather',
                params: {
                    location: city,
                    format: 'json',
                    u: 'f'
                },
                headers: {
                    'x-rapidapi-key': '33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04',
                    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
                }
              };
            const response = await axios.request(options)
            console.log(response.data);
            setWeather(response.data)
            setLoading(false)
        }
        fetchWeather();
    },[city,setLoading])
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input type="text"  />
            <input type="submit" />
        </form>
        {loading ? (<Load/>):(
          <div className="display">
          {weather &&  <h2 className="city">{weather.location.city}, {weather.location.country}</h2>}
          <div className="infos">
              {weather &&  <p className="condition">{weather.current_observation.condition.text}</p>}
              {weather &&  <p className="temperature">🌡 Temperature : {weather.current_observation.condition.temperature}°C</p>}
              {weather &&  <p className="sunrise">☀️ Sunrise : {weather.current_observation.astronomy.sunrise} </p>}
              {weather &&  <p className="humidity">💧 Humidity : {weather.current_observation.atmosphere.humidity}</p>}
          </div>
      </div>
      )}
             
    </div>
  )
}
