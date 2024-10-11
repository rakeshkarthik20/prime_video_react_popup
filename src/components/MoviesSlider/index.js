// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings}>
      {data.map(each => (
        <div key={each.id}>
          <MovieItem movieDetails={each} />
        </div>
      ))}
    </Slider>
  )
}

export default MoviesSlider
