function isStrangeNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
           sum += i
        }
    }
    return sum === n;
}

console.log(isStrangeNumber(6)); 
console.log(isStrangeNumber(22)); 