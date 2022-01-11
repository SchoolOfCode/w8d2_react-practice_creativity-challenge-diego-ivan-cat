import React from 'react'

export default function ListItem({text, onDelete}) {
    return (
        <div>
            <li>
              {text}<button onClick={onDelete}>Delete</button>
            </li>
           
        </div>
    )
}
