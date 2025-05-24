import l2 from '../assets/l3.webp';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { useState } from 'react';
import trophy from '../assets/trophy.png';

export const MarksItem = (props) => {

    const path = 'quiz';

    return (
        <Col className="mb-3">
            <Card className={styles.sp_card} style={{ flexDirection: 'row', color: '#973333', fontWeight: 'bold' }}>
                <img src={trophy} alt="Logo" width="35px" height="35px" style={{justifyContent:'flex-start'}} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <h7>{props.data.name} - {props.data.lesson}</h7>
                    <h6>ලකුණු : {props.marks} %</h6>
                </div>
            </Card>
        </Col>
    )
}
