import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">FST Restorations </span>
            is a family owned classic car restoration business, located in <span className="purple">White Bluff, TN.</span>
            <br /> Established in "insert year", <span className="purple">FST Restorations</span> provides high quality restoration service's to the greater Nashville area. We build hotrod, exotic, muscle car, rat rod automobiles, and anything else that
            our enthusiasts bring through the doors. From <span className="purple">custom metal fabrication</span>, to <span className="purple">interior upholstery</span>,<span className="purple"> paint and body</span>, and <span className="purple">engine work</span> we have you covered.
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Customer satisfaction is our number priority!"{" "}
          </p>
          <footer className="blockquote-footer">David Sokol, Owner</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
