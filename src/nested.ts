import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions
        .filter((question: Question): boolean => question.published)
        .map((question: Question): Question => {
            const copiedOptions: string[] = question.options.map(
                (option: string): string => option,
            );

            return {
                id: question.id,
                name: question.name,
                type: question.type,
                body: question.body,
                expected: question.expected,
                options: copiedOptions,
                points: question.points,
                published: question.published,
            };
        });
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions
        .filter(
            (question: Question): boolean =>
                question.body !== "" ||
                question.expected !== "" ||
                question.options.length > 0,
        )
        .map((question: Question): Question => {
            const copiedOptions: string[] = question.options.map(
                (option: string): string => option,
            );

            return {
                id: question.id,
                name: question.name,
                type: question.type,
                body: question.body,
                expected: question.expected,
                options: copiedOptions,
                points: question.points,
                published: question.published,
            };
        });
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const found = questions.find(
        (question: Question): boolean => question.id === id,
    );

    if (!found) {
        return null;
    }

    const copiedOptions: string[] = found.options.map(
        (option: string): string => option,
    );

    const copiedQuestion: Question = {
        id: found.id,
        name: found.name,
        type: found.type,
        body: found.body,
        expected: found.expected,
        options: copiedOptions,
        points: found.points,
        published: found.published,
    };

    return copiedQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions
        .filter((question: Question): boolean => question.id !== id)
        .map((question: Question): Question => {
            const copiedOptions: string[] = question.options.map(
                (option: string): string => option,
            );

            return {
                id: question.id,
                name: question.name,
                type: question.type,
                body: question.body,
                expected: question.expected,
                options: copiedOptions,
                points: question.points,
                published: question.published,
            };
        });
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question: Question): string => question.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        };
    });
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question: Question): Question => {
        const copiedOptions: string[] = question.options.map(
            (option: string): string => option,
        );

        return {
            id: question.id,
            name: question.name,
            type: question.type,
            body: question.body,
            expected: question.expected,
            options: copiedOptions,
            points: question.points,
            published: true,
        };
    });
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */

import { makeBlankQuestion } from "./objects"; // Needed when re using the makeBlankQuestion from objects file (mental note)

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    // Deep copy each question to avoid reference sharing
    const copiedQuestions: Question[] = questions.map(
        (question: Question): Question => {
            return {
                ...question,
                options: [...question.options],
            };
        },
    );

    // Create a new blank question using the provided helper
    const newBlankQuestion: Question = makeBlankQuestion(id, name, type);

    // Return a new array with all copied questions + the new blank one
    return [...copiedQuestions, newBlankQuestion];
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
): Question[] {
    return questions.map((question: Question): Question => {
        const copiedOptions: string[] = question.options.map(
            (option: string): string => option,
        );

        if (question.id === targetId) {
            return {
                ...question,
                name: newName,
                options: copiedOptions,
            };
        } else {
            return {
                ...question,
                options: copiedOptions,
            };
        }
    });
}

/**
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
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question: Question): Question => {
        const copiedOptions: string[] = question.options.map(
            (option: string): string => option,
        );

        if (question.id !== targetId) {
            return {
                ...question,
                options: copiedOptions,
            };
        }

        let updatedOptions: string[];

        if (targetOptionIndex === -1) {
            updatedOptions = [...copiedOptions, newOption];
        } else {
            updatedOptions = copiedOptions.map(
                (option: string, index: number): string =>
                    index === targetOptionIndex ? newOption : option,
            );
        }

        return {
            ...question,
            options: updatedOptions,
        };
    });
}
