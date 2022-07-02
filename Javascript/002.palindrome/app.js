const arguments = process.argv.slice(2);
const sentence = arguments[0];

let step = 0;
while (sentence[step] !== undefined) {
    step ++;
}

const firstLetterIndex = 0;
const lastLetterIndex = step - 1;
step = 0;

let isPalindrome = true;
while (isPalindrome===true && lastLetterIndex-step>=firstLetterIndex+step) {
    if (sentence[firstLetterIndex+step] !== sentence[lastLetterIndex-step]) {
        isPalindrome = false;
    }
    step ++;
}

console.log(`The string "${sentence}" is${isPalindrome?'':' not'} a palindrome.`);