import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Made by Henry Koch. Hello World
            </p>
            <h1>This is heading text</h1>;
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>
            ;
            <div>
                <h1>Hello World</h1>
                <p>How are you doing today?</p>
            </div>
            ;
            <>
                <h1>Hello World</h1>
                <p>How are you doing today?</p>
            </>
            ;
            <div>
                Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
                Ordered List: I was going to make another list, but the tests
                didnt like me having more than 2 lists.
            </div>
            ;
            <div>
                <h1>Hello World</h1>
                <img
                    src="../assets/images/pet-ada.jpg"
                    alt="A picture of my dog Ada"
                />
            </div>
            ;
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            ;
            <div>
                This is <span style={{ color: "red" }}>colored text</span>
            </div>
            ;
            <div>
                This is text with a{" "}
                <span style={{ backgroundColor: "red" }}>red background</span>
            </div>
            <div>
                <Button>Click Me</Button>
            </div>
            ;
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            ;
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
                            Second column. I was going to put a picture of
                            Jayson Tatum, but the tests didnt like 2 images.
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
