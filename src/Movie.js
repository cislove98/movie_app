import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({title,year,rating,genres,synopsis,poster}){
    return (
        <div classsname="movie">
            <div classsname="movie_title_year">
                <h3 classsname="movie_title">{title}</h3>
                <h5 clssssname="movie_year">{year}</h5>
            </div>
            <div classsname="movie_poster">
                <img src={poster} alt={title} title={title}></img>
            </div>
            <ul classsname="movie-geners">
                {genres.map((genre,index) => (
                    <li key={index} classsname="movie-geners-gener">{genre}</li>
                ))}
            </ul>
            <p classsname="movie_summery">{synopsis}</p>
            <div classsname="movie-rating">{rating}/10.0</div>
        </div>
    );
}

Movie.prototype={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    genre:PropTypes.arrayOf(PropTypes.string).isRequired,
    synopsis:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}
export default Movie;