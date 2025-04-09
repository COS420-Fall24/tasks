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
                automatically reload. Conall Gouveia. Hello World
            </p>

            <h1>This is heading text</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dhole%28Asiatic_wild_dog%29.jpg/640px-Dhole%28Asiatic_wild_dog%29.jpg" alt="A picture of an Asiatic wild dog" />

            <ol>
                <li>First Element</li>
                <li>Second Element</li>
                <li>Third Element</li>
            </ol>

            <div style={ {border: '1px solid blue', padding: '4px', backgroundColor: 'red'} }>
            this will be surrounded by a border and padding.
            </div>

            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>

        </div>
    );
}


export default App;
