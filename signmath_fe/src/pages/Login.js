import '../styles/login.css';
import logoImage from '../assets/login.jpg';
import bottom from '../assets/bottom.png';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../utils/api';

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const signIn = async () => {
        var data = {
            "username": username,
            "password": password
        }

        await api.signIn('user/login', data)
        navigate("/")
        window.location.reload();
    }

    const handleNavigate = () => {
        navigate("/login");
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signIn()
        setUsername('')
        setPassword('')
    }

    return (
        <div className="grid-container" style={{ flexDirection: 'column' }}>
            <div className="grid-item" >
                <img src={logoImage} alt="Logo" width="100%" height="100%" />
            </div>
            <div className="content">
                <h1 style={{ margin: '50px 30px' }}>ඇතුල් වන්න</h1>
                <div className="log-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>පරිශීලක නාමය</Form.Label>
                            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="පරිශීලක නාමය" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>මුර පදය</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="මුර පදය" required/>
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button type="submit" size="lg" style={{ borderRadius: '15px', padding: '8px 30px 8px 30px', fontWeight: 'bold', backgroundColor: '#6282f3' }}>පුරන්න</Button>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                ගිණුමක් සාදන්න
                            </Link>
                        </div>
                    </Form>
                </div>
                {/* <div style={{ position: "absolute", width: "50%", bottom: '0' }}>
                    <img src={bottom} alt="Logo" width="100%" />
                </div> */}
                {/* <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container> */}
            </div>
        </div >
    )
}
