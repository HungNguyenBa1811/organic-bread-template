import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import MenuPage from './pages/Menu'
import LandingPage from './pages/Landing'

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Logo from './img/logo-official.png'
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Navbar, Container, Image, Offcanvas, Button, ListGroup } from 'react-bootstrap'

// import breadList, {browniesList} from './data';

function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg">
        <Container>

          <Navbar.Brand>
            <Image 
              src={Logo}
            />
          </Navbar.Brand>

          <Button variant='primary' onClick={handleShow} className='btn_menu'>
            <i className='fas fa-2x fa-bars'></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Navigation Panel
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup>
                <ListGroup.Item>
                  {/* <a href="https://youtu.be/dQw4w9WgXcQ" onClick={getRickRolled}>Home</a> */}
                  <Link to="/">Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <a href="https://youtu.be/UYNpkDrCWtA" onClick={getRickRolled}>About Us</a> */}
                  <Link to="/contact">About Us</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <a href="https://youtu.be/dQw4w9WgXcQ" onClick={getRickRolled}>Menus</a> */}
                  <Link to="/menu">Menus</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <a href="https://youtu.be/dQw4w9WgXcQ" onClick={getRickRolled}>Landing</a> */}
                  <Link to="/landing">Landing</Link>
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>

        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/menu' element={<MenuPage />}></Route>
        <Route path='/landing' element={<LandingPage />}></Route>
      </Routes>

      <div className="footer container-fluid">
        <div className="copyright">Powered By JoeyNguyen0302 © Copyright 2023</div>
      </div>
    </>
  );
}

export default App;