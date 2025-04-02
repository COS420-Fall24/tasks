import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // State to track the values of the dice
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    // Function to roll the left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Function to roll the right die
    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine win/loss condition
    const isWin = leftDie === rightDie;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <div>
                {/* Display left die */}
                <span data-testid="left-die">{leftDie}</span>
                {/* Roll button for the left die */}
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                {/* Display right die */}
                <span data-testid="right-die">{rightDie}</span>
                {/* Roll button for the right die */}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>

            {/* Display win/lose message */}
            {isLose && <p>Lose: Snake Eyes (1 and 1)!</p>}
            {isWin && !isLose && <p>Win: Both dice are the same!</p>}
        </div>
    );
}
