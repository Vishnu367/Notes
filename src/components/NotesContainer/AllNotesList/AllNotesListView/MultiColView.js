import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import DOMPurify from 'dompurify'
import UserCheckBox from '../../UserNotes/UserCheckBox/UserCheckBox'
import { setUserNotesId } from '../../../../redux/action'

function MultiColView() {

    const disptach = useDispatch()
    const navigate = useNavigate()

  const userNotesData = useSelector(state => state.notes)
  const { notes, userNotesId, paths, notesCategory } = userNotesData && userNotesData
  const { categoryNotesPath, userNotesPath, newNotesPath, newNotesPathId } = paths
  const filteredNotes = userNotesData.filteredNotes

  const pinnedNotes = filteredNotes ? [...filteredNotes.filter(note => note.isPin)] : null // reverse filltered notes that are pinned

  // console.log(filteredNotes)


    const openNotes = (notesId) => {
        navigate(`${categoryNotesPath}/${notesCategory}/${userNotesPath}/${notesId}`)
        disptach(setUserNotesId(notesId)) // used to open user selected notes based on id
        // console.log(notesId)
      }

    const notesListItems = (latestOrold) => {
        const noteItems = []
    
        filteredNotes && filteredNotes.map((item,index) => {
          if (latestOrold === 'latest') {
            if (item.id % 2 === 0) noteItems.push(item) //prepend(item)
            // else if (item.id === 1) noteItems.push(item)
            else return
          } else {
            if (item.id % 2 !== 0) {
              // if (item.id === 1) return
              noteItems.push(item) //prepend(item)
            } else return
          }
        })
        return noteItems && noteItems
      }    

    const notesItem = (item) => {

        const textOverflowStyle = {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        } 
      
        const itemCotentWords = item.category === 'Notes' ? item.content.split(' ') : null //count of words of content
        
        // console.log(item)

          return item ? <li 
                    key={item.id}
                    className={
                                //checking user selected notes and iterated notes ids for highlighting seleted notes based on class.
                                `notes-item
                                ${(item.id === userNotesId)? 'item-active' : null}
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
              <div
                className='notes-count-title'
              >
                {pinnedNotes.length} Pinned
              </div>
              <div 
                className='notes-list-container'
              >
                <ul id='pinned-notes-list' className='notes-list'>
                  {pinnedNotes.filter((item, index) => index % 2 === 0 ? item : null).map(note => notesItem(note))}
                </ul>
                <ul id='pinned-notes-list' className='notes-list'>
                  {pinnedNotes.filter((item, index) => index % 2 !== 0 ? item : null).map(note => notesItem(note))}
                </ul>
              </div> 
            </div> : null
          }
          <div className='notes-count-title'>{filteredNotes.length} {notesCategory}</div>
          <div className='notes-list-container'>
            {/* latest note list */}
            <ul id='left-col-list' className='notes-list'>
              {/* updateing notes list based on the latest or last notes id. weather it is 'latest' or 'old' */}
              {notesListItems(filteredNotes[0].id % 2 === 0 ? 'latest' : 'old').map((item, index) => notesItem(item))}
            </ul>
            <ul id='right-col-list' className='notes-list'>
              {/* updateing notes list based on the SECOND latest or SECOND last notes id. weather it is 'latest' or 'old' */}
              {notesListItems(filteredNotes[0].id % 2 === 0 ? 'old' : 'latest').map((item, index) => notesItem(item))}
            </ul>
          </div>
    </div>
  )
}

export default MultiColView