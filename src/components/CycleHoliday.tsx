import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define a list of holidays with their emojis and dates (for chronological cycling)
const holidays = [
    { name: "New Year", emoji: "🎆", date: "2025-01-01" },
    { name: "Dragon Boat Festival", emoji: "🎏", date: "2025-06-14" },
    { name: "Halloween", emoji: "🎃", date: "2025-10-31" },
    { name: "Diwali", emoji: "🪔", date: "2025-11-14" },
    { name: "Christmas", emoji: "🎄", date: "2025-12-25" },
];

export function CycleHoliday(): React.JSX.Element {
    // State to hold the current holiday object
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    // Function to advance holidays alphabetically
    const nextHolidayAlphabetically = () => {
        const sortedHolidays = [...holidays].sort((a, b) =>
            a.name.localeCompare(b.name),
        );
        const currentIndex = sortedHolidays.indexOf(currentHoliday);
        setCurrentHoliday(
            sortedHolidays[(currentIndex + 1) % sortedHolidays.length],
        );
    };

    // Function to advance holidays chronologically (by date)
    const nextHolidayByYear = () => {
        const sortedByDate = [...holidays].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
        const currentIndex = sortedByDate.indexOf(currentHoliday);
        setCurrentHoliday(
            sortedByDate[(currentIndex + 1) % sortedByDate.length],
        );
    };

    return (
        <div>
            {/* Display the current holiday */}
            <p>
                Holiday: {currentHoliday.emoji} {currentHoliday.name}
            </p>

            {/* Button to advance by alphabetical order */}
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>

            {/* Button to advance by chronological order */}
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
