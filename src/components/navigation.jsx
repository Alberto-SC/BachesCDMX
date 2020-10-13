import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Baches CDMX
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Reportar
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  ¿Que es un bache?
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
              <li>
                <span >
                <i class="fa fa-user"></i>
                <Link activeClassName="active" exact to="/Login">
                  Iniciar sesión 
                </Link>
                </ span>
              </li>
              <li>
                <span>
                <i class="fa fa-user"></i>
                <Link activeClassName="active"  exact to="/Registro">
                    Registrarse
                </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
