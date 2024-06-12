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
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <img src={logo} alt="XD" className="img_logo" />
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
                <button className="Btn" href="#">
                  <img src={bank} alt="icon" /> Cuentas
                </button>
              </li>
              <li className="nav-item">
                <button className="Btn" href="#">
                  <img src={bag} alt="icon" /> Creditos
                </button>
              </li>
              <li className="nav-item">
                <button className="Btn" href="#">
                  <img src={star} alt="icon" /> Beneficios
                </button>
              </li>
              <li className="nav-item" href="#">
                <button className="Btn">
                  <img src={megaphone} alt="icon" /> Ofertas
                </button>
              </li>
              <li className="nav-item">
                <button className="Btn" href="#">
                  <img src={plan} alt="icon" /> Planes
                </button>
              </li>
              <li className="nav-item">
                <button className="Btn" href="#">
                  <img src={laptop} alt="icon" /> Recargos
                </button>
              </li>
              <li className="nav-item">
                <button className="Btn" href="#">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero jumbotron text-center">
          <h1 className="title_hero">bank sternenfall</h1>
        </section>
        <section className="features container section-with-line">
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
              <img src={megaphone} alt="Ofertas" className="img-fluid" />
              <h2>Promociones</h2>
            </div>
            <div className="feature col-md-12">
              <img src={plan} alt="Creditos" className="img-fluid" />
              <h2>Planes</h2>
            </div>
            <div className="feature col-md-12">
              <img src={laptop} alt="Beneficios" className="img-fluid" />
              <h2>Recargos</h2>
            </div>
          </div>
        </section>
        <section className="features container">
          <div className="row">
            <div className="feature col-md-4">
              <h3 className="h3-border">
                Descuento aplica al realizar el pago del 1 de enero al 31 de
                diciembre 2024 en MAX, Netflix, Amazon Prime Video, Disney Plus,
                Star Plus, Paramount Plus y/o HULU. El monto máximo de reintegro
              </h3>
            </div>
            <div className="feature col-md-4">
              <h3 className="h3-border">
                Cuenta Corriente de Ahorro en quetzales en donde tienes la
                disponibilidad inmediata de tus fondos. Además, no tienes ningún
                recargo por manejo de cuentas y tendras beneficios por la cuenta.
              </h3>
            </div>
            <div className="feature col-md-4">
              <h3 className="h3-border">
                Rercargo por no pago en la fecha maxima de pago de la tarjeta, se dara
                si la cuota en mora es igual o mayor a US$5.00. Consiste en un
                porcentaje sobre el capital en mora, con un monto maximo establecido.
              </h3>
            </div>
          </div>
        </section>
        <section className="hero_final">
          <h2>bank sternenfall</h2>
        </section>
        <footer className="footer">
          <p>&copy; 2024 Bank Sternenfall. Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
};
