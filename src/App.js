// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Logo from './logo-w.png'
import { useState } from 'react';
import { Navbar, Container, Image, Offcanvas, Button, ButtonGroup, CardGroup, Card, Row, Col, Form, ListGroup } from 'react-bootstrap'

import breadList, {browniesList} from './data';


const breadList_1 = breadList.slice(0,4)
const breadList_2 = breadList.slice(4)
const browniesList_1 = browniesList.slice(0,4)
const browniesList_2 = browniesList.slice(4)

function App() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
              <small className="text-muted">Last updated 3 mins ago</small>
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
                  <a href='#'>Home</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">About Us</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href='#'>Menus</a>

                </ListGroup.Item>
                <ListGroup.Item>
                  <a href='#'>Landing</a>

                </ListGroup.Item>
              </ListGroup>
              <br />
              <br />
              <br />
              <br />
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
              <Button className='btn_1st_section'>bakery</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section'>cookiezi</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section'>cakes</Button>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Button className='btn_1st_section'>other</Button>
            </Col>
          </Row>
          <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
        </Container>
      </Container>

      <Container>
        <h2>Organic Breads</h2>
        <Row>
          {renderBread(breadList_1)}
        </Row>
        <Row>
          {renderBread(breadList_2)}
        </Row>
        <p>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
      </Container>

      <Container>
        <h2>Brownies, Pastries, etc</h2>
        <Row>
          {renderBread(browniesList_1)}
        </Row>
        <Row>
          {renderBread(browniesList_2)}
        </Row>
        <p>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
      </Container>

      <Container fluid>
        <h2>Contact Us</h2>
        <p>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
        <Form>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Form>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <h5>find us</h5>
            <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <h5>hours</h5>
            <p>
              <span>Monday – Saturday</span>              
              <br />
              9am – 7pm
              <br />
              <span>Sunday</span>              
              <br />
              10am – 6pm
              <br />
            </p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <h5>call us</h5>
            <p>
              <a href='#'> 1 (234) 567-891</a>
              <br />
              <br />
              <a href='#'>2 (345) 333-897</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;