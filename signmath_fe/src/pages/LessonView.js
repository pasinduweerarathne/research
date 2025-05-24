import { Card, Col, Row } from 'react-bootstrap';
import bg from '../assets/bgw1.jpg';
import user from '../assets/user.png';
import styles from '../styles/style.module.css';
import back from '../assets/back.png';
import learn from '../assets/learn.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { YouTubePlayer } from '../components/YoutubePlayer';

export const LessonView = () => {
    const navigate = useNavigate();

    const location = useLocation()
    const { lesson, name, category } = location.state

    const { videoId } = useParams();

    // const youtubeVideoId = 'I9JRg6tzuyw';
    const youtubeVideoId = videoId;

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '90vh'
            }}  
        >
            <div className={styles.home}>
                {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
                <div style={{ display: "flex", justifyContent: "flex-Start", margin: '5px' }}>
                    <img src={back} alt="back" width="5%" onClick={() => navigate(-1)} />
                </div>
                <Row className="mt-3">
                    <Col sm={4} >
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', marginBottom: '10px', color: '#973333' }}>
                            <h2 style={{ fontWeight: 'bold' }}>{category}</h2>
                            <h3>{lesson}</h3>

                            <img src={learn} alt="Logo" width="90%" style={{ marginTop: "15px" }} />
                        </div>
                    </Col>
                    <Col sm={6} className="mt-3">
                        <YouTubePlayer videoId={youtubeVideoId} />
                        <h5>{name}</h5>
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                        {/* <img src={scooby} alt="Logo" width="50%" height="50%" /> */}
                    </Col>
                </Row>

                <div class="vl"></div>
            </div>
        </div>
    )
}
