import React, { useState } from 'react'
import './UserCheckBox.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckboxItemsMerge } from '../../../../redux/action'

function UserCheckBox(checkboxItems) {

    const {items, cName} = checkboxItems

    const dispatch = useDispatch()

    const [viewCheckboxItems, setViewCheckboxItems] = useState(true)

    const notesData = useSelector(state => state.notes)
    const { isCheckboxItemsMerge } = notesData

    const checkedItems = items.filter(item => item.checked)
    const unCheckedItems = items.filter(item => !item.checked)

    // console.log(checkedItems.length, unCheckedItems)
    // console.log(isCheckboxItemsMerge)

  return (
    <div>
      <div id='checkbox-style-toggle'>
        <input type='checkbox' onChange={() => dispatch(setCheckboxItemsMerge())} />
      </div>
        {isCheckboxItemsMerge ? <div>
          {
            items.map((item,index) => {
              return !item.checked ? <div id='checkbox-content-container' key={index}>
                    <input 
                      className='checkbox-input' 
                      type='checkbox'
                      disabled={cName === 'notes-item-content' ? true : false}
                    ></input>
                    <label className={cName} >{item.content}</label>
              </div> : <div id='checkbox-content-container' key={index}>
                    <input 
                      className='checkbox-input' 
                      type='checkbox' 
                      checked
                      disabled={cName === 'notes-item-content' ? true : false}
                    ></input>
                    <label className={`line-through ${cName}`} checked >{item.content}</label>
                    </div>
            })
        } </div>
        : <div>
        {
            unCheckedItems.map((item,index) => {
              return <div id='checkbox-content-container' key={index}>
                    <input 
                      className='checkbox-input' 
                      type='checkbox' 
                      disabled={cName === 'notes-item-content' ? true : false}
                    ></input>
                    <label className={cName} >{item.content}</label>
              </div> 
            })
            }
            {
                cName === 'notes-item-content' ? <div className={cName}>+ {checkedItems.length} checked items</div>
                : <div>
                    <button
                      id='checked-title-btn'
                      onClick={() => setViewCheckboxItems(!viewCheckboxItems)}
                    >
                      <i 
                        className={`checked-items-arrow fa-solid ${ viewCheckboxItems ? 'fa-arrow-down' : 'fa-arrow-up'}`}
                      ></i> {checkedItems.length} Checked items
                    </button>
                    {
                        <div className={viewCheckboxItems ? 'display-block' : 'display-none'}>
                          {checkedItems.map((item,index) => {
                            return <div 
                                id='checkbox-content-container' 
                                key={index}
                              >
                              <input 
                                className='checkbox-input' 
                                type='checkbox' 
                                checked
                                disabled={cName === 'notes-item-content' ? true : false}
                              ></input>
                              <label className={`line-through ${cName}`} checked >{item.content}</label>
                              </div>
                            })}
                        </div>
                    }
                </div> 
            } </div>
            }
    </div>
  )
}

export default UserCheckBox