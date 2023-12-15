function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9а-я]/g, '');
    return s === s.split('').reverse().join('');
}

console.log(isPalindrome('аргентина манит негра'));
console.log(isPalindrome('аргентина манит черного'));

