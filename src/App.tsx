import React from "react";
import "./App.css";
import { Button  } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            Hello World
            <p>Created by Brendon</p>

           
            {/* Step 2: Add image with alt text*/}
            <h1>Check this picture out:</h1>
            <img
                src="C:\Users\brend\tasks\102_0371.jpeg"
                alt="A picture of my girlfriend and I"
            />



            {/* Step 3: Add a list of 3 items*/}
            <ul>
                <li>Computer</li>
                <li>Github</li>
                <li>Discord</li>
            </ul>



            {/* Step 4: Change the background color of the header area */}
            {/* Changed to vibrant green in the App.css file */}




            {/* Step 5: Add a bootstrap button with the text Log Hello World */}
            {/* Make the button log Hello World! when clicked */}

            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>



            {/* Step 6: Put a red-filled rectangle in each column using a div tag with width, height, and backgroundColor styles */}
            
            return (
            <div style={{ display: "flex", gap: "10px" }}>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>
            );
        </div>
    );
}

export default App;
