import React from 'react'
import './Cover.css';
import videoCover from '../../Media/6.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
         
        <video className='video'src={videoCover} autoPlay loop muted></video>
            
    </div>
  )
}

export default Cover