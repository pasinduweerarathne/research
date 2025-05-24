import '../styles/login.css';
import logoImage from '../assets/login.jpg';
import bottom from '../assets/bottom.png';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../utils/api';
import Swal from 'sweetalert2';

export const Register = () => {
    const [full_name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const insertUser = () => {
        var data = {
            "full_name": full_name,
            "grade": grade,
            "gender": gender,
            "dob": dob,
            "role": "student",
            "username": username,
            "password": password
        }

        api.post('user', data).then(data => {
            console.log(data.status)
            if (data.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: data.msg,
                    showConfirmButton: false,
                    timer: 1600
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    text: "Error has occured while registering user.",
                    showConfirmButton: false,
                    timer: 1600
                })
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        insertUser()
        setName('')
        setGrade('')
        setGender('')
        setDob('')
        setUsername('')
        setPassword('')
    }

    return (
        <div className="grid-container" style={{ flexDirection: 'column' }}>
            <div className="grid-item" >
                <img src={logoImage} alt="Logo" width="100%" height="100%" />
            </div>
            <div className="content">
                <h1 style={{ margin: '10px 30px' }}>ගිණුමක් තනන්න</h1>
                <div className="log-form">
                    <Form onSubmit={handleSubmit}>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>සම්පූර්ණ නම</Form.Label>
                                        <Form.Control value={full_name} onChange={(e) => setName(e.target.value)} type="text" placeholder="සම්පූර්ණ නම" required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ශ්‍රේණිය</Form.Label>
                                        <Form.Control value={grade} onChange={(e) => setGrade(e.target.value)} type="text" placeholder="ශ්‍රේණිය" required/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ස්ත්‍රී පුරුෂ භාවය</Form.Label>
                                        <Form.Control value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="ස්ත්‍රී පුරුෂ භාවය" required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>පරිශීලක නාමය</Form.Label>
                                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="පරිශීලක නාමය" required/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>උපන් දිනය</Form.Label>
                                        <Form.Control value={dob} onChange={(e) => setDob(e.target.value)} type="date" placeholder="උපන් දිනය" required/>
                                    </Form.Group>
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>මුරපදය</Form.Label>
                                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="මුරපදය" required/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>මුරපදය තහවුරු කරන්න</Form.Label>
                                        <Form.Control type="password" placeholder="මුරපදය තහවුරු කරන්න" required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button type="submit" style={{ borderRadius: '15px', padding: '8px 30px 8px 30px', fontWeight: 'bold', backgroundColor: '#6282f3' }} >ලියාපදිංචි වෙන්න</Button>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                දැනටමත් ගිණුමක් තිබේද?
                            </Link>
                        </div>
                    </Form>
                </div>
                {/* <div style={{ position: "absolute", width: "50%", bottom: '0', opacity: '80%' }}>
                    <img src={bottom} alt="Logo" width="100%" height='80px' />
                </div> */}
            </div>
        </div>
    )
}
