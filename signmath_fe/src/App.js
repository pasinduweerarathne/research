import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { HomeNpc } from './pages/HomeNpc';
import { LessonNp } from './pages/LessonNp';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { QuizNp } from './pages/QuizNp';
import { HomeMon } from './pages/HomeMon';
import { LessonN } from './pages/LessonN';
import { QuizN } from './pages/QuizN';
import { HomeSms } from './pages/HomeSms';
import { LessonS } from './pages/LessonS';
import { QuizS } from './pages/QuizS';
import { LessonBc } from './pages/LessonBc';
import { QuizBc } from './pages/QuizBc';
import { About } from './pages/About';
import { StudentProfile } from './pages/StudentProfile';
import { LessonView } from './pages/LessonView';
import { LessonMo } from './pages/LessonMo';
import Quiz from './pages/Quiz';
import { QuizMo } from './pages/QuizMo';
import { LessonSm } from './pages/LessonSm';
import { QuizSm } from './pages/QuizSm';
import { LessonC } from './pages/LessonC';
import { QuizC } from './pages/QuizC';

function App() {
  const token = sessionStorage.getItem("token");
  return (
    <div>
      <Router>
        {token && token !== "" && token !== undefined ? (<Navbar />) : (<div></div>)}
        <Routes>
          <Route path="/" element={token && token !== "" && token !== undefined ? (<Home />) : (<Login />)} />
          <Route path="/about" element={<About />} />
          <Route path="/sp" element={<StudentProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/npc" element={<HomeNpc />} />
          <Route path="/mon" element={<HomeMon />} />
          <Route path="/sms" element={<HomeSms />} />
          <Route path="/lnp" element={<LessonNp />} />
          <Route path="/lc" element={<LessonC />} />
          <Route path="/ln" element={<LessonN />} />
          <Route path="/lmo" element={<LessonMo />} />
          <Route path="/ls" element={<LessonS />} />
          <Route path="/lsm" element={<LessonSm />} />
          <Route path="/lbc" element={<LessonBc />} />
          <Route path="/qnp" element={<QuizNp />} />
          <Route path="/qc" element={<QuizC />} />
          <Route path="/qn" element={<QuizN />} />
          <Route path="/qmo" element={<QuizMo/>} />
          <Route path="/qs" element={<QuizS />} />
          <Route path="/qsm" element={<QuizSm />} />
          <Route path="/qbc" element={<QuizBc />} />
          <Route path="/quiz/:quizNo" element={<Quiz />} />
          <Route path="/lv/:videoId" element={<LessonView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
