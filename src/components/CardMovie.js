import dateformat from "dateformat";

import { renderPost } from "../helpers/Poster";

import "./CardMovie.css";

const renderReleaseDate = (releaseDate) => {
  if (!releaseDate) {
    <p className="card-text">Não disponível</p>;
  }

  return <p className="card-text">{dateformat(releaseDate, "dd/mm/yyyy")}</p>;
};

function CardMovie({ movie, onClickDetails }) {
  return (
    <div className="card shadow">
      <img
        src={renderPost(movie.poster_path)}
        className="card-img-top"
        alt="Capa do Filme"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        {renderReleaseDate(movie.release_date)}

        <button
          type="button"
          className="btn btn-primary"
          tooltip="Detalhes do filme"
          placement="top"
          onClick={() => onClickDetails(movie)}
        >
          Detalhes
        </button>
      </div>
    </div>
  );
}

export default CardMovie;
