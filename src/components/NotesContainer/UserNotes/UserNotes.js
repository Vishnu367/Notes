import React, { useEffect, useState, useRef } from 'react'
import './UserNotes.css'
import { useDispatch, useSelector } from 'react-redux'
import CaretedAtConverter from '../../CreatedAtConverter/CaretedAtConverter'
import NewNotes from '../NewNotes/NewNotes'
import { json, useNavigate, useParams } from 'react-router-dom'
import { moveToTrash, setPin, updateNote } from '../../../redux/action'
import DOMPurify from 'dompurify'
import UserCheckBox from './UserCheckBox/UserCheckBox'
import { useFormik } from 'formik'
import From from '../../Form/From'

function UserNotes() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const textareaRef = useRef(null)
  const containerRef = useRef(null)

  const [scroll, setScroll] = useState(false)

  const userNotesData = useSelector(state => state.notes)
  const { notes, userNotesId, filteredNotes, trash, paths} = userNotesData && userNotesData
  const { categoryNotesPath, userNotesPath, newNotesPath, newNotesPathId, editNotesPath } = paths

  const userNotes = userNotesId ? filteredNotes.find(note => note.id === userNotesId) : null
  

  // console.log(userNotesId, pathNotesId)
  return (
    <div 
      id='user-notes-container'
      // className='notes-container-item'
    >
      {
        // <div id='user-notes' className='container'>
        <div>
          {
            userNotes && userNotes ? <div>
                          {/* <div id='user-notes-title-nav-container'>
                            <div id='user-notes-title-nav'>
                              <h2 id='user-notes-title'>{userNotes.title}</h2>
                              <div id='user-notes-menu'>
                                <button   //Pin btn
                                    className='note-menu-btn'
                                    onClick={() => dispatch(setPin())}
                                  >
                                    <i className="pin fa-solid fa-star">
                                      {!userNotes.isPin && <i className={`un-pin fa-solid fa-star`} />}
                                    </i>
                                    <span className='note-menu-btn-info'>pin</span>
                                </button>
                                <button     //edit btn
                                  className='note-menu-btn'
                                  //category/:id/user-notes/number=/:id/new-notes
                                  onClick={() => navigate(`${categoryNotesPath}/${userNotes.category}/${userNotesPath}/${userNotesId}/${editNotesPath}`)}
                                >
                                  <i className='fa-solid fa-pen-to-square'></i>
                                  <span className='note-menu-btn-info'>edit</span>
                                </button>
                                <button     //delete btn
                                  className='note-menu-btn'
                                  onClick={() => dispatch(moveToTrash())}
                                >
                                  <i className='fa-solid fa-trash'></i>
                                  <span className='note-menu-btn-info'>trash</span>
                                </button>
                              </div>
                            </div>
                            <br/> <hr/>
                          </div>
                          <br/> 
                          
                          <div>
                            {
                               userNotes.category === 'Notes' ? 
                                  <p 
                                  className='user-notes-content' 
                                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(userNotes.content.replace('\n', '<br/>'))}}
                                  ></p> 
                                  : 
                                  <UserCheckBox items={userNotes.items} cName={'user-notes-content'} />
                            }
                          </div>
                          <br />
                          <div id='user-notes-createdAt'>
                            Edited <CaretedAtConverter value={userNotes.createdAt.date} />
                            {/* Created At: {userNotes.createdAt.date} T {userNotes.createdAt.time} }
                          </div> */}


        <From />



                        </div>
                      :
                    <div className='container'>non selected</div>
          }
        </div>
      }
    </div>
  )
}

export default UserNotes