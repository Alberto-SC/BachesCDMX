import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../actions/user'
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
      const { dispatch } = this.props;
      dispatch(userActions.logout());
  }
  render() {
    const { loggedIn, user } = this.props;
    // let reDirect = !loggedIn ? <Redirect to="/login" push /> : '';
    let welcomeMessage = !loggedIn ? '' :
    <li> <h3>Welcome {user.nombre}</h3> <Button className="btn btn-primary" onClick={this.handleLogout}>Logout</Button>
        {user.admin?
        <Button className="btn btn-primary"><Link to ="/Gestionar" className="white">Gestionar reportes</Link></Button>:
        <Button className="btn btn-primary"><Link to ={{pathname: "/viewReports",state:{usuario:user}}} className="white">Ver mis reportes</Link></Button>}

    </li>; 
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
              <Link to ="/">
                Baches CDMX
              </Link>
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
              {welcomeMessage?welcomeMessage:
                <li>
                  <a>
                  <i class="fa fa-user"></i>
                  {welcomeMessage}
                  <Link activeClassName="active" exact to="/Login">
                    Iniciar sesión 
                  </Link>
                  </a> 
                </li>
              }
              {welcomeMessage?'':
                <li>
                  <a>
                  {/* <i class="fa fa-user"></i> */}
                  <Link activeClassName="active"  exact to="/Sign">
                      Registrarse
                  </Link>
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn, user } = state.authentication;
  return {
      loggedIn,
      user
  };
}

const connectedApp = withRouter(connect(mapStateToProps)(Navigation));
export { connectedApp as  Navigation };


