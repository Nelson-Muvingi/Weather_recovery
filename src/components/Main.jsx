import axios from "axios"
import { useEffect } from "react"
// import Load from "./Load"
import { useState } from "react"

export default function Main() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e);
    setCity(e.target[0].value)

  }
  const [weather,setWeather]=useState()
  const [city,setCity]=useState()
  // const [loading, setLoading]= (false)
    useEffect(()=>{
        // setLoading(true)
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
            // setLoading(false)
        }
        fetchWeather();
    },[city])
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input type="text"  />
            <input type="submit" />
        </form>
        <div className="display">
          {weather && <h2>{weather.location.city}</h2>}
        </div>
             
    </div>
  )
}
