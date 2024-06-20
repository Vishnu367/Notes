import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux'

function NavBar() {

  const [navToggles] = useState(['Home','Projects','Work'])
  const [activeIndex, setActiveIndex] = useState(0)

  const dispatch = useDispatch()

  const notesData = useSelector((state) => state.notes.notesData)

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
                      return <div 
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`btn ${index === activeIndex ? 'btn-primary' : ''}`}
                              >
                                {item}
                              </div>
                  })
                }
                <div className='btn btn-large'>+</div>
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