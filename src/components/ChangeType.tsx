import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // State to hold the current question type
    const [type, setType] = useState<QuestionType>("short_answer_question");

    // Function to toggle between question types
    const changeType = () => {
        setType((prevType) =>
            prevType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            {/* Button to change the question type */}
            <Button onClick={changeType}>Change Type</Button>

            {/* Display the current question type */}
            <p>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </p>
        </div>
    );
}
