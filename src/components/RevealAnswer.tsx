import React, { useState } from "react";
import { Button } from "react-bootstrap";
//The RevealAnswer component simulates a quiz application that provides a way to “reveal the answer” to a user by clicking a button. The answer will be 42 for our purposes.

/*You will need a state to handle whether the text is visible.
There is a button labelled Reveal Answer that inverts the state.
The text 42 is not initially visible.
When the button is clicked, the text 42 should be visible.*/
export function RevealAnswer(): React.JSX.Element {
    const RevealAnswerButton = () => {
        const [visible, setVisible] = useState<boolean>(false);
        return (
            <div>
                <Button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    Reveal Answer
                </Button>
                {visible && <div>42</div>}
            </div>
        );
    };

    return <RevealAnswerButton />;
}
