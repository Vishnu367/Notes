import React from 'react'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import NotesContainer from '../NotesContainer/NotesContainer'
import UserNotes from '../NotesContainer/UserNotes/UserNotes'
import AllNotesList from '../NotesContainer/AllNotesList/AllNotesList'
import { useSelector } from 'react-redux'
import NewNotes from '../NotesContainer/NewNotes/NewNotes'

function AppRoutes() {

  const userNotesDate = useSelector(data => data.notes)
  const { paths } = userNotesDate
  const { homePath, categoryNotesPathId, UserNotesPath, userNotesPathId, newNotesPathId, editNotesPathId } = paths

  // console.log(paths)

  return (
    <div>
        {/* <NavLink to='home' /> */}
        {/* <NavLink to='new-notes'/> */}

        <Routes>
            <Route path={homePath} element={<NotesContainer />}> 
                <Route path={categoryNotesPathId} element={<AllNotesList />} />
                <Route path={userNotesPathId} element={<UserNotes />} />
                <Route path={newNotesPathId} element={<NewNotes />} />
                <Route path={editNotesPathId} element={<NewNotes value={'edit'}/>} />

            </Route>
        </Routes>

        {/* <Outlet /> */}
    </div>
  )
}

export default AppRoutes