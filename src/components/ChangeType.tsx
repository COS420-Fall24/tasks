import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    // State to track the type, initially set to "Short Answer"
    const [type, setType] = useState<string>("Short Answer");

    // Function to toggle the type between "Short Answer" and "Multiple Choice"
    const toggleType = () => {
        setType((prevType) =>
            prevType === "Short Answer" ? "Multiple Choice" : "Short Answer",
        );
    };

    return (
        <div>
            <p>{type}</p>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
