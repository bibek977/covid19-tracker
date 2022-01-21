import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

function Covidnew() {
    const [data, setdata] = useState([]);
    const covidData = async ()=>{
        const res = await fetch("https://raw.githubusercontent.com/covid19Nepal/covid19-nepal-api/master/v2/state-district-wise.json")

        const actualData = await res.json()

        // console.log(actualData);

        setdata(actualData[0].districtData)
    }
    useEffect(()=>{
        covidData()
    })
  return (
      <>
      <table>
          <thead>
              <tr>
                  <th>State</th>
                  <th>Recovered</th>
                  <th>Confirmed</th>
                  <th>Death</th>
                  <th>Active</th>
                  <th>Updated</th>
              </tr>
          </thead>
          <tbody>
              {data.map((curEle,ind)=>{
                  return(

                      <tr key={ind}>
                      <td>{curEle.district}</td>
                      <td>{curEle.recovered}</td>
                      <td>{curEle.confirmed}</td>
                      <td>{curEle.active}</td>
                      <td>{curEle.deceased}</td>
                      <td>{curEle.lastupdatedtime}</td>
                      </tr>
                    )
              })}
          </tbody>
      </table>
      </>
  )
}

export default Covidnew;
