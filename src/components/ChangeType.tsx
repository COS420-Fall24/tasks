import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const ChangeType = () => {
    const [type, setType] = useState("Short Answer");

    const changeType = () => {
        setType((prevType) =>
            prevType === "Short Answer" ? "Multiple Choice" : "Short Answer",
        );
    };

    return (
        <div>
            <p>{type}</p>
            <Button onClick={changeType} aria-label="Change Type">
                Change Type
            </Button>
        </div>
    );
};
