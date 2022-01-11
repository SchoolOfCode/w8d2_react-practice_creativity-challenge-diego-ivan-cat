import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function List({arrayTodos, onDelete}) {
    return (
        <div>
            <ul>
                {arrayTodos.map(function(todo, index){
                    return(
                     <ListItem 
                     key={index}
                     text={todo} 
                     onDelete={function(){
                        onDelete(index)
                    }}/>
                )})}
                
            </ul>
        </div>
    )
}
