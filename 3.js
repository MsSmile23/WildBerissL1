const MathX = (function() {
    function fibonacci(n) {
        let prev = 0;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            current += prev;
            prev = current - prev;
        }
        return prev;
    }

    function fibonacciSequence(n) {
        let sequence = [];
        for (let i = 0; i <= n; i++) {
            sequence.push(fibonacci(i));
        }
        return sequence;
    }

    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        let i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    function primeNumbers(n) {
        let primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    }

    return {
        fibonacci,
        fibonacciSequence,
        isPrime,
        primeNumbers
    };
})();

console.log(MathX.fibonacci(10)); // 34
console.log(MathX.fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(MathX.isPrime(11)); // true
console.log(MathX.primeNumbers(10)); // [2, 3, 5, 7]