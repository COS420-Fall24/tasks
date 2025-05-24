import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visable, setVisiable] = useState<boolean>(false);

    function InvrtVis(): void {
        setVisiable(!visable);
    }

    return (
        <div>
            <Button onClick={InvrtVis}>Reveal Answer</Button>;
            {visable && <div>42</div>};
        </div>
    );
}
