import React, { useState } from "react";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    return (
        <div>
            <button
                onClick={() => {
                    setType(
                        type === "multiple_choice_question" ?
                            "short_answer_question"
                        :   "multiple_choice_question",
                    );
                }}
            >
                Change Type
            </button>
            <div>
                {type === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
