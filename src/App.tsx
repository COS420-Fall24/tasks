import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <div style={{ backgroundColor: "red" }}>
                <h1 style={{ backgroundColor: "rgb(255,0,0)" }}>
                    Heading is added.
                </h1>
                ;
                <img src="/logo192.png" alt="React logo" />;
                <ul>
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                </ul>
                ;
                <div>
                    <Button
                        variant="primary"
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                ;
            </div>
            );
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Alex Picard</p>
        </div>
    );
}

export default App;
