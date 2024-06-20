import React, { useEffect, useState } from 'react'
import './AllNotesList.css'
import { getUserNotes, setNotesCreatedAt, setNotesId, } from '../../../redux/action'
import { useSelector,useDispatch } from 'react-redux'
import CaretedAtConverter from '../../CreatedAtConverter/CaretedAtConverter'

function AllNotesList() {

  const disptach = useDispatch()

  const [reversedNotes, setReversedNotes] = useState(null)

  const userNotesData = useSelector(state => state.notes)
  const {notes} = userNotesData.sampleNotesData && userNotesData.sampleNotesData

  const userSelectedNotesId = userNotesData.notesId

  const openNotes = (notesId) => {
    disptach(setNotesId(notesId))
    disptach(getUserNotes(notesId))
  }

  useEffect(() => {
    const reversedNotesData = [...notes].reverse()
    setReversedNotes(reversedNotesData)
  }, [notes])
   
  return (
    <div id='all-notes-list' className='container'>
       <h2 id='all-notes-list-title'>All Notes</h2>
       <ul id='notes-list'>
          {
            
            reversedNotes && reversedNotes.map((item, index) => {

              return <li 
                        key={item.id} 
                        className={`notes-item
                                    ${item.id == userSelectedNotesId ? 'item-active' : ''}`
                                  }
                        onClick={() => openNotes(item.id)}
                      >
                          <div className='notes-item-template'>
                              {item.title.split(' ')[0]?.[0]}
                          </div> 
                          <div className='notes-item-details'>
                              <div className='notes-item-titlentime'>
                                  <h3 className='notes-item-title'>
                                      {item.title}
                                  </h3>
                                  <p className='notes-item-datentime'>
                                    <CaretedAtConverter value={item.createdAt.date} />
                                  </p>
                              </div>
                              <p className='notes-item-content'>{item.content}</p>
                          </div>
                      </li>
            })
          }
          <li id='notes-item-last'>
              Oops!
              <br></br>
              You have reached bootom of you'r Notes.
          </li>
       </ul>
    </div>
  )
}

export default AllNotesList


