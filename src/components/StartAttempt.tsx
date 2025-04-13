import React, { useState } from "react";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <button
                onClick={() => {
                    setInProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </button>
            <button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </button>
        </div>
    );
}
