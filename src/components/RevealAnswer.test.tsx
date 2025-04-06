import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

describe("RevealAnswer Component tests", () => {
    test("There is a Reveal Answer button", () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /reveal answer/i,
        });
        expect(revealButton).toBeInTheDocument();
    });

    test("Clicking Reveal Answer button reveals the answer", async () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /reveal answer/i,
        });
        fireEvent.click(revealButton);
        expect(await screen.findByText("42")).toBeInTheDocument();
    });

    test("Clicking Reveal Answer button twice hides the answer", async () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /reveal answer/i,
        });
        fireEvent.click(revealButton); // Reveal the answer
        expect(await screen.findByText("42")).toBeInTheDocument();
        fireEvent.click(revealButton); // Hide the answer
        expect(screen.queryByText("42")).not.toBeInTheDocument();
    });
});
