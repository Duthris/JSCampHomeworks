console.log("############ TASK 1: PRIME NUMBERS ############")

function isPrime(...numbers) {
    let primes = [];
    let notPrimes = [];
    for (let i=0; i<numbers.length; i++) {
        let flag = 1;
        if (numbers[i] > 1) {
            for (let j = 2; j <= numbers[i]/2; j++) {
                if (numbers[i] % j === 0) {
                    notPrimes.push(numbers[i]);
                    flag = 0;
                    break;
                }
            }
            if (flag === 1) {
                primes.push(numbers[i]);
            }
        }

        else if (numbers[i] === 1) {
            notPrimes.push(numbers[i]);
        }
    }

    primes.length >= 1 ? console.log(`Prime numbers are: ${primes}`) 
                       : console.log("All are NOT PRIME numbers!");  
    
    notPrimes.length >= 1 ? console.log(`Not Primes are ${notPrimes}`) 
                        : console.log("All are PRIME numbers!");
}

console.log("Only Primes Test")
isPrime(3,5,7);
console.log("\n")

console.log("Only NOT Primes Test")
isPrime(2,4,6);
console.log("\n")

console.log("Mixed Test")
isPrime(1,2,3,4,5,6,7,8,9);
console.log("\n")

console.log("############ TASK 2: AMICABLE NUMBERS ############")


function isAmicable(num1,num2) {
    let sumNum1 = 0;
    let sumNum2 = 0;

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            sumNum1+= i;
        }
    }

    for (let j = 1; j <= num2; j++) {
        if (num2 % j === 0) {
            sumNum2+= j;
        }
    }

    if (sumNum1 === sumNum2) {
        console.log(`${num1} and ${num2} are Amicable!`);
    }

    else {
        console.log(`${num1} and ${num2} are NOT Amicable!`);
    }
}

console.log("Amicable Test")
isAmicable(220,284);
console.log("\n")

console.log("NOT Amicable Test")
isAmicable(17,22);
console.log("\n")


console.log("############ TASK 3: PERFECT NUMBERS ############")

function isPerfect(number) {
    let sum = 0;

    for (let i=1; i<number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (number === sum) {
        console.log(`${number} is a Perfect Number!`);
    }

    else {
        console.log(`${number} is NOT a Perfect Number!`);
    }
}

console.log("Perfect Number Test")
isPerfect(6);
console.log("\n")

console.log("NOT Perfect Number Test")
isPerfect(17);
console.log("\n")


console.log("############ TASK 4: PRIME NUMBERS UNTIL 1000 ############")

function primeNumbers(num) {
    let primeNums = [];
    for (let i=2; i<=num; i++) {
        let flag = 1;
        if (i > 1) {
            for (let j = 2; j <= i/2; j++) {
                if (i % j === 0) {
                    flag = 0;
                    continue;
                }
            }
            if (flag === 1) {
                primeNums.push(i);
            }
        }
    }

    console.log(`All Prime Numbers until ${num}: ${primeNums}`);
}

primeNumbers(20);