import { useFilms } from "../../hooks/useFilms";
import { useFavorites } from "../../hooks/useFavorites";
import { OSCAR_NOMINEE_IDS } from "../../data/oscarNominees";
import Carousel from "../../components/carousel/Carousel";
import Skelleton from "../../components/carousel/Skelleton";
import Menu from "../../components/menu/Menu";
import RecommendedMovie from "../../components/recommendedmovie/RecommendedMovie";
import { HeartIcon, WindIcon, StarIcon, TrophyIcon } from "../../components/icons/NavIcons";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "./home.css";

const MIYAZAKI = "Hayao Miyazaki";
const TOP_RATED_COUNT = 10;

const HomeScreen = () => {
  const { films, isLoading } = useFilms();
  const { favoriteIds } = useFavorites();

  if (isLoading) {
    return (
      <div className="home__container">
        <Header />
        <div className="home__hero-skeleton" />
        <Skelleton />
        <Skelleton />
        <Skelleton />
        <Menu />
      </div>
    );
  }

  const byScoreDesc = [...films].sort((a, b) => Number(b.rt_score) - Number(a.rt_score));
  const featuredFilm = byScoreDesc[0];

  const myListFilms = films.filter((f) => favoriteIds.includes(f.id));
  const miyazakiFilms = films.filter((f) => f.director === MIYAZAKI);
  const topRatedFilms = byScoreDesc.filter((f) => f.id !== featuredFilm?.id).slice(0, TOP_RATED_COUNT);
  const oscarFilms = films.filter((f) => OSCAR_NOMINEE_IDS.includes(f.id));

  return (
    <div className="home__container">
      <Header />
      <RecommendedMovie film={featuredFilm} />

      <Carousel
        category="Mi lista"
        icon={<HeartIcon filled />}
        films={myListFilms}
        isLoading={false}
        emptyMessage="Toca el corazón en una película para guardarla aquí."
      />
      <Carousel
        category="Dirigidas por Miyazaki"
        icon={<WindIcon />}
        films={miyazakiFilms}
        isLoading={false}
      />
      <Carousel
        category="Mejor valoradas"
        icon={<StarIcon />}
        films={topRatedFilms}
        isLoading={false}
      />
      <Carousel
        category="Nominadas al Oscar"
        icon={<TrophyIcon />}
        films={oscarFilms}
        isLoading={false}
      />

      <Menu />
      <Footer />
    </div>
  );
};

export default HomeScreen;
