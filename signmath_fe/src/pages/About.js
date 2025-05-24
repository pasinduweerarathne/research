import { Card, Col, Row } from 'react-bootstrap';
import bg from '../assets/bgw1.jpg';
import user from '../assets/user.png';
import styles from '../styles/style.module.css';
import icon1 from '../assets/Group1.png';
import icon2 from '../assets/Group2.png';
import icon3 from '../assets/Group3.png';
import icon4 from '../assets/Group4.png';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh'
            }}
        >
            <div className={styles.home} style={{ color: "white" }}>
                {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <h1>Hello,</h1>
                </div>
                <Row className="mt-3">
                    <Col sm={5}>
                        <img src={user} alt="Logo" width="80%" height="100%" />
                    </Col>
                    <Col>
                        <Row><h1 style={{ color: "#973333" }}>අපි ගැන...</h1></Row>
                        <Row style={{ color: "black" }}>
                            <Col sm={6} className="mt-3">
                                <div style={{ height: '10rem' }}>
                                    <div style={{display:'flex',flexDirection:'row', marginBottom:'10px'}}>
                                        <img src={icon1} alt="Logo" width="50px" height="50px" />
                                        <h4 style={{ fontWeight: 'bold', marginLeft:'10px' }}>ස්වයං අන්තර්ගත තෑගි වැඩසටහන්</h4>
                                    </div>
                                    <div style={{ color: "#2e4451" }}>
                                        <h5>ශ්‍රවණාබාධිත දරුවන් සඳහාම සුවිශේෂී ස්වයං අන්තර්ගත පාඩම් මාලාව</h5>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={6} className="mt-3">
                                <div style={{ height: '10rem' }}>
                                    <div style={{display:'flex',flexDirection:'row', marginBottom:'10px'}}>
                                        <img src={icon2} alt="Logo" width="50px" height="50px" />
                                        <h4 style={{ fontWeight: 'bold', marginLeft:'10px' }}>අමතර ක්රියාකාරකම්</h4>
                                    </div>
                                    <div style={{ color: "#2e4451" }}>
                                        <h5>පලදායි ඉගෙනුම් ක්‍රියාවලියක් සඳහා ඇගයුම් සහිත ප්‍රශ්නාවලි සහ ප්‍රායෝගික ක්‍රියාකාරකම්</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <div style={{ height: '10rem' }}>
                                    <div style={{display:'flex',flexDirection:'row', marginBottom:'10px'}}>
                                        <img src={icon3} alt="Logo" width="50px" height="50px" />
                                        <h4 style={{ fontWeight: 'bold', marginLeft:'10px' }}>ශිෂ්ය ලුහුබැඳීම</h4>
                                    </div>
                                    <div style={{ color: "#2e4451" }}>
                                        <h5>දරුවාගේ ඉගෙනුම් ක්‍රියාවලිය, දක්ෂතා සහ ජයග්‍රහණ සඳහන් පෞද්ගලික ශිෂ්‍ය වාර්තා</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className="mt-3">
                                <div style={{ height: '10rem' }}>
                                    <div style={{display:'flex',flexDirection:'row', marginBottom:'10px'}}>
                                        <img src={icon4} alt="Logo" width="50px" height="50px" />
                                        <h4 style={{ fontWeight: 'bold', marginLeft:'10px' }}>ආකර්ශණිය පාඩම්</h4>
                                    </div>
                                    <div style={{ color: "#2e4451" , fontWeight:'bold'}}>
                                        <h5>ගණිතයේ විවිධ පැතිකඩ ආවරණය පරිදි සකසන ලද ඉගැන්වීමේ වීඩියෝ මාලාවන් වෙත ප්‍රවේශය</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
