/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNumbers: number[] = [...numbers];
    if (newNumbers.length < 1) {
        return [];
    }
    const last: number | undefined = newNumbers.pop();
    return [numbers[0], last != undefined ? last : numbers[0]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n) => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers
        .map((strToInt) => parseInt(strToInt))
        .map((parsed) => (isNaN(parsed) ? 0 : parsed));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts
        .map((dollarsStr) => {
            if (dollarsStr.startsWith("$")) {
                return dollarsStr.substring(1);
            }
            return dollarsStr;
        })
        .map((strToInt) => parseInt(strToInt))
        .map((parsed) => (isNaN(parsed) ? 0 : parsed));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message) => {
            if (message.endsWith("!")) {
                return message.toUpperCase();
            }
            return message;
        })
        .filter((message) => !message.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words
        .map((word) => word.length)
        .reduce((acc, curr) => {
            if (curr < 4) {
                return acc + 1;
            }
            return acc;
        }, 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors
        .map((color) => ["red", "blue", "green"].includes(color))
        .reduce((acc, curr) => {
            return acc && curr;
        }, true);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length < 1) {
        // handle [] case
        addends = [0];
    }
    const sum: number = addends.reduce((acc, curr) => acc + curr, 0);
    const math: string =
        sum.toString() +
        "=".concat(...addends.map((addend) => addend.toString() + "+"));
    return math.substring(0, math.length - 1);
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
    let firstNegative: number = values.findIndex((value) => value < 0);
    if (firstNegative == -1) {
        firstNegative = values.length;
    }
    const sum: number = values
        .slice(0, firstNegative)
        .reduce((acc, curr) => acc + curr, 0);
    const newValues: number[] = [...values];
    newValues.splice(firstNegative + 1, 0, sum);
    return newValues;
}
