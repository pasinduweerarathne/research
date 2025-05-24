import { Card, Col, Row } from 'react-bootstrap';
import bg from '../assets/bgw1.jpg';
import userimg from '../assets/MainProfileIcon.png';
import styles from '../styles/style.module.css';
import back from '../assets/back.png';
import scooby from '../assets/scooby.png';
import medal from '../assets/medal.png';
import trophy from '../assets/trophy.png';
import name from '../assets/name.png';
import { MarksItem } from '../components/MarksItem';
import dob from '../assets/dob.png';
import contact from '../assets/contact.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const StudentProfile = () => {
    const navigate = useNavigate();
    const user_name = sessionStorage.getItem("name");
    const _id = sessionStorage.getItem("_id");
    const [quizlist, setQuizdata] = useState([]);
    const [markslist, setMarksdata] = useState([]);
    const [user, setUser] = useState();


    useEffect(() => {
        api.get_one('user', _id)
            .then(data => {
                setUser(data)
                console.log(data)
                // setMarksdata(Object.keys(data).filter(key => key.startsWith('quiz')));
                // console.log(Object.keys(data).filter(key => key.startsWith('quiz')));
            })

        api.get('quiz')
            .then(data => {
                setQuizdata(data.data)
                console.log(data.data)
            })
    }, [])

    return (
        <div
            style={{
                // backgroundImage: `url(${bg})`, backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
                backgroundColor: '#f5f5f5',
                minHeight: '90vh'
            }}
        >
            <div className={styles.home}>
                {/* <img src={user} alt="Logo" width="100%" height='auto' /> */}
                <div style={{ display: "flex", justifyContent: "flex-Start", margin: '5px' }}>
                    <img src={back} alt="back" width="5%" onClick={() => navigate('/')} />
                </div>
                <Row className="mt-3">
                    <Col sm={4} >
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', marginBottom: '10px' }}>
                            <h3 style={{ color: '#0F76C0', fontWeight: 'bold' }}>ශිෂ්ය පැතිකඩ</h3>
                            <img src={userimg} alt="Logo" width="30%" height="30%" />
                            <h4 style={{ color: '#973333', fontWeight: 'bold' }}>{user_name}</h4>
                            <h7>{user?.grade} ශ්‍රේණිය</h7>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Card className="p-3 m-3" style={{ fontWeight: 'bold' }}>
                                <h5 style={{ fontWeight: 'bold' }}>පුද්ගලික තොරතුරු</h5>
                                <div className="mx-3">
                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={name} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>සම්පූර්ණ නම</h7>
                                            <h6>{user?.full_name}</h6>
                                        </div>
                                    </div>
                                    {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={adr} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>ලිපිනය</h7>
                                            <h6>256/c වලිවිට පාර, කඩුවෙල</h6>
                                        </div>
                                    </div> */}
                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={dob} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>උපන්දිනය</h7>
                                            <h6>{user?.dob}</h6>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={contact} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>ස්ත්‍රී පුරුෂ භාවය</h7>
                                            <h6>{user?.gender}</h6>
                                        </div>
                                    </div>
                                    {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={contact} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>දුරකථන අංකය</h7>
                                            <h6>070 23 68 335</h6>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: '10px' }}>
                                        <img src={dob} alt="Logo" width="30px" height="30px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                                            <h7>විනෝදාංශ</h7>
                                            <h6>මුද්දර එකතු කිරීම</h6>
                                        </div>
                                    </div> */}
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={4} className="m-5 ">
                        <Card className={styles.sp_card} style={{ flexDirection: 'row' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h6>සාමාන්‍ය ලකුණු</h6>
                                <h6>60%</h6>
                            </div>
                            <div style={{ borderLeft: '2px solid gray', height: '35px' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h6>සාමාන්‍ය කාලය</h6>
                                <h6>10 mins</h6>
                            </div>
                            <div style={{ borderLeft: '2px solid gray', height: '35px' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h6>සාමාන්‍ය</h6>
                                <h6>8/10</h6>
                            </div>
                        </Card>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Card className={styles.sp_card} style={{ flexDirection: 'row', marginRight: '30px', color: '#973333', fontWeight: 'bold' }}>
                                <img src={medal} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>ඉහළම ලකුණු</h7>
                                    <h6>80%</h6>
                                </div>
                            </Card>
                            <Card className={styles.sp_card} style={{ flexDirection: 'row', color: '#973333', fontWeight: 'bold' }}>
                                <img src={trophy} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>ජයග්‍රහන</h7>
                                    <h6>9/10</h6>
                                </div>
                            </Card>
                        </div>
                        <h5 className="mt-5">මුහුණ දුන් ප්‍රශ්නාවලි - ලකුණු</h5>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Row>
                                {quizlist?.map((item) => (
                                    <div>
                                        {user[item.quiz_id] != null && <MarksItem key={item.id} data={item} marks={user[item.quiz_id]} />}
                                    </div>
                                    // <LessonItem key={item.id} data={item} />
                                ))}
                            </Row>
                            {/* <Card className={styles.sp_card} style={{ flexDirection: 'row', marginRight: '30px', color: '#973333', fontWeight: 'bold' }}>
                                <img src={trophy} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>එක ශ්‍රේණිය</h7>
                                    <h6>9/10</h6>
                                </div>
                            </Card>
                            <Card className={styles.sp_card} style={{ flexDirection: 'row', color: '#973333', fontWeight: 'bold' }}>
                                <img src={trophy} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>දෙක ශ්‍රේණිය</h7>
                                    <h6>9/10</h6>
                                </div>
                            </Card> */}
                        </div>
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Card className={styles.sp_card} style={{ flexDirection: 'row', marginRight: '30px', color: '#973333', fontWeight: 'bold' }}>
                                <img src={trophy} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>තුන ශ්‍රේණිය</h7>
                                    <h6>9/10</h6>
                                </div>
                            </Card>
                            <Card className={styles.sp_card} style={{ flexDirection: 'row', color: '#973333', fontWeight: 'bold' }}>
                                <img src={trophy} alt="Logo" width="35px" height="35px" />
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h7>හතර ශ්‍රේණිය</h7>
                                    <h6>9/10</h6>
                                </div>
                            </Card>
                        </div> */}

                        {/* <Card className={styles.sp_card} style={{ flexDirection: 'row', color: '#973333', fontWeight: 'bold' }}>
                            <img src={trophy} alt="Logo" width="35px" height="35px" />
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h7>සමස්ත වාර්තාව</h7>
                                <h6>8/10</h6>
                            </div>
                        </Card> */}
                    </Col>
                    <Col sm={3} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column' }}>
                        <img src={scooby} alt="Logo" width="50%" height="50%" />
                    </Col>
                </Row>

                <div class="vl"></div>
            </div>
        </div >
    )
}
