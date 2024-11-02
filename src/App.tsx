import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
<<<<<<< Updated upstream
=======
import { Button, Col, Container, Row } from "react-bootstrap";
>>>>>>> Stashed changes

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
<<<<<<< Updated upstream
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
=======
            <h1>My Program</h1>972025!
            {/* Image with alt text */}
            <img
                src="data:image/jpeg;base64,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"
                alt="Fall"
            />
            {/* List with at least three items */}
            <div>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Obed Hello World Unordered List:
                <ul>
                    <li>Trees</li>
                    <li>Sunlight</li>
                    <li>Lawn</li>
                </ul>
            </div>
            {/* Bootstrap Button */}
            <Button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            {/* Red background divs */}
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
>>>>>>> Stashed changes
        </div>
    );
}

export default App;
