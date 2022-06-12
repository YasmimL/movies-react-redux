import dateformat from "dateformat";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

import { renderPost } from "../helpers/Poster";

import "./ModalFavorites.css";

function renderMovie(movie, removeMovie) {
  return (
    <li className="favorite-movie list-group-item" key={movie.id}>
      <img src={renderPost(movie?.poster_path)} alt="Capa do Filme" />
      <div className="favorite-movie-title">
        <h5>{movie?.title}</h5>
        <span>{dateformat(movie?.release_date, "dd/mm/yyyy")}</span>
      </div>
      <Button variant="danger" onClick={() => removeMovie(movie)}>
        Remover
      </Button>
    </li>
  );
}

function ModalFavorites({ modalIsOpen, closeModal, onRemoveMovie }) {
  const { favorites } = useSelector((state) => state);

  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Favoritos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-group">
          {favorites.map((movie) => renderMovie(movie, onRemoveMovie))}
          {!favorites.length && <h5>Nenhum filme favorito.</h5>}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalFavorites;
