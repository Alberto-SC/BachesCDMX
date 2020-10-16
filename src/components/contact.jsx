import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-12 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Información de contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Direccion
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
      
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
