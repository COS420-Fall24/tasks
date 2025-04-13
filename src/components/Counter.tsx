import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <button
                onClick={() => {
                    setValue(value + 1);
                }}
            >
                Add One
            </button>
            to {value}.
        </span>
    );
}
