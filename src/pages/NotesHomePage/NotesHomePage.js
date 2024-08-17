import React from 'react'
import './NotesHomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import NotesContainer from '../../components/NotesContainer/NotesContainer'
import { Outlet } from 'react-router-dom'
import AppRoutes from '../../components/AppRoutes/AppRoutes'

function NotesHomePage() {
  return (
    <div className='container-main'>
        <NavBar />
        <AppRoutes />
    </div>
  )
}

export default NotesHomePage