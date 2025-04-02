import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    // State to track the number of attempts (starts at 4)
    const [attempts, setAttempts] = useState(4);

    // State to track whether the quiz is in progress or not
    const [inProgress, setInProgress] = useState(false);

    // Function to start the quiz (decrease attempts and set in progress to true)
    const startQuiz = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setInProgress(true);
        }
    };

    // Function to stop the quiz (set in progress to false)
    const stopQuiz = () => {
        setInProgress(false);
    };

    // Function to give a Mulligan (increase attempts by 1)
    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            {/* Display the number of attempts left */}
            <p>Attempts Left: {attempts}</p>

            {/* Start Quiz button (disabled when in progress or no attempts left) */}
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>

            {/* Stop Quiz button (disabled when not in progress) */}
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            {/* Mulligan button (disabled when quiz is in progress) */}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
