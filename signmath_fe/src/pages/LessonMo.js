import { Button, Col, Row } from 'react-bootstrap';
import user from '../assets/bgw1.jpg';
import styles from '../styles/style.module.css';
import logoImage from '../assets/numbers1.png';
import back from '../assets/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { LessonItem } from '../components/LessonItem';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const LessonMo = () => {
    const [items, setItems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        api.filter('lessons/filter','mo')
            .then(res => {
                const rec = res?.data?.sort((a, b) => a.lesson.localeCompare(b.lesson));
                setItems(rec)
            })
    }, [])

    return (
        <div
            style={{
                backgroundImage: `url(${user})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '92vh'
            }}
        >
            <div className={styles.home} style={{ color: "#973333" }}>
                <div style={{ display: "flex", justifyContent: "flex-Start", margin: '5px' }}>
                    <img src={back} alt="back" width="5%" onClick={() => navigate('/mon')} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>මුලික ගණිත කර්ම</h1>
                </div>
                <Row className="mt-1">
                    <Col className="mt-5" sm={4}>
                        <img src={logoImage} alt="Logo" width="100%" height="100%" />
                    </Col>
                    <Col>
                        <Row>
                            {items?.map((item) => (
                                <LessonItem key={item.id} data={item} />
                            ))}
                            {/* {(function (rows, i, len) {
                                while (++i <= len) {
                                    rows.push(<LessonItem />)
                                }
                                return rows;
                            })([], 0, 6)} */}
                        </Row>
                        {/* <Link to="/lnp" style={{ textDecoration: 'none' }}>
                            <Card className={styles.lesson_card} style={{ backgroundColor: '#db63ef', color: 'white', height: '8rem' }}>
                                <h3 style={{ fontWeight: 'bold' }}>Number Patterns</h3>
                            </Card>
                        </Link> */}

                        <Link to="/qmo" style={{ textDecoration: 'none' }}>
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
