import React from 'react'
import Img from "../Img/todogif.gif"

export default function Header() {
    return (
        <div>
            <div>
                <header>
                     <h1 className='title'>To do List</h1>
                </header>
            </div>
          
                <div className='img-container'>
                    <div className='box'>
                         <img src={Img} alt='img'/>
                    </div>
                </div>
           
        </div>
    )
}
