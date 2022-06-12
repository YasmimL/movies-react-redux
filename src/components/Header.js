import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Header.css";

function renderMoviesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-film"
      viewBox="0 0 16 16"
    >
      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
    </svg>
  );
}

function renderBadge(favorites) {
  if (!favorites?.length) {
    return null;
  }

  return (
    <Badge pill bg="primary">
      {favorites.length}
    </Badge>
  );
}

function Header({ onClickFavorites }) {
  const { favorites } = useSelector((state) => state);

  return (
    <nav className="navbar navbar-dark bg-dark movies-header">
      <div className="header-title">
        {renderMoviesIcon()}
        <h5>Filmes</h5>
      </div>

      <div className="header-separator"></div>

      <div className="header-favorites">
        <button
          className="btn btn-light btn-favorites"
          type="button"
          onClick={onClickFavorites}
        >
          <span>Favoritos</span>
          {renderBadge(favorites)}
        </button>
      </div>
    </nav>
  );
}

export default Header;
