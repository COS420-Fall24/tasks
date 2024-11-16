import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

function Doubler({
    value,
    onChange,
}: {
    value: number;
    onChange: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                onChange(value * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    onChange,
}: {
    value: number;
    onChange: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                onChange(value / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDoubleHalfState();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} onChange={setDhValue} />
            <Halver value={dhValue} onChange={setDhValue} />
        </div>
    );
}
