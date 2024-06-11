import "bootstrap/dist/css/bootstrap.min.css";
import "./main_guest.css";
import bank from "../assets/img/bank.png";
import bag from "../assets/img/bag.png";
import star from "../assets/img/star.png";
import megaphone from "../assets/img/megaphone.png";
import plan from "../assets/img/plan.png";
import laptop from "../assets/img/laptop.png";
import logo from "../assets/img/logo.png";

export const Main_guest = () => {
  return (
    <div >
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <a className="navbar-brand logo" href="#" >
            <img src={logo} alt="XD" className="img_logo" />
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
          <h1 className="title_hero">bank sternenfall</h1>
        </section>
        <section className="features container">
          <div className="row">
            <div className="feature col-md-12">
              <img src={bank} alt="Cuentas" className="img-fluid" />
              <h2>Cuentas</h2>
            </div>
            <div className="feature col-md-12">
              <img src={bag} alt="Creditos" className="img-fluid" />
              <h2>Creditos</h2>
            </div>
            <div className="feature col-md-12">
              <img src={star} alt="Beneficios" className="img-fluid" />
              <h2>Beneficios</h2>
            </div>
          </div>
        </section>
        <section className="features container">
          <div className="row">
            <div className="feature col-md-12">
              <img src={megaphone} alt="Cuentas" className="img-fluid" />
              <h2>Cuentas</h2>
            </div>
            <div className="feature col-md-12">
              <img src={plan} alt="Creditos" className="img-fluid" />
              <h2>Creditos</h2>
            </div>
            <div className="feature col-md-12">
              <img src={laptop} alt="Beneficios" className="img-fluid" />
              <h2>Beneficios</h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
