import MoviePoster from '../movieposter/MoviePoster'
import Skelleton from './Skelleton'
import './carousel.css'

const Carousel = ({ category, icon, films, isLoading, emptyMessage }) => {
  if (isLoading) return <Skelleton />
  if (!films.length && !emptyMessage) return null

  return (
    <div className="carousel__container">
      <h3 className="carousel__category">
        {icon && <span className="carousel__category-icon">{icon}</span>}
        {category}
      </h3>
      {films.length > 0 ? (
        <div className="carousel__items">
          {films.map((item) => (
            <MoviePoster key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p className="carousel__empty">{emptyMessage}</p>
      )}
    </div>
  )
}

export default Carousel
