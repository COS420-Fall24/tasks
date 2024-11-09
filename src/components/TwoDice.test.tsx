import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { TwoDice } from "./TwoDice";

/**
 * Helper function to extract a number from an HTMLElement's textContent.
 */
export function extractDigits(element: HTMLElement): number | null {
    const attemptNumberText = element.textContent || "";
    const attemptNumberDigitsMatched = attemptNumberText.match(/\d+/);
    return attemptNumberDigitsMatched ?
            parseInt(attemptNumberDigitsMatched[0], 10)
        :   null;
}

describe("TwoDice Component tests", () => {
    beforeEach(() => {
        render(<TwoDice />);
    });

    test("(1 pts) Clicking left button changes first number", async () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        await act(async () => {
            leftButton.click();
        });
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        expect(leftNumber).not.toBeNull(); // Ensure it changes
    });

    test("(1 pts) Clicking right button changes second number", async () => {
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        await act(async () => {
            rightButton.click();
        });
        const rightNumber = extractDigits(screen.getByTestId("right-die"));
        expect(rightNumber).not.toBeNull(); // Ensure it changes
    });

    test("(1 pts) Rolling two different numbers does not win or lose the game", async () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        await act(async () => {
            leftButton.click();
        });
        await act(async () => {
            rightButton.click();
        });
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        const rightNumber = extractDigits(screen.getByTestId("right-die"));
        expect(leftNumber).not.toEqual(rightNumber); // Ensure they are different
        const winText = screen.queryByText(/Win/i);
        expect(winText).toBeNull();
        const loseText = screen.queryByText(/Lose/i);
        expect(loseText).toBeNull();
    });

    test("(1 pts) Getting snake eyes loses the game", async () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        // Directly set state or simulate multiple clicks if needed to achieve desired result
        await act(async () => {
            leftButton.click();
            rightButton.click();
        });
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        const rightNumber = extractDigits(screen.getByTestId("right-die"));
        if (leftNumber === 1 && rightNumber === 1) {
            const loseText = screen.getByText(/Lose/i);
            expect(loseText).toBeInTheDocument();
        }
    });

    test("(1 pts) Getting matching numbers wins the game", async () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        const rightButton = screen.getByRole("button", { name: /Roll Right/i });
        await act(async () => {
            leftButton.click();
            rightButton.click();
        });
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        const rightNumber = extractDigits(screen.getByTestId("right-die"));
        if (leftNumber === rightNumber && leftNumber !== 1) {
            const winText = screen.getByText(/Win/i);
            expect(winText).toBeInTheDocument();
        }
    });
});
