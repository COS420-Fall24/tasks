import React, { useState } from "react";

// eslint-disable-next-line no-undef
export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(1);

    const rollLeft = () => {
        setLeftDie(Math.floor(Math.random() * 6) + 1);
    };
    const rollRight = () => {
        setRightDie(Math.floor(Math.random() * 6) + 1);
    };

    return (
        <div>
            <h3>Two Dice</h3>
            <div>
                <button aria-label="Roll Left" onClick={rollLeft}>
                    Roll Left
                </button>
                <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <button aria-label="Roll Right" onClick={rollRight}>
                    Roll Right
                </button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
        </div>
    );
}
