import { Button, Col, Row } from 'react-bootstrap';
import user from '../assets/bgw1.jpg';
import styles from '../styles/style.module.css';
import bgImg from '../assets/height.png';
import back from '../assets/back.png';
import { Link, useNavigate } from 'react-router-dom';
import { QuizItem } from '../components/QuizItem';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';


export const QuizBc = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.filter('quiz/filter','bc')
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

        {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
        <div style={{ display: "flex", justifyContent: "flex-Start", margin: '5px' }}>
          <img src={back} alt="back" width="5%" onClick={() => navigate('/lbc')}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>මූලික මුදල් - ප්‍රශ්නාවලිය</h1>
        </div>
        <Row className="mb-5 mt-1">
          <Col sm={4}>
            <img src={bgImg} alt="Logo" width="80%" height="100%" />
          </Col>
          <Col>
            <Row>
              {items?.map((item) => (
                <QuizItem key={item.id} data={item} />
              ))}             
            </Row>
            <Link to="/lbc" style={{ textDecoration: 'none' }}>
              <div style={{ display: "flex", justifyContent: "flex-end", margin: '15px' }}>
                <Button style={{ borderRadius: '15px', padding: '8px 30px 8px 30px', fontWeight: 'bold', backgroundColor: '#c562f3', borderColor: '#c562f3' }}>පාඩම්</Button>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}
