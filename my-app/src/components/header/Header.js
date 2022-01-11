import React from 'react'
import Img from "../Img/ToDoList.jpg"

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
                         <img src={Img}/>
                    </div>
                </div>
           
        </div>
    )
}
