import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Filters an array of questions to return only those that are published.
 * @param questions - An array of Question objects.
 * @returns A new array containing only published questions.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return [];
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0,
    );
}

/**
 * Finds a question by its ID in the array.
 * @param questions - An array of Question objects.
 * @param id - The ID of the question to find.
 * @returns The found Question object or null if not found.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((question) => question.id === id) || null;
}

/**
 * Removes a question from the array based on its ID.
 * @param questions - An array of Question objects.
 * @param id - The ID of the question to remove.
 * @returns A new array of questions without the specified question.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return [];
}

/**
 * Extracts the names of all questions into a new array.
 * @param questions - An array of Question objects.
 * @returns An array of question names.
 */
export function getNames(questions: Question[]): string[] {
    return [];
}

/**
 * Creates an array of Answers corresponding to the provided questions.
 * Each Answer is initialized with empty values.
 * @param questions - An array of Question objects.
 * @returns An array of Answer objects.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return [];
}

/**
 * Publishes all questions in the array.
 * @param questions - An array of Question objects.
 * @returns A new array of questions with all marked as published.
 */
export function publishAll(questions: Question[]): Question[] {
    return [];
}

/**
 * Adds a new blank question to the end of the array.
 * @param questions - An array of Question objects.
 * @param id - The ID for the new question.
 * @param name - The name for the new question.
 * @param type - The type of the new question.
 * @returns A new array of questions including the new blank question.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
<<<<<<< HEAD
=======
): Question[] {
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
>>>>>>> 8b3325c (did some)
): Question[] {
    return [];
}

/**
<<<<<<< HEAD
 * Renames a specific question identified by its ID.
 * @param questions - An array of Question objects.
 * @param targetId - The ID of the question to rename.
 * @param newName - The new name for the question.
 * @returns A new array of questions with the specified question renamed.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return [];
}

/**
 * Edits the options for a specific question identified by its ID.
 * If the targetOptionIndex is -1, adds a new option; otherwise replaces an existing option.
 * @param questions - An array of Question objects.
 * @param targetId - The ID of the question to edit.
 * @param targetOptionIndex - The index of the option to replace or -1 to add a new option.
 * @param newOption - The new option to add or replace.
 * @returns A new array of questions with the updated options.
=======
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
>>>>>>> 8b3325c (did some)
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
<<<<<<< HEAD
    return questions.map((question) => {
        if (question.id !== targetId) {
            return question;
        }

        // Clone the options array
        const updatedOptions = [...question.options];

        // Check if we are appending or replacing an option
        if (targetOptionIndex === -1) {
            updatedOptions.push(newOption);
        } else if (
            targetOptionIndex >= 0 &&
            targetOptionIndex < updatedOptions.length
        ) {
            updatedOptions[targetOptionIndex] = newOption;
        }

        // Return the updated question
        return { ...question, options: updatedOptions };
    });
=======
    return [];
>>>>>>> 8b3325c (did some)
}
