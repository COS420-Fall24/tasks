import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2); // different initial value

    const rollLeft = () => { setLeftDie(d6()); };
    const rollRight = () => { setRightDie(d6()); };

    let message = "";
    if (leftDie === rightDie) {
        message = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
}
