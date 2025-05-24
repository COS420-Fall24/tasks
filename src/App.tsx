import React from "react";
import "./App.css";
<<<<<<< HEAD
import boat from "./Assets/Boat.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>This is a Heading</h1>
            <img src={boat} alt="a picture of a boat" />
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 4</li>
            </ul>
            <button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.{" "}
                <span style={{ backgroundColor: "red" }}> Hello World </span>
                Signed: Braden Pare
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
