import React from "react";
import "./App.css";
import {Button} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App" >
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Dean Was here
                Hello World
            </p>
            <h1><span style={ {color: 'red'} }>colored  header text</span></h1>;
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8lgDc1gGlVqn3UjDqKslOP6HrrUissH8xw&s" alt="A picture Shrek" />
            <p>
                Unordered List:
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            </p>
            <div style={{ width: '200px', height: '100px', backgroundColor: 'red' }}>
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>
            </div>
        </div>
    ); 
}


export default App;
