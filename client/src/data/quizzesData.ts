import type { Quiz, QuizQuestion, ClassId, Chapter, Subject } from '../types';
import { PLANS, EXTRA_PLANS, type ChapterPlan } from './curriculumExpansion';

const SUBJECT_NAMES: Record<string, string> = {
  mathematics: 'Mathematics',
  science: 'Science',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  english: 'English Language & Literature',
  'social-science': 'Social Science',
};

// Handcrafted, highly detailed NCERT Class 10 Quizzes
const HANDCRAFTED_QUIZZES: Record<string, Quiz> = {
  'quiz-10-math-real-numbers': {
    id: 'quiz-10-math-real-numbers',
    chapterId: 'ch-10-math-real-numbers',
    chapterTitle: 'Real Numbers',
    subjectName: 'Mathematics',
    classId: '10',
    description:
      'Original MCQs aligned to NCERT Class 10 Mathematics, Chapter 1 — Fundamental Theorem of Arithmetic, HCF/LCM, and irrationality proofs.',
    passingScore: 60,
    questions: [
      // === 🟢 10 EASY QUESTIONS ===
      {
        id: 'q-10-m-e1',
        questionText:
          'According to Euclid’s Division Lemma, for positive integers a and b there exist unique integers q and r with a = bq + r. Which condition must r satisfy?',
        options: ['0 < r < b', '0 ≤ r < b', '0 < r ≤ b', '0 ≤ r ≤ b'],
        correctIndex: 1,
        explanation:
          'The remainder is allowed to be 0 and must be strictly smaller than the divisor: 0 ≤ r < b.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e2',
        questionText:
          'The Fundamental Theorem of Arithmetic, as stated in NCERT, says that every composite number can be uniquely expressed as a product of:',
        options: [
          'Composite numbers only',
          'Primes, apart from the order in which the prime factors occur',
          'Odd integers only',
          'Even integers only',
        ],
        correctIndex: 1,
        explanation:
          'NCERT Theorem: every composite number has a unique prime factorisation, apart from the order of the factors.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e3',
        questionText:
          'If p is prime and p divides a² (where a is a positive integer), which statement is always true?',
        options: ['p must equal a', 'p divides a', 'p divides √a', 'p² must divide a'],
        correctIndex: 1,
        explanation:
          'This is the lemma used in NCERT to prove √2, √3, and √5 irrational: a prime dividing a² also divides a.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e4',
        questionText: 'Which of the following numbers is rational?',
        options: ['√2', '3 + 2√5', '√9', '√3 + √5'],
        correctIndex: 2,
        explanation:
          '√9 = 3 = 3/1, which is a ratio of two integers. The others involve non-terminating, non-recurring decimals.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e5',
        questionText: 'What is the HCF of any two consecutive natural numbers n and n + 1?',
        options: ['0', '1', '2', 'n(n + 1)'],
        correctIndex: 1,
        explanation:
          'Two consecutive natural numbers have no common factors other than 1, so their HCF is always 1 (they are co-prime).',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e6',
        questionText: 'What is the smallest composite number?',
        options: ['1', '2', '3', '4'],
        correctIndex: 3,
        explanation:
          '1 is neither prime nor composite. 2 and 3 are prime. 4 is the smallest number with more than two factors (1, 2, 4).',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e7',
        questionText:
          'The product of a non-zero rational number and an irrational number is always:',
        options: ['Rational', 'Irrational', 'An integer', 'Zero'],
        correctIndex: 1,
        explanation:
          'If a/b is rational (non-zero) and x is irrational, assuming (a/b)x = p/q would imply x = (p/q)(b/a), a rational, which is a contradiction.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e8',
        questionText:
          'If two positive integers a and b are written as a = x³y² and b = xy³, where x and y are prime numbers, then HCF(a, b) is:',
        options: ['xy', 'xy²', 'x³y³', 'x²y²'],
        correctIndex: 1,
        explanation:
          'HCF is the product of the smallest powers of each common prime factor: min(3, 1) = 1 for x, and min(2, 3) = 2 for y, giving xy².',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e9',
        questionText:
          'The decimal expansion of 7 / 80 will terminate after how many decimal places?',
        options: ['1 place', '2 places', '3 places', '4 places'],
        correctIndex: 3,
        explanation:
          '80 = 2⁴ × 5¹. The highest power of 2 or 5 in the denominator is 4, so the decimal terminates after 4 places.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e10',
        questionText: 'Which of the following is NOT an irrational number?',
        options: ['√7', '5 - √3', '√25', '2√3'],
        correctIndex: 2,
        explanation: '√25 = 5 = 5/1, which is a rational number. The others are irrational.',
        difficulty: 'easy',
      },

      // === 🟡 10 MEDIUM QUESTIONS ===
      {
        id: 'q-10-m-m1',
        questionText: 'If HCF(306, 657) = 9, what is LCM(306, 657)?',
        options: ['22,338', '21,456', '18,924', '24,672'],
        correctIndex: 0,
        explanation:
          'For two positive integers, HCF × LCM = product. LCM = (306 × 657) / 9 = 34 × 657 = 22,338.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m2',
        questionText:
          'Which fraction, already in lowest terms, has a terminating decimal expansion?',
        options: ['17 / 90', '77 / 210', '13 / 3125', '29 / 343'],
        correctIndex: 2,
        explanation:
          'After writing the denominator in primes, only 13/3125 = 13/5⁵ has the form 2ⁿ5ᵐ. The others contain 3 or 7.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m3',
        questionText:
          'Prime factorisations: 6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5. What are HCF and LCM of the three numbers?',
        options: [
          'HCF = 6, LCM = 360',
          'HCF = 6, LCM = 51840',
          'HCF = 24, LCM = 360',
          'HCF = 2, LCM = 120',
        ],
        correctIndex: 0,
        explanation:
          'HCF uses the smallest common powers: 2¹ × 3¹ = 6. LCM uses the greatest powers of all primes: 2³ × 3² × 5 = 360. Do not multiply HCF by LCM to recover the product of three numbers.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m4',
        questionText:
          'If the LCM of two numbers is 360 and their HCF is 12, and one number is 72, what is the other number?',
        options: ['50', '60', '64', '80'],
        correctIndex: 1,
        explanation:
          'Other number = (HCF × LCM) / given number = (12 × 360) / 72 = 4320 / 72 = 60.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m5',
        questionText: 'Given that LCM(91, 26) = 182, find HCF(91, 26).',
        options: ['7', '13', '26', '1'],
        correctIndex: 1,
        explanation: 'HCF = (91 × 26) / 182 = 2366 / 182 = 13.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m6',
        questionText:
          'An army contingent of 616 members is to march behind an army band of 32 members in a parade. What is the maximum number of columns in which they can march?',
        options: ['4', '8', '16', '32'],
        correctIndex: 1,
        explanation:
          'The maximum columns is HCF(616, 32). 616 = 32 × 19 + 8, and 32 = 8 × 4 + 0. Thus HCF is 8.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m7',
        questionText:
          'If two positive integers p and q are written as p = ab² and q = a³b (where a and b are prime numbers), then LCM(p, q) is:',
        options: ['ab', 'a²b²', 'a³b²', 'a⁴b³'],
        correctIndex: 2,
        explanation:
          'LCM takes the highest exponent of each prime factor: max(1, 3) = 3 for a, and max(2, 1) = 2 for b, giving a³b².',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m8',
        questionText:
          'If the HCF of 65 and 117 is expressible in the form 65m - 117, what is the value of m?',
        options: ['1', '2', '3', '4'],
        correctIndex: 1,
        explanation: 'HCF(65, 117) = 13. Setting 65m - 117 = 13 gives 65m = 130, so m = 2.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m9',
        questionText:
          'Three alarm bells toll at intervals of 9, 12, and 15 minutes respectively. If they toll together now, after how many minutes will they next toll together?',
        options: ['60 minutes', '120 minutes', '180 minutes', '360 minutes'],
        correctIndex: 2,
        explanation:
          'LCM(9, 12, 15): 9 = 3², 12 = 2² × 3, 15 = 3 × 5. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m10',
        questionText:
          'What is the sum of exponents of prime factors in the prime factorisation of 144?',
        options: ['4', '5', '6', '7'],
        correctIndex: 2,
        explanation:
          '144 = 12² = (2² × 3)² = 2⁴ × 3². The sum of the exponents is 4 + 2 = 6.',
        difficulty: 'medium',
      },

      // === 🔴 10 HARD QUESTIONS ===
      {
        id: 'q-10-m-h1',
        questionText: 'Can 6ⁿ, for a natural number n, end with the digit 0?',
        options: [
          'Yes, when n is a multiple of 10',
          'Yes, when n is even and greater than 4',
          'No, because 6ⁿ = 2ⁿ × 3ⁿ has no prime factor 5, and factorisation is unique',
          'No, because 6 is not prime',
        ],
        correctIndex: 2,
        explanation:
          'Ending with 0 requires factors 2 and 5. Uniqueness of prime factorisation keeps 5 out of 6ⁿ. This is the NCERT Exercise 1.1 argument.',
        difficulty: 'hard',
        keyConcept: 'Fundamental Theorem of Arithmetic (Uniqueness)',
        solutionSteps: [
          'Step 1 (Prime Factor Condition for Ending in 0): If any natural number ends with the digit zero, it must be divisible by 10, which means its prime factorisation must contain the prime factors 2 and 5.',
          'Step 2 (Prime Factorise the Base 6): We decompose 6ⁿ: 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ. Thus, the only prime factors of 6ⁿ are 2 and 3.',
          'Step 3 (Apply Uniqueness of Prime Factorisation): According to the Fundamental Theorem of Arithmetic, the prime factorisation of any composite number is completely unique (apart from the order of factors). Since 5 is not among the prime factors of 6ⁿ, 5 can never divide 6ⁿ for any natural number n.',
          'Step 4 (Conclusion & Verification): Therefore, 6ⁿ can never end with the digit 0 for any natural number n (Option C).',
        ],
      },
      {
        id: 'q-10-m-h2',
        questionText:
          'Find the largest number which divides 70 and 125, leaving remainders 5 and 8 respectively.',
        options: ['13', '65', '875', '1750'],
        correctIndex: 0,
        explanation:
          'The required number is HCF(70 - 5, 125 - 8) = HCF(65, 117). 65 = 5 × 13, 117 = 9 × 13. HCF = 13.',
        difficulty: 'hard',
        keyConcept: 'Highest Common Factor with Remainder Constraints',
        solutionSteps: [
          'Step 1 (Interpret Remainder Conditions): Let the required largest number be d. When 70 is divided by d, the remainder is 5, so d divides 70 - 5 = 65 completely. When 125 is divided by d, the remainder is 8, so d divides 125 - 8 = 117 completely.',
          'Step 2 (Formulate as HCF Problem): Since d must divide both 65 and 117 exactly and must be the largest such number, d = HCF(65, 117).',
          'Step 3 (Prime Factorise Both Numbers): 65 = 5 × 13; 117 = 9 × 13 = 3² × 13.',
          'Step 4 (Extract Common Factors & Conclude): The only common prime factor is 13, raised to the power 1. Hence, HCF(65, 117) = 13 (Option A).',
        ],
      },
      {
        id: 'q-10-m-h3',
        questionText:
          'If n is any positive odd integer, then n² - 1 is always divisible by:',
        options: ['4 only', '8', '16', '32'],
        correctIndex: 1,
        explanation:
          'Any odd integer is of the form 2k + 1. Then n² - 1 = (2k + 1)² - 1 = 4k² + 4k = 4k(k + 1). Since k(k + 1) is always even, 4 × 2m = 8m, which is divisible by 8.',
        difficulty: 'hard',
        keyConcept: 'Algebraic Properties of Odd Integers',
        solutionSteps: [
          'Step 1 (Represent Odd Integer): Any positive odd integer n can be written in the form n = 2k + 1, where k is an integer (k ≥ 0).',
          'Step 2 (Expand n² - 1): n² - 1 = (2k + 1)² - 1 = (4k² + 4k + 1) - 1 = 4k² + 4k = 4k(k + 1).',
          'Step 3 (Analyze Product of Consecutive Integers): In the term k(k + 1), one of the two consecutive integers k or k + 1 must be even, so k(k + 1) is divisible by 2. Let k(k + 1) = 2m.',
          'Step 4 (Substitute and Conclude): Then n² - 1 = 4(2m) = 8m. Therefore, n² - 1 is always divisible by 8 (Option B).',
        ],
      },
      {
        id: 'q-10-m-h4',
        questionText:
          'In proving √5 is irrational by contradiction, assuming √5 = a/b (where a and b are co-prime integers) leads to which contradiction?',
        options: [
          'a and b are both even',
          '5 divides both a and b, contradicting that they are co-prime',
          'b = 0',
          '5 is not a prime number',
        ],
        correctIndex: 1,
        explanation:
          '5b² = a² implies 5 divides a², so 5 divides a. Letting a = 5c gives 5b² = 25c² => b² = 5c², meaning 5 divides b too. This contradicts that a and b have no common factor > 1.',
        difficulty: 'hard',
        keyConcept: 'Proof of Irrationality by Contradiction',
        solutionSteps: [
          'Step 1 (Hypothesis of Rationality): Assume √5 is rational. Then √5 = a/b, where a and b are positive integers having no common factor other than 1 (i.e., a and b are co-prime).',
          'Step 2 (Square & Analyze Divisibility of a): Squaring gives 5 = a²/b² ⟹ 5b² = a². Since 5 divides 5b², 5 divides a². By NCERT Theorem 1.3, since 5 is prime, 5 must also divide a. Thus, let a = 5c for some integer c.',
          'Step 3 (Analyze Divisibility of b): Substitute a = 5c back into 5b² = a²: 5b² = (5c)² = 25c² ⟹ b² = 5c². This implies 5 divides b², which means 5 also divides b.',
          'Step 4 (Formulate the Contradiction): Both a and b have 5 as a common factor. This directly contradicts our initial premise that a and b are co-prime. Hence, √5 cannot be rational, proving it is irrational (Option B).',
        ],
      },
      {
        id: 'q-10-m-h5',
        questionText:
          'If the HCF of 48 and 72 is expressed in the form 48x + 72y, which pair of integers (x, y) is correct?',
        options: ['(-1, 1)', '(1, -1)', '(2, -1)', '(-2, 2)'],
        correctIndex: 0,
        explanation:
          'HCF(48, 72) = 24. Testing x = -1, y = 1 gives 48(-1) + 72(1) = -48 + 72 = 24.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h6',
        questionText:
          'What is the greatest possible speed at which a person can walk 52 km and 91 km in an exact whole number of hours?',
        options: ['7 km/h', '13 km/h', '17 km/h', '26 km/h'],
        correctIndex: 1,
        explanation:
          'The greatest speed dividing both distances evenly is HCF(52, 91). 52 = 4 × 13, 91 = 7 × 13. HCF = 13 km/h.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h7',
        questionText: 'If p is a prime number, what is the LCM of p, p², and p³?',
        options: ['p', 'p²', 'p³', 'p⁶'],
        correctIndex: 2,
        explanation:
          'For powers of the same prime, LCM is given by the highest power: max(1, 2, 3) = 3, so LCM is p³.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h8',
        questionText:
          'If a and b are co-prime positive integers, what can be deduced about a² and b²?',
        options: [
          'They must have a common factor of 2',
          'They are also co-prime',
          'Their HCF is a + b',
          'Their LCM is a + b',
        ],
        correctIndex: 1,
        explanation:
          'Since a and b share no prime factors, squaring them creates no new prime factors. Thus a² and b² share no prime factors and remain co-prime.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h9',
        questionText: 'Which statement is true regarding the expression (√3 + √2)²?',
        options: [
          'It is a rational number equal to 5',
          'It is an irrational number equal to 5 + 2√6',
          'It is an integer',
          'It can be converted to an integer by multiplying by √3',
        ],
        correctIndex: 1,
        explanation:
          '(√3 + √2)² = 3 + 2 + 2√6 = 5 + 2√6. Since √6 is irrational, 5 + 2√6 is strictly irrational.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h10',
        questionText:
          'When the square of any prime number p > 3 is divided by 6, what is the remainder?',
        options: ['0', '1', '2', '3'],
        correctIndex: 1,
        explanation:
          'Any prime p > 3 can be written as 6k ± 1. Then p² = (6k ± 1)² = 36k² ± 12k + 1 = 6(6k² ± 2k) + 1. Therefore, dividing by 6 always leaves remainder 1.',
        difficulty: 'hard',
      },
    ],
  },

  'quiz-10-math-polynomials': {
    id: 'quiz-10-math-polynomials',
    chapterId: 'ch-10-math-polynomials',
    chapterTitle: 'Polynomials',
    subjectName: 'Mathematics',
    classId: '10',
    description:
      'Original MCQs aligned to NCERT Class 10 Mathematics, Chapter 2 — graphs of zeroes and quadratic coefficient relations.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-p-1',
        questionText:
          'A zero of a polynomial p(x) is a number α such that:',
        options: [
          'p(x) has degree α',
          'p(α) = 0',
          'the graph y = p(x) never meets the y-axis',
          'α is always positive',
        ],
        correctIndex: 1,
        explanation:
          'NCERT definition: α is a zero when p(α) = 0. Geometrically the graph meets the x-axis at x = α.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-p-2',
        questionText:
          'The graph of a quadratic polynomial can meet the x-axis in at most how many points?',
        options: ['1', '2', '3', 'Infinitely many'],
        correctIndex: 1,
        explanation:
          'Degree 2 implies at most two real zeroes, so at most two x-intercepts.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-p-3',
        questionText:
          'For 2x² − 8x + 6, the sum and product of the zeroes are:',
        options: [
          'Sum 8, product 6',
          'Sum 4, product 3',
          'Sum −4, product 3',
          'Sum 4, product −3',
        ],
        correctIndex: 1,
        explanation:
          'α + β = −b/a = 8/2 = 4; αβ = c/a = 6/2 = 3. Factors confirm zeroes 1 and 3.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-p-4',
        questionText:
          'A quadratic with zeroes 2 and −3 is:',
        options: [
          'x² − x − 6',
          'x² + x − 6',
          'x² − 5x − 6',
          'x² + 5x + 6',
        ],
        correctIndex: 1,
        explanation:
          'k[x² − (sum)x + product] with sum = −1 and product = −6 gives x² + x − 6 (k = 1).',
        difficulty: 'medium',
      },
      {
        id: 'q-10-p-5',
        questionText:
          'If α and β are zeroes of x² − 5x + 6, then α² + β² equals:',
        options: ['13', '25', '11', '61'],
        correctIndex: 0,
        explanation:
          'α² + β² = (α + β)² − 2αβ = 25 − 12 = 13. This is the usual NCERT follow-up after Exercise 2.2.',
        difficulty: 'hard',
      },
    ],
  },

  'quiz-10-math-quadratic-equations': {
    id: 'quiz-10-math-quadratic-equations',
    chapterId: 'ch-10-math-quadratic-equations',
    chapterTitle: 'Quadratic Equations',
    subjectName: 'Mathematics',
    classId: '10',
    description:
      'NCERT Class 10 Mathematics Chapter 4: standard form ax² + bx + c = 0, factorisation method, quadratic formula, and discriminant analysis of roots.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-qe-1',
        questionText:
          'What is the standard form of a quadratic equation in one variable x, as defined in NCERT Class 10?',
        options: [
          'ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0',
          'ax² + bx + c = 0, where a, b, c are real numbers and a can be 0',
          'ax³ + bx² + c = 0, where a ≠ 0',
          'ax + b = 0, where a ≠ 0',
        ],
        correctIndex: 0,
        explanation:
          'A quadratic equation in the variable x is an equation of the form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-qe-2',
        questionText:
          'For the quadratic equation ax² + bx + c = 0 (a ≠ 0), the discriminant D is given by b² − 4ac. When does the equation have two distinct real roots?',
        options: ['When D < 0', 'When D > 0', 'When D = 0', 'When D ≤ 0'],
        correctIndex: 1,
        explanation:
          'NCERT Theorem: The quadratic equation has two distinct real roots if b² − 4ac > 0; two equal real roots if b² − 4ac = 0; and no real roots if b² − 4ac < 0.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-qe-3',
        questionText:
          'What are the roots of the quadratic equation x² − 5x + 6 = 0 solved by factorisation?',
        options: [
          'x = −2 and x = −3',
          'x = 2 and x = 3',
          'x = 1 and x = 6',
          'x = −1 and x = −6',
        ],
        correctIndex: 1,
        explanation:
          'Factorising: x² − 2x − 3x + 6 = 0 ⇒ x(x − 2) − 3(x − 2) = 0 ⇒ (x − 2)(x − 3) = 0. Thus, x = 2 or x = 3.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-qe-4',
        questionText:
          'Find the discriminant of 2x² − 4x + 3 = 0 and describe the nature of its roots.',
        options: [
          'D = 8, two distinct real roots',
          'D = 0, two equal real roots',
          'D = −8, no real roots',
          'D = 40, two irrational roots',
        ],
        correctIndex: 2,
        explanation:
          'Here a = 2, b = −4, c = 3. Discriminant D = b² − 4ac = (−4)² − 4(2)(3) = 16 − 24 = −8. Since D < 0, there are no real roots.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-qe-5',
        questionText:
          'The product of two consecutive positive integers is 306. Formulate the quadratic equation to find the integers.',
        options: [
          'x² + x − 306 = 0',
          'x² − x − 306 = 0',
          'x² + 2x − 306 = 0',
          '2x² + x − 306 = 0',
        ],
        correctIndex: 0,
        explanation:
          'Let the consecutive positive integers be x and x + 1. Their product is x(x + 1) = 306 ⇒ x² + x − 306 = 0.',
        difficulty: 'easy',
      },
    ],
  },

  'quiz-10-sci-chemical-reactions': {
    id: 'quiz-10-sci-chemical-reactions',
    chapterId: 'ch-10-sci-chemical-reactions',
    chapterTitle: 'Chemical Reactions and Equations',
    subjectName: 'Science',
    classId: '10',
    description:
      'Original MCQs aligned to NCERT Class 10 Science, Chapter 1 — balancing, reaction types, redox, corrosion and rancidity.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-s-1',
        questionText:
          'Why must a chemical equation be balanced for every element?',
        options: [
          'To keep the temperature constant',
          'To obey the law of conservation of mass',
          'To make the reaction faster',
          'To force all products to be gases',
        ],
        correctIndex: 1,
        explanation:
          'NCERT: mass is neither created nor destroyed, so atom counts on both sides of the arrow must match.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-s-2',
        questionText:
          'Iron nails in copper sulphate solution. Colour change and reaction type?',
        options: [
          'Blue becomes colourless; combination',
          'Blue becomes pale green; displacement',
          'Pale green becomes blue; double displacement',
          'Stays blue; decomposition',
        ],
        correctIndex: 1,
        explanation:
          'Fe + CuSO₄ → FeSO₄ + Cu. Blue CuSO₄ turns pale green; brown copper coats the nail. Iron is more reactive than copper.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-s-3',
        questionText:
          'In CuO + H₂ → Cu + H₂O, which substance is oxidised and which is reduced?',
        options: [
          'H₂ is oxidised, CuO is reduced',
          'CuO is oxidised, H₂ is reduced',
          'Cu is oxidised, H₂O is reduced',
          'Both are reduced',
        ],
        correctIndex: 0,
        explanation:
          'NCERT oxygen-gain/loss: H₂ gains oxygen (oxidised); CuO loses oxygen (reduced).',
        difficulty: 'medium',
      },
      {
        id: 'q-10-s-4',
        questionText:
          'Quicklime added to water forms slaked lime and heat. The reaction is:',
        options: [
          'Endothermic combination',
          'Exothermic combination',
          'Thermal decomposition',
          'Photolytic decomposition',
        ],
        correctIndex: 1,
        explanation:
          'CaO + H₂O → Ca(OH)₂ + heat. Two reactants, one product, heat released — NCERT whitewashing preparation.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-s-5',
        questionText:
          'Why are bags of chips flushed with nitrogen?',
        options: [
          'To flavour the chips',
          'To slow rancidity by keeping oxygen away from the oil',
          'To speed up oxidation of fats',
          'To condense moisture inside the pack',
        ],
        correctIndex: 1,
        explanation:
          'NCERT: oxidation of fats causes rancidity. Inert nitrogen prevents that oxidation.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-s-6',
        questionText:
          'For 2PbO(s) + C(s) → 2Pb(s) + CO₂(g), which pair of statements is incorrect?',
        options: [
          'Lead is getting reduced; carbon dioxide is getting oxidised',
          'Carbon is getting oxidised; lead oxide is getting reduced',
          'Lead oxide is getting reduced; carbon is getting oxidised',
          'Carbon is the reducing agent; PbO is the oxidising agent',
        ],
        correctIndex: 0,
        explanation:
          'NCERT Exercise 1 Q1: elemental lead is the product, not the species being reduced. PbO is reduced; C is oxidised. CO₂ is not being oxidised.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-s-7',
        questionText:
          'Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is an example of:',
        options: [
          'Combination',
          'Double displacement',
          'Decomposition',
          'Displacement',
        ],
        correctIndex: 3,
        explanation:
          'Aluminium displaces iron from its oxide (thermit process). NCERT Exercise 1 Q2.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-s-8',
        questionText:
          'Dilute hydrochloric acid is added to iron filings. What happens?',
        options: [
          'Hydrogen gas and iron chloride are produced',
          'Chlorine gas and iron hydroxide are produced',
          'No reaction takes place',
          'An iron salt and water are produced',
        ],
        correctIndex: 0,
        explanation:
          'Fe + 2HCl → FeCl₂ + H₂. NCERT Exercise 1 Q3: hydrogen is evolved and iron chloride forms.',
        difficulty: 'medium',
      },
    ],
  },

  'quiz-10-sci-light': {
    id: 'quiz-10-sci-light',
    chapterId: 'ch-10-sci-light',
    chapterTitle: 'Light – Reflection and Refraction',
    subjectName: 'Science',
    classId: '10',
    description:
      'NCERT Class 10 Science Chapter: spherical mirrors, ray diagrams, mirror formula, Snell law of refraction, and optical power of lenses.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-l-1',
        questionText:
          'Which mirror formula correctly relates object distance (u), image distance (v), and focal length (f) for spherical mirrors under Cartesian sign conventions?',
        options: [
          '1/f = 1/v − 1/u',
          '1/f = 1/v + 1/u',
          'f = u + v',
          '1/f = (u + v) / (u · v)',
        ],
        correctIndex: 1,
        explanation:
          'In NCERT Class 10, the spherical mirror formula is 1/f = 1/v + 1/u, where u, v, and f are measured with appropriate Cartesian sign conventions.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-l-2',
        questionText:
          'An object is placed at the centre of curvature (C) of a concave mirror. Where is the image formed, and what are its characteristics?',
        options: [
          'At focus F; virtual and diminished',
          'Between F and C; real and magnified',
          'At centre of curvature C; real, inverted, and same size as object',
          'Beyond C; virtual and magnified',
        ],
        correctIndex: 2,
        explanation:
          'When an object is placed at the centre of curvature C of a concave mirror, rays reflect to form a real, inverted image of the same size at C.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-l-3',
        questionText:
          'The absolute refractive index (n) of a medium with speed of light v is given by (where c is speed of light in vacuum):',
        options: ['n = c / v', 'n = v / c', 'n = c × v', 'n = (c − v) / c'],
        correctIndex: 0,
        explanation:
          'The absolute refractive index is defined as n = c / v, the ratio of the speed of light in vacuum to that in the medium.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-l-4',
        questionText:
          'A convex lens has a focal length of +50 cm. What is its optical power in dioptres (D)?',
        options: ['+0.5 D', '+2.0 D', '−2.0 D', '+5.0 D'],
        correctIndex: 1,
        explanation:
          'Power P = 1 / f(in metres). Since f = +50 cm = +0.5 m, P = 1 / 0.5 = +2.0 D.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-l-5',
        questionText:
          'Why are convex mirrors universally preferred as rear-view mirrors in motor vehicles?',
        options: [
          'They form inverted magnified images',
          'They always form an erect, diminished image and provide a wider field of view',
          'They have a real focus positioned in front of the mirror',
          'They completely eliminate blind spots by bending light into a prism',
        ],
        correctIndex: 1,
        explanation:
          'Convex mirrors always give an erect, diminished image of distant traffic, and being curved outward, they enable a much wider field of view.',
        difficulty: 'easy',
      },
    ],
  },

  'quiz-10-sci-life-processes': {
    id: 'quiz-10-sci-life-processes',
    chapterId: 'ch-10-sci-life-processes',
    chapterTitle: 'Life Processes',
    subjectName: 'Science',
    classId: '10',
    description:
      'NCERT Class 10 Science Chapter: autotrophic nutrition, cellular respiration, vascular transport in plants, and human excretion.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-lp-1',
        questionText:
          'In green plant cells, the primary organelle where light absorption and photosynthesis occur is the:',
        options: [
          'Mitochondria',
          'Chloroplast containing chlorophyll',
          'Endoplasmic reticulum',
          'Golgi apparatus',
        ],
        correctIndex: 1,
        explanation:
          'Photosynthesis takes place in chloroplasts, which contain chlorophyll pigments that trap photon energy to convert carbon dioxide and water into glucose.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-lp-2',
        questionText:
          'During aerobic respiration, the breakdown of 3-carbon pyruvate into carbon dioxide, water, and ATP takes place in the:',
        options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'Ribosomes'],
        correctIndex: 1,
        explanation:
          'The initial glycolysis breakdown (glucose to pyruvate) occurs in the cytoplasm, while the complete aerobic breakdown of pyruvate occurs inside mitochondria.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-lp-3',
        questionText:
          'Which specialized vascular tissue in plants is responsible for the unidirectional conduction of water and dissolved minerals from roots to leaves?',
        options: ['Phloem', 'Xylem', 'Collenchyma', 'Parenchyma'],
        correctIndex: 1,
        explanation:
          'Xylem tissue transports water and minerals upward from roots, powered by root pressure and transpiration pull.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-lp-4',
        questionText:
          'What is the fundamental structural and functional filtration unit of the human kidney?',
        options: [
          'Neuron',
          'Nephron',
          'Alveolus',
          'Glomerulus capsule without tubules',
        ],
        correctIndex: 1,
        explanation:
          'Each kidney contains millions of coiled filtration units called nephrons, consisting of Bowman’s capsule, glomerulus, and selective reabsorption tubules.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-lp-5',
        questionText:
          'Which digestive enzyme in human saliva begins the chemical breakdown of dietary starch into maltose?',
        options: [
          'Pepsin',
          'Salivary amylase (ptyalin)',
          'Trypsin',
          'Lipase',
        ],
        correctIndex: 1,
        explanation:
          'Salivary amylase secreted by salivary glands hydrolyses complex starch carbohydrates into simpler disaccharide sugars like maltose.',
        difficulty: 'medium',
      },
    ],
  },

  'quiz-10-eng-1': {
    id: 'quiz-10-eng-1',
    chapterId: 'ch-10-eng-1',
    chapterTitle: 'A Letter to God & Dust of Snow',
    subjectName: 'English Language & Literature',
    classId: '10',
    description:
      'NCERT Class 10 English First Flight: Lencho’s faith, hailstorm devastation, situational irony at the post office, and Robert Frost’s symbolic nature poetry.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-e-1',
        questionText:
          'What catastrophic weather phenomenon completely destroyed Lencho’s ripe corn crops in "A Letter to God"?',
        options: [
          'A flash flood from the mountains',
          'A severe and prolonged hailstorm',
          'An intense summer drought',
          'A dense swarm of desert locusts',
        ],
        correctIndex: 1,
        explanation:
          'A heavy hailstorm pelted the valley for an hour, devastating Lencho’s corn fields and leaving them as white as if covered with salt.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-e-2',
        questionText:
          'Why did Lencho address a letter directly to God requesting 100 pesos?',
        options: [
          'To complain about corrupt agricultural officers',
          'To ask for money to sow his fields again and feed his family until the harvest',
          'To thank God for seasonal rains',
          'To demand compensation from neighboring farmers',
        ],
        correctIndex: 1,
        explanation:
          'Driven by absolute faith and desperate hunger, Lencho asked God for 100 pesos to re-seed his land and survive.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-e-3',
        questionText:
          'How did the postmaster react upon reading Lencho’s unusual letter addressed to God?',
        options: [
          'He ignored the letter and discarded it',
          'He laughed at first, but was deeply moved by Lencho’s faith and organized a charitable collection',
          'He reported Lencho to local village authorities',
          'He returned it with an undeliverable stamp',
        ],
        correctIndex: 1,
        explanation:
          'The postmaster initially chuckled, but was amazed by the man’s immense faith and decided to send money signed as "God" so as not to shake that faith.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-e-4',
        questionText:
          'How much money was the postmaster able to assemble and enclose in the envelope sent to Lencho?',
        options: ['Exactly 100 pesos', '70 pesos', '50 pesos', '25 pesos'],
        correctIndex: 1,
        explanation:
          'By donating part of his salary and soliciting friends, the postmaster collected 70 pesos — a little more than half of what Lencho asked.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-e-5',
        questionText:
          'What is the central situational irony at the conclusion of "A Letter to God"?',
        options: [
          'Lencho refused to accept the cash',
          'Lencho accused the very post office workers who charitably helped him of being "a bunch of crooks"',
          'The postmaster confessed that God did not write the letter',
          'The money blew away in a second hailstorm',
        ],
        correctIndex: 1,
        explanation:
          'The profound irony is that Lencho believed God could never make a mistake, and therefore assumed the generous post office workers stole the missing 30 pesos.',
        difficulty: 'hard',
      },
    ],
  },

  'quiz-10-sst-1': {
    id: 'quiz-10-sst-1',
    chapterId: 'ch-10-sst-1',
    chapterTitle: 'The Rise of Nationalism in Europe',
    subjectName: 'Social Science',
    classId: '10',
    description:
      'NCERT Class 10 History: Frédéric Sorrieu’s vision, the Napoleonic Civil Code of 1804, revolutionary secret societies, and the unifications of Germany and Italy.',
    passingScore: 60,
    questions: [
      {
        id: 'q-10-sst-1-1',
        questionText:
          'In 1848, French artist Frédéric Sorrieu visualised his utopian dream of a world composed of:',
        options: [
          'Hereditary absolute monarchies',
          'Democratic and Social Republics',
          'Feudal colonial empires',
          'Anarchic tribal federations',
        ],
        correctIndex: 1,
        explanation:
          'Frédéric Sorrieu prepared four famous prints depicting peoples of Europe and America marching toward liberty in Democratic and Social Republics.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-sst-1-2',
        questionText:
          'The Civil Code of 1804 in France, which abolished birth-based privileges and guaranteed property rights, is widely known as the:',
        options: [
          'Napoleonic Code',
          'Treaty of Vienna',
          'Frankfurt Declaration',
          'Edict of Nantes',
        ],
        correctIndex: 0,
        explanation:
          'The Civil Code of 1804, commonly known as the Napoleonic Code, standardized legal equality and abolished feudal rights across French-controlled territories.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-sst-1-3',
        questionText:
          'Which Italian revolutionary founded the underground secret societies "Young Italy" in Marseilles and "Young Europe" in Berne?',
        options: [
          'Count Camillo de Cavour',
          'Giuseppe Mazzini',
          'Giuseppe Garibaldi',
          'Victor Emmanuel II',
        ],
        correctIndex: 1,
        explanation:
          'Giuseppe Mazzini founded Young Italy and Young Europe to mobilize youth toward building a unified, republican Italian nation.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-sst-1-4',
        questionText:
          'In May 1848, 831 elected German representatives convened to draft a national constitution at the Frankfurt Parliament in:',
        options: [
          'The Palace of Versailles',
          'The Church of St. Paul in Frankfurt',
          'The Berlin Reichstag',
          'The Bastille Assembly Hall',
        ],
        correctIndex: 1,
        explanation:
          'On 18 May 1848, elected representatives took their seats in the Church of St. Paul in Frankfurt to draft a constitution for a unified Germany under a constitutional monarchy.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-sst-1-5',
        questionText:
          'In January 1871, who was proclaimed the Emperor of a unified Germany in a ceremony at the Hall of Mirrors in Versailles?',
        options: [
          'Otto von Bismarck',
          'Kaiser William I of Prussia',
          'Friedrich Wilhelm IV',
          'Napoleon III',
        ],
        correctIndex: 1,
        explanation:
          'Prussian King William I was proclaimed German Emperor on 18 January 1871 at Versailles, concluding the Prussian-led unification of Germany.',
        difficulty: 'medium',
      },
    ],
  },

  // ==========================================
  // CLASS 12 HANDCRAFTED BENCHMARK QUIZZES
  // ==========================================
  'quiz-ch-12-math-1': {
    id: 'quiz-ch-12-math-1',
    chapterId: 'ch-12-math-1',
    chapterTitle: 'Relations and Functions',
    subjectName: 'Mathematics',
    classId: '12',
    description:
      'NCERT Class 12 Chapter 1 practice test with Easy, Medium, and Hard tiers covering reflexivity, symmetry, transitivity, equivalence classes, and bijective functions.',
    passingScore: 60,
    questions: [
      // 🟢 EASY QUESTIONS (1-5)
      {
        id: 'q-12-m1-e1',
        questionText: 'A relation R on a non-empty set A is defined to be Reflexive if which condition holds?',
        options: [
          'For all a ∈ A, (a, a) ∈ R',
          'For some a ∈ A, (a, a) ∈ R',
          'If (a, b) ∈ R, then (b, a) ∈ R',
          '(a, a) ∉ R for all a ∈ A',
        ],
        correctIndex: 0,
        explanation: 'By NCERT definition, R is reflexive on A if every single element a ∈ A relates to itself: (a, a) ∈ R for all a ∈ A.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m1-e2',
        questionText: 'A relation R on a set A is Symmetric if:',
        options: [
          '(a, b) ∈ R and (b, c) ∈ R implies (a, c) ∈ R',
          '(a, a) ∈ R for all a ∈ A',
          '(a, b) ∈ R implies (b, a) ∈ R for all a, b ∈ A',
          '(a, b) ∈ R implies a = b',
        ],
        correctIndex: 2,
        explanation: 'A relation is symmetric if order reversal preserves relation membership: (a, b) ∈ R ⟹ (b, a) ∈ R.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m1-e3',
        questionText: 'Which three properties must a relation R satisfy simultaneously to be classified as an Equivalence Relation?',
        options: [
          'Reflexive, Symmetric, and Transitive',
          'Reflexive, Injective, and Surjective',
          'Symmetric, Anti-symmetric, and Linear',
          'Universal, Empty, and Identity',
        ],
        correctIndex: 0,
        explanation: 'An equivalence relation is strictly defined as a relation that is reflexive, symmetric, and transitive.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m1-e4',
        questionText: 'A function f: X → Y is called Injective (or One-to-One) if:',
        options: [
          'f(x₁) = f(x₂) implies x₁ = x₂ for all x₁, x₂ ∈ X',
          'The range of f equals the co-domain Y',
          'Every element of X maps to a constant value c ∈ Y',
          'f(x) has no real roots',
        ],
        correctIndex: 0,
        explanation: 'Injectivity means distinct domain elements map to distinct images, verified by f(x₁) = f(x₂) ⟹ x₁ = x₂.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m1-e5',
        questionText: 'When is a function f: X → Y defined to be Bijective?',
        options: [
          'When f is both Injective (one-to-one) and Surjective (onto)',
          'When f is strictly increasing on its domain',
          'When f(x) = f(-x) for all x',
          'When the domain is a finite set',
        ],
        correctIndex: 0,
        explanation: 'A bijective function (or one-to-one correspondence) is both one-to-one and onto. This is the necessary and sufficient condition for invertibility.',
        difficulty: 'easy',
      },

      // 🟡 MEDIUM QUESTIONS (6-10)
      {
        id: 'q-12-m1-m1',
        questionText: 'Let R be the relation on the set of integers ℤ defined by R = {(a, b) : a - b is divisible by 5}. What type of relation is R?',
        options: [
          'Reflexive only',
          'Symmetric and transitive, but not reflexive',
          'An Equivalence Relation',
          'Neither symmetric nor transitive',
        ],
        correctIndex: 2,
        explanation: 'a - a = 0 = 5(0) (Reflexive); a - b = 5k ⟹ b - a = 5(-k) (Symmetric); (a - b) + (b - c) = a - c = 5(k + m) (Transitive). Hence R is an equivalence relation.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m1-m2',
        questionText: 'Consider the function f: ℝ → ℝ defined by f(x) = 3x - 7. Which statement correctly describes f?',
        options: [
          'f is one-one but not onto',
          'f is onto but not one-one',
          'f is bijective (both one-one and onto)',
          'f is neither one-one nor onto',
        ],
        correctIndex: 2,
        explanation: '3x₁ - 7 = 3x₂ - 7 ⟹ x₁ = x₂ (one-one). For any y ∈ ℝ, x = (y + 7)/3 ∈ ℝ, so f((y+7)/3) = y (onto). Since both hold, f is bijective.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m1-m3',
        questionText: 'Let f: ℕ → ℕ be defined by f(n) = 2n for all n ∈ ℕ. How is f classified?',
        options: [
          'Bijective',
          'One-to-one but not onto',
          'Onto but not one-to-one',
          'Neither one-to-one nor onto',
        ],
        correctIndex: 1,
        explanation: 'f(n₁) = f(n₂) ⟹ 2n₁ = 2n₂ ⟹ n₁ = n₂ (one-one). However, odd natural numbers like 1, 3, 5 have no pre-image in ℕ, so Range ≠ Co-domain (not onto).',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m1-m4',
        questionText: 'Let R be the equivalence relation on ℤ defined by a ≡ b (mod 4). What is the equivalence class [2]?',
        options: [
          '{..., -8, -4, 0, 4, 8, ...}',
          '{..., -6, -2, 2, 6, 10, ...}',
          '{..., -7, -3, 1, 5, 9, ...}',
          '{2, 4, 6, 8}',
        ],
        correctIndex: 1,
        explanation: '[2] = {x ∈ ℤ : x - 2 is a multiple of 4} = {4k + 2 : k ∈ ℤ} = {..., -6, -2, 2, 6, 10, ...}.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m1-m5',
        questionText: 'Let set A = {1, 2, 3}. What is the total number of binary relations that can be defined on A?',
        options: ['9', '27', '512', '64'],
        correctIndex: 2,
        explanation: 'The Cartesian product A × A contains 3 × 3 = 9 ordered pairs. The number of relations on A is the number of subsets of A × A, which is 2⁹ = 512.',
        difficulty: 'medium',
      },

      // 🔴 HARD QUESTIONS (11-15)
      {
        id: 'q-12-m1-h1',
        questionText: 'Let R be the relation on the set of real numbers ℝ defined by R = {(a, b) : a ≤ b²}. Which of the following is true regarding R?',
        options: [
          'R is reflexive and transitive',
          'R is an equivalence relation',
          'R is not reflexive and not transitive',
          'R is symmetric and reflexive',
        ],
        correctIndex: 2,
        explanation: 'Counterexample for reflexivity: (1/2, 1/2) ∉ R because 1/2 > (1/2)² = 1/4. Counterexample for transitivity: (2, -2) ∈ R (2 ≤ 4) and (-2, -1) ∈ R (-2 ≤ 1), but (2, -1) ∉ R (2 ≰ 1). Both fail.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m1-h2',
        questionText: 'What is the total number of distinct equivalence relations that can be formed on a set with 3 elements, A = {1, 2, 3}?',
        options: ['3', '5', '8', '9'],
        correctIndex: 1,
        explanation: 'The number of equivalence relations on a set with n elements equals the Bell number Bₙ. For n = 3, B₃ = 5 (corresponding to the 5 partitions: 3 elements together, 2+1 in 3 ways, and all 3 separate).',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m1-h3',
        questionText: 'Consider the polynomial function f: ℝ → ℝ given by f(x) = x³ - x. Why is f NOT an injective function?',
        options: [
          'Because f(x) is not differentiable at x = 0',
          'Because f(-1) = f(0) = f(1) = 0, so distinct inputs produce the same output',
          'Because the co-domain does not equal the domain',
          'Because f(x) is unbounded as x approaches infinity',
        ],
        correctIndex: 1,
        explanation: 'f(-1) = (-1)³ - (-1) = 0, f(0) = 0, and f(1) = 1³ - 1 = 0. Since -1 ≠ 0 ≠ 1 yet their images are identical, f violates injectivity.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m1-h4',
        questionText: 'If R₁ and R₂ are two equivalence relations on a non-empty set A, which statement is GUARANTEED to be mathematically true?',
        options: [
          'R₁ ∪ R₂ is always an equivalence relation',
          'R₁ ∩ R₂ is always an equivalence relation',
          'Neither R₁ ∪ R₂ nor R₁ ∩ R₂ can be an equivalence relation',
          'R₁ - R₂ is always an equivalence relation',
        ],
        correctIndex: 1,
        explanation: 'The intersection of two equivalence relations is always an equivalence relation. The union R₁ ∪ R₂ is reflexive and symmetric, but generally fails transitivity.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m1-h5',
        questionText: 'Let f: A → B and g: B → C be two functions such that the composite function g ∘ f is one-one (injective). What deduction MUST hold?',
        options: [
          'Both f and g must be one-one',
          'f must be one-one, but g is not necessarily one-one',
          'g must be one-one, but f is not necessarily one-one',
          'Neither f nor g needs to be one-one',
        ],
        correctIndex: 1,
        explanation: 'If f(x₁) = f(x₂), then g(f(x₁)) = g(f(x₂)), which implies (g ∘ f)(x₁) = (g ∘ f)(x₂). Since g ∘ f is one-one, x₁ = x₂. Thus f must be one-one. However, g need only be injective on the image of f.',
        difficulty: 'hard',
      },
    ],
  },

  'quiz-ch-12-math-3': {
    id: 'quiz-ch-12-math-3',
    chapterId: 'ch-12-math-3',
    chapterTitle: 'Matrices',
    subjectName: 'Mathematics',
    classId: '12',
    description:
      'NCERT Class 12 Chapter 3 practice test with Easy, Medium, and Hard tiers covering matrix algebra, transpose, symmetric/skew-symmetric matrices, and invertibility.',
    passingScore: 60,
    questions: [
      // 🟢 EASY (1-5)
      {
        id: 'q-12-m3-e1',
        questionText: 'If a matrix has order 3 × 4, how many total entries (elements) does it contain?',
        options: ['7', '12', '14', '64'],
        correctIndex: 1,
        explanation: 'The number of elements in an m × n matrix is given by m × n. For 3 × 4, 3 × 4 = 12 elements.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m3-e2',
        questionText: 'A square matrix A is called Symmetric if which condition is met?',
        options: ['A^T = A', 'A^T = -A', 'A^2 = A', 'A = O'],
        correctIndex: 0,
        explanation: 'A matrix A is symmetric if it is equal to its transpose: A^T = A (i.e. a_ij = a_ji for all i, j).',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m3-e3',
        questionText: 'A square matrix A is called Skew-Symmetric if:',
        options: ['A^T = -A', 'A^T = A', 'A = I', 'det(A) = 1'],
        correctIndex: 0,
        explanation: 'A matrix A is skew-symmetric if A^T = -A (i.e. a_ij = -a_ji for all i, j).',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m3-e4',
        questionText: 'What is always true about the diagonal elements of any skew-symmetric matrix?',
        options: [
          'They must all be equal to 0',
          'They must all be positive',
          'They must all equal 1',
          'They can take any arbitrary non-zero real value',
        ],
        correctIndex: 0,
        explanation: 'For diagonal elements, a_ii = -a_ii ⟹ 2a_ii = 0 ⟹ a_ii = 0. All diagonal elements of a skew-symmetric matrix must be zero.',
        difficulty: 'easy',
      },
      {
        id: 'q-12-m3-e5',
        questionText: 'For two matrices A and B of orders m × n and p × q respectively, the matrix product AB is defined if and only if:',
        options: ['n = p', 'm = q', 'm = n and p = q', 'n = q'],
        correctIndex: 0,
        explanation: 'Matrix multiplication AB requires the number of columns of A to equal the number of rows of B (n = p). The product AB has order m × q.',
        difficulty: 'easy',
      },

      // 🟡 MEDIUM (6-10)
      {
        id: 'q-12-m3-m1',
        questionText: 'If A is a square matrix, which of the following is ALWAYS a symmetric matrix?',
        options: ['A + A^T', 'A - A^T', 'A^2 - A', '2A - A^T'],
        correctIndex: 0,
        explanation: '(A + A^T)^T = A^T + (A^T)^T = A^T + A = A + A^T. Hence A + A^T is always symmetric.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m3-m2',
        questionText: 'If matrix A is both symmetric AND skew-symmetric, what must matrix A be?',
        options: [
          'A diagonal matrix with non-zero entries',
          'A zero matrix (O)',
          'An identity matrix (I)',
          'A scalar matrix',
        ],
        correctIndex: 1,
        explanation: 'Symmetric means A^T = A; skew-symmetric means A^T = -A. Therefore A = -A ⟹ 2A = O ⟹ A = O (the zero matrix).',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m3-m3',
        questionText: 'If A and B are symmetric matrices of the same order, then AB - BA is always:',
        options: [
          'A skew-symmetric matrix',
          'A symmetric matrix',
          'A zero matrix',
          'An identity matrix',
        ],
        correctIndex: 0,
        explanation: '(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Therefore AB - BA is skew-symmetric.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m3-m4',
        questionText: 'For matrices A and B of suitable orders, what is the correct transpose of product (AB)^T?',
        options: ['B^T A^T', 'A^T B^T', 'A B^T', 'B A^T'],
        correctIndex: 0,
        explanation: 'By the reversal law of transpose, (AB)^T = B^T A^T.',
        difficulty: 'medium',
      },
      {
        id: 'q-12-m3-m5',
        questionText: 'If A = [[2, 3], [1, 4]] and B = [[1, -1], [0, 2]], what is the entry in row 1, column 2 of the sum A + B?',
        options: ['2', '3', '4', '1'],
        correctIndex: 0,
        explanation: 'Entry (1, 2) is a_12 + b_12 = 3 + (-1) = 2.',
        difficulty: 'medium',
      },

      // 🔴 HARD (11-15)
      {
        id: 'q-12-m3-h1',
        questionText: 'Any square matrix A can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix as:',
        options: [
          '1/2(A + A^T) + 1/2(A - A^T)',
          '(A + A^T) + (A - A^T)',
          '1/2(A^T A) + 1/2(A A^T)',
          'A A^T - A^T A',
        ],
        correctIndex: 0,
        explanation: 'NCERT Theorem: A = 1/2(A + A^T) + 1/2(A - A^T), where 1/2(A + A^T) is symmetric and 1/2(A - A^T) is skew-symmetric.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m3-h2',
        questionText: 'If A is a square matrix such that A² = A (an idempotent matrix), then (I + A)³ - 7A is equal to:',
        options: ['I', 'A', 'I - A', '3I'],
        correctIndex: 0,
        explanation: '(I + A)³ = I³ + 3I²A + 3IA² + A³ = I + 3A + 3A + A = I + 7A (since A² = A ⟹ A³ = A). Thus (I + 7A) - 7A = I.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m3-h3',
        questionText: 'If A and B are invertible matrices of the same order, then the inverse of product (AB)⁻¹ is:',
        options: ['B⁻¹ A⁻¹', 'A⁻¹ B⁻¹', 'A B⁻¹', 'B A⁻¹'],
        correctIndex: 0,
        explanation: 'By the reversal law of inverse, (AB)(B⁻¹ A⁻¹) = A (B B⁻¹) A⁻¹ = A I A⁻¹ = A A⁻¹ = I. Hence (AB)⁻¹ = B⁻¹ A⁻¹.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m3-h4',
        questionText: 'What is the total number of all possible 3 × 3 matrices with each entry being either 0 or 1?',
        options: ['27', '81', '512', '1024'],
        correctIndex: 2,
        explanation: 'A 3 × 3 matrix has 9 positions. Each position can be independently filled in 2 ways (0 or 1). Total matrices = 2⁹ = 512.',
        difficulty: 'hard',
      },
      {
        id: 'q-12-m3-h5',
        questionText: 'If A = [[0, 1], [1, 0]], what is the matrix power A⁴ equal to?',
        options: ['I', 'A', '-I', 'O'],
        correctIndex: 0,
        explanation: 'A² = [[0, 1], [1, 0]] [[0, 1], [1, 0]] = [[1, 0], [0, 1]] = I. Then A⁴ = (A²)² = I² = I.',
        difficulty: 'hard',
      },
    ],
  },
};

function cleanSentence(text: string): string {
  let s = text.trim();
  if (s.endsWith('.')) s = s.slice(0, -1);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getSubjectDistractors(subjectId: string): [string, string, string] {
  if (subjectId === 'mathematics') {
    return [
      'Assuming the algebraic relation holds only for non-negative integers without general validity.',
      'Applying formulas mechanically without verifying domain restrictions or non-zero denominators.',
      'Relying purely on rough numerical approximations while omitting formal geometric proofs.',
    ];
  }
  if (subjectId === 'physics' || (subjectId === 'science' && Math.random() > 0.5)) {
    return [
      'Neglecting vector directions and treating displacement and acceleration as simple scalars.',
      'Assuming conservation of energy is violated whenever mechanical friction or heat dissipation occurs.',
      'Disregarding standard Cartesian sign conventions and SI units during calculation.',
    ];
  }
  if (subjectId === 'chemistry') {
    return [
      'Balancing chemical reaction products without conserving elemental atomic masses.',
      'Assuming endothermic reactions release spontaneous heat into surrounding aqueous solutions.',
      'Treating covalent sharing and ionic electron transfer as indistinguishable bonding modes.',
    ];
  }
  if (subjectId === 'biology') {
    return [
      'Confusing passive concentration-gradient diffusion with active ATP-dependent transport.',
      'Assuming haploid gametes undergo mitotic differentiation prior to fertilization.',
      'Overlooking enzymatic regulatory feedback loops in cellular metabolic pathways.',
    ];
  }
  if (subjectId === 'english') {
    return [
      'Focusing exclusively on literal plot events while ignoring tone, irony, and character development.',
      'Assuming the narrative speaker always represents the unexamined autobiographical viewpoint of the author.',
      'Disregarding poetic structure, figurative imagery, and the central moral question.',
    ];
  }
  return [
    'Attributing complex historical movements solely to a single isolated event or leader.',
    'Assuming public institutions operate without constitutional checks, balances, and judicial review.',
    'Ignoring geographic, economic, and demographic factors in national policy development.',
  ];
}

export function generatePlanQuiz(
  classId: ClassId,
  subjectId: string,
  chapterNumber: number,
  plan: ChapterPlan,
  chapterId: string,
  quizId: string,
): Quiz {
  const subjectName = SUBJECT_NAMES[subjectId] || cleanSentence(subjectId);
  const c0 = plan.concepts[0] || 'Core principles';
  const c1 = plan.concepts[1] || 'Analytical reasoning';
  const c2 = plan.concepts[2] || 'Practical applications';
  const [d1, d2, d3] = getSubjectDistractors(subjectId);

  const questions: QuizQuestion[] = [
    // 🟢 EASY QUESTIONS (1-10)
    {
      id: `${quizId}-q1`,
      questionText: `What is the primary learning objective of NCERT Class ${classId} ${subjectName}, Chapter ${chapterNumber}: "${plan.title}"?`,
      options: [
        'Memorizing arbitrary formulas without verifying physical or mathematical constraints.',
        cleanSentence(plan.focus),
        'Skipping foundational definitions and focusing exclusively on isolated numerical shortcuts.',
        d1,
      ],
      correctIndex: 1,
      explanation: `According to the NCERT curriculum, the main learning objective of "${plan.title}" is to ${plan.focus.toLowerCase().replace(/\.$/, '')}.`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q2`,
      questionText: `Which of the following defines the foundational scope of "${c0}" in "${plan.title}"?`,
      options: [
        `It establishes the core definitions and fundamental conditions governing ${plan.title}.`,
        `It is an empirical approximation that holds only under isolated artificial conditions.`,
        d2,
        `It replaces formal scientific principles with unverified trial-and-error rules.`,
      ],
      correctIndex: 0,
      explanation: `In NCERT Class ${classId} ${subjectName}, "${c0}" forms the foundational conceptual anchor of "${plan.title}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q3`,
      questionText: `Which of the following best summarizes the recommended NCERT approach for mastering "${plan.title}"?`,
      options: [
        'Focus only on multiple choice elimination tricks without understanding underlying derivations.',
        'Rely exclusively on memorization without practicing problem-solving or analytical writing.',
        d2,
        `Master the core ideas (${c0} and ${c1}), study textbook worked examples, and solve end-of-chapter exercises systematically.`,
      ],
      correctIndex: 3,
      explanation: `NCERT pedagogy promotes deep conceptual mastery of "${plan.title}" by uniting theory (${c0}, ${c1}) with thorough practice of textbook exercises and diagrams.`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q4`,
      questionText: `What is the standard notation and definition requirement when introducing "${c1}"?`,
      options: [
        `Stating explicit domain constraints, standard units, and unambiguous notation before solving.`,
        `Omitting variable definitions since symbols are self-evident across all problems.`,
        d3,
        `Assuming all constants equal unity regardless of the specified numerical values.`,
      ],
      correctIndex: 0,
      explanation: `NCERT examination guidelines require students to state clear variable definitions and domain conditions when introducing "${c1}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q5`,
      questionText: `What is the significance of the textbook summary ("What you have studied") for "${plan.title}"?`,
      options: [
        `It provides an integrated review of governing laws, operational definitions, and essential theorems.`,
        `It replaces the need to practice textbook numerical problems.`,
        d1,
        `It contains unverified historical anecdotes that are omitted from examinations.`,
      ],
      correctIndex: 0,
      explanation: `The NCERT summary provides a concise compilation of core theorems, relations, and definitions for "${plan.title}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q6`,
      questionText: `In "${plan.title}", what role do standard NCERT diagrams and schematic figures serve?`,
      options: [
        `They visually ground theoretical definitions and guide correct analytical and geometrical setup.`,
        `They are purely decorative illustrations not assessed in board exams.`,
        d2,
        `They can be sketched without standard labels or reference axes.`,
      ],
      correctIndex: 0,
      explanation: `Diagrams in "${plan.title}" establish spatial relationships, sign conventions, and visual verification of physical/mathematical systems.`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q7`,
      questionText: `Which of the following is true regarding foundational terminology in "${c0}"?`,
      options: [
        `Terms have precise textbook definitions with explicit conditions of applicability.`,
        `Terminology can be used interchangeably with unrelated concepts from other units.`,
        d3,
        `Definitions only apply when numerical values are integers.`,
      ],
      correctIndex: 0,
      explanation: `Scientific and mathematical rigor in "${plan.title}" depends on accurate recall and application of core terminology in "${c0}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q8`,
      questionText: `When beginning a multi-part exercise on "${c1}", what is the first step recommended by teachers?`,
      options: [
        `Reading the problem carefully, listing given parameters with standard units, and identifying the required target quantity.`,
        `Immediately applying the formula from the most recent page without checking given data.`,
        d1,
        `Guessing whether the final value will be positive or negative.`,
      ],
      correctIndex: 0,
      explanation: `Careful parsing of given parameters and target requirements is the universal starting point for error-free problem solving in "${c1}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q9`,
      questionText: `How does NCERT recommend organizing formulas and principles of "${c2}" during initial revision?`,
      options: [
        `Creating a structured formula sheet highlighting definitions, conditions of validity, and standard SI units.`,
        `Memorizing arbitrary short-tricks without writing down full equations.`,
        d2,
        `Relying entirely on calculator memory functions.`,
      ],
      correctIndex: 0,
      explanation: `Structured formula compilations that include conditions of validity ensure students apply relations correctly in "${c2}".`,
      difficulty: 'easy',
    },
    {
      id: `${quizId}-q10`,
      questionText: `What is the recommended method to check the basic plausibility of an answer in "${plan.title}"?`,
      options: [
        `Verifying standard dimensional units, realistic physical magnitude, and consistency with problem constraints.`,
        `Assuming any positive number generated by computation must be correct.`,
        d3,
        `Checking if the answer matches a friend's calculation without re-verifying steps.`,
      ],
      correctIndex: 0,
      explanation: `Plausibility checks (units, order of magnitude, boundary limits) are essential NCERT practices for avoiding calculation mistakes in "${plan.title}".`,
      difficulty: 'easy',
    },

    // 🟡 MEDIUM QUESTIONS (11-20)
    {
      id: `${quizId}-q11`,
      questionText: `In the study of "${plan.title}", how is "${c0}" applied according to NCERT?`,
      options: [
        `By developing clear conceptual understanding of ${c0} and applying it systematically to problem-solving.`,
        `By treating ${c0} as an optional topic omitted from board examinations.`,
        d2,
        `By replacing formal definitions with intuitive shortcuts.`,
      ],
      correctIndex: 0,
      explanation: `In NCERT Class ${classId} ${subjectName}, "${c0}" forms a core foundation of "${plan.title}", requiring rigorous conceptual clarity and disciplined application.`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q12`,
      questionText: `Regarding "${c1}" in "${plan.title}", which of the following statements is conceptually accurate?`,
      options: [
        `It operates independently of any underlying physical laws or governing syllabus axioms.`,
        d3,
        `It connects core definitions with structured reasoning, diagrammatic representation, and textbook worked examples.`,
        `It is strictly optional and not relevant to NCERT board assessments.`,
      ],
      correctIndex: 2,
      explanation: `NCERT emphasizes that "${c1}" provides the critical bridge between foundational definitions and practical problem-solving in "${plan.title}".`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q13`,
      questionText: `When executing multi-step derivations in "${plan.title}", what represents the most sound mathematical / scientific procedure?`,
      options: [
        `Skipping intermediate steps and writing the final algebraic expression immediately.`,
        `Writing the governing formula, substituting given values with appropriate units, and simplifying systematically.`,
        d1,
        `Guessing approximate orders of magnitude without formal verification.`,
      ],
      correctIndex: 1,
      explanation: `Standard board marking schemes assign step-wise credit for formula citation, substitution with standard units, and systematic calculation.`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q14`,
      questionText: `How does "${c2}" relate to the earlier concepts (${c0} and ${c1}) in this chapter?`,
      options: [
        `It contradicts the foundational definitions established in earlier sections.`,
        `It builds directly upon ${c0} and ${c1} to model more comprehensive applications and real-world problems.`,
        d2,
        `It represents an outdated historical method superseded in modern curricula.`,
      ],
      correctIndex: 1,
      explanation: `Curriculum progression in "${plan.title}" links ${c0} and ${c1} into the synthesis of ${c2}, ensuring a continuous cognitive pathway.`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q15`,
      questionText: `In a standard 3-mark problem involving "${c0}" and "${c1}", what critical intermediate milestone must be justified?`,
      options: [
        `Stating the bridging equation and verifying that units remain consistent across transformations.`,
        `Omitting algebraic simplifications to save exam space.`,
        d3,
        `Using approximate values for fundamental constants without specifying them.`,
      ],
      correctIndex: 0,
      explanation: `Marking rubrics award specific marks for stating the intermediate relation linking "${c0}" with "${c1}" and demonstrating unit consistency.`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q16`,
      questionText: `Why does NCERT contrast worked examples with end-of-chapter exercises in "${plan.title}"?`,
      options: [
        `Worked examples illustrate the canonical execution sequence, preparing students to tackle non-routine variations independently.`,
        `Exercises are designed to contradict the principles shown in worked examples.`,
        d1,
        `Exercises only test historical dates rather than conceptual derivations.`,
      ],
      correctIndex: 0,
      explanation: `Worked examples provide pedagogical templates showing how core theorems in "${plan.title}" translate into structured numerical or algebraic solutions.`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q17`,
      questionText: `When interpreting graphical or quantitative trends in "${c1}", how should boundary behavior be analyzed?`,
      options: [
        `By evaluating slopes, intercepts, and rate changes at critical transition points.`,
        `By assuming all trends remain strictly constant throughout.`,
        d2,
        `By ignoring extreme data points and plotting arbitrary lines.`,
      ],
      correctIndex: 0,
      explanation: `Analyzing slopes, intercepts, and inflection points reveals the operational mechanics governing "${c1}".`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q18`,
      questionText: `In "${plan.title}", what distinguishes a fundamental governing law from an empirical approximation in "${c0}"?`,
      options: [
        `A fundamental law holds universally under stated conditions, whereas an approximation is valid only within narrow operational ranges.`,
        `There is no scientific difference between fundamental laws and empirical approximations.`,
        d3,
        `Fundamental laws never require mathematical formulas.`,
      ],
      correctIndex: 0,
      explanation: `NCERT emphasizes conceptual clarity by distinguishing exact governing laws from domain-limited approximations in "${c0}".`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q19`,
      questionText: `When solving problems involving two interdependent stages in "${c2}", what is the most common pitfall to avoid?`,
      options: [
        `Carrying premature rounding errors or unverified sign changes from the first stage into the second.`,
        `Checking intermediate calculations twice.`,
        d1,
        `Stating standard definitions too explicitly.`,
      ],
      correctIndex: 0,
      explanation: `Propagating intermediate rounding errors or sign errors across multi-stage problems causes significant mark deductions in "${c2}".`,
      difficulty: 'medium',
    },
    {
      id: `${quizId}-q20`,
      questionText: `How are standard units and dimensional consistency rigorously checked when solving questions on "${plan.title}"?`,
      options: [
        `By converting all given quantities to base SI/standard units before substituting into governing equations.`,
        `By ignoring units during calculation and adding arbitrary units at the end.`,
        d2,
        `By assuming that dimensional homogeneity is automatically guaranteed without verification.`,
      ],
      correctIndex: 0,
      explanation: `Converting to standard base units before computation guarantees dimensional homogeneity and prevents order-of-magnitude errors in "${plan.title}".`,
      difficulty: 'medium',
    },

    // 🔴 HARD QUESTIONS (21-30)
    {
      id: `${quizId}-q21`,
      questionText: `When analyzing complex questions on "${c2}" in "${plan.title}", what is an essential NCERT principle to apply?`,
      options: [
        `Skipping intermediate working steps and writing down only the final conclusion.`,
        `Verifying boundary conditions, maintaining standard units/definitions, and checking logical consistency.`,
        `Assuming all variables remain invariant regardless of the physical or mathematical context.`,
        d1,
      ],
      correctIndex: 1,
      explanation: `Mastering "${c2}" requires careful adherence to NCERT guidelines: verifying units, stating assumptions, and confirming results against foundational definitions.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q22`,
      questionText: `Which of the following describes a high-frequency student misconception when solving problems in "${plan.title}"?`,
      options: [
        `Drawing labeled diagrams and explicitly checking dimensional homogeneity.`,
        `Confusing domain restrictions or sign conventions, leading to extraneous or unphysical solutions.`,
        `Validating boundary cases against known theoretical limits.`,
        `Verifying that intermediate steps satisfy conservation laws or algebraic axioms.`,
      ],
      correctIndex: 1,
      explanation: `Examiner reports indicate that overlooking sign conventions, domain restrictions, or unit conversions is the leading cause of mark loss in "${plan.title}".`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q23`,
      questionText: `In an advanced NCERT Exemplar question involving both "${c0}" and "${c1}", what approach guarantees mathematical and scientific rigor?`,
      options: [
        `Assuming linear behavior without testing whether non-linear constraints apply.`,
        `Expressing all interdependent quantities in terms of fundamental parameters and checking limiting boundary cases.`,
        d3,
        `Rounding intermediate numbers prematurely to single significant figures.`,
      ],
      correctIndex: 1,
      explanation: `Exemplar problems require setting up exact parameterized relationships and confirming consistency at limiting boundary values.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q24`,
      questionText: `To achieve full marks on a 5-mark subjective question on "${plan.title}", what is the required presentation structure?`,
      options: [
        `Writing isolated numerical values without verbal explanations.`,
        `Stating 'Given' and 'To Prove / Find', writing the standard governing relation, detailing each transition step, and concluding with a boxed result and correct unit.`,
        d2,
        `Providing an informal sketch without axis labels or definitions.`,
      ],
      correctIndex: 1,
      explanation: `Board marking rubrics allocate distinct marks for: (1) statement of theorem/formula, (2) structured intermediate derivation, and (3) final conclusion with units.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q25`,
      questionText: `In a Higher Order Thinking Skills (HOTS) question on "${plan.title}", how should non-routine problem conditions be addressed?`,
      options: [
        `Deconstruct the problem into foundational first-principles of "${c0}", identify invariant properties, and build a tailored analytical model.`,
        `Assume the question is flawed and reproduce a standard memorized derivation.`,
        d1,
        `Substitute trial numbers until an integer solution is guessed.`,
      ],
      correctIndex: 0,
      explanation: `HOTS questions evaluate first-principles decomposition, requiring students to synthesize core principles of "${c0}" under novel conditions.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q26`,
      questionText: `Under what conditions do introductory simplified formulations in "${c0}" cease to be valid in "${plan.title}"?`,
      options: [
        `When system parameters approach asymptotic limits, boundary transitions, or non-linear operational regimes.`,
        `Whenever input values are expressed as fractions or decimals.`,
        d3,
        `Only in computational laboratory simulations, never in theoretical problems.`,
      ],
      correctIndex: 0,
      explanation: `Advanced problem-solving requires recognizing the operational boundaries where basic textbook approximations in "${c0}" give way to generalized principles.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q27`,
      questionText: `In evaluating Assertion-Reason questions for "${plan.title}", what rigorous verification protocol is mandatory?`,
      options: [
        `Evaluate Assertion and Reason independently for factual truth, and verify whether Reason provides the direct causal mechanism for Assertion.`,
        `Assume both statements are true if they sound grammatically complex.`,
        d2,
        `Judge solely based on whether the conclusion matches a textbook worked example.`,
      ],
      correctIndex: 0,
      explanation: `Board marking standards require independent factual verification followed by strict causal deduction between Assertion and Reason in "${plan.title}".`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q28`,
      questionText: `When cross-synthesizing "${plan.title}" with adjacent units in Class ${classId} ${subjectName}, what preserves mathematical rigor?`,
      options: [
        `Identifying the invariant coupling variable that bridges both conceptual frameworks and verifying conservation laws across the interface.`,
        `Discarding the principles of the earlier unit in favor of immediate numerical estimates.`,
        d1,
        `Setting all coupling constants equal to zero to eliminate complexity.`,
      ],
      correctIndex: 0,
      explanation: `Cross-topic synthesis demands that coupling variables and conservation laws remain consistent across topical boundaries in "${plan.title}".`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q29`,
      questionText: `How is uniqueness or optimality of a solution in "${c1}" formally established in advanced proofs?`,
      options: [
        `By demonstrating that any alternative assumption leads to a contradiction with foundational axioms (proof by contradiction).`,
        `By testing two arbitrary positive integers and verifying that they yield the same result.`,
        d3,
        `By asserting uniqueness based on intuitive plausibility.`,
      ],
      correctIndex: 0,
      explanation: `Rigorous mathematical and theoretical proofs in "${c1}" establish uniqueness by demonstrating that hypothetical alternative solutions violate core axioms.`,
      difficulty: 'hard',
    },
    {
      id: `${quizId}-q30`,
      questionText: `In case-study based evaluative problems on "${plan.title}", which analytical capability is most stringently assessed?`,
      options: [
        `Extracting relevant parameters from realistic contextual descriptions, establishing governing equations, and interpreting results within real-world constraints.`,
        `Rote reproduction of historical scientist biographies without numerical computation.`,
        d2,
        `Speed of writing prose paragraphs without mathematical symbols or derivations.`,
      ],
      correctIndex: 0,
      explanation: `Case studies evaluate the student's ability to model real-world contextual scenarios into precise mathematical/scientific formulations in "${plan.title}".`,
      difficulty: 'hard',
    },
  ];

  // Enrich all 30 generated questions with subject-specific 4-step solutions and key concepts
  const enrichedQuestions = questions.map((q) => ({
    ...q,
    solutionSteps: generateStepByStepSolution(q, subjectName, plan.title, classId),
    keyConcept: `${plan.title} • NCERT Benchmark`,
  }));

  return {
    id: quizId,
    chapterId,
    chapterTitle: plan.title,
    subjectName,
    classId,
    description: `Comprehensive NCERT-aligned practice test for Class ${classId} ${subjectName}, Chapter ${chapterNumber} — ${plan.title}. Includes Easy, Medium, and Hard testing tiers with detailed step-by-step solutions and explanations.`,
    passingScore: 60,
    questions: enrichedQuestions,
  };
}

/**
 * Automatically synthesizes comprehensive 4-step pedagogical solutions and derivations
 * tailored by subject, question content, difficulty, and NCERT curriculum benchmarks.
 */
export function generateStepByStepSolution(
  q: QuizQuestion,
  subjectName: string,
  chapterTitle: string,
  classId: string,
): string[] {
  const correctOpt = q.options[q.correctIndex] || '';
  const subLower = (subjectName || '').toLowerCase();
  const qLower = q.questionText.toLowerCase();

  // 1. MATHEMATICS
  if (subLower.includes('math')) {
    return [
      `Step 1 (Concept & Theorem Identification): Identify the foundational mathematical theorem or algebraic definition governing this problem in ${chapterTitle} (Class ${classId}). The question evaluates: "${q.questionText.slice(0, 110)}...".`,
      `Step 2 (Formulation & Analytical Setup): Set up the formal mathematical statement, equation, or geometric representation. Identify the given parameters and constraints as standardized by NCERT guidelines.`,
      `Step 3 (Step-by-Step Derivation & Calculation): ${q.explanation ? q.explanation : `Systematically evaluating each multiple-choice option confirms that "${correctOpt}" satisfies all algebraic identities and boundary conditions without contradiction.`}`,
      `Step 4 (Final Verification & Conclusion): Therefore, the verified correct option is "${correctOpt}". This matches the official NCERT solution method and avoids common algebraic traps.`,
    ];
  }

  // 2. SCIENCE / PHYSICS
  if (
    subLower.includes('physics') ||
    (subLower.includes('sci') &&
      (qLower.includes('force') ||
        qLower.includes('ray') ||
        qLower.includes('light') ||
        qLower.includes('lens') ||
        qLower.includes('mirror') ||
        qLower.includes('current') ||
        qLower.includes('voltage') ||
        qLower.includes('circuit') ||
        qLower.includes('motion') ||
        qLower.includes('gravity') ||
        qLower.includes('work') ||
        qLower.includes('energy') ||
        qLower.includes('electric') ||
        qLower.includes('magnetic') ||
        qLower.includes('prism') ||
        qLower.includes('wave')))
  ) {
    return [
      `Step 1 (Physical Law & Principle Identification): Identify the governing physical law or scientific principle for "${chapterTitle}". We recognize the law governing "${q.questionText.slice(0, 105)}...".`,
      `Step 2 (Parameters & SI Unit Framework): Extract given physical quantities, establish proper Cartesian sign conventions, and ensure all quantities are in standard SI units.`,
      `Step 3 (Analytical Derivation & Substitution): ${q.explanation ? q.explanation : `Substituting the given values into the governing physics formulas and evaluating edge cases yields "${correctOpt}".`}`,
      `Step 4 (Physical Interpretation & Verification): Hence, the verified answer is "${correctOpt}". The result conforms to fundamental physical conservation laws and experimental observations.`,
    ];
  }

  // 3. SCIENCE / CHEMISTRY
  if (
    subLower.includes('chem') ||
    (subLower.includes('sci') &&
      (qLower.includes('react') ||
        qLower.includes('acid') ||
        qLower.includes('base') ||
        qLower.includes('salt') ||
        qLower.includes('atom') ||
        qLower.includes('molecule') ||
        qLower.includes('metal') ||
        qLower.includes('carbon') ||
        qLower.includes('periodic') ||
        qLower.includes('precipitat') ||
        qLower.includes('oxid') ||
        qLower.includes('reduc') ||
        qLower.includes('electron') ||
        qLower.includes('ion') ||
        qLower.includes('compound')))
  ) {
    return [
      `Step 1 (Chemical Principle & Reaction Class): Identify the underlying chemical process, periodic property, or reaction archetype relevant to "${chapterTitle}".`,
      `Step 2 (Stoichiometry & Electronic Balancing): Write out the balanced chemical equation, electron configurations, oxidation states, or molecular structure involved.`,
      `Step 3 (Mechanistic Analysis & Property Evaluation): ${q.explanation ? q.explanation : `Analyzing relative chemical reactivity, chemical bonding, and conservation of mass confirms why "${correctOpt}" occurs under standard conditions.`}`,
      `Step 4 (Definitive Conclusion & Observation): Therefore, the correct result is "${correctOpt}", consistent with standard NCERT laboratory observations and chemical properties.`,
    ];
  }

  // 4. SCIENCE / BIOLOGY
  if (
    subLower.includes('bio') ||
    (subLower.includes('sci') &&
      (qLower.includes('cell') ||
        qLower.includes('plant') ||
        qLower.includes('animal') ||
        qLower.includes('organ') ||
        qLower.includes('blood') ||
        qLower.includes('heart') ||
        qLower.includes('digest') ||
        qLower.includes('respir') ||
        qLower.includes('kidney') ||
        qLower.includes('dna') ||
        qLower.includes('gene') ||
        qLower.includes('reproduc') ||
        qLower.includes('ecolog') ||
        qLower.includes('nervous') ||
        qLower.includes('brain') ||
        qLower.includes('tissue') ||
        qLower.includes('hormone')))
  ) {
    return [
      `Step 1 (Biological Framework & Level of Organization): Identify the anatomical structure, cellular organelle, physiological system, or genetic principle central to "${chapterTitle}".`,
      `Step 2 (Physiological Mechanism & Biological Pathway): Trace the biological sequence, biochemical pathway (e.g. enzyme interaction, cellular transport, homeostatic feedback), or morphological adaptation.`,
      `Step 3 (Causal Linkage & Functional Significance): ${q.explanation ? q.explanation : `Correlating the structural specialization with its physiological function demonstrates why "${correctOpt}" is biologically valid.`}`,
      `Step 4 (Summary & NCERT Alignment): Hence, "${correctOpt}" is the correct answer according to standard NCERT biological diagrams and principles.`,
    ];
  }

  // 5. SOCIAL SCIENCE (History, Geography, Political Science / Civics, Economics)
  if (
    subLower.includes('social') ||
    subLower.includes('sst') ||
    subLower.includes('history') ||
    subLower.includes('geography') ||
    subLower.includes('civics') ||
    subLower.includes('pol') ||
    subLower.includes('eco')
  ) {
    return [
      `Step 1 (Historical & Institutional Context): Situate the inquiry within its relevant historical period, constitutional article, geographic zone, or economic policy framework in "${chapterTitle}".`,
      `Step 2 (Institutional Role & Analytical Framework): Examine the democratic institutions, socio-economic factors, or geographic conditions referenced in "${q.questionText.slice(0, 105)}...".`,
      `Step 3 (Causal Analysis & Evidence Synthesis): ${q.explanation ? q.explanation : `Evaluating the documentary evidence, constitutional provisions, or statistical patterns validates why "${correctOpt}" is the authentic resolution.`}`,
      `Step 4 (Curricular Takeaway & Final Verification): Thus, "${correctOpt}" is the historically and constitutionally verified answer according to NCERT CBSE curriculum benchmarks.`,
    ];
  }

  // 6. ENGLISH & LITERATURE
  if (subLower.includes('eng') || subLower.includes('language') || subLower.includes('lit')) {
    return [
      `Step 1 (Literary / Grammatical Framework): Identify the grammatical rule, literary theme, rhetorical device, or comprehension context in "${chapterTitle}".`,
      `Step 2 (Contextual & Syntactic Analysis): Analyze the textual excerpt or syntactic structure of the prompt to evaluate meaning, tone, and grammatical agreement.`,
      `Step 3 (Distractor Elimination & Rule Application): ${q.explanation ? q.explanation : `Eliminating incorrect distractors that violate grammatical rules or misinterpret the author's intent confirms that "${correctOpt}" is appropriate.`}`,
      `Step 4 (Final Synthesis): Therefore, "${correctOpt}" is the correct, verified response conforming to standard CBSE English assessment rubrics.`,
    ];
  }

  // 7. GENERAL / DEFAULT SUBJECT
  return [
    `Step 1 (Conceptual Framework): Identify the core principle from ${chapterTitle} being tested. The question addresses: "${q.questionText.slice(0, 105)}...".`,
    `Step 2 (Systematic Analysis): Break down the given conditions and verify each multiple-choice alternative against standard textbook definitions.`,
    `Step 3 (Detailed Working & Derivation): ${q.explanation ? q.explanation : `Applying foundational logic and textbook criteria confirms why "${correctOpt}" is valid while other options fail.`}`,
    `Step 4 (Final Conclusion): Thus, the correct answer is "${correctOpt}". This aligns with the verified curriculum benchmarks.`,
  ];
}

/**
 * Ensures that any Quiz has at least 10 Easy, 10 Medium, and 10 Hard questions.
 * If any tier has fewer than 10, it supplements high-quality curriculum-aligned questions.
 * Always enriches 100% of questions with full step-by-step solutions and key concept badges.
 */
export function ensureTenQuestionsPerTier(quiz: Quiz): Quiz {
  const easy = quiz.questions.filter((q) => q.difficulty === 'easy');
  const medium = quiz.questions.filter((q) => q.difficulty === 'medium');
  const hard = quiz.questions.filter((q) => q.difficulty === 'hard');

  const subjectName = quiz.subjectName || 'Subject';
  const chapterTitle = quiz.chapterTitle || 'Chapter';
  const quizId = quiz.id;

  const resultQuestions: QuizQuestion[] = [...quiz.questions];

  const createSupplemental = (
    difficulty: 'easy' | 'medium' | 'hard',
    index: number
  ): QuizQuestion => {
    const qId = `${quizId}-${difficulty}-ext-${index}`;
    if (difficulty === 'easy') {
      const easyTemplates = [
        {
          q: `Which foundational textbook principle is essential for understanding "${chapterTitle}" in Class ${quiz.classId} ${subjectName}?`,
          opts: [
            `Mastering core definitions, notations, and operational conditions introduced in the opening section.`,
            `Memorizing arbitrary formulas without checking applicability conditions.`,
            `Skipping introductory proofs and working directly on advanced competitive problems.`,
            `Ignoring standard units and dimensional consistency.`,
          ],
          corr: 0,
          exp: `NCERT emphasizes that a strong conceptual foundation in ${chapterTitle} begins with precise mastery of foundational definitions and terminology.`,
        },
        {
          q: `In the study of "${chapterTitle}", why does NCERT emphasize reviewing the chapter summary ("What you have studied")?`,
          opts: [
            `To replace thorough reading of the textbook exercises.`,
            `To consolidate key formulas, theorems, and definitions into an integrated mental model.`,
            `Because board exam questions are only framed from summary bullet points.`,
            `To avoid drawing labeled diagrams.`,
          ],
          corr: 1,
          exp: `The chapter summary condenses essential governing rules, notation standards, and theorems for ${chapterTitle}.`,
        },
        {
          q: `When presenting solutions in "${chapterTitle}" for board assessments, what is considered essential?`,
          opts: [
            `Writing down direct answers without showing intermediary calculations or steps.`,
            `Clear labeling of given data, formula citation, step-by-step working, and boxing the final answer with units.`,
            `Using informal shorthand notation not recognized in standard textbooks.`,
            `Omitting axis titles or labels in geometric/graphical representations.`,
          ],
          corr: 1,
          exp: `CBSE marking rubrics award step-wise marks for stating given values, formula citation, calculations, and units in ${chapterTitle}.`,
        },
        {
          q: `Which of the following is true regarding basic definitions in "${chapterTitle}"?`,
          opts: [
            `They apply universally across all real cases without domain constraints.`,
            `They establish explicit domain restrictions and operational conditions that must be verified before computation.`,
            `They can be redefined arbitrarily depending on numerical convenience.`,
            `They are purely historical and not used in modern problem-solving.`,
          ],
          corr: 1,
          exp: `Rigorous mathematical and scientific study in ${chapterTitle} requires strict adherence to domain boundaries and standard definitions.`,
        },
        {
          q: `How should a student approach textbook diagrams and graphical representations in "${chapterTitle}"?`,
          opts: [
            `Sketch rough unmeasured drawings without labels or directional arrows.`,
            `Draw neat, proportionately accurate diagrams with clear labels and standard symbols according to NCERT guidelines.`,
            `Omit diagrams entirely unless specifically requested in 5-mark questions.`,
            `Use non-standard color conventions prohibited in examinations.`,
          ],
          corr: 1,
          exp: `Accurate diagrams with standard NCERT labels and symbols are essential for conceptual clarity and scoring in ${chapterTitle}.`,
        },
        {
          q: `What is the role of worked examples provided throughout the text in "${chapterTitle}"?`,
          opts: [
            `They demonstrate the standard analytical sequence and formal presentation style expected in examinations.`,
            `They are optional reading that should be skipped in favor of external guides.`,
            `They only cover theoretical proofs and avoid practical problem-solving.`,
            `They present alternative unverified methods not accepted in board marking.`,
          ],
          corr: 0,
          exp: `NCERT worked examples provide the authoritative benchmark for problem-solving methodology and presentation in ${chapterTitle}.`,
        },
        {
          q: `In "${chapterTitle}", which practice prevents common calculation mistakes during revision?`,
          opts: [
            `Verifying answers by working backwards or checking boundary cases where applicable.`,
            `Writing rough calculations in the final presentation area without structuring.`,
            `Rounding off intermediate decimal numbers prematurely.`,
            `Skipping algebraic verification steps to save time.`,
          ],
          corr: 0,
          exp: `Cross-checking intermediate steps and verifying answers against physical or mathematical boundary constraints minimizes error in ${chapterTitle}.`,
        },
        {
          q: `Before attempting complex problems in "${chapterTitle}", what prerequisite check is recommended?`,
          opts: [
            `Ensuring complete fluency with foundational algebraic, arithmetic, or scientific rules from earlier chapters.`,
            `Memorizing solutions to all exemplar problems verbatim.`,
            `Skipping standard definitions and relying on trial-and-error.`,
            `Assuming all constants equal unity regardless of problem statements.`,
          ],
          corr: 0,
          exp: `Success in ${chapterTitle} relies heavily on prerequisites from foundational chapters being thoroughly understood.`,
        },
        {
          q: `Which statement accurately reflects the nature of fundamental laws studied in "${chapterTitle}"?`,
          opts: [
            `They hold consistently under defined conditions and form the basis for multi-step derivations.`,
            `They are transient rules that change from one exercise to another.`,
            `They cannot be verified experimentally or analytically.`,
            `They apply only to integer values.`,
          ],
          corr: 0,
          exp: `Fundamental laws and theorems in ${chapterTitle} provide invariant, verifiable principles governing the subject.`,
        },
        {
          q: `What is the primary benefit of solving sequential NCERT exercises in "${chapterTitle}"?`,
          opts: [
            `Developing progressive problem-solving confidence from direct conceptual checks to comprehensive multi-step problems.`,
            `Learning how to spot typographical errors in textbooks.`,
            `Memorizing multiple choice answer keys without understanding concepts.`,
            `Avoiding subjective written practice.`,
          ],
          corr: 0,
          exp: `The NCERT exercise sequence is pedagogically structured to guide learners from basic recall to deep conceptual application in ${chapterTitle}.`,
        },
      ];
      const template = easyTemplates[(index - 1) % easyTemplates.length];
      return {
        id: qId,
        questionText: template.q,
        options: template.opts,
        correctIndex: template.corr,
        explanation: template.exp,
        difficulty: 'easy',
      };
    } else if (difficulty === 'medium') {
      const mediumTemplates = [
        {
          q: `When applying multi-step problem-solving methods to "${chapterTitle}", which strategy is recommended by NCERT?`,
          opts: [
            `Breaking the problem into distinct analytical phases: identify given parameters, state governing equations, compute intermediate variables, and determine final results.`,
            `Combining all operations into a single unverified step without intermediate writing.`,
            `Guessing numerical values based on typical textbook answers.`,
            `Ignoring constraints specified in the problem statement.`,
          ],
          corr: 0,
          exp: `Structured multi-phase problem solving ensures full step-credit and avoids algebraic oversights in ${chapterTitle}.`,
        },
        {
          q: `In "${chapterTitle}", how are relationships between interdependent variables most reliably analyzed?`,
          opts: [
            `By isolating the dependent variable and evaluating variation as each independent parameter changes under standard conditions.`,
            `By assuming all variables change at constant linear rates regardless of governing formulas.`,
            `By ignoring units and treating all quantities as dimensionless scalars.`,
            `By relying purely on intuition without writing algebraic expressions.`,
          ],
          corr: 0,
          exp: `Systematic parametric analysis reveals exact dependencies and rates of change in ${chapterTitle}.`,
        },
        {
          q: `What distinguishes a rigorous derivation from an informal plausibility argument in "${chapterTitle}"?`,
          opts: [
            `A derivation establishes each step using stated axioms, theorems, and definitions without skipping intermediate algebraic transformations.`,
            `A derivation is simply longer and uses more Greek symbols.`,
            `A derivation avoids mentioning assumptions or domain restrictions.`,
            `There is no practical difference between them in board examinations.`,
          ],
          corr: 0,
          exp: `Rigorous derivations in ${chapterTitle} demand step-wise justification rooted in established principles.`,
        },
        {
          q: `When interpreting graphical representations associated with "${chapterTitle}", what critical feature must be examined?`,
          opts: [
            `Slope, axis intercepts, curvature, and the physical/mathematical meaning of the area under the curve.`,
            `Only the aesthetic symmetry of the plotted line.`,
            `Whether the line passes through the origin regardless of the governing formula.`,
            `The physical size of the graph paper used.`,
          ],
          corr: 0,
          exp: `Graphs in ${chapterTitle} encode crucial quantitative relationships through their slopes, intercepts, and enclosed areas.`,
        },
        {
          q: `How does NCERT recommend verifying that a solution in "${chapterTitle}" is physically or mathematically valid?`,
          opts: [
            `Checking the solution against initial boundary constraints, dimensional consistency, and reasonable real-world magnitudes.`,
            `Confirming whether the answer is an integer.`,
            `Assuming that any positive number obtained from calculation must be correct.`,
            `Checking if the number matches an example in another chapter.`,
          ],
          corr: 0,
          exp: `Validation in ${chapterTitle} requires confirming dimensional units, domain boundaries, and physical reality.`,
        },
        {
          q: `In two-step problems in "${chapterTitle}", what represents the most common source of student error?`,
          opts: [
            `Using the output of the first stage with incorrect units or sign conventions in the second stage.`,
            `Writing down too many detailed explanatory steps.`,
            `Stating standard definitions too clearly.`,
            `Verifying calculations twice.`,
          ],
          corr: 0,
          exp: `Carrying unverified intermediate quantities across calculation stages frequently compounds errors in ${chapterTitle}.`,
        },
        {
          q: `Why does NCERT emphasize contrasting different sub-types of problems within "${chapterTitle}"?`,
          opts: [
            `To help students identify subtle distinguishing features and select the most appropriate method rather than applying a single formula blindly.`,
            `To increase the memorization workload on students.`,
            `To demonstrate that standard textbook formulas frequently fail.`,
            `Because board examinations never repeat identical problem archetypes.`,
          ],
          corr: 0,
          exp: `Comparative problem analysis builds pattern-recognition skills and deepens conceptual discernment in ${chapterTitle}.`,
        },
        {
          q: `When dealing with ratios or proportional quantities in "${chapterTitle}", what must be strictly observed?`,
          opts: [
            `Ensuring both quantities are expressed in identical base units before forming the ratio.`,
            `Assuming ratios always carry the physical units of the numerator.`,
            `Multiplying the ratio by arbitrary scale factors without justification.`,
            `Treating direct and inverse proportionality as interchangeable.`,
          ],
          corr: 0,
          exp: `Consistent units are mandatory when computing ratios and rates of change in ${chapterTitle}.`,
        },
        {
          q: `In standard NCERT 3-mark questions on "${chapterTitle}", what earns maximum marks?`,
          opts: [
            `A clear initial formulation, explicit intermediate steps showing algebraic manipulation, and a boxed final answer with correct units.`,
            `Writing only the numerical answer without supporting work.`,
            `Providing lengthy historical background on the discovering scientist or mathematician.`,
            `Drawing decorative borders around the page.`,
          ],
          corr: 0,
          exp: `Examiners reward clean, logical reasoning and structured step-wise execution in ${chapterTitle}.`,
        },
        {
          q: `How should conflicting or overlapping conditions be handled in multi-part problems in "${chapterTitle}"?`,
          opts: [
            `Evaluate the intersection of all conditions to find the common valid solution set.`,
            `Ignore the second condition and solve only for the first.`,
            `Take the average of the results obtained from each condition.`,
            `Conclude that no solution exists without formal verification.`,
          ],
          corr: 0,
          exp: `Simultaneous constraints in ${chapterTitle} require identifying the intersection of individual domain validity regions.`,
        },
      ];
      const template = mediumTemplates[(index - 1) % mediumTemplates.length];
      return {
        id: qId,
        questionText: template.q,
        options: template.opts,
        correctIndex: template.corr,
        explanation: template.exp,
        difficulty: 'medium',
      };
    } else {
      const hardTemplates = [
        {
          q: `In advanced NCERT Exemplar problems on "${chapterTitle}", what distinguishes top-tier solutions from average attempts?`,
          opts: [
            `Analyzing limiting boundary conditions, proving that solutions satisfy both necessary and sufficient conditions, and handling non-trivial edge cases.`,
            `Writing lengthy essays with excessive decorative text.`,
            `Relying on empirical trial-and-error rather than formal algebraic reasoning.`,
            `Assuming all non-linear relationships can be simplified to linear approximations.`,
          ],
          corr: 0,
          exp: `Exemplar problems in ${chapterTitle} test rigorous analytical depth, boundary testing, and logical completeness.`,
        },
        {
          q: `Which of the following represents a high-frequency trap in Higher Order Thinking Skills (HOTS) questions for "${chapterTitle}"?`,
          opts: [
            `Failing to identify hidden constraints or domain boundaries that discard apparent solutions as extraneous.`,
            `Writing down formal definitions at the beginning of the answer.`,
            `Using standard SI units throughout intermediate calculations.`,
            `Verifying answers against known limiting cases.`,
          ],
          corr: 0,
          exp: `HOTS questions frequently embed subtle domain constraints that invalidate superficial solutions in ${chapterTitle}.`,
        },
        {
          q: `When a multi-concept question synthesizes "${chapterTitle}" with another syllabus unit, what is the critical step?`,
          opts: [
            `Identifying the shared coupling variable that bridges both conceptual frameworks and verifying conservation/invariance principles across the transition.`,
            `Treating the two concepts as completely independent and solving them in isolation.`,
            `Discarding all formulas from the earlier unit in favor of the current chapter.`,
            `Approximating all parameters to zero.`,
          ],
          corr: 0,
          exp: `Interdisciplinary and cross-chapter synthesis in ${chapterTitle} relies on correctly identifying the invariant linking parameter.`,
        },
        {
          q: `In a 5-mark board question on "${chapterTitle}", an examiner report noted that many students lost marks due to:`,
          opts: [
            `Omitting formal justification for steps taken between the initial equation and the final simplification.`,
            `Stating governing theorems too accurately.`,
            `Including too many labeled diagrams.`,
            `Writing answers in neat sequential paragraphs.`,
          ],
          corr: 0,
          exp: `Examiner reports consistently highlight unstated assumptions and omitted justifications as the primary cause of mark deduction in ${chapterTitle}.`,
        },
        {
          q: `Under what conditions do simplified elementary formulas in "${chapterTitle}" break down, requiring generalized treatments?`,
          opts: [
            `When parameters approach asymptotic limits, boundary thresholds, or extreme non-linear operational regimes.`,
            `Whenever numerical values are fractional rather than integers.`,
            `In all problems originating from NCERT exemplar books.`,
            `Only in practical laboratory experiments, never in theoretical problems.`,
          ],
          corr: 0,
          exp: `Elementary textbook approximations hold strictly within designated linear or boundary regimes; advanced problems in ${chapterTitle} test behavior at the limits.`,
        },
        {
          q: `When evaluating Assertion-Reason questions in "${chapterTitle}", what rigorous protocol must be applied?`,
          opts: [
            `Evaluate Assertion (A) for truth independently, evaluate Reason (R) for truth independently, and then verify whether (R) provides the direct causal explanation for (A).`,
            `Assume both statements are true if they sound scientifically plausible.`,
            `Select 'Both A and R are false' whenever the topic seems difficult.`,
            `Ignore the reasoning and judge solely based on the truth of the assertion.`,
          ],
          corr: 0,
          exp: `Assertion-Reason questions require independent truth evaluation followed by causal deduction verification in ${chapterTitle}.`,
        },
        {
          q: `In complex derivations in "${chapterTitle}", how should multiple interdependent variables be handled?`,
          opts: [
            `Express all interdependent variables in terms of a single fundamental parameter before differentiating, integrating, or evaluating limits.`,
            `Treat all variables as independent constants to simplify arithmetic.`,
            `Substitute arbitrary numerical integers instead of algebraic variables.`,
            `Eliminate variables at random until only one remains.`,
          ],
          corr: 0,
          exp: `Parameterization reduces multi-variable complexity into a single tractable analytical path in ${chapterTitle}.`,
        },
        {
          q: `What is the most sound approach when solving a non-routine problem in "${chapterTitle}" that does not match standard textbook templates?`,
          opts: [
            `Decompose the problem into first-principles: identify governing conservation laws, draw a schematic, set up boundary equations, and solve systematically.`,
            `Abandon standard definitions and guess the likely multiple-choice answer.`,
            `Assume that the problem contains a printing error and write an unrelated derivation.`,
            `Apply the formula from the most recent worked example regardless of relevance.`,
          ],
          corr: 0,
          exp: `First-principles reasoning enables students to navigate novel and non-standard problem formulations in ${chapterTitle}.`,
        },
        {
          q: `How can one formally prove that a proposed solution in "${chapterTitle}" is unique?`,
          opts: [
            `Assume the existence of two distinct solutions and demonstrate through logical deduction that they must be identical (proof by contradiction).`,
            `Check that the solution works for two different numerical values.`,
            `State that the solution is unique without mathematical justification.`,
            `Show that the formula produces a positive number.`,
          ],
          corr: 0,
          exp: `Uniqueness proofs in ${chapterTitle} rely on assuming multiplicity and deducing that any alternative candidate collapses into the original solution.`,
        },
        {
          q: `In case-study based analytical questions on "${chapterTitle}", what skill is being primarily evaluated?`,
          opts: [
            `Extracting relevant physical/mathematical parameters from contextual prose, translating real-world conditions into mathematical equations, and interpreting results meaningfully.`,
            `Rote memorization of chapter historical milestones.`,
            `Speed of writing prose paragraphs without mathematical symbols.`,
            `Ability to guess answers without reading the background passage.`,
          ],
          corr: 0,
          exp: `Case-study assessments in ${chapterTitle} measure mathematical modeling and real-world application of textbook concepts.`,
        },
      ];
      const template = hardTemplates[(index - 1) % hardTemplates.length];
      return {
        id: qId,
        questionText: template.q,
        options: template.opts,
        correctIndex: template.corr,
        explanation: template.exp,
        difficulty: 'hard',
      };
    }
  };

  const currentEasyCount = easy.length;
  for (let i = currentEasyCount + 1; i <= 10; i++) {
    resultQuestions.push(createSupplemental('easy', i));
  }

  const currentMedCount = medium.length;
  for (let i = currentMedCount + 1; i <= 10; i++) {
    resultQuestions.push(createSupplemental('medium', i));
  }

  const currentHardCount = hard.length;
  for (let i = currentHardCount + 1; i <= 10; i++) {
    resultQuestions.push(createSupplemental('hard', i));
  }

  // Guarantee solutionSteps and keyConcept are populated on EVERY question
  const enrichedQuestions = resultQuestions.map((q) => {
    const steps =
      q.solutionSteps && q.solutionSteps.length > 0
        ? q.solutionSteps
        : generateStepByStepSolution(q, subjectName, chapterTitle, quiz.classId);
    const concept =
      q.keyConcept || `${chapterTitle} • NCERT Concept & Core Rule`;
    return {
      ...q,
      solutionSteps: steps,
      keyConcept: concept,
    };
  });

  return {
    ...quiz,
    questions: enrichedQuestions,
  };
}

// Master Quizzes Registry
export const QUIZZES_DATA: Record<string, Quiz> = { ...HANDCRAFTED_QUIZZES };

// Populate quizzes for all chapters across all classes in PLANS & EXTRA_PLANS
const ALL_GRADES: ClassId[] = ['8', '9', '10', '11', '12'];

for (const grade of ALL_GRADES) {
  const gradePlans = PLANS[grade];
  if (!gradePlans) continue;

  for (const subjectId in gradePlans) {
    const plans = [
      ...(gradePlans[subjectId] || []),
      ...(EXTRA_PLANS[grade]?.[subjectId] || []),
    ];

    plans.forEach((plan, idx) => {
      const chapterNumber = idx + 1;
      const chapterId = `ch-${grade}-${subjectId}-${chapterNumber}`;
      const quizId = `quiz-${grade}-${subjectId}-${chapterNumber}`;

      // Only generate if not already handcrafted
      if (!QUIZZES_DATA[quizId]) {
        const generated = generatePlanQuiz(
          grade,
          subjectId,
          chapterNumber,
          plan,
          chapterId,
          quizId,
        );
        QUIZZES_DATA[quizId] = generated;
      }

      // Also register by chapterId alias for seamless lookup
      if (!QUIZZES_DATA[chapterId]) {
        QUIZZES_DATA[chapterId] = QUIZZES_DATA[quizId];
      }
      const altQuizId = `quiz-${chapterId}`;
      if (!QUIZZES_DATA[altQuizId]) {
        QUIZZES_DATA[altQuizId] = QUIZZES_DATA[quizId];
      }
    });
  }
}

// Additional aliases for handcrafted Class 10 chapters
const CLASS_10_ALIASES: Record<string, string> = {
  'ch-10-math-real-numbers': 'quiz-10-math-real-numbers',
  'quiz-ch-10-math-real-numbers': 'quiz-10-math-real-numbers',
  'quiz-10-mathematics-1': 'quiz-10-math-real-numbers',
  'ch-10-math-polynomials': 'quiz-10-math-polynomials',
  'quiz-ch-10-math-polynomials': 'quiz-10-math-polynomials',
  'quiz-10-mathematics-2': 'quiz-10-math-polynomials',
  'ch-10-math-quadratic-equations': 'quiz-10-math-quadratic-equations',
  'quiz-ch-10-math-quadratic-equations': 'quiz-10-math-quadratic-equations',
  'quiz-10-mathematics-3': 'quiz-10-math-quadratic-equations',
  'quiz-10-mathematics-4': 'quiz-10-math-quadratic-equations',
  'ch-10-sci-chemical-reactions': 'quiz-10-sci-chemical-reactions',
  'quiz-ch-10-sci-chemical-reactions': 'quiz-10-sci-chemical-reactions',
  'quiz-10-science-1': 'quiz-10-sci-chemical-reactions',
  'ch-10-sci-light': 'quiz-10-sci-light',
  'quiz-ch-10-sci-light': 'quiz-10-sci-light',
  'quiz-10-science-2': 'quiz-10-sci-light',
  'ch-10-sci-life-processes': 'quiz-10-sci-life-processes',
  'quiz-ch-10-sci-life-processes': 'quiz-10-sci-life-processes',
  'quiz-10-science-3': 'quiz-10-sci-life-processes',
  'quiz-10-science-5': 'quiz-10-sci-life-processes',
  'ch-10-eng-1': 'quiz-10-eng-1',
  'quiz-ch-10-eng-1': 'quiz-10-eng-1',
  'quiz-10-english-1': 'quiz-10-eng-1',
  'ch-10-sst-1': 'quiz-10-sst-1',
  'quiz-ch-10-sst-1': 'quiz-10-sst-1',
  'quiz-10-social-science-1': 'quiz-10-sst-1',
  'ch-12-math-1': 'quiz-ch-12-math-1',
  'quiz-ch-12-math-1': 'quiz-ch-12-math-1',
  'quiz-12-mathematics-1': 'quiz-ch-12-math-1',
  'quiz-12-math-1': 'quiz-ch-12-math-1',
  'ch-12-math-3': 'quiz-ch-12-math-3',
  'quiz-ch-12-math-3': 'quiz-ch-12-math-3',
  'quiz-12-mathematics-3': 'quiz-ch-12-math-3',
  'quiz-12-math-3': 'quiz-ch-12-math-3',
};

for (const [alias, targetId] of Object.entries(CLASS_10_ALIASES)) {
  if (QUIZZES_DATA[targetId] && !QUIZZES_DATA[alias]) {
    QUIZZES_DATA[alias] = QUIZZES_DATA[targetId];
  }
}

// Guarantee every quiz in QUIZZES_DATA has at least 10 Easy, 10 Medium, and 10 Hard questions
for (const key of Object.keys(QUIZZES_DATA)) {
  QUIZZES_DATA[key] = ensureTenQuestionsPerTier(QUIZZES_DATA[key]);
}

/**
 * Foolproof resolver: given any chapter, returns its quiz from QUIZZES_DATA,
 * or generates one dynamically so that no chapter in any class can ever fail.
 */
export function getQuizForChapter(
  chapter: Chapter,
  subject: Subject,
  classId: ClassId,
): Quiz {
  // 1. Direct lookup by chapter.quizId
  if (chapter.quizId && QUIZZES_DATA[chapter.quizId]) {
    return ensureTenQuestionsPerTier(QUIZZES_DATA[chapter.quizId]);
  }

  // 2. Lookup by chapter.id
  if (QUIZZES_DATA[chapter.id]) {
    return ensureTenQuestionsPerTier(QUIZZES_DATA[chapter.id]);
  }

  // 3. Lookup by standard formats
  const candidateKeys = [
    `quiz-${chapter.id}`,
    `quiz-${classId}-${subject.id}-${chapter.chapterNumber}`,
    `quiz-${classId}-${subject.id}-${chapter.id}`,
  ];
  for (const key of candidateKeys) {
    if (QUIZZES_DATA[key]) {
      return ensureTenQuestionsPerTier(QUIZZES_DATA[key]);
    }
  }

  // 4. Dynamic fallback generation based on chapter details
  const plan: ChapterPlan = {
    title: chapter.title,
    focus: chapter.description || `Master the concepts and problem-solving methods of ${chapter.title}.`,
    concepts:
      chapter.topics.length > 0
        ? chapter.topics.map((t) => t.title).slice(0, 3)
        : ['Core definitions', 'Worked methods', 'NCERT practice'],
  };

  const dynamicQuizId = chapter.quizId || `quiz-${chapter.id}`;
  const generatedQuiz = ensureTenQuestionsPerTier(
    generatePlanQuiz(
      classId,
      subject.id,
      chapter.chapterNumber,
      plan,
      chapter.id,
      dynamicQuizId,
    )
  );

  // Cache in QUIZZES_DATA
  QUIZZES_DATA[dynamicQuizId] = generatedQuiz;
  QUIZZES_DATA[chapter.id] = generatedQuiz;

  return generatedQuiz;
}
