import { useFilms } from '../../hooks/useFilms'
import MoviePoster from '../movieposter/MoviePoster'
import Skelleton from './Skelleton';
import './carousel.css'

const Carousel = ({ category }) => {

  const { films, isLoading } = useFilms();

  if (isLoading) return <Skelleton />

  return (
    <div className="carousel__container">
      <h3 className="carousel__category">{category}</h3>
      <div className="carousel__items">
        {films.map(item =>
          <MoviePoster key={item.id} {...item} />
        )}
      </div>
    </div>
  )
}

export default Carousel
