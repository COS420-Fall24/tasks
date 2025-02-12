import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                <h1> This is the header</h1>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Tess Nunes, Hello World!
            </p>

            <img
                src="https://hips.hearstapps.com/hmg-prod/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg?crop=0.760xw:1.00xh;0.204xw,0&resize=980:*"
                alt="a picture of a dog"
            />

            <ul>
                <li> First Thing</li>
                <li> Seconf Thing</li>
                <li> Third Thing</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World{" "}
            </Button>

            <div>
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
                            {" "}
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
            </div>
        </div>
    );
}

export default App;
