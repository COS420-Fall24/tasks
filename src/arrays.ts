/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookList: number[] = [];
    if (numbers.length >= 1) {
        bookList[0] = numbers[0];
        bookList[1] = numbers[numbers.length - 1];
    }
    return bookList;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newNumbers: number[] = numbers.map(
        (numbers: number): number => numbers * 3,
    );
    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newNumbers: number[] = numbers.map((numbers: string): number =>
        isNaN(+numbers) ? 0 : +numbers,
    );
    return newNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removeDollarSign: string[] = amounts.map((amounts: string): string =>
        amounts.includes("$") ? amounts.replace("$", "") : amounts,
    );
    let final: number[] = removeDollarSign.map(
        (removeDollarSign: string): number =>
            isNaN(+removeDollarSign) ? 0 : +removeDollarSign,
    );
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let rmvQsts: string[] = messages.filter(
        (messages: string): boolean => !messages.includes("?"),
    );
    let final: string[] = rmvQsts.map((rmvQsts: string): string =>
        rmvQsts.includes("!") ? rmvQsts.toUpperCase() : rmvQsts,
    );
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let fltrShrtWrd: string[] = words.filter(
        (words: string): boolean => words.length < 4,
    );
    let final: number = fltrShrtWrd.length;
    return final;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let final: string[] = colors.filter(
        (colors: string): boolean =>
            colors !== "red" && colors !== "blue" && colors !== "green",
    );
    if (final.length === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    let final: string = "0";
    if (addends.length > 0) {
        final = addends.join("+");
    }
    let strSum: string = sum.toString();
    return strSum + "=" + final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let newValues: number[] = [...values];
    let negIndex: number = values.findIndex(
        (values: number): boolean => values < 0,
    );
    let addends: number[] = [];
    if (negIndex === -1) {
        negIndex = values.length - 1;
        addends = values;
    } else {
        addends = newValues.slice(0, negIndex);
    }

    let sum: number = addends.reduce(
        (total: number, num: number) => total + num,
        0,
    );
    newValues.splice(negIndex + 1, 0, sum);
    let final: number[] = [...newValues];
    //let final: number[] = [...newValues, sum];
    return final;
}
