import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Function to simulate a dice roll, generating a number between 1 and 6
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    return (
        <div>
            <div data-testid="left-die">Left Die: {leftDie}</div>
            <div data-testid="right-die">Right Die: {rightDie}</div>
            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
        </div>
    );
}
