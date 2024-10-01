import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Welcome to my website!</header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Clara Hello World
            </p>

            {/* Organizing content into flex "columns" */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <div>
                    <img
                        src={"./IMG_5673.JPG"}
                        alt="This is a lovely picture of my cat Milton"
                        style={{ maxWidth: "200px" }}
                    />
                </div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <ol>
                    <li>My</li>
                    <li>First</li>
                    <li>Website</li>
                </ol>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <p>
                    Hello! My name is Clara Scalzer. I am a student in COS420{" "}
                </p>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
