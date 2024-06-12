## Topics<a id="top"></a>

1. [Prime Numbers](#Prime)
1. [Greatest Common Divisor](#gcd)
1. [Co-prime pairs](#Co-prime)

## 1. Prime Numbers <a id="Prime"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a Prime Number?</span>

- A positive integer that is divisible only by 1 and itself
- Examples: 2, 3, 5, 7, 11, 13, 17, 23 …
- Is 1 a prime number? Ans. No

### <u>Problems</u>

1. Count Prime Numbers

## 2. Greatest Common Divisor <a id="gcd"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a GCD?</span>

- Also known as HCF (Highest Common factor)
- Always computed for a pair
- **Largest number that can divide the pair without leaving remainder**
  Example:
  GCD(24, 36) = 12

### <u>Problems</u>

1. Euclidean algorithm
   - GCD(num1, num2) = GCD(num2, num1 % num2)
   - GCD(num1, 0) = num1
2. GCD of Array

## 3. Co-prime pairs <a id="Co-prime"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a Co-prime pair?</span>

- Pair whose only common factor is 1
- isCoprime(8, 9) = true

#### <span style="color:#ff69b4;">Q1. How to find a Co-prime pair?</span>

- Since 1 is the only common factor, we can also say the highest common factor is 1
- For a pair to be co prime, their GCD should be 1
