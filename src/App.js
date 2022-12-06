import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './Coin'
import './App.css'
const App = () => {

  const [result,setResult] = useState([])
  const [searchWord,setSearchWord] = useState([])
  useEffect( () =>{
      axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=1000&currency=INR`)
      .then((response) => setResult(response.data.coins)).catch((err) => console.log(err))
  }, [searchWord])

  const filteredCoins = result.filter( (coin) => {
    return coin.name.toLowerCase().includes(searchWord);
  })
  const style = {
    borderWidth : "thick",
    borderRadius : 10 ,
    textAlign : "justify",
    height : 50,
    fontSize : "25px"
  }
  return (
    <>
    <div className='input'>
      <br />
      <br />
      <input 
              style={style}
              className='field'
              type="text" 
              value={searchWord} 
              placeholder = "bitcoin.."
              size={50}
              onChange={(e) => setSearchWord(e.target.value)} />
      <br />
      <br />
      <hr />
      
    </div>
    <div className='App'>
        {
          filteredCoins.map((coin , index) => {
          return (
            <Coin key = {index} name = {coin.name} icon = {coin.icon} price = {coin.price} rank={coin.rank}/>
          )
        })}
    </div>
    </>
  )
}

export default App
