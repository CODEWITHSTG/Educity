// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './VideoPlayer.css'
import vid1 from '../../assets/vid1.mp4'

const VideoPlayer = ({playState, setPlayState})  => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={vid1} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
