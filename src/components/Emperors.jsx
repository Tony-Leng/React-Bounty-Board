// import React from 'react'
import Luffy from "../assets/luffy.png";
import Shanks from "../assets/shanks.png";
import Charlotte from "../assets/charlotte_linlin.png";
import Marshall from "../assets/marshall_d_teach.png";

const Emperors = () => {
    const currentEmperors = [
        {
            id:1,
            image: Luffy
        },
        {
            id:2,
            image: Shanks
        },
        {
            id:3,
            image: Charlotte
        },
        {
            id:4,
            image: Marshall
        }
    ]

  return (
    <section>
        <h1 className="mb-4">EMPERORS</h1>
        <div className="flex">
            {currentEmperors.map((emperor) => {
                return <img className="h-[200px]" key={emperor.id} src={emperor.image} alt="" />
    }       )}
        </div>
    </section>
  )
}

export default Emperors