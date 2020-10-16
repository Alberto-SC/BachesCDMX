import React, { Component } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import "./sign.css"
export class Report extends Component {
  render() {
    return (
        
<Container  className ="con-centered">
      <Row className="show-grid rowS" >
          <Col md = {12}>
              <h3>Genera un reporte</h3>

          </Col>
          <Col md={12}>
              <Form horizontal>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Locación:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="locacion" className="u-full-width" placeholder="Lugar" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Tamaño:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="tamanio" className="u-full-width" placeholder="Grande/Mediano/Chico" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Ancho Aproximado:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="ancho" className="u-full-width" placeholder="Ancho" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Largo Aproximado:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="largo" className="u-full-width" placeholder="Largo" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Profundidad:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="profundidad" className="u-full-width" placeholder="Profundidad" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                          Referencia 1:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="Ref1" className="u-full-width" placeholder="Referencia 1" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Referencia 2:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="text" name="Ref2" className="u-full-width" placeholder="Referencia 2" />
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Col componentClass={FormLabel} sm={2}>
                      Fecha:
                      </Col>
                      <Col sm={10}>
                          <FormControl type="date" name="fech" className="u-full-width" />
                      </Col>
                  </FormGroup>

                  <FormGroup>
                      <Col smOffset={2} sm={10}>
                          <Button className ="buttonS" bsStyle="primary" type="submit">Sign up</Button>
                          {' '}
                          <Button className="buttonS" ><Link to ="/" className="white">Cancelar</Link></Button>
                      </Col>
                  </FormGroup>
              </Form>
          </Col>
      </Row>
  </Container>
 
    );
  }
}

export default Report;
