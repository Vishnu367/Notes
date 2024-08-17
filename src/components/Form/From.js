import React, { useEffect, useState, useRef }from 'react'
import DOMPurify from 'dompurify'
// import UserCheckBox from './UserCheckBox/UserCheckBox'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
// import NewNotes from '../NewNotes/NewNotes'
import { json, useNavigate, useParams } from 'react-router-dom'
import { moveToTrash, popNotes, setPin, updateNote } from '../../redux/action'
import CaretedAtConverter from '../CreatedAtConverter/CaretedAtConverter'

function From() {
    
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const textareaRef = useRef(null)
  const containerRef = useRef(null)

  const [scroll, setScroll] = useState(false)

  const userNotesData = useSelector(state => state.notes)
  const { notes, userNotesId, filteredNotes, trash, paths} = userNotesData && userNotesData
  const { categoryNotesPath, userNotesPath, newNotesPath, newNotesPathId, editNotesPath } = paths

  const userNotes = userNotesId ? filteredNotes.find(note => note.id === userNotesId) : null

    const formikData = useFormik({
        initialValues: userNotes ? {
          id: userNotes.id,
          title: userNotes.title,
          category: userNotes.category,
          content: userNotes.content,
          isPin: userNotes.isPin,
        } : {
          id: notes && notes.length + 1,
          title: '',
          category: 'Notes',
          content: '',
          isPin: false,
        },
        onSubmit: (values) => {
            const date = new Date()
            const notesObject = {
                "id": values.id,
                "category": values.category ? values.category : 'Notes',
                "title": values.title,
                "content": values.content,
                "createdAt": {
                                "date": date.toISOString().replace('/', '-').replace('/', '-').split('T')[0], 
                                "time": date.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
                            },
                'isPin': values.isPin,
            };
            // (isEdit === 'edit') ? dispatch(updateNote(notesObject)) : dispatch(postNewNotes(notesObject))
            // dispatch(setUserNotesId(values.id))
            dispatch(updateNote(notesObject))

            // formikData.resetForm()
            // console.log(notesObject)
        },
      })
    //   console.log(formikData.values)
    
      // for scroll of container will leads the container nav box shadow bottom
      useEffect(() => {
        const handleScroll = (event) => setScroll(event.target.scrollTop > 0)
        containerRef.current.addEventListener('scroll', handleScroll)
      }, [containerRef])
    
      // for textarea fild auto height
      useEffect(() => {
          if (textareaRef.current) {
              textareaRef.current.style.height = 'auto';
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
          }
      }, [formikData.values.content]);
    
      // for formikData update(it wont auto update) if the useNotes changes when user try to edit notes
      useEffect(() => {
        // if (notes[0].title === '' && notes[0].content === '') dispatch(popNotes())
        // console.log(notes)
        formikData.setValues({
          id: userNotes.id,
          title: userNotes.title,
          category: userNotes.category,
          content: userNotes.content,
          isPin: userNotes.isPin,
        })
      }, [userNotes])
    
      useEffect(() => {
        // return () => console.log('unmounted')
      }, [])
    
      const handleCancelNotes = () => {
        // navigate(-1)
        // formikData.resetForm()
      }
    
      const handleFormChange = (values) => {
        formikData.submitForm()
      }
  return (
    <div>
        <div
            id='new-notes-container'
            className='notes-container-item'
            ref={containerRef}
        >
            <form
                id='new-notes-input-form'
                className='container'
                onSubmit={formikData.handleSubmit}
                onChange={handleFormChange}
            >
                <div
                    id='new-notes-nav'
                    className={scroll && 'box-shadow'}
                >   
                    <div className='flex-justify-center-align-center'>
                        {/* <button
                            id='new-notes-cancel'
                            className='note-menu-btn'
                            onClick={handleCancelNotes}
                        >
                            <i className='fa-solid fa-arrow-left'/>
                        </button> */}
                        <div
                            id='nav-title'
                            className={scroll ? 'display-inline' : 'display-none'}
                        > 
                            {formikData.values.title}
                        </div>
                    </div>
                    <div>
                        <button 
                            type='button'
                            className='note-menu-btn'
                        >
                            <i 
                                id='pin-input' 
                                className='fa-solid fa-star pin '
                                onClick={() => formikData.setFieldValue('isPin', !formikData.values.isPin)}
                            >
                                <i id='un-pin-input' className={`fa-solid fa-star un-pin 
                                                                ${formikData.values.isPin ? 'display-none' : 'display-inline'}`}></i>
                            </i>
                            <span className='note-menu-btn-info'>pin</span>
                        </button>
                        {/* <button     //edit btn
                          className='note-menu-btn'
                          //category/:id/user-notes/number=/:id/new-notes
                          onClick={() => navigate(`${categoryNotesPath}/${userNotes.category}/${userNotesPath}/${userNotesId}/${editNotesPath}`)}
                        >
                          <i className='fa-solid fa-pen-to-square'></i>
                          <span className='note-menu-btn-info'>edit</span>
                        </button> */}
                        <button     //delete btn
                            type='button'
                            className='note-menu-btn'
                            onClick={() => dispatch(moveToTrash())}
                        >
                            <i className='fa-solid fa-trash'></i>
                            <span className='note-menu-btn-info'>trash</span>
                        </button>
                    </div>
                </div>
                <div id="form-input-container">
                    <input
                        type='text'
                        name='title'
                        id='title-input'
                        className={`notes-input`}
                        value={formikData.values.title}
                        onChange={formikData.handleChange}
                        placeholder='Title'
                    />

                    <textarea
                        type='text'
                        name='content'
                        id='content-input'
                        className='notes-input'
                        value={formikData.values.content}
                        onChange={formikData.handleChange}
                        placeholder='Note'
                        ref={textareaRef}
                        align='left'
                        required
                    />
                    <div id='user-notes-createdAt'>
                            Edited <CaretedAtConverter value={userNotes.createdAt} />
                            {/* Created At: {userNotes.createdAt.date} T {userNotes.createdAt.time} }
                          </div> */}
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default From