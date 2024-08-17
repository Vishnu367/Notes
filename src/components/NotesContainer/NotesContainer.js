import React from 'react'
import './NotesContainer.css'
import AllNotesList from './AllNotesList/AllNotesList'
import UserNotes from './UserNotes/UserNotes'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NewNotes from './NewNotes/NewNotes'

function NotesContainer() {

  const { pathname } = useLocation()
  const userNotesData = useSelector(data => data.notes)
  const { paths } = userNotesData
  const { newNotesPath } = paths

  const pathnameLast = pathname.split('/').pop()
  
  return (
    <div id='notes-container' className=''>
      <AllNotesList /> 
      {/* { pathnameLast === newNotesPath ? <NewNotes /> : <UserNotes /> } */}
      <Outlet />
    </div>
  )
}

export default NotesContainer