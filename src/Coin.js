import React from 'react'

const Coin = ({name ,price,icon,rank}) => {
  return (
    <div className='coindata'>
            <img src= {icon} alt ={name} width = {60} /> 
             <b>Name : {name} </b> 
             <strong>Rank : {rank}</strong>
             <i>Price : {price} INR</i>
    </div>
  )
}

export default Coin