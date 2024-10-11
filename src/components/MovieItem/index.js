// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <div className="thumbnail-container">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        </div>
      }
    >
      {close => (
        <div className="pop-up-container">
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size="20" />
          </button>
          <ReactPlayer url={videoUrl} className="react-player" />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
