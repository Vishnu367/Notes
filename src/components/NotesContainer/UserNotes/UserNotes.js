import React from 'react'
import './UserNotes.css'
import { useSelector } from 'react-redux'
import CaretedAtConverter from '../../CreatedAtConverter/CaretedAtConverter'

function UserNotes() {

  const userNotesData = useSelector(state => state.notes)
  const userNotes = userNotesData.userNotes && userNotesData.userNotes[0]

  return (
    <div id='user-notes' className='container'>
      {
        userNotes ? <div>
                      <h1 id='user-notes-title'>{userNotes.title}</h1>
                      <br/> <hr/> <br/>
                      <span id='user-notes-createdAt'>
                        <CaretedAtConverter value={userNotes.createdAt.date} />
                      </span>
                      <br/>
                      <p id='user-notes-content'>{userNotes.content}</p>
                    </div>
                  :
                <div>non selected</div>
      }
    </div>
  )
}

export default UserNotes