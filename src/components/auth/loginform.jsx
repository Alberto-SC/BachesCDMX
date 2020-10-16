import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, FormLabel, Button, Container, Row, Col, Alert  } from 'react-bootstrap';
import { userActions } from '../../actions/user'
import "./login.css"
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
    render() {
        const { loggedIn, error } = this.props;
        console.log(error);
        console.log(loggedIn);
        let reDirect = loggedIn ? <Redirect to="/" push /> : '';
        const { email, password } = this.state;
        return (
            <Container>
                <Row className="show-grid">
                    <Col md={6}>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Usuario
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" id="email" name="email" placeholder="Usuario" value={ email } onChange={this.handleChange} required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col componentClass={FormLabel} sm={2}>
                                    Contraseña 
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" id="password" name="password" placeholder="Contraseña" value={ password } onChange={this.handleChange}  required />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="primary" type="submit">Sign in</Button>
                                    {' '}or{' '}<Link to="/signup">Register</Link>
                                </Col>
                            </FormGroup>
                            {reDirect}
                        </Form>
                        {error && <Alert bsStyle="danger"><p>{error}</p></Alert>}
                    </Col>
                </Row>
              </Container>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn, error } = state.authentication;
    return {
        loggedIn,
        error
    };
}

const connectedLoginForm = withRouter(connect(mapStateToProps)(LoginForm));
export { connectedLoginForm as  LoginForm };