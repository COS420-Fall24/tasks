import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    value,
    setValue,
}: {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Initialize with a default value of 1

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue} />
            <Halver value={dhValue} setValue={setDhValue} />
        </div>
    );
}
