import { Button, Col, Row } from 'react-bootstrap';
import user from '../assets/bgw1.jpg';
import styles from '../styles/style.module.css';
import logoImage from '../assets/height.png';
import l2 from '../assets/l2.jpg';
import { Link } from 'react-router-dom';
import { LessonItem } from '../components/LessonItem';

export const PageTmp = () => {
    const styles = {
        borderRadius: '15px',
        padding: '8px 30px 8px 30px',
        fontWeight: 'bold',
        backgroundColor: '#c562f3',
        borderColor: '#c562f3'
    };

    return (
        <div
            style={{
                backgroundImage: `url(${user})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // maxHeight: '90vh'
            }}
        >
            <div className={styles.home} style={{ color: "#0fc0c0" }}>

                {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Number Patterns</h1>
                </div>
                <Row className="mb-5 mt-1">
                    <Col sm={4}>
                        <img src={logoImage} alt="Logo" width="80%" height="100%" />
                    </Col>
                    <Col>
                        <Row>
                            {(function (rows, i, len) {
                                while (++i <= len) {
                                    rows.push(<LessonItem />)
                                }
                                return rows;
                            })([], 0, 6)}

                        </Row>
                        {/* <Link to="/lnp" style={{ textDecoration: 'none' }}>
                            <Card className={styles.lesson_card} style={{ backgroundColor: '#db63ef', color: 'white', height: '8rem' }}>
                                <h3 style={{ fontWeight: 'bold' }}>Number Patterns</h3>
                            </Card>
                        </Link> */}

                        <div style={{ display: "flex", justifyContent: "flex-end", margin: '15px' }}>
                            <Button style={styles}>Quiz</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
