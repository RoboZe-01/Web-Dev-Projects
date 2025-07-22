import React from 'react'
import { fakeData as notes } from '../assets/FakeData'
import NoteCard from '../components/NoteCard'

const NotesPage = () => {
  return (
    <> 
   {notes.map(note =>(

    <NoteCard key ={note.$id} note ={note}/>
   ) )}

    
    </>
  )
}

export default NotesPage