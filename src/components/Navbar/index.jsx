import "./navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          GT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                INICIO
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                OFERTAS
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PRODUCTOS
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Camisetas
                </a>
                <a class="dropdown-item" href="#">
                  Shorts
                </a>
                <a class="dropdown-item" href="#">
                  Musculosas
                </a>
                <a class="dropdown-item" href="#">
                  Camperas
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
          <form class="d-flex">
          <button type="button" class="btn btn-info"><BsFillCartFill />
            <p>3</p></button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
