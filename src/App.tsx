import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import bear from "./assets/bear.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React App</h1>
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ryan O&apos;Sullivan. Hello World
            </p>

            <Container>
                <div>
                    <img src={bear} alt="Picture of a Bear on a Roadtrip" />
                </div>

                <div style={{ textAlign: "center" }}>
                    <ul
                        style={{
                            paddingInlineStart: "0",
                            margin: "0",
                            listStylePosition: "inside",
                        }}
                    >
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>

                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
