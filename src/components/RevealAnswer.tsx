import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // State to control the visibility of the answer
    const [visible, setVisible] = useState(false);

    // Function to toggle visibility
    const toggleAnswer = () => {
        setVisible(!visible);
    };

    return (
        <div>
            {/* Button to reveal/hide the answer */}
            <Button onClick={toggleAnswer}>Reveal Answer</Button>

            {/* Display the answer when 'visible' state is true */}
            {visible && <p>42</p>}
        </div>
    );
}
