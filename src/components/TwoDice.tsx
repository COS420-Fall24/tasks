import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Helper function to roll a six-sided die
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice({
    initialLeftDie = d6(),
    initialRightDie = d6(),
}: {
    initialLeftDie?: number;
    initialRightDie?: number;
}): React.JSX.Element {
    // Initialize state for each die
    const [leftDie, setLeftDie] = useState<number>(initialLeftDie);
    const [rightDie, setRightDie] = useState<number>(initialRightDie);

    // Determine win/lose conditions
    const hasWon = leftDie === rightDie && leftDie !== 1;
    const hasLost = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <Button onClick={() => setLeftDie(d6())} data-testid="roll-left">
                Roll Left
            </Button>
            <Button onClick={() => setRightDie(d6())} data-testid="roll-right">
                Roll Right
            </Button>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            {hasWon && <p>Win</p>}
            {hasLost && <p>Lose</p>}
        </div>
    );
}
