import React from 'react'
import './NotesContainer.css'
import AllNotesList from './AllNotesList/AllNotesList'
import UserNotes from './UserNotes/UserNotes'

function NotesContainer() {
  return (
    <div id='notes-container' className=''>
        
            <AllNotesList /> 
            <UserNotes />
        
    </div>
  )
}

export default NotesContainer