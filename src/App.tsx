import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>My Program</h1>
            <p>972025!</p>

            {/* Image with alt text */}
            <img
                src="data:https://i.ndtvimg.com/i/2017-02/fruits-and-vegetables_650x366_41486465566.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384"
                alt="Fall"
            />

            {/* Unordered List with at least three items */}
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
        </div>
    );
}

export default App;
