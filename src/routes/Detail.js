import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/routes/Detail.module.css"

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([])


    /* API 받아오기 */
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
        setMovie(json.data.movie);
        setGenres(json.data.movie.genres);
        setLoading(false);
    }

    useEffect(() => {
        if (id !== "" && id.length > 1) {
            getMovie();
        }
    }, [id])

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movie}>
                    <img
                    src={movie.background_image_original}
                    alt={movie.background_image_original}
                    className={styles.movie__bg_img}
                    />
                    <div className={styles.movie__header}>
                        <div className={styles.movie__big__title}>
                            <img
                                src={movie.medium_cover_image}
                                alt={movie.medium_cover_image}
                                className={styles.movie__img}
                            />
                            <div>
                                <h1 className={styles.movie__title}> {movie.title} </h1>
                                <div className={styles.movie__year}>
                                    <span>{movie.year}년 • </span>
                                    <span>{movie.runtime}분</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.movie__rate__row}>
                        <div className={styles.movie__rate}>rate: {movie.rating} </div>
                        <div className={styles.movie__rate}>
                            download: {movie.download_count}
                        </div>
                        <div className={styles.movie__rate}>
                            like: {movie.like_count}{" "}
                        </div>
                    </div>

                    <div className={styles.movie__content}>
                        <div>{movie.description_full}</div>
                        <div className={styles.movie__genres}>
                            {genres.map((g) => (
                                <span key={g}>{g} </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;
