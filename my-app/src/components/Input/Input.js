import { useState } from "react"

export default function Input({ onSubmit }) {

    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value)
        
    }
    return (
        <div className="input-search-box">
            <input className="search-content" onChange={handleChange} value={text} placeholder="Enter a To Do"></input>
            <button onClick={function(){
                 onSubmit(text);
            }}>Add a To Do</button>
            
        </div>
    )
}

