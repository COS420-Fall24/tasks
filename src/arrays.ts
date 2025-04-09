/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {

    let new_array =[];

    if (numbers.length > 0){
        new_array.push(numbers[0]);
        let last_index = numbers.length - 1
        new_array.push(numbers[last_index]);
    }
    
    return new_array;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {

    const triplenum = numbers.map((num: number): number => num*3);


    return triplenum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int_array = numbers.map((num: string): number => (Number.isInteger(Number(num))) ? (Number(num)) : 0);
    return int_array;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {

    const rem_char = amounts.map((num: string): string => num.replace("$", ""));
    const int_array = rem_char.map((num: string): number => (Number.isInteger(Number(num))) ? (Number(num)) : 0);
    return int_array;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {

    const check_ex = messages.map((msg: string): string => (msg.charAt(msg.length - 1) == "!") ? msg.toUpperCase() : msg);
    const final_array = check_ex.filter((msg: string): boolean => (msg.charAt(msg.length - 1) != "?"));

    return final_array;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words = words.filter((word: string): boolean => (word.length < 4));
    return short_words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb_tf = colors.every((color: string): boolean => (color == "red" || color == "green" || color == "blue"));
    return rgb_tf;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum  = addends.reduce((currentTotal: number, num: number) => currentTotal+num, 0);
    let sum_string = addends.join("+");
    if (addends.length < 1){
        sum_string = "0";
    }
    let final_string: string = sum + "=" + sum_string;

    return final_string;
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
    let firstnegval = values.findIndex((value: number): boolean => value < 0);
    if (firstnegval == -1){ 
        firstnegval = values.length;
    }

    const sumofoartial = values.slice(0, firstnegval).reduce((currentTotal: number, value: number) => currentTotal+value, 0);

    const valuesInside = [...values];
    valuesInside.splice(firstnegval+1, 0, sumofoartial)

    return valuesInside;
}
