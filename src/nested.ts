import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Filters an array of questions to return only those that are published.
 * @param questions - An array of Question objects.
 * @returns A new array containing only published questions.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
    return questions.filter((question) => question.published);
}

/**
 * Consumes an array of questions and returns the question with the given `id`.
 * If the question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((question) => question.id === id) || null;
    return questions.find((question) => question.id === id) || null;
}

/**
 * Removes a question from the array based on its ID.
 * @param questions - An array of Question objects.
 * @param id - The ID of the question to remove.
 * @returns A new array of questions without the specified question.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
    return questions.filter((question) => question.id !== id);
}

/**
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array. Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
    return questions.map((question) => question.name);
}

/**
 * Creates an array of Answers corresponding to the provided questions.
 * Each Answer is initialized with empty values.
 * @param questions - An array of Question objects.
 * @returns An array of Answer objects.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
}

/**
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/**
 * Adds a new blank question to the end of the array.
 * @param questions - An array of Question objects.
 * @param id - The ID for the new question.
 * @param name - The name for the new question.
 * @param type - The type of the new question.
 * @returns A new array of questions including the new blank question.
/**
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * function to create a new blank question.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const makeBlankQuestion = (
        id: number,
        name: string,
        type: QuestionType,
    ): Question => ({
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    });
    return [...questions, makeBlankQuestion(id, name, type)];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 * That Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question,
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`.
 * That Question should be the same EXCEPT that its `options` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const newOptions =
                targetOptionIndex === -1 ?
                    [...question.options, newOption]
                :   question.options.map((option, index) =>
                        index === targetOptionIndex ? newOption : option,
                    );
            return { ...question, options: newOptions };
        }
        return question;
    });
}
