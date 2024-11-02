import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<"Short Answer" | "Multiple Choice">(
        "Short Answer",
    );

    return (
        <div>
            <div>{type}</div>
            <Button
                onClick={() => {
                    setType(
                        type === "Short Answer" ? "Multiple Choice" : (
                            "Short Answer"
                        ),
                    );
                }}
                role="button"
                aria-label="Change Type"
            >
                Change Type
            </Button>
        </div>
    );
}
