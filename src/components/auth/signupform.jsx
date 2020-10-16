/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import "./sign.css"
export class SignupForm extends Component {
    render() {
        return (
            // <div >

            <Container  className ="con-centered">
                <Row className="show-grid rowS" >
                    <Col md = {6}>
                        <h3>Registrarse</h3>

                    </Col>
                    <Col md={12}>
                        <Form horizontal>
                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Nombre
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="fullname" name="fullname" placeholder="Full Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Usuario
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" id="username" name="username" placeholder="Username" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" id="email" name="email" placeholder="Email" required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Contraseña
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password" name="password" placeholder="Password" required />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Repetir contraseña
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password_check" name="password_check" placeholder="Password" required />
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
            // </div>
        );
    }
}

export default SignupForm;