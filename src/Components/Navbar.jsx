export const NavBar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <span className="badge bg-light text-dark fs-8">
            News <span className="badge bg-danger fs-8">Magazine</span>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" onClick={() => setCategory("technology")}>
              Technology
            </a>
            <a className="nav-link" onClick={() => setCategory("business")}>
              Business
            </a>
            <a
              className="nav-link"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </a>
            <a className="nav-link" onClick={() => setCategory("health")}>
              Health
            </a>
            <a className="nav-link" onClick={() => setCategory("science")}>
              Science
            </a>
            <a className="nav-link" onClick={() => setCategory("sport")}>
              Sport
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
