import React from 'react'
import { useState } from 'react'
import Modal from './Modal'

import './App.css'

const App = () => {

  const [isshow , setIsshow]=useState(false)
  const [isAccepted, setIsAccepted]=useState(false)

  const handleOpen=()=>{
    setIsshow(true)
  }
  const handleClose=()=>{
    setIsshow(false)
  }

  const handleAccept=()=>{
    setIsAccepted(true)
    setIsshow(false)

  }
  return (
    <div>
      
      <div className='showoffer'>
        {
          !isAccepted &&  <button  
           className='offerbtn'     
              onClick={handleOpen}
          >
            Show Offer</button>
        }
        {
          isAccepted && <div className='order'>Offer Accepted !!
          
          <div class="loop-wrapper">
  <div class="mountain"></div>
  <div class="hill"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="rock"></div>
  <div class="truck"></div>
  <div class="wheels"></div>
</div> 
          </div>
        }
       

      </div>

      { 
        isshow && <Modal
         handleClose={handleClose} handleAccept={handleAccept}/>
      }
    </div>
  )
}

export default App
