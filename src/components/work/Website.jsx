import React from "react";
import "./work.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Website = ({
  card1,
  card1Text,
  card2,
  card2Text,
  card3,
  card3Text,
  card4,
  card4Text,
  card5,
  card5Text,
}) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

  const handleShowModal3 = () => setShowModal3(true);
  const handleCloseModal3 = () => setShowModal3(false);

  const handleShowModal4 = () => setShowModal4(true);
  const handleCloseModal4 = () => setShowModal4(false);

  const handleShowModal5 = () => setShowModal5(true);
  const handleCloseModal5 = () => setShowModal5(false);

  return (
    <Container className="mt-5">
      <Row xs={1} lg={3}>
        {/* ------------------Card 1------------------ */}
        <Col className="mt-3 text-start">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={card1} alt={card1Text} />
              <Card.Title className="pt-3">{card1Text}</Card.Title>
              <Card.Link
                variant="link"
                href="https://celebrated-truffle-88872c.netlify.app/"
              >
                Live Preview
              </Card.Link>
              <Card.Link variant="link" href="#" onClick={handleShowModal1}>
                View more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Modal size="lg" show={showModal1} onHide={handleCloseModal1}>
          <Modal.Header closeButton>
            <Modal.Title>Project Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Key Features</h6>
            <p>
              As part of the Advanced Layout project, I worked on a responsive,
              multi-layered and complex web page which required interactivity.
              With the help of HTML and CSS, I added a modal window, a
              scrollable sticky navigation, horizontal opening sections, a
              paralaxing image in the background, and easy-to-find semantic
              form. Measurements, colors, and fonts from the Figma file were
              followed to ensure that the design intent was met. I employed a
              combination of elastic and rigid layout methods with properly
              defined media queries to ensure the site was viewable on all
              devices, right down to 320px. I ensured that the final build was
              able to work on Edge, Firefox, Chrome, and Safari browsers, and
              WebP images were properly expanded without changing the
              proportions. This project further developed my ability to create
              responsive layouts and more clearly showed how important semantic
              HTML is for writing accessible and fast code.
            </p>
            <ul>
              <li>CSS Grid and Flexbox for responsive design</li>
              <li>JavaScript for interactive elements</li>
              <li>Design that adheres to accessibility guidelines</li>
              <li>Compatible across multiple browsers</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal1}>
              Close
            </Button>
            <Button
              href="https://celebrated-truffle-88872c.netlify.app/"
              variant="primary"
              onClick={handleCloseModal1}
            >
              Live Preview
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ------------------Card 2------------------ */}
        <Col className="mt-3 text-start">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={card2} alt={card2Text} />
              <Card.Title className="pt-3">{card2Text}</Card.Title>
              <Card.Link href="https://teal-shrew-536366.hostingersite.com/#">
                Live Preview
              </Card.Link>
              <Card.Link href="#" onClick={handleShowModal2}>
                View more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Modal size="lg" show={showModal2} onHide={handleCloseModal2}>
          <Modal.Header closeButton>
            <Modal.Title>Project Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Key Features</h6>
            <p>
              In the WordPress - Web Content Management System project, I
              developed a fully working website for a clothing store by
              transforming its static web pages into a dynamic, responsive one.
              While customizing the 2024 theme, I made sure that the content,
              imagery, spacing, and fonts used are all in accordance with the
              desktop design template. Guided by practice rather than by
              starting with a distinct phone design, I resized the layout for
              smaller screen devices, ensuring that no matter the device, the
              website remains visually pleasing. This project increased my
              competence in WordPress customization, where the challenge is
              meeting the client branding requirements and adjusting the theme
              styles with html and css. Major insights included a greater
              appreciation for modifying long-standing design elements as well
              as the challenges involved in creating a consistent mobile UI. In
              general, the project confirmed the possibilities of WordPress as a
              powerful and flexible CMS and developed my skills in the design of
              adaptive sites.
            </p>
            <ul>
              <li>Responsive design using WordPress customization</li>
              <li>HTML and CSS for layout adjustments and styling</li>
              <li>Flexibility in adapting legacy design assets</li>
              <li>Consistent user experience across all devices</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ------------------Card 3------------------ */}
        <Col className="mt-3 text-start">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={card3} alt={card3Text} />
              <Card.Title className="pt-3">{card3Text}</Card.Title>
              <Card.Link href="#" onClick={handleShowModal3}>
                View more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Modal size="lg" show={showModal3} onHide={handleCloseModal3}>
          <Modal.Header closeButton>
            <Modal.Title>Project Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Key Features</h6>
            <p>
              As a part of the add-ons Custom Functions, Form Validation, &
              Output, I designed a reliable web form for a fictitious flower
              shop that let clients request quotations on custom designs. My
              emphasis was on deploying strong validation strategies to prevent
              XSS vulnerabilities. I worked on custom validation functions to
              filter and complete all mandatory fields. I constructed backend
              validation on HTML and PHP for different types of inputs while
              making it easier and more secure. This project broadened my
              horizon about form validation by placing importance on secure
              coding techniques and the rationale behind why data validation is
              a must in web building.
            </p>
            <ul>
              <li>Secure web form with custom validation</li>
              <li>Protection against cross-site scripting (XSS)</li>
              <li>Robust backend checks for diverse input types</li>
              <li>Emphasis on user safety and data integrity</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ------------------Card 4------------------ */}
        <Col className="mt-3 text-start">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={card4} alt={card4Text} />
              <Card.Title className="pt-3">{card4Text}</Card.Title>
              <Card.Link href="#" onClick={handleShowModal4}>
                View more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Modal size="lg" show={showModal4} onHide={handleCloseModal4}>
          <Modal.Header closeButton>
            <Modal.Title>Project Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Key Features</h6>
            <p>
              Designed and developed an interactive website using Joomla CMS,
              integrating user authentication with role-based access, calendar
              posts, forums, a product page with pricing and descriptions, and
              registration form features. This project enhanced my understanding
              of advanced web concepts, including user access control,
              customizing CSS within pre-built templates, and structuring
              dynamic product pages.
            </p>
            <ul>
              <li>
                Create new registered user in amin and grant user Author
                permissions.
              </li>
              <li>
                Create calendar with visible events as sidebar items on
                homepage.
              </li>
              <li>
                Utilized Joomla extensions such as Kunena Forums and Hikashop
              </li>
            </ul>
            <Image src="/assets/squidGameWeb-1.png" fluid />
            <Image src="/assets/squidGameWeb-2.png" fluid />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ------------------Figma------------------ */}
        <Col className="mt-3 text-start" id="focusPrototype">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Img variant="top" src={card5} alt={card5Text} />
              <Card.Title className="pt-3">{card5Text}</Card.Title>
              <Card.Link href="https://www.figma.com/proto/RcA68aprtUH6hHDl8i0XR0/Focus-Photography-Club?page-id=0%3A1&node-id=6-1217&p=f&viewport=-88%2C40%2C0.09&t=AImNLrxwQlDW08p4-1&scaling=scale-down&content-scaling=fixed">
                Prototype
              </Card.Link>
              <Card.Link href="#" onClick={handleShowModal5}>
                View more
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Modal size="lg" show={showModal5} onHide={handleCloseModal5}>
          <Modal.Header closeButton>
            <Modal.Title>Project Overview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Key Features</h6>
            <p>
              Conducted user research to gain a high-level understanding of the
              registration journey for the Photography Club. Developed a working
              prototype to test the proposed user flow.
            </p>
            <ul>
              <li>Analysis and Design Thinking</li>
              <li>Validation Process</li>
              <li>Prototype Usability</li>
            </ul>
            <Image src="/assets/FocusPhotoWeb-Full.png" fluid />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default Website;
