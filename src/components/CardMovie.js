import "./CardMovie.css";

const POSTER_URL = "https://image.tmdb.org/t/p/";

const renderPost = (path) => `${POSTER_URL}w220_and_h330_face${path}`;

const renderReleaseDate = (releaseDate) => {
  if (!releaseDate) {
    <p className="card-text">Não disponível</p>;
  }

  return <p className="card-text">{releaseDate}</p>;
};

function CardMovie({ movie }) {
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
        >
          Detalhes
        </button>
      </div>
    </div>
  );
}

export default CardMovie;
