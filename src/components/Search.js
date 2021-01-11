import React,{useState} from "react";


function Search(props){
    
    const [text,setText] = useState("");

    
    function handleTextChange(event){
        const val = event.target.value;
        setText(val);
        props.FSearch(text);
    }
        
    return(
        <div>
        <input onChange={handleTextChange} className = "search" name = "search" placeholder ="Please search here" value = {text}/>
        </div>
    )
    
}

export default Search;