import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TwoDice } from "./TwoDice";

// Helper function to mock the random die roll
const mockRandom = (value: number) => {
    jest.spyOn(Math, "random").mockReturnValue(value);
};

describe("TwoDice Component tests", () => {
    afterEach(() => {
        jest.restoreAllMocks(); // Restore original functionality after each test
    });

    test("Displays initial dice values", () => {
        render(<TwoDice initialLeftDie={4} initialRightDie={5} />);

        const leftDie = screen.getByTestId("left-die");
        const rightDie = screen.getByTestId("right-die");

        expect(leftDie).toBeInTheDocument();
        expect(rightDie).toBeInTheDocument();
        expect(leftDie.textContent).toBe("4");
        expect(rightDie.textContent).toBe("5");
    });

    test("Displays 'Win' message when both dice match and are not both 1", () => {
        render(<TwoDice initialLeftDie={3} initialRightDie={3} />);

        expect(screen.getByTestId("left-die").textContent).toBe("3");
        expect(screen.getByTestId("right-die").textContent).toBe("3");
        expect(screen.getByText("Win")).toBeInTheDocument();
    });

    test("Displays 'Lose' message when both dice show 1", () => {
        render(<TwoDice initialLeftDie={1} initialRightDie={1} />);

        expect(screen.getByTestId("left-die").textContent).toBe("1");
        expect(screen.getByTestId("right-die").textContent).toBe("1");
        expect(screen.getByText("Lose")).toBeInTheDocument();
    });

    test("Displays neither 'Win' nor 'Lose' when dice values do not match win/lose conditions", () => {
        render(<TwoDice initialLeftDie={2} initialRightDie={4} />);

        expect(screen.getByTestId("left-die").textContent).toBe("2");
        expect(screen.getByTestId("right-die").textContent).toBe("4");
        expect(screen.queryByText("Win")).not.toBeInTheDocument();
        expect(screen.queryByText("Lose")).not.toBeInTheDocument();
    });

    test("Rolls left die and updates value", () => {
        mockRandom(0); // This will simulate a roll of 1
        render(<TwoDice initialLeftDie={3} initialRightDie={5} />);

        fireEvent.click(screen.getByTestId("roll-left"));

        const leftDie = screen.getByTestId("left-die");
        expect(leftDie.textContent).toBe("1"); // Check if the value updated to 1
        expect(screen.queryByText("Win")).not.toBeInTheDocument();
        expect(screen.queryByText("Lose")).not.toBeInTheDocument();
    });

    test("Rolls right die and updates value", () => {
        mockRandom(0.5); // This will simulate a roll of 4
        render(<TwoDice initialLeftDie={3} initialRightDie={5} />);

        fireEvent.click(screen.getByTestId("roll-right"));

        const rightDie = screen.getByTestId("right-die");
        expect(rightDie.textContent).toBe("4"); // Check if the value updated to 4
        expect(screen.queryByText("Win")).not.toBeInTheDocument();
        expect(screen.queryByText("Lose")).not.toBeInTheDocument();
    });
});
