import { useEffect, useRef, useState } from 'react'
import { quiz } from '../utils/qnpData'
import '../styles/quiz.css'
import { Button, Col, Row } from 'react-bootstrap'
import 'react-html5-camera-photo/build/css/index.css';
import Swal from 'sweetalert2';
import { api } from '../utils/api';
import user from '../assets/bgw1.jpg';
import { useParams } from 'react-router-dom';

const Quiz = () => {

    let videoRef = useRef(null);
    let photoRef = useRef(null);
    let streamRef = useRef(null);

    const _id = sessionStorage.getItem('_id');

    const { quizNo } = useParams();

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const { questions } = quiz[quizNo]
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
                ? {
                    ...prev,
                    score: prev.score + 1,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
            //update resultes
            let temp_scr = (result.correctAnswers/questions.length)*100;
            temp_scr = parseFloat(temp_scr.toFixed(2));
            var data = {
                [quizNo]: temp_scr
            }
            console.log(data);
            api.put('user', data, _id).then(data => console.log(data))
        }
    }

    const onAnswerSelected = (answer) => {
        setSelectedAnswerIndex(1)
        if (answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { facingMode: "environment" }
            })
            .then((stream) => {
                streamRef.current = stream;
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const takePicture = async () => {



        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = video.videoWidth;
        photo.height = video.videoHeight;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        // Get data URL from canvas
        const dataUrl = photo.toDataURL();
        console.log(dataUrl);

        var data = {
            "img": dataUrl,
            "quiz_no": quizNo
        }

        await api.post('process', data).then(data => {
            console.log(data.status)
            if (data.status === 200) {
                onAnswerSelected(data.result)
                console.log(data.result)
                console.log(correctAnswer)
                if (data.result == correctAnswer) {
                    Swal.fire({
                        icon: 'success',
                        title: 'සුබ පැතුම්!',
                        text: "ඔබේ පිළිතුර නිවැරදියි",
                        showConfirmButton: false,
                        timer: 2000
                    })

                    setSelectedAnswer(true)
                } else if (data.result === 'z') {
                    Swal.fire({
                        icon: 'info',
                        title: 'දෝෂය!',
                        text: "ආදාන රූපය පැහැදිලි නැත",
                        showConfirmButton: false,
                        timer: 2000
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'කණගාටුයි!',
                        text: "ඔබේ පිළිතුර වැරදියි. නැවත උත්සාහ කරන්න",
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setSelectedAnswer(false)
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        });
    }

    useEffect(() => {
        setTimeout(() => {
            takePicture()
        }, 6000); //miliseconds
    }, []);

    useEffect(() => {
        getVideo();
        return () => {
            if (streamRef.current) {
                const tracks = streamRef.current.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${user})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'

        }}>
            <div className="m-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: "#973333" }}>
                {/* <h1>විනෝදය සමගින් අංක ඉගෙන ගනිමු</h1> */}
                <h1>ප්‍රශ්නාවලිය</h1>
            </div>
            <div className="quiz-container">
                {!showResult ? (
                    <div>
                        <div>
                            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                            <span className="total-question">/{addLeadingZero(questions.length)}</span>
                        </div>

                        <Row className="mt-2">
                            <Col className="mb-3" >
                                <h2>{question}</h2>

                            </Col>
                            <Col sm={12}>
                                <video className="cam-view" ref={videoRef} style={{
                                    borderColor: "#18CCD8",
                                    textAlign: "center",
                                    height: "auto",
                                    width: "100%",
                                    objectFit: "fill"
                                }}></video>
                                {/* </Card> */}


                                <canvas className="container" ref={photoRef} hidden></canvas>

                            </Col>
                        </Row>
                        {/* <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul> */}
                        <div className="flex-btn">
                            <Button variant="contained" size="large" onClick={takePicture} style={{ marginTop: "5", backgroundColor: "#18CCD8", fontWeight: "bold" }}>&nbsp;Capture</Button>

                            <Button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="result">
                        <h3>ප්‍රතිඵලය</h3>
                        <p>
                            <span> මුළු ප්‍රශ්න ගණන : {questions.length}</span>
                        </p>
                        <p>
                            <span>මුළු ලකුණු : {result.score}</span>
                        </p>
                        <p>
                            <span>නිවැරදි පිළිතුරු ගණන : {result.correctAnswers}</span>
                        </p>
                        <p>
                            <span>වැරදි පිළිතුරු ගණන : {result.wrongAnswers}</span>
                        </p>
                        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="contained" size="large" onClick={takePicture} style={{ marginTop: "5", backgroundColor: "#18CCD8", fontWeight: "bold" }}>&nbsp;Capture</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Quiz