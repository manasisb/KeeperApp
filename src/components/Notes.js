import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
    
    const [isDone,setDone] = useState(false);
    
    function handleTextClick(){
        setDone(function(prev){
            return !prev;
        });
    }
    
    
    
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p onClick = {handleTextClick} style = {{textDecoration: isDone?"line-through":null}} >{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
