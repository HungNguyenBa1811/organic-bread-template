// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Logo from './logo-official.png'
import { useState } from 'react';
import { Navbar, Container, Image, Offcanvas, Button, Card, Row, Col, Form, ListGroup, InputGroup } from 'react-bootstrap'

import breadList, {browniesList} from './data';


const breadList_1 = breadList.slice(0,4)
const breadList_2 = breadList.slice(4)
const browniesList_1 = browniesList.slice(0,4)
const browniesList_2 = browniesList.slice(4)

function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const getRickRolled = () => {
    window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
    alert("Haha u got Rickrolled!!! XDXDXD")
  }
  
  const getCookiezi = () => {
    window.open('https://youtu.be/UYNpkDrCWtA', '_blank');
    alert("WYSI When You See It 727 When You Fucking See It Cookiezi Godmode")
  }
  // key={bread.name + idx}
  // text={bread.toUpperCase()}
  // style={{ width: '18rem' }}
  // className="mb-2"

  const renderBread = (list) => {
    return list.map((bread)=>{
      return (
        <Col lg={3} md={6} sm={12} xs={12}>
          <Card>
            <Card.Img variant="top" src={bread.url} />
            <Card.Body>
              <Card.Title>{bread.name.toUpperCase()}</Card.Title>
              <Card.Text>
                {bread.details}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href={bread.url}>more</a>
            </Card.Footer>
          </Card>
        </Col>
      )
    })
  }

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
                  <a href="https://youtu.be/dQw4w9WgXcQ"onClick={getRickRolled}>Home</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://youtu.be/UYNpkDrCWtA"onClick={getRickRolled}>About Us</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://youtu.be/dQw4w9WgXcQ"onClick={getRickRolled}>Menus</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://youtu.be/dQw4w9WgXcQ"onClick={getRickRolled}>Landing</a>

                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>

        </Container>
      </Navbar>

      <Container fluid className='container-1'>
        <Container>
          <h2>Our Products</h2>
          <p>Vitae turpis massa sed elementum tempus egestas sed sed. <br /> Blandit massa enim nec dui nunc mattis enim.</p>
          <Row className='btn_group_1'>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section' onClick={getRickRolled}>bakery</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section' onClick={getCookiezi}>cookiezi</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section' onClick={getRickRolled}>cakes</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section' onClick={getRickRolled}>other</Button>
            </Col>
          </Row>
          <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
        </Container>
      </Container>

      <Container fluid className='container-2'>
        <Container>
          <h2>Organic Breads</h2>
          <div className='bread-group'>
            <Row className='bread'>
              {renderBread(breadList_1)}
            </Row>
            <Row className='bread'>
              {renderBread(breadList_2)}
            </Row>
          </div>
          <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
        </Container>
      </Container>

      <Container fluid className='container-3'>
        <Container>
          <h2>Brownies, Pastries, etc</h2>
          <div className='bread-group'>
            <Row className='bread'>
              {renderBread(browniesList_1)}
            </Row>
            <Row className='bread'>
              {renderBread(browniesList_2)}
            </Row>
            <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
          </div>
        </Container>
      </Container>

      <Container fluid className="container-footer">
        <Container>
          <h2>Contact Us</h2>
          <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
          <Form className='form-submit'>
            <Row>
              <Form.Group as={Col} md="6" controlId='validationCustom01'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className='input-field'
                  type="email"
                  placeholder="Enter a valid email address"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId='validationCustom01'>
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <Form.Control
                    className='input-field'
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Col md={12}>
                <Button as={Col} md="12" type="button" className='btn-submit-form' onClick={getRickRolled}>Submit</Button>
              </Col>
            </Row>
          </Form>
          <div className='social-credit'>
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h5>find us</h5>
                <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h5>hours</h5>
                <p>
                  <span className='bold'>Monday – Saturday</span>              
                  <br />
                  9am – 7pm
                  <br />
                  <span className='bold'>Sunday</span>              
                  <br />
                  10am – 6pm
                  <br />
                </p>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h5>call us</h5>
                <p>
                  <a href="https://youtu.be/dQw4w9WgXcQ"onClick={getRickRolled}>0363 974 881</a>
                  <br />
                  <br />
                  <a href="https://youtu.be/dQw4w9WgXcQ"onClick={getRickRolled}>0386 142 616</a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>

      <div className="footer container-fluid">
        <div className="copyright">Powered By JoeyNguyen0302 © Copyright 2023</div>
    </div>
    </>
  );
}

export default App;