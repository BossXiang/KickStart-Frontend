import React, { useState, useEffect } from 'react'
import '../styles/Gallery.scss'
import 'aframe'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate = useNavigate()
  const [wPressed, setWPressed] = useState(false);
  const [aPressed, setAPressed] = useState(false);
  const [sPressed, setSPressed] = useState(false);
  const [dPressed, setDPressed] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === 'W' || event.key === 'w') setWPressed(true);
      else if(event.key === 'A' || event.key === 'a') setAPressed(true);
      else if(event.key === 'S' || event.key === 's') setSPressed(true);
      else if(event.key === 'D' || event.key === 'd') setDPressed(true);
    };

    const handleKeyUp = (event) => {
      if(event.key === 'W' || event.key === 'w') setWPressed(false);
      else if(event.key === 'A' || event.key === 'a') setAPressed(false);
      else if(event.key === 'S' || event.key === 's') setSPressed(false);
      else if(event.key === 'D' || event.key === 'd') setDPressed(false);
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const gotoOurWork = () => {
    // navigate('/ourwork')
    window.location.href = '/ourwork';
    // Reset scroll behavior to default
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.documentElement.style.overscrollBehaviorY = 'auto';
    document.body.style.overscrollBehaviorY = 'auto';
  }



  return (
    <div>
      <div className='gallery-ui-topleft'>
        <button onClick={gotoOurWork} className='goBack' >Back</button>
      </div>
      <div className='gallery-ui-bottomleft'>
        <div className='keyboard'>
          <img src="/assets/img/letter-w.png" alt="w" className={`letter ${wPressed ? 'full-opacity' : ''}`} />
          <div className='keyboard-lower'>
            <img src="/assets/img/letter-a.png" alt="a" className={`letter ${aPressed ? 'full-opacity' : ''}`} />
            <img src="/assets/img/letter-s.png" alt="s" className={`letter ${sPressed ? 'full-opacity' : ''}`} />
            <img src="/assets/img/letter-d.png" alt="d" className={`letter ${dPressed ? 'full-opacity' : ''}`} />
          </div>
        </div>
      </div>
      <div className='aframeContainer'>
        <a-scene>
          
          <a-image src="/assets/samples/sample1.jpg" position="3.99 2 0" rotation="0 90 0" width="3" height="3"></a-image>
          <a-image src="/assets/samples/sample12.jpg" position="0 4 -19.9" rotation="0 0 0" width="5" height="5"></a-image>


          <a-plane position="0 8 0" rotation="90 0 0" width="8" height="40" color="#4d0808"></a-plane>
          <a-plane position="-4 4 0" rotation="0 90 90" width="8" height="40" color="#fadcdc"></a-plane>
          <a-plane position="4 4 0" rotation="0 -90 -90" width="8" height="40" color="#fadcdc"></a-plane>
          <a-plane position="0 0 0" rotation="-90 0 0" width="8" height="40" color="#4d0808"></a-plane>
          <a-plane position="0 4 -20" rotation="0 0 0" width="8" height="8" color="#007063"></a-plane>

          <a-camera>
            {/* <a-cursor></a-cursor> */}
          </a-camera>

          <a-sky color="#ECECEC"></a-sky>
        </a-scene>
      </div>
    </div>
  )
}

export default Gallery
