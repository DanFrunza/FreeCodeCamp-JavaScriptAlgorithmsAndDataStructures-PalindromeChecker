const btn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");

btn.addEventListener("click", palindromeCheck);

function palindromeCheck() {
    const text = input.value;
    if( text === "") {
        alert("Please input a value");
        return;
    }
    const filteredText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedText = filteredText.split("").reverse().join("");
    
    if (filteredText === reversedText) {
        result.textContent = `${text} is a palindrome.`;
    } else {
        result.textContent = `${text} is not a palindrome.`;
    }
}