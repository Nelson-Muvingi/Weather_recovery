import axios from "axios"
import { useEffect } from "react"
import Load from "./Load"

export default function Main() {
  const [loading, setLoading]= (false)
    useEffect(()=>{
        setLoading(true)
        const fetchWeather = async () =>{
            const options = {
              method: 'GET',
              url: 'https://yahoo-weather5.p.rapidapi.com/weather',
              params: {
                location:'Kin',
                format: 'json',
                u: 'f'
              },
              header: {
                'x-rapidapi-key': '33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04',
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
              }
            }
            const res = await axios.request(options)
            console.log(res);
            setLoading(false)
        }
        fetchWeather();
    },[setLoading])
  return (
    <div>
        {loading ? (<Load/>):(
          <div>
            
          </div>
        )}
    </div>
  )
}
