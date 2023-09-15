import { Container, Form, Row, Col, InputGroup, Button, Card, Image, ButtonGroup } from "react-bootstrap"
import '../style/contact.css'
import { Potrait_1, breadLogo_Array } from '../handler/imgHandler'

const Contact = () => {

    const getRickRolled = () => {
        window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
        alert("Haha u got Rickrolled!!! XDXDXD")
    }
      
    // const getCookiezi = () => {
    //     window.open('https://youtu.be/UYNpkDrCWtA', '_blank');
    //     alert("WYSI When You See It 727 When You Fucking See It Cookiezi Godmode")
    // }

    return (<>
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

        <Container fluid className="rectangle"></Container>

        <Container fluid className="container-clearfix container-contact-1">
            <Row>
                <Col md={3}></Col>
                <Col md={3}>
                    <div className="textbox-contact">
                        <h3>Delicious Baking. <br /> Exceptional Quality.</h3>
                    </div>
                    <div className="potrait potrait-1"></div>
                </Col>
                <Col md={3}>
                    <div className="potrait potrait-2"></div>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={6} className="description">
                    <h4 className="description-h4">We produce delicious bread, rolls and other products</h4>
                    <p className="description-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='credit credit-black credit-layout-special'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
                    <Button className='btn-readmore'>read more</Button>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>

        <Container fluid className="container-contact-2">
            {/* <Image
                src={Potrait_1}
            /> */}
            <Card>
                <Card.Body>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Text>We opened our first bakery in the South End in 2000 with one goal: to make the world a sweeter place through warm smiles, gooey sticky buns, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
                    <p className='credit credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
                    <Button className='btn-readmore'>Read more</Button>
                </Card.Body>
            </Card>
        </Container>

        <Container fluid>
            <h2> We bake fresh, handmade bread, pastries and cakes every day</h2>

            <Row>
                <Col md={5}>
                    <Image
                        src={Potrait_1}
                    />
                </Col>
                <Col md={5}>
                    <Row>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[0]}
                            />
                            <h5>Baked Fresh Daily</h5>
                            <p>Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft</p>
                        </Col>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[1]}
                            />
                            <h5>Great Value</h5>
                            <p>With the most competitive prices on the market we are able to deliver great value without compromising on taste</p>
                        </Col>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[2]}
                            />
                            <h5>Institutions</h5>
                            <p>We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow</p>
                        </Col>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[3]}
                            />
                            <h5>Delivery To Your Door</h5>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        </Col>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[4]}
                            />
                            <h5>No Order Too Large</h5>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        </Col>
                        <Col md={6}>
                            <Image 
                                src={breadLogo_Array[5]}
                            />
                            <h5>Delicious baking</h5>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        </Col>

                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
            <p className='credit credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
        </Container>

        <Container fluid>
            <Container>
                <h2>Roll, proof, and bake. Every day.</h2>
                <p>When it comes to bread and sandwiches, freshness equals quality. That's why we bake our loaves, bagels, and sweet treats every single morning for maximum freshness.</p>
                <ButtonGroup>
                    <Button>see full menu</Button>
                    <Button>order now</Button>
                </ButtonGroup>
                <p className='credit credit-black'>Image from <a href='https://www.pixiv.net/en/'>Pixiv</a> </p>
            </Container>
        </Container>

        <Container fluid className="container-footer">
            <Container>
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
                             <Button as={Col} md="12" type="button" className='btn-submit-form' onClick={getRickRolled}>Submit</Button>
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
    </>)
}

export default Contact