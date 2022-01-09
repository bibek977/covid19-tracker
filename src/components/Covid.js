import React, { useEffect, useState } from 'react'
import './css/covid.css'

export default function Covid() {
    const [data, setdata] = useState([])
    const getCovidData = async ()=>{
        try{

            const response = await fetch('https://raw.githubusercontent.com/covid19Nepal/covid19-nepal-api/master/v2/state-district-wise.json')
            
            const actualData = await response.json()

            // console.log(actualData[0].districtData[0])
            setdata(actualData[0].districtData[0])
        } 
        catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
       getCovidData()
    }, [])
    return (
    <>
        <div className='body'>

            <div className='topic'>
            <h1>Live Update</h1>
            <h4>Covid-19 Update - Nepal </h4>
            </div>

            <div className="card">
            <ul>
                <li className='card__main'>
                    <p className='card__top'><span>Our</span> City</p>
                    <p className='card__bottom'>{data.district}</p>
                </li>
                <li className='card__main'>
                    <p className='card__top'><span>Total</span> Recovered</p>
                    <p className='card__bottom'>{data.recovered}</p>
                </li>
                <li className='card__main'>
                    <p className='card__top'><span>Total</span> Confirmed</p>
                    <p className='card__bottom'>{data.confirmed}</p>
                </li>
                <li className='card__main'>
                    <p className='card__top'><span>Total</span> Death</p>
                    <p className='card__bottom'>{data.deceased}</p>
                </li>
                <li className='card__main'>
                    <p className='card__top'><span>Total</span> Active</p>
                    <p className='card__bottom'>{data.active}</p>
                </li>
                <li className='card__main'>
                    <p className='card__top'><span>Last</span> Updated</p>
                    <p className='card__bottom'>{data.lastupdatedtime}</p>
                </li>
            </ul>
            </div>
                
        </div>
    </>
    )
}
