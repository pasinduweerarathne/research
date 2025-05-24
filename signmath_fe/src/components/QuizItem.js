import l2 from '../assets/l3.webp';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { useState } from 'react';

export const QuizItem = (props) => {
    
    const [imageUrl, setImageUrl] = useState(props.data.image);
    const path = 'quiz';

    return (
        <Col className="mb-3" sm={4}>
            <Link to={`/${path}/${props.data.quiz_id}`} style={{ textDecoration: 'none' }}>
                <Card className={styles.lesson_card}>
                    <img src={imageUrl} alt="Logo" width="100%" height="120px" style={{ borderRadius: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5 style={{ fontWeight: 'bold', color:'#FB2371' }}>{props.data.lesson}</h5>
                        <h7 style={{ fontWeight: 'bold', fontSize: '12px' }}>{props.data.name}</h7>
                    </div>
                </Card>
            </Link>
        </Col>
    )
}
