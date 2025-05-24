import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { start } from "repl";

export function StartAttempt(): React.JSX.Element {
    const [attemptNumber, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attemptNumber - 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attemptNumber + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress && attemptNumber > 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>

            <p>{attemptNumber}</p>
        </div>
    );
}
