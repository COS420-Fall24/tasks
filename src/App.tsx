import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Brianna Gannett. Hello World
            </p>
            <div style={{ background: "blue" }}>
                <h1>This is a header.</h1>
            </div>
            <img src="src\pic.jpg" alt="A picture of old architecture" />
            <ul>
                <li> First Item</li>
                <li> Second Item</li>
                <li> Third Item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World!
            </Button>
        </div>
    );
}

export default App;
