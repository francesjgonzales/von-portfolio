import React from "react";
import { Container, Card, Accordion, Col, Row, Button } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  /* const [key, setKey] = useState('home'); */
  return (
    <Container className="mt-5 px-5">
      <h1>About Me</h1>

      <Card className="text-start mt-5">
        <Card.Header>
          <Row>
            <Col>
              <h4>Von Gonzales</h4>
            </Col>
            <Col className="text-end">
              <Card.Link href="https://www.linkedin.com/in/dunhillvongonzales/#">
                <BsLinkedin className="mx-1" />
              </Card.Link>
              <Card.Link href="https://github.com/dunhillvongonzales">
                <BsGithub className="mx-1" />
              </Card.Link>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
              <p>Email</p>
              <h6>dunhillvongonzales@gmail.com</h6>
            </Col>
            <Col>
              <p>Location</p>
              <h6>Edmonton, AB, Canada</h6>
            </Col>
            <Col>
              <p>Job Preference</p>
              <h6>Open to remote, hybrid, or in office</h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="text-start mt-5">
        <Card.Header>About</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>
              With over 10 years of experience in graphic and web design, I
              specialize in creating user-friendly mockups and digital marketing
              collateral. I am proficient in Figma and have a proven track
              record in delivering concept-driven designs across various
              platforms.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-start mt-5">
        <Card.Header>
          <Row>
            <Col>Work Experience</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Col>
                  <h5>Senior Web Designer</h5>
                  <p className="fst-italic">
                    Adapts Media | Dubai-based (remote work from the
                    Philippines)
                  </p>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Row xs={1} lg={2}>
                  <Col md="auto">
                    <p>Oct 2022 - Dec 2022</p>
                    <h6>
                      Managed time effectively to produce digital ads with
                      Dubai's creative team.
                    </h6>
                    <p>Highlights:</p>
                    <ul>
                      <li>
                        Managed time-sensitive marketing collaterals for Middle
                        East and North Africa across both print and digital
                        channels.
                      </li>
                      <li>
                        Used Adobe Creative Suite including After Effects and
                        Premier Pro to create SEO-driven digital advertisements.
                      </li>
                      <li>
                        Managed cohesive design for digital social media and
                        email campaigns.
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <p>Tools:</p>

                    <ul>
                      <li>Adobe Creative Suite</li>
                      <li>After Effects for web animation</li>
                    </ul>
                    <p>Projects:</p>
                    <ul>
                      <li>
                        <Button variant="link" href="/digital">
                          Web advertisements and social media posts
                        </Button>
                      </li>
                      <li>
                        <Button variant="link" href="/motion">
                          Animated web banners and social media posts
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="flex">
                <Col>
                  <h5>Graphic Designer and Production Assistant</h5>
                  <p className="fst-italic">
                    Karatula Signs Inc. | Edmonton, AB
                  </p>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Row xs={1} lg={2}>
                  <Col md="auto">
                    <p>Sep 2023 - Present</p>
                    <h6>
                      Coordinated with a signage company to design, produce, and
                      assist with the installation of signage.
                    </h6>
                  </Col>
                  <Col>
                    <p>Tools & Highlights:</p>
                    <ul>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Col>
                  <h5>Freelance Creative Designer</h5>
                  <p className="fst-italic">Meta Fusion | Singapore, SG</p>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Row xs={1} lg={2}>
                  <Col md="auto">
                    <p>Feb 2023 - Jun 2023</p>
                    <h6>
                      Teamed up with a marketing firm to produce concept-driven
                      financial reports for companies across Singapore,
                      Malaysia, and Indonesia.
                    </h6>
                  </Col>
                  <Col>
                    <p>Tools & Highlights:</p>
                    <ul>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe In Design</li>
                      <li>Pre Press Production</li>
                      <li>Print layout design</li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Col>
                  <h5>Assistant Creative Manager</h5>
                  <p className="fst-italic">Xpress Print | Singapore, SG</p>
                </Col>
              </Accordion.Header>
              <Accordion.Body>
                <Row xs={1} lg={2}>
                  <Col md="auto">
                    <p>Jul 2014 - Apr 2022</p>
                    <h6>
                      Mentored a team of designers, conducted weekly meeting,
                      and managed multiple project including monitoring
                      deadlines and workload status.
                    </h6>
                    <p>Highlights:</p>
                    <ul>
                      <li>
                        Created website designs using advanced digital design
                        skills.
                      </li>
                      <li>
                        Used project management skills to plan and deliver
                        creative designs based on client needs.
                      </li>
                      <li>
                        Upheld quality standards by ensuring adherence to client
                        requirements and brand guidelines.
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <p>Tools:</p>
                    <ul>
                      <li>Adobe Creative Suite</li>
                    </ul>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <Card className="text-start mt-5">
        <Card.Header>
          <Row>
            <Col>Projects</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>Web Designer Intern</Card.Title>
          <p>Aug 2024 - Oct 2024</p>
          <p className="fst-italic">Iter Innovadi | Montreal, QC, CA</p>
          <Card.Text>
            Interned as a Web Designer, collaborating with the creative team in
            weekly meetings and creating social media graphics and user
            interfaces in Figma for multiple projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
