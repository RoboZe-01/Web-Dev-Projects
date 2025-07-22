import React from 'react'
import Trash from '../icons/Trash';
import { useRef  ,useEffect} from 'react';

const NoteCard = ({note}) => {
    const body = JSON.parse(note.body);
    const position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);

    const textAreaRef = useRef(null);
    useEffect(()=>{
      autoGrow(textAreaRef);
    },[])

    const autoGrow=(textArea) => {
          const {current} = textAreaRef;
          current.style.height = "auto"; // Reset the height
          current.style.height = current.scrollHeight + "px"; // Set the new height

    }


  return (
    // Main card jsx
    <div className='card' style={{backgroundColor: colors.colorBody ,
      left : `${position.x}px`,
      top : `${position.y}px`
     }}>
       
       <div className="card-header" style={{backgroundColor: colors.colorHeader }}>
        <Trash />
       </div>
       
       <div className="card-body">
        <textarea name="" id="" defaultValue={body}
        onInput={()=>{
          autoGrow(textAreaRef);
        }}
        ref ={textAreaRef}
        style={{color : colors.colorText}}>
          
          

        </textarea>
       </div>
    </div>
  )
}

export default NoteCard