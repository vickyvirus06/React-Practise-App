import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header.js'
import Menu from './components/Menu.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const btnHandle = () => {
    toast("this is my first message")
  };

  return (
    <div>
      
      <ToastContainer/>
     <Container>
      <Header></Header>
      <Row>
        
        <Router>
        <Col md={4}><Menu/></Col>
        <Col md={8}>
          <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/addCourse" element={<AddCourse />} exact/>
        <Route path="/view-courses" element={<AllCourses />} exact/>
        </Routes>
        </Col>
        </Router>

      </Row>
     </Container>

    </div>
  );
}

export default App;
