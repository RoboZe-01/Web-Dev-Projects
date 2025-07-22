import React from 'react'

const NoteCard = ({note}) => {
    const body = JSON.parse(note.body);
    const position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
  return (
    <div className='card' style={{backgroundColor: colors.colorBody}}>
       <div className="card-header" style={{backgroundColor: colors.colorHeader }}></div>
       <div className="card-body">
        <textarea name="" id="" defaultValue={body}
        style={{color : colors.colorText}}>
          
          

        </textarea>
       </div>
    </div>
  )
}

export default NoteCard