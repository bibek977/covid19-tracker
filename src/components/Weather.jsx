// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Weather() {
    const [InputValue, setInputValue] = useState('Kathmandu')
    const [data, setdata] = useState(null);

    useEffect(()=>{
        const getWeather = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${InputValue}&units=metric&appid=e426d96905a5152b7ba4b35f88aa78b0`

            const response = await fetch(url)
            const getData = await response.json()
            // console.log(getData.main);
            setdata(getData.main)


            // const res = await axios.get(url)
            // console.log(res);
        }
        getWeather()
    },[InputValue])
    
  return (<>
  <Card bg='dark' className='mb-2' style={{width : '18rem', color :'white' }}> 
  <Card.Header >Weather</Card.Header>
  <Card.Title><input onChange={(e)=>setInputValue(e.target.value)} value={InputValue}/></Card.Title>
  <Card.Body >
      {!data?       <h1>data Not found</h1>  :
      <>
      <Card.Title >{InputValue}</Card.Title>
      <Card.Title >{data.temp}</Card.Title>
      <Card.Title >{data.temp_min}</Card.Title>
      <Card.Title >{data.temp_max}</Card.Title>
      </>
      }
  </Card.Body>
  </Card>
  </>);
}
