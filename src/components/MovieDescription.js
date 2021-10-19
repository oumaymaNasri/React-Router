import StarRatingComponent from "react-star-rating-component";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './MovieDescription.css'

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const [movie, setMovies] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    setMovies(newMovie);
  }, []);
  return (
    <div className="movie-card">
      <iframe
        width="300"
        height="315"
        src={movie.trailerURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h4 className="card-title">{movie.title}</h4> <br />
      <br />
        {movie.description}
       <br /> <br />
      <StarRatingComponent name="rate1" starCount={5} value={movie.rate} />
      <div className="card-foorter">{movie.rating}</div>
      <button variant="primary">
        {/* <Link to={`/details/${el.id}`}>Go somewhere</Link> */}
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
};

export default MovieDescription;
