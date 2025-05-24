import l1 from '../assets/l1.jpg';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.webp';
import l4 from '../assets/l4.jpeg';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';
import n4 from '../assets/n4.png';
import n5 from '../assets/n5.png';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpg';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import m4 from '../assets/m4.png';
import ln1 from '../assets/1-5.jpg';
import ln2 from '../assets/6-10.jpg';
import ln3 from '../assets/10-15.jpg';
import ln4 from '../assets/15-20.jps.jpg';
import ln5 from '../assets/20-25.jps.jpg';
import c1 from '../assets/Lesson1_Icon.jpg';
import c2 from '../assets/Lesson2_Icon.jpg';
import c3 from '../assets/Lesson3_Icon.jpg';
import c4 from '../assets/Lesson4_Icon.png';
import np1 from '../assets/np1_Icon.jpeg';
import np2 from '../assets/np2_Icon.png';
import np3 from '../assets/np3_Icon.jpg';
import np4 from '../assets/np4_Icon.jpg';
import sn1 from '../assets/Rectraingle.jpg';
import sn2 from '../assets/circle.jpg';
import sn3 from '../assets/square.jpg';
import notes from '../assets/notes.png';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { useState } from 'react';

export const LessonItem = (props) => {
    const [imageUrl, setImageUrl] = useState(props.data.image);

    return (
        <Col className="mb-3" sm={4}>
            <Link to={`/lv/${props.data.video_id}`}  state={{ 'lesson': props.data.lesson, 'name': props.data.name , 'category':props.category }} style={{ textDecoration: 'none' }}>
                <Card className={styles.lesson_card}>
                    <img src={imageUrl} alt="Logo" width="100%" height="120px" style={{ borderRadius: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <h5 style={{ fontWeight: 'bold', color: '#FB2371' }}>{props.data.lesson}</h5>
                        <h7 style={{ fontWeight: 'bold', fontSize: '12px' }}>{props.data.name}</h7>
                        <div style={{ fontSize: '10px' }}>කාල සීමාව : {props.data.duration}</div>
                    </div>
                </Card>
            </Link>
        </Col>
    )
}
