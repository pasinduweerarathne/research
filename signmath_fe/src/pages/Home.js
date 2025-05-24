import styles from '../styles/style.module.css';
import user from '../assets/user.png';
import home from '../assets/home.png';
import minion from '../assets/minion.png';
import tom from '../assets/tom.png';
import monstor from '../assets/monstor.png';
import owl from '../assets/owl.png';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
    const name = sessionStorage.getItem("name");
    return (
        <div className={styles.home}>
            <Row className="mb-5">
                <Col sm={7}>
                    <h2>ආයුබෝවන්!</h2>
                    <h4>{name}</h4>
                    <img src={user} alt="Logo" width="10%" height='auto' />
                </Col>
                <Col sm={5} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <img src={home} alt="Logo" width="50%" height='auto' />
                </Col>
            </Row>
            <Row className="mb-2">
                <Col sm={3}>
                    <Link to="/mon" style={{ textDecoration: 'none' }}>
                        <Card className={styles.item_card} style={{ backgroundColor: '#0fc0c0', color: 'white', height: '15rem' }}>
                            <Card.Body>
                                <h3 style={{ fontWeight: 'bold' }}>මූලික ගණිතමය මෙහෙයුම්</h3>
                                <img className={styles.img_item_card} src={minion} alt="Logo" width="100%" height='auto' />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to="/sms" style={{ textDecoration: 'none' }}>
                        <Card className={styles.item_card} style={{ backgroundColor: '#db63ef', color: 'white', height: '15rem' }}>
                            <Card.Body>
                                <h3 style={{ fontWeight: 'bold' }}>සරල වාක්‍ය ගණිතය සහ හැඩතල</h3>
                                <img className={styles.img_item_card} src={tom} alt="Logo" width="100%" height='auto' />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to="/npc" style={{ textDecoration: 'none' }}>
                        <Card className={styles.item_card} style={{ backgroundColor: '#fb2371', color: 'white', height: '15rem' }}>
                            <Card.Body>
                                <h3 style={{ fontWeight: 'bold' }}>අංක රටා සහ වර්ණ</h3>
                                <img className={styles.img_item_card} src={monstor} alt="Logo" width="75%" height='auto' />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to="/lbc" style={{ textDecoration: 'none' }}>
                        <Card className={styles.item_card} style={{ backgroundColor: '#fbcb23', color: 'white', height: '15rem' }}>
                            <Card.Body>
                                <h3 style={{ fontWeight: 'bold' }}>මූලික මුදල්</h3>
                                <img className={styles.img_item_card} src={owl} alt="Logo" width="70%" height='auto' />
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}
