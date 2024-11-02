import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsRevealed(!isRevealed);
                }}
                role="button"
                aria-label="Reveal Answer"
            >
                Reveal Answer
            </Button>
            {isRevealed && <p>The answer is: 42</p>}
        </div>
    );
}
