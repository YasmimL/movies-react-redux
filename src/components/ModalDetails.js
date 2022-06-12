import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import dateformat from "dateformat";

import { renderPost } from "../helpers/Poster";

import "./ModalDetails.css";

const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-heart"
    viewBox="0 0 16 16"
  >
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
  </svg>
);

const heartFillIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-heart-fill"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
    />
  </svg>
);

function renderFavoriteIcon(favorites, movie) {
  if (favorites.some((it) => it.id === movie.id)) {
    return heartFillIcon;
  }

  return heartIcon;
}

function ModalDetails({ modalIsOpen, closeModal, onToggleFavorite }) {
  const { selectedMovie: movie, favorites } = useSelector((state) => state);

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Detalhes do Filme</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="movie-details">
          {movie && (
            <img
              src={renderPost(movie.poster_path, "large")}
              className="card-img-top"
              alt="Capa do Filme"
            />
          )}
          <div className="details">
            <div className="title">
              <h2>{movie?.title}</h2>
              <button
                type="button"
                className="btn"
                onClick={() => onToggleFavorite(movie)}
              >
                {movie && renderFavoriteIcon(favorites, movie)}
              </button>
            </div>
            <div className="infos">
              <p>
                <span className="movie-label">Lançamento: </span>
                {dateformat(movie?.release_date, "dd/mm/yyyy")}
              </p>
              <p>
                <span className="movie-label">Linguagem Original: </span>(
                {movie?.original_language?.toUpperCase()})
              </p>
              <p>
                <span className="movie-label">Nota: </span>
                {movie?.vote_average}
              </p>
              <p>
                <span className="movie-label">Quantidades de votos: </span>
                {movie?.vote_count}
              </p>
              <p>
                <span className="movie-label">Detalhes: </span>
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetails;
