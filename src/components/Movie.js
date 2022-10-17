import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/components/Movie.module.css";

function Movie({ id, coverImg, year, title, summary, genres }){
    return (
        <div className={styles.movie}>
            <Link to={`/movie/${id}`} >
                <img src={coverImg} alt={title} className={styles.movie__img} />
            </Link>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`} >{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre) => (<li key={genre}>{genre}</li>))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes

}

export default Movie;
