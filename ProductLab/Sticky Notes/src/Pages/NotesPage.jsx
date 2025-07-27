import React, { useState, useEffect } from 'react'
import NoteCard from '../components/NoteCard'
import { fakeData as initialNotes } from '../assets/FakeData'

const NotesPage = () => {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('sticky-notes')
        return saved ? JSON.parse(saved) : initialNotes
    })

    useEffect(() => {
        localStorage.setItem('sticky-notes', JSON.stringify(notes))
    }, [notes])

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.$id !== id))
    }

    const handleUpdate = (id, updates) => {
        setNotes(notes.map(note => 
            note.$id === id ? {...note, ...updates} : note
        ))
    }

    const addNewNote = () => {
        const newNote = {
            $id: Date.now().toString(),
            title: "New Note",
            body: JSON.stringify("Type your note here..."),
            position: JSON.stringify({
                x: Math.random() * (window.innerWidth - 400),
                y: Math.random() * (window.innerHeight - 200)
            }),
            colors: JSON.stringify({
                colorHeader: "#" + Math.floor(Math.random()*16777215).toString(16),
                colorBody: "#f7fff7",
                colorText: "#000000"
            })
        }
        setNotes([...notes, newNote])
    }

    return (
        <>
            <button 
                onClick={addNewNote}
                className="add-note-button"
            >
                Add Note +
            </button>
            
            {notes.map(note => (
                <NoteCard 
                    key={note.$id} 
                    note={note} 
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            ))}
        </>
    )
}

export default NotesPage