import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr />
            <div>
                {/* Image with alt text */}
                <img
                    src="placeholder.jpg"
                    alt="Sample alt text"
                    style={{ display: "block", margin: "auto" }}
                />
            </div>
            <hr />
            <div>
                {/* List with at least three elements */}
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
            <hr />
            <div>
                {/* Bootstrap-styled button */}
                <Button
                    className="btn btn-primary"
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <hr />
            <DoubleHalf />
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
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
