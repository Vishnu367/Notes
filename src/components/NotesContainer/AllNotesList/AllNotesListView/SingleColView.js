import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import DOMPurify from 'dompurify'
import UserCheckBox from '../../UserNotes/UserCheckBox/UserCheckBox'
import { setUserNotesId } from '../../../../redux/action'

function SingleColView() {
  
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

    // const notesListItems = (evenOrOdd) => {
    //     const noteItems = []
    
    //     filteredNotes && filteredNotes.map((item,index) => {
    //       if (evenOrOdd === 'even') {
    //         if (item.id % 2 === 0) noteItems.unshift(item) //prepend(item)
    //         // else if (item.id === 1) noteItems.push(item)
    //         else return
    //       } else {
    //         if (item.id % 2 !== 0) {
    //           // if (item.id === 1) return
    //           noteItems.unshift(item) //prepend(item)
    //         } else return
    //       }
    //     })
    //     return noteItems && noteItems
    //   }

    const notesItem = (item) => {

        const textOverflowStyle = {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        } 
      
        const itemCotentWords = item.category === 'Notes' ? item.content.split(' ') : null
    
        // console.log(item)
      
          return item ? <li 
                    key={item.id}
                    className={
                                //checking user selected notes and iterated notes ids for highlighting seleted notes based on class.
                                `notes-item
                                ${(item.id === userNotesId) ? 'item-active' : null}
                                `
                              }
                    onClick={() => openNotes(item.id)}
                  >
                    <div className='notes-item-title'>{item.title}</div>
                    {
                      item.category === 'Notes' ? 
                        <p 
                          className='notes-item-content'
                          //if content words > 100 then it displays only 4 lines and then ellipsis
                          style={itemCotentWords.length > 75 ? textOverflowStyle : null}
                          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.content.replace('\n', '<br/>'))}}
                        ></p>
                        : 
                        <UserCheckBox items={item.items} cName={'notes-item-content'}/>
                    }
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

export default SingleColView