import React from 'react'

const Modal = ({handleClose,handleAccept}) => {
  return (
    <div className='modal'>  
      <div className='offerbanner'>
        <button className='cancel' onClick={handleClose}>
            x 

        </button>

        <div  className='content'>
            Click the button below to
            accept  our amazing offer!
        </div>


        <button onClick={handleAccept} className='acceptbtn'>Accept Offer!</button>
      
    </div>
    </div>

  )
}

export default Modal
