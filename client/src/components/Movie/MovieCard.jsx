import React, { useContext, useState } from "react";
import { getImgUrl } from "../../utils/movieUtils.js";
import Rating from "./Rating.jsx";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import { movieContext } from "../../context/index.js";
import { assets } from "../../assets/assets.js";

const MovieCard = ({ movie }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(movieContext);

  const handleModalClose = (movie) => {
    setSelectedMovie(null);
    setModalShow(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setModalShow(true);
  };

  const hanldeAddToCart = (e, movie) => {
    e.stopPropagation();

    const existingMove = state.cartData.find((item) => item.id === movie.id);

    if (existingMove) {
      alert("The movie has been added to the cart already");
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    }
  };
  return (
    <>
      {modalShow && (
        <MovieDetailsModal
          movie={selectedMovie}
          onclose={() => handleModalClose(movie)}
          onCartAdd={hanldeAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => hanldeAddToCart(e, movie)}
            >
              <img src={assets.tag} />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
