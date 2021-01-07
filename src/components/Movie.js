import React from "react";
import {Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./reset.css";
import "./Movie.css";

function Movie({id,title,year,rating,genres,synopsis,poster}){
    return (
        <Link to={{
            pathname:`/movie/${id}`,
            state:{
                title,
                year,
                poster,
                genres,
                rating,
                synopsis
            }
        }}>
            <div class="movie">
                <img src={poster} alt={title} title={title}></img>
                <div class="movie_info">
                    <div class="movie_title_year">
                        <div class="movie_title">{title}</div>
                        <div class="movie_year">{year}</div>
                    </div>
                    <ul class="movie-geners">
                        {genres.map((genre,index) => (
                            <li key={index} class="movie-geners-gener">{genre}</li>
                        ))}
                    </ul>
                    <div class="movie-rating">{rating} / 10.0</div>
                    <p class="movie_summery">{synopsis.slice(0,180)}</p>
                </div>
            </div>
        </Link>
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