import { useState } from "react";

// Custom hook for managing the DoubleHalf value
export function useDoubleHalfState(): [
    number,
    // eslint-disable-next-line no-undef
    React.Dispatch<React.SetStateAction<number>>,
] {
    return useState<number>(10);
}
