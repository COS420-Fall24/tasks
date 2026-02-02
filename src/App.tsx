import React from "react";
import "./App.css";
import MyImage from './assets/images/image.jpg';
import { Button } from 'react-bootstrap';





function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
               Paige Doucette- UM COS420 with React Hooks and TypeScript 
            </header>



            {/*Button */}
            <Button onClick={() => console.log("Hello World!")}>
          Log Hello World

            </Button>



            {/* Red boxes*/}
            <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>

            {/* Heading */}
            <h1>Hello World</h1>

            {/* Image */}
            <img src={MyImage} alt="Photo of me and friend diving" />



            {/* Paragraph*/}
            <p>
            Edit <code>src/App.tsx</code> and save. This page will
            automatically reload. Paige Doucette 
                Hello World 
            </p>


            {/*List*/}
            <ul>
                <li>Apple </li>
                <li>Pear </li>
                <li>Orange </li>
            </ul>
        </div>
    );
}

export default App;


