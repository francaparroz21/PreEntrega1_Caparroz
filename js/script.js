//Algoritmo para saber si una palabra es palindromo (si se lee de izquierda a derecha y viceversa).

function isPalindromic(word){
    for(let i = 0;i<word.length;i++){
        if (word[i]!=word[word.length-i-1])return false;
    }return true;
}

function result(boolean){
    if (boolean)return "The word is palindromic.";
    return "The word is not palindromic.";
}


let user = prompt("Please enter your name.");
let word = prompt("Enter the word. ");
alert("Hi "+ user+"!\n" + result(isPalindromic(word)));

