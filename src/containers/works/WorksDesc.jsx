import React from "react";
import "./works.css";
import WorkDesc from "../../components/work/WorkDesc";
import { Container, Row, Col } from "react-bootstrap";
/* import workDataDesc from "../../components/work/workDataDesc"; */
import workData from "../../components/work/workData";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
/* import Websites from "./Websites"; */
import Digitals from "./Digitals";
import Prints from "./Prints";
import MotionGraphics from "./MotionGraphics";
import Websites from "../websites/Websites";

const WorksDesc = () => {
  return (
    <>
      <Container className="mt-3 mb-3">
        <Tabs
          /* defaultactivekey="website" */
          id="controlled-tab-example"
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="webDesign" title="Web Design">
            <Websites />
          </Tab>
          <Tab eventKey="Digital" title="Digital">
            <Digitals />
          </Tab>
          <Tab eventKey="Print" title="Print">
            <Prints />
          </Tab>
          <Tab eventKey="Motion Graphics" title="Motion Graphics">
            <MotionGraphics />
          </Tab>
        </Tabs>
      </Container>

      <Container className="mb-5">
        <Row xs={1} md={2} className="g-4">
          {workData.map((item) => (
            <Col key={item.id} id={item.id}>
              <WorkDesc
                cardTitle={item.cardTitle}
                cardText={item.cardText}
                card1={item.card1}
                card1Text={item.card1Text}
                card2={item.card2}
                card2Text={item.card2Text}
                card3={item.card3}
                card3Text={item.card3Text}
                card4={item.card4}
                card4Text={item.card4Text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WorksDesc;
