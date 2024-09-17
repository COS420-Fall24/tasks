import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    const rectangleStyle = {
        width: "50%",
        height: "100px",
        backgroundColor: "red",
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Noah Moring is Doing This Thing.</h1>UM COS420 with React
                Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <div style={rectangleStyle}></div>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Noah Moring Hello World
                        </p>
                        <ol>
                            <li>This is element one</li>
                            <li>This is element two</li>
                            <li>This is element three</li>
                        </ol>
                    </Col>
                    <div style={rectangleStyle} />
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                    <img
                        src="https://drive.google.com/file/d/1cIcGmurZW9AXt3LBMiHXHK_XRfDUAXFW/view?usp=drive_link"
                        alt="A picture of my cat Onyx"
                    />
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
