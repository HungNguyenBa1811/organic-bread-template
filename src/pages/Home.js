import { Container, Row, Col, Image, Button, Form, InputGroup, Card } from 'react-bootstrap';
import { MiniLogo, BGElement } from '../handler/imgHandler';
import breadList, { breadDetails, review } from '../handler/data';

const breadList_1 = breadList.slice(0,4)

const Home = () => {
    const renderBread = (list) => {
        return list.map((bread)=>{
          return (
            <Col lg={3} md={6} sm={12} xs={12}>
              <Card>
                <Card.Img variant="top" src={bread.url} />
                <Card.Body>
                  <Card.Title>{bread.name.toUpperCase()}</Card.Title>
                  <Card.Text className='fixed-height'>
                    {bread.details}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='card-btn-fixed-height'>
                  <a href={bread.url} className='btn-fixed-height'>more</a>
                </Card.Footer>
              </Card>
            </Col>
          )
        })
    }

    const renderBread2 = (list) => {
        return list.map((bread) => {
            return(
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card className='card-special'>
                        <Card.Body className='card-special-body'>
                            <Card.Title className='card-special-title'>{bread.name.toUpperCase()}</Card.Title>
                            <Card.Text className='card-special-text'>{bread.details}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }

    const renderReview = (list) => {
        return list.map((customer) => {
            return (
                <Col lg={3} md={3} sm={6} xs={12}>
                    <Card className='card-review'>
                        <Card.Header className='card-review-header'>
                            <div className='quote-block'>
                                <i className='fas fa-3x fa-quote-left'></i>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text className='card-review-text'>{customer.comment}</Card.Text>
                        </Card.Body>
                        <Card.Footer className='card-review-footer'>
                            <Card.Title className='card-review-author'>{customer.name.toUpperCase()}</Card.Title>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        })
    }

    return (<>
        <Container fluid className='container-home'>
            <Row>
                <Col md={6}>
                    <div className='homebg homebg-img-1'></div>
                </Col>
                <Col md={4} className='container-home-layout container-clearfix'>
                    <div>
                        <Image
                            src={MiniLogo}
                            className='img-layout'
                        />
                        <h1>Fresh breads <br /> handcrafted daily</h1>
                        <p className='text-layout'>Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
                        <p className='credit credit-layout-special credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
                        <Button className='btn-readmore'>read more</Button>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>

        <Container fluid className='container-home container-home-bg-1'>
            <Container className='container-clearfix'>
                <h2 className='text-white'>Our Breads</h2>
                <Row className='bread-layout-1'>
                    {renderBread(breadList_1)}
                </Row>
                <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
            </Container>
        </Container>

        <Container fluid className='container-home'>
            <Row>
                <Col md={2}></Col>
                <Col md={4} className='container-clearfix'>
                    <h2>Ingredients & Method</h2>
                    <p className='method'>
                        Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.
                    </p>
                    <p className='credit credit-layout-special credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
                    <Button className='btn-readmore'>Read more</Button>
                </Col>
                <Col md={6}>
                    <div className='homebg homebg-img-3'></div>
                </Col>
            </Row>
        </Container>

        <Container fluid className='container-home container-home-bg-2'>
            <Container className='container-clearfix'>
                <h2 className='text-white'>Our Bread</h2>
                <Row className='bread-layout-1'>
                    {renderBread2(breadDetails)}
                </Row>
                <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
            </Container>
        </Container>

        <Container fluid className='container-home'>
            <Container className='container-clearfix'>
                <h2 className='text-container-end'>Our freshly baked bread is the hero of our breakfast menu</h2>
                <p className='credit credit-black credit-layout-special'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
                <Button className='btn-readmore'>Read more</Button>
                <Image
                    src={BGElement}
                    className='img-layout-2'
                />
            </Container>
        </Container>

        <Container fluid className='container-home container-home-bg-3'>
            <Container className='container-clearfix'>
                <h2 className='text-white'>Read what our customers say</h2>
                <Row className='bread-layout-1'>
                    {renderReview(review)}
                </Row>
                <p className='credit'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
            </Container>
        </Container>

        <Container fluid className="container-footer container-footer-bg">
            <Row>
                <Col md={5}></Col>
                <Col md={4}>
                    <h2>Contact Us</h2>
                    <p className='credit credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
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
                                <Button as={Col} md="12" type="button" className='btn-submit-form'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className='social-credit'>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <h5>find us</h5>
                                <p>Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</p>
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
                                <a href="https://youtu.be/dQw4w9WgXcQ">0363 974 881</a>
                                <br />
                                <br />
                                <a href="https://youtu.be/dQw4w9WgXcQ">0386 142 616</a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    </>)
}

export default Home