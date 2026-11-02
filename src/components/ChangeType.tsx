import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const newType: Record<QuestionType, string> = {
        multiple_choice_question: "Multiple Choice",
        short_answer_question: "Short Answer",
    };

    function switchType(): void {
        setQuestionType(
            questType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    return (
        <div>
            <Button onClick={switchType}>Change Type</Button>
            <span>{newType[questType]}</span>
        </div>
    );
}
