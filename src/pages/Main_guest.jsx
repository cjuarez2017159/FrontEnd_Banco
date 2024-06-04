import "bootstrap/dist/css/bootstrap.min.css";
import "./main_guest.css";

export const Main_guest = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand logo" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cuentas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ...
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ...
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ...
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ...
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero jumbotron text-center">
          <h1>bank sternenfall</h1>
        </section>
        <section className="features container">
          <div className="row">
            <div className="feature col-md-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Cuentas"
                className="img-fluid"
              />
              <h2>Cuentas</h2>
            </div>
            <div className="feature col-md-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Creditos"
                className="img-fluid"
              />
              <h2>Creditos</h2>
            </div>
            <div className="feature col-md-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Beneficios"
                className="img-fluid"
              />
              <h2>Beneficios</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
