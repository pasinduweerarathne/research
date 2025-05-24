import { Button, Col, Row } from 'react-bootstrap';
import user from '../assets/bgw1.jpg';
import styles from '../styles/style.module.css';
import logoImage from '../assets/height.png';
import back from '../assets/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { LessonItem } from '../components/LessonItem';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const LessonS = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        api.filter('lessons/filter', 's')
            .then(res => {
                const rec = res?.data?.sort((a, b) => a.lesson.localeCompare(b.lesson));
                setItems(rec)
            })
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url(${user})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh'
            }}
        >
            <div className={styles.home} style={{ color: "#973333" }}>
                <div style={{ display: "flex", justifyContent: "flex-Start", margin: '5px' }}>
                    <img src={back} alt="back" width="5%" onClick={() => navigate('/sms')} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                    <h1>හැඩතල</h1>
                </div>
                <Row className="mt-1">
                    <Col sm={4}>
                        <img src={logoImage} alt="Logo" width="80%" height="100%" />
                    </Col>
                    <Col>
                        <Row>
                            {items.slice(0,4)?.map((item) => (
                                <LessonItem key={item.id} data={item} />
                            ))}
                        </Row>

                        <Link to="/qs" style={{ textDecoration: 'none' }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", margin: '15px' }}>
                                <Button style={{ borderRadius: '15px', padding: '8px 30px 8px 30px', fontWeight: 'bold', backgroundColor: '#c562f3', borderColor: '#c562f3' }}>ප්‍රශ්නාවලිය</Button>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
