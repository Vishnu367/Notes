import React from 'react'
import './NotesHomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import NotesContainer from '../../components/NotesContainer/NotesContainer'

function NotesHomePage() {
  return (
    <div className='container-main'>
        <NavBar />
        <NotesContainer />
    </div>
  )
}

export default NotesHomePage