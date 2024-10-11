// Write your code here
import MoviesSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="prime-video-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-image"
      />
      <p className="para">Developed by Rakesh karthik</p>
      <div className="movie-category-container">
        <h1 className="movie-category-heading">Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider data={actionMovies} />
        </div>

        <h1 className="movie-category-heading">Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider data={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
