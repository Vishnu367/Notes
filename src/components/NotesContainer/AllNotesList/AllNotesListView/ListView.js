import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import DOMPurify from 'dompurify'
import UserCheckBox from '../../UserNotes/UserCheckBox/UserCheckBox'
import { setUserNotesId } from '../../../../redux/action'

function ListView() {

    const disptach = useDispatch()
    const navigate = useNavigate()

  const userNotesData = useSelector(state => state.notes)
  const { notes, userNotesId, paths, filteredNotes, notesCategory } = userNotesData && userNotesData
  const { categoryNotesPath, userNotesPath, newNotesPath, newNotesPathId } = paths

  const pinnedNotes = filteredNotes ? [...filteredNotes.filter(note => note.isPin)] : null // reverse filltered notes that are pinned

  const openNotes = (notesId) => {
    navigate(`${categoryNotesPath}/${notesCategory}/${userNotesPath}/${notesId}`)
    disptach(setUserNotesId(notesId)) // used to open user selected notes based on id
  }

    const notesItem = (item) => {
        return item ? <li
            key={item.id}
            className={
                //checking user selected notes and iterated notes ids for highlighting seleted notes based on class.
                `notes-item list-notes-item
                ${(item.id === userNotesId) ? 'item-active' : null}`
              }
            onClick={() => openNotes(item.id)}
        >
            <div className='notes-item-template'>
                {item.title.split(' ')[0]?.[0]}
            </div>
            <div className='notes-item-details'>
                <div className='notes-item-title'>{item.title}</div>
                <p className='notes-item-content single-line-ellipsis'>{item.content}</p>
            </div>
        </li> : null
    }

  return (
    <div>
        {
            pinnedNotes.length ? <div>
                <div className='notes-count-title'>
                  {pinnedNotes.length} Pinned
                </div>
                <ul id='pinned-notes-list' className='notes-list'>
                  {pinnedNotes.map(note => notesItem(note))}
                </ul>
            </div> : null
        }
        <div className='notes-count-title'>{filteredNotes.length} {notesCategory}</div>
        <ul id='' className='notes-list'>
          {filteredNotes.map((item, index) => notesItem(item))}
        </ul>
    </div>
  )
}

export default ListView