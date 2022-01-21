import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Pokemon() {
  const [num,setnum]=useState()
  const [name,setname]=useState()
  const [move,setmove]=useState()
  useEffect(()=>{
    const getData= async()=>{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      // console.log(res.data);
      setname(res.data.name)
      setmove(res.data.moves.length)
    }
    getData()
    
  })
  return (
  <>
  <h1>Number : {num}</h1>
  <h1>Name : {name}</h1>
  <h1>Move : {move}</h1>
  <select value={num} onChange={(event)=>{
    setnum(event.target.value)
  }} id="">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="7">7</option>
    <option value="24">24</option>
    <option value="13">13</option>
    <option value="45">45</option>
    <option value="79">79</option>
  </select>
  </>
  )
}

export default Pokemon;
