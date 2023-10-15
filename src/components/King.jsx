// import React from 'react'
import currentKing from "../assets/gold_roger.png"

const King = () => {
  return (
    <div>
        <h1 className="mb-4">KING</h1>
        <img className="grid justify-items-center h-[300px]" src={currentKing} alt="Gold Roger" />
    </div>
  )
}

export default King