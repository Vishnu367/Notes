import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterNotes } from '../../redux/action'
import { useNavigate } from 'react-router-dom'
import { notes } from '../../redux/sampleData'

function NavBar() {

  const [navToggles, setNavToggles] = useState(['All Notes', 'Notes', 'Check Box', 'Drawings'])
  const [activeIndex, setActiveIndex] = useState(0)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const notesData = useSelector(state => state.notes)
  // console.log(notesData)
  const { paths } = notesData
  const { categoryNotesPath } = paths

  return (
    <div>
        <nav id='nav-container' className='container'>
            <div id='nav-profile'>
                <img id='nav-profile-image'></img>
                <div id='nav-profile-name'>Roronoa Zoro</div>
            </div>
            <div id='nav-toggles'>
                {
                  navToggles.map((item,index) => {
                      return <button
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index)
                                    dispatch(setFilterNotes(item))
                                    navigate(`${categoryNotesPath}/${item}`)
                                  }}
                                className={`btn ${index === activeIndex ? 'btn-primary' : ''}`}
                              >
                                {item}
                              </button>
                  })
                }
                {/* <div className='btn btn-large'>+</div> */}
            </div>
            <div>
                <button id='nav-menu' className='btn btn-large btn-opp'>
                    <i class="fa-solid fa-bars"></i>
                </button>
                <button id='nav-setting' className='btn btn-opp '>
                        <i class="fa-solid fa-gear"></i>
                        Settings
                </button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar