import React from "react";
import "./App.css";
import caw2 from "./images/caw2.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>CAWWW</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Claire Kelley. Hello World.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "5px",
                                backgroundColor: "red",
                            }}
                        />
                        <img src={caw2} alt="Caw? Caw caw caw. Caaaaw." />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "5px",
                                backgroundColor: "red",
                            }}
                        />
                        <ul>
                            <li>One For Sorrow,</li>
                            <li>Two for joy,</li>
                            <li>Three For a Girl,</li>
                            <li>Four For a Boy. </li>
                        </ul>

                        <Button
                            className="black-button"
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
