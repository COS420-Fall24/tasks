import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): React.JSX.Element {
    const handleButtonClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <img src="path/to/image.jpg" alt="Description of image" />
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <button className="btn btn-primary" onClick={handleButtonClick}>
                Log Hello World
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Caitlin

                Hello World
            </p>
        </div>
    );
}

export default App;
