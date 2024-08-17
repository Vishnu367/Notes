import React, { useEffect, useRef, useState } from 'react'
import './AllNotesList.css'
// import { setUserNotesId } from '../../../redux/action'
import { useSelector,useDispatch } from 'react-redux'
import CaretedAtConverter from '../../CreatedAtConverter/CaretedAtConverter'
// import NewNotes from '../NewNotes/NewNotes'
import { useNavigate, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'
import UserCheckBox from '../UserNotes/UserCheckBox/UserCheckBox'
import MultiColView from './AllNotesListView/MultiColView'
import SingleColView from './AllNotesListView/SingleColView'
import ListView from './AllNotesListView/ListView'
import { setUserNotesId, postNewNotes } from '../../../redux/action'

function AllNotesList() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [scrollForNewNotesBtn, setScrollForNewNotesBtn] = useState(false)
  const [notesListView, setNotesListView] = useState(0)

  const userNotesData = useSelector(state => state.notes)
  const { notes, userNotesId, paths, filteredNotes, notesCategory, trash, temp } = userNotesData && userNotesData
  const { categoryNotesPath, userNotesPath, newNotesPath, newNotesPathId } = paths

  const pinnedNotes = filteredNotes ? [...filteredNotes.filter(note => note.isPin)].reverse() : null // reverse filltered notes that are pinned

  useEffect(() => {
    const handleScroll = () => {
      setScrollForNewNotesBtn(window.scrollY > 0)
    }

    window.addEventListener('scroll' ,handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNewNotes = () => {
    // if (notes[0].title === '' && notes[0].content === '') {
    //   // alert('already in New Notes')
    //   return
    // }
    const date = new Date()
    const newNotesId = notes.length + 1
    const notesObject = {
        "id": newNotesId,
        "category": 'Notes',
        "title": '',
        "content": '',
        "createdAt": {
                        "date": date.toISOString().replace('/', '-').replace('/', '-').split('T')[0], 
                        "time": date.toLocaleTimeString()
                    },
        'isPin': false,
    };
    dispatch(postNewNotes(notesObject))
    dispatch(setUserNotesId(newNotesId))
    navigate(`${categoryNotesPath}/${notesCategory}/${userNotesPath}/${newNotesId}`)
    // const n = notes.find(note => note.id == newNotesId)
    // console.log(newNotesId, notes)
  }

  return (
    <div id='all-notes-list' className='container notes-container-item'>
      <div 
        id='notes-list-container'
      >
        {
        filteredNotes.length ? <>
          <div id='notes-list-nav'>
            <h2 id='all-notes-list-title'>{notesCategory}</h2>
            <div id='notes-list-view-icons'>
              <button
                className={`note-menu-btn ${notesListView === 1 ? 'display-inline' : 'display-none'}`}
                onClick={() => setNotesListView(0)}
              >
                <i className='fa-solid fa-grip-vertical' />
                <span className='note-menu-btn-info'>Multi</span>
              </button>
              <button
                className={`note-menu-btn ${notesListView === 2 ? 'display-inline' : 'display-none'}`}
                onClick={() => setNotesListView(1)}
              >
                <i className='fa-solid fa-grip-lines' />
                <span className='note-menu-btn-info'>Single</span>
              </button>
              <button
                className={`note-menu-btn ${notesListView === 0 ? 'display-inline' : 'display-none'}`}
                onClick={() => setNotesListView(2)}
              >
                <i className='fa-solid fa-list-ul' />
                <span className='note-menu-btn-info'>List</span>
              </button>
            </div>
          </div>
            {
              notesListView === 1 ? <SingleColView /> :
              notesListView === 2 ? <ListView /> : 
              <MultiColView />

            }
            {/* <MultiColView /> */}
            {/* <SingleColView /> */}
            {/* <ListView /> */}
          </>
          : <div className='notes-item-message'>There are no Notes in {notesCategory} Category!</div>
        }
      </div>
      <div className='display-none notes-item-message'>
        Oops!
        <br></br>
        You have reached bootom of you'r Notes.
      </div>
      <div
        id='new-notes-btn'
        className='btn btn-large btn-opp'
        onClick={handleNewNotes}
        style={scrollForNewNotesBtn ? {top: '88vh'} : null}
      >
        <h3><i class="fa-solid fa-plus"></i></h3>
        <span id='new-notes-btn-title'>New Notes</span>
      </div>
</div>
  )
}

export default AllNotesList