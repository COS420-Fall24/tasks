import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const RevealAnswer = () => {
    const [revealed, setRevealed] = useState(false);
    const answer = 42; // Example answer

    const toggleReveal = () => {
        setRevealed(!revealed); // Added braces for clarity
    };

    return (
        <div>
            <Button onClick={toggleReveal} aria-label="Reveal Answer">
                Reveal Answer
            </Button>
            {revealed && <p>{answer}</p>}
        </div>
    );
};
