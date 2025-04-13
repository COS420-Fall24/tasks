import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const rollLeft = (): void => {
        setLeftDie(Math.floor(Math.random() * 6) + 1);
    };

    const rollRight = (): void => {
        setRightDie(Math.floor(Math.random() * 6) + 1);
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft} data-testid="roll-left">
                    Roll Left
                </Button>
                <Button onClick={rollRight} data-testid="roll-right">
                    Roll Right
                </Button>
            </div>
            {leftDie === 1 && rightDie === 1 && (
                <div data-testid="lose-message">Snake Eyes! You lose!</div>
            )}
            {leftDie === rightDie && leftDie !== 1 && (
                <div data-testid="win-message">You win!</div>
            )}
        </div>
    );
}
