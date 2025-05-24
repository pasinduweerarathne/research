import { Card, Col, Row } from 'react-bootstrap';
import user from '../assets/bgw1.jpg';
import styles from '../styles/style.module.css';
import logoImage from '../assets/owl.png';
import { Link } from 'react-router-dom';

export const HomeMon = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${user})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh'
            }}
        >
            <div className={styles.home} style={{ color: "#973333" }}>
                {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <h1>ඔබට අවශ්‍ය පාඩම තෝරන්න</h1>
                </div>
                <Row className="mb-5 mt-5">
                    <Col>
                        <img src={logoImage} alt="Logo" width="80%" height="100%" />
                    </Col>
                    <Col className="mt-5">
                        <Link to="/ln" style={{ textDecoration: 'none' }}>
                            <Card className={styles.btn_card} style={{ backgroundColor: '#db63ef', color: 'white', height: '8rem' }}>
                                <h3 style={{ fontWeight: 'bold' }}>අංක</h3>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="mt-5">
                        <Link to="/lmo" style={{ textDecoration: 'none' }}>
                            <Card className={styles.btn_card} style={{ backgroundColor: '#18ccd8', color: 'white', height: '8rem' }}>
                                <h3 style={{ fontWeight: 'bold' }}>මුලික ගණිත කර්ම</h3>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
