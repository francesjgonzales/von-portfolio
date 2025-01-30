import React from "react";
import { Row, Container } from "react-bootstrap";
import websiteDevelopment from "../../components/work/websiteData";
import Website from "../../components/work/Website";

const Websites = () => {
  return (
    <Container className="mt-5">
      <h1>Projects</h1>
      <h6>
        As part of NAIT's DMIT Web Design and Development course, we focused on
        learning PHP language, WordPress specifically custom-theme, and
        Javascript for interactive elements. Here are some of the projects I
        did.
      </h6>
      {websiteDevelopment.map((item) => (
        <Row key={item.id} id={item.id}>
          <Website
            card1={item.card1}
            card1Text={item.card1Text}
            card2={item.card2}
            card2Text={item.card2Text}
            card3={item.card3}
            card3Text={item.card3Text}
            card4={item.card4}
            card4Text={item.card4Text}
          />
        </Row>
      ))}
    </Container>
  );
};

export default Websites;
