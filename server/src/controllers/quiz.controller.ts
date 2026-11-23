import type { Request, Response } from 'express';
import { store } from '../store/dataStore.js';
import type { ApiResponse } from '../types/index.js';

export const QUIZ_DATABASE: Record<string, any> = {
  'ch-10-math-real-numbers': {
    id: 'quiz-10-math-real-numbers',
    chapterId: 'ch-10-math-real-numbers',
    chapterTitle: 'Real Numbers',
    subjectName: 'Mathematics',
    classId: '10',
    description: 'NCERT Class 10 Chapter 1 conceptual self-check on Fundamental Theorem of Arithmetic and irrationality proofs.',
    passingScore: 60,
    questions: [
      // === 🟢 10 EASY QUESTIONS ===
      {
        id: 'q-10-m-e1',
        questionText: 'According to Euclid’s Division Lemma, for positive integers a and b there exist unique integers q and r with a = bq + r. Which condition must r satisfy?',
        options: ['0 < r < b', '0 ≤ r < b', '0 < r ≤ b', '0 ≤ r ≤ b'],
        correctIndex: 1,
        explanation: 'The remainder is allowed to be 0 and must be strictly smaller than the divisor: 0 ≤ r < b.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e2',
        questionText: 'The Fundamental Theorem of Arithmetic, as stated in NCERT, says that every composite number can be uniquely expressed as a product of:',
        options: ['Composite numbers only', 'Primes, apart from the order in which the prime factors occur', 'Odd integers only', 'Even integers only'],
        correctIndex: 1,
        explanation: 'NCERT Theorem: every composite number has a unique prime factorisation, apart from the order of the factors.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e3',
        questionText: 'If p is prime and p divides a² (where a is a positive integer), which statement is always true?',
        options: ['p must equal a', 'p divides a', 'p divides √a', 'p² must divide a'],
        correctIndex: 1,
        explanation: 'This is the lemma used in NCERT to prove √2, √3, and √5 irrational: a prime dividing a² also divides a.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e4',
        questionText: 'Which of the following numbers is rational?',
        options: ['√2', '3 + 2√5', '√9', '√3 + √5'],
        correctIndex: 2,
        explanation: '√9 = 3 = 3/1, which is a ratio of two integers. The others involve non-terminating, non-recurring decimals.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e5',
        questionText: 'What is the HCF of any two consecutive natural numbers n and n + 1?',
        options: ['0', '1', '2', 'n(n + 1)'],
        correctIndex: 1,
        explanation: 'Two consecutive natural numbers have no common factors other than 1, so their HCF is always 1 (they are co-prime).',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e6',
        questionText: 'What is the smallest composite number?',
        options: ['1', '2', '3', '4'],
        correctIndex: 3,
        explanation: '1 is neither prime nor composite. 2 and 3 are prime. 4 is the smallest number with more than two factors (1, 2, 4).',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e7',
        questionText: 'The product of a non-zero rational number and an irrational number is always:',
        options: ['Rational', 'Irrational', 'An integer', 'Zero'],
        correctIndex: 1,
        explanation: 'If a/b is rational (non-zero) and x is irrational, assuming (a/b)x = p/q would imply x = (p/q)(b/a), a rational, which is a contradiction.',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e8',
        questionText: 'If two positive integers a and b are written as a = x³y² and b = xy³, where x and y are prime numbers, then HCF(a, b) is:',
        options: ['xy', 'xy²', 'x³y³', 'x²y²'],
        correctIndex: 1,
        explanation: 'HCF is the product of the smallest powers of each common prime factor: min(3, 1) = 1 for x, and min(2, 3) = 2 for y, giving xy².',
        difficulty: 'easy',
      },
      {
        id: 'q-10-m-e9',
        questionText: 'The decimal expansion of 7 / 80 will terminate after how many decimal places?',
        options: ['1 place', '2 places', '3 places', '4 places'],
        correctIndex: 3,
        explanation: '80 = 2⁴ × 5¹. The highest power of 2 or 5 in the denominator is 4, so the decimal terminates after 4 places.',
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
        explanation: 'For two positive integers, HCF × LCM = product. LCM = (306 × 657) / 9 = 34 × 657 = 22,338.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m2',
        questionText: 'Which fraction, already in lowest terms, has a terminating decimal expansion?',
        options: ['17 / 90', '77 / 210', '13 / 3125', '29 / 343'],
        correctIndex: 2,
        explanation: 'After writing the denominator in primes, only 13/3125 = 13/5⁵ has the form 2ⁿ5ᵐ. The others contain 3 or 7.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m3',
        questionText: 'Prime factorisations: 6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5. What are HCF and LCM of the three numbers?',
        options: ['HCF = 6, LCM = 360', 'HCF = 6, LCM = 51840', 'HCF = 24, LCM = 360', 'HCF = 2, LCM = 120'],
        correctIndex: 0,
        explanation: 'HCF uses the smallest common powers: 2¹ × 3¹ = 6. LCM uses the greatest powers of all primes: 2³ × 3² × 5 = 360. Do not multiply HCF by LCM to recover the product of three numbers.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m4',
        questionText: 'If the LCM of two numbers is 360 and their HCF is 12, and one number is 72, what is the other number?',
        options: ['50', '60', '64', '80'],
        correctIndex: 1,
        explanation: 'Other number = (HCF × LCM) / given number = (12 × 360) / 72 = 4320 / 72 = 60.',
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
        questionText: 'An army contingent of 616 members is to march behind an army band of 32 members in a parade. What is the maximum number of columns in which they can march?',
        options: ['4', '8', '16', '32'],
        correctIndex: 1,
        explanation: 'The maximum columns is HCF(616, 32). 616 = 32 × 19 + 8, and 32 = 8 × 4 + 0. Thus HCF is 8.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m7',
        questionText: 'If two positive integers p and q are written as p = ab² and q = a³b (where a and b are prime numbers), then LCM(p, q) is:',
        options: ['ab', 'a²b²', 'a³b²', 'a⁴b³'],
        correctIndex: 2,
        explanation: 'LCM takes the highest exponent of each prime factor: max(1, 3) = 3 for a, and max(2, 1) = 2 for b, giving a³b².',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m8',
        questionText: 'If the HCF of 65 and 117 is expressible in the form 65m - 117, what is the value of m?',
        options: ['1', '2', '3', '4'],
        correctIndex: 1,
        explanation: 'HCF(65, 117) = 13. Setting 65m - 117 = 13 gives 65m = 130, so m = 2.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m9',
        questionText: 'Three alarm bells toll at intervals of 9, 12, and 15 minutes respectively. If they toll together now, after how many minutes will they next toll together?',
        options: ['60 minutes', '120 minutes', '180 minutes', '360 minutes'],
        correctIndex: 2,
        explanation: 'LCM(9, 12, 15): 9 = 3², 12 = 2² × 3, 15 = 3 × 5. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes.',
        difficulty: 'medium',
      },
      {
        id: 'q-10-m-m10',
        questionText: 'What is the sum of exponents of prime factors in the prime factorisation of 144?',
        options: ['4', '5', '6', '7'],
        correctIndex: 2,
        explanation: '144 = 12² = (2² × 3)² = 2⁴ × 3². The sum of the exponents is 4 + 2 = 6.',
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
        explanation: 'Ending with 0 requires factors 2 and 5. Uniqueness of prime factorisation keeps 5 out of 6ⁿ. This is the NCERT Exercise 1.1 argument.',
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
        questionText: 'Find the largest number which divides 70 and 125, leaving remainders 5 and 8 respectively.',
        options: ['13', '65', '875', '1750'],
        correctIndex: 0,
        explanation: 'The required number is HCF(70 - 5, 125 - 8) = HCF(65, 117). 65 = 5 × 13, 117 = 9 × 13. HCF = 13.',
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
        questionText: 'If n is any positive odd integer, then n² - 1 is always divisible by:',
        options: ['4 only', '8', '16', '32'],
        correctIndex: 1,
        explanation: 'Any odd integer is of the form 2k + 1. Then n² - 1 = (2k + 1)² - 1 = 4k² + 4k = 4k(k + 1). Since k(k + 1) is always even, 4 × 2m = 8m, which is divisible by 8.',
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
        questionText: 'In proving √5 is irrational by contradiction, assuming √5 = a/b (where a and b are co-prime integers) leads to which contradiction?',
        options: [
          'a and b are both even',
          '5 divides both a and b, contradicting that they are co-prime',
          'b = 0',
          '5 is not a prime number',
        ],
        correctIndex: 1,
        explanation: '5b² = a² implies 5 divides a², so 5 divides a. Letting a = 5c gives 5b² = 25c² => b² = 5c², meaning 5 divides b too. This contradicts that a and b have no common factor > 1.',
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
        questionText: 'If the HCF of 48 and 72 is expressed in the form 48x + 72y, which pair of integers (x, y) is correct?',
        options: ['(-1, 1)', '(1, -1)', '(2, -1)', '(-2, 2)'],
        correctIndex: 0,
        explanation: 'HCF(48, 72) = 24. Testing x = -1, y = 1 gives 48(-1) + 72(1) = -48 + 72 = 24.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h6',
        questionText: 'What is the greatest possible speed at which a person can walk 52 km and 91 km in an exact whole number of hours?',
        options: ['7 km/h', '13 km/h', '17 km/h', '26 km/h'],
        correctIndex: 1,
        explanation: 'The greatest speed dividing both distances evenly is HCF(52, 91). 52 = 4 × 13, 91 = 7 × 13. HCF = 13 km/h.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h7',
        questionText: 'If p is a prime number, what is the LCM of p, p², and p³?',
        options: ['p', 'p²', 'p³', 'p⁶'],
        correctIndex: 2,
        explanation: 'For powers of the same prime, LCM is given by the highest power: max(1, 2, 3) = 3, so LCM is p³.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h8',
        questionText: 'If a and b are co-prime positive integers, what can be deduced about a² and b²?',
        options: ['They must have a common factor of 2', 'They are also co-prime', 'Their HCF is a + b', 'Their LCM is a + b'],
        correctIndex: 1,
        explanation: 'Since a and b share no prime factors, squaring them creates no new prime factors. Thus a² and b² share no prime factors and remain co-prime.',
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
        explanation: '(√3 + √2)² = 3 + 2 + 2√6 = 5 + 2√6. Since √6 is irrational, 5 + 2√6 is strictly irrational.',
        difficulty: 'hard',
      },
      {
        id: 'q-10-m-h10',
        questionText: 'When the square of any prime number p > 3 is divided by 6, what is the remainder?',
        options: ['0', '1', '2', '3'],
        correctIndex: 1,
        explanation: 'Any prime p > 3 can be written as 6k ± 1. Then p² = (6k ± 1)² = 36k² ± 12k + 1 = 6(6k² ± 2k) + 1. Therefore, dividing by 6 always leaves remainder 1.',
        difficulty: 'hard',
      },
    ],
  },
  'ch-10-sci-chemical-reactions': {
    id: 'quiz-10-sci-chemical-reactions',
    chapterId: 'ch-10-sci-chemical-reactions',
    chapterTitle: 'Chemical Reactions & Equations',
    subjectName: 'Science',
    classId: '10',
    description: 'NCERT Class 10 Chapter 1 conceptual check on balancing equations, reaction classifications, redox, and corrosion.',
    passingScore: 3,
    questions: [
      {
        id: 'q1',
        questionText: 'Why must every chemical equation be balanced in accordance with the Law of Conservation of Mass?',
        options: [
          'Total energy must increase after the reaction',
          'Total mass of elements in products must equal total mass in reactants',
          'The number of molecules must remain constant',
          'Reaction speed must be optimized',
        ],
        correctIndex: 1,
        explanation: 'Matter cannot be created or destroyed in a chemical reaction, so number of atoms of each element must balance on both sides.',
      },
      {
        id: 'q2',
        questionText: 'When iron nails are immersed in copper sulfate solution (blue), the color changes to light green due to:',
        options: [
          'Decomposition of water',
          'Formation of ferrous sulfate (displacement reaction)',
          'Neutralization reaction',
          'Precipitation of barium sulfate',
        ],
        correctIndex: 1,
        explanation: 'Iron is more reactive than copper; it displaces copper to form light green FeSO₄ (iron sulfate).',
      },
      {
        id: 'q3',
        questionText: 'In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidized?',
        options: ['CuO', 'Cu', 'H₂', 'H₂O'],
        correctIndex: 2,
        explanation: 'Hydrogen gains oxygen to form H₂O, which means hydrogen (H₂) undergoes oxidation.',
      },
      {
        id: 'q4',
        questionText: 'Respiration is classified as which type of reaction?',
        options: [
          'Endothermic reaction',
          'Exothermic reaction',
          'Electrolytic decomposition',
          'Photochemical reaction',
        ],
        correctIndex: 1,
        explanation: 'During respiration, glucose oxidizes to produce carbon dioxide, water, and releases energy; thus it is an exothermic reaction.',
      },
      {
        id: 'q5',
        questionText: 'Chips manufacturers flush bags of potato chips with which inert gas to prevent rancidity (oxidation)?',
        options: ['Oxygen', 'Chlorine', 'Nitrogen', 'Carbon monoxide'],
        correctIndex: 2,
        explanation: 'Nitrogen gas is an unreactive antioxidant gas used to displace oxygen and prevent oxidative spoiling of oils and fats.',
      },
    ],
  },
};

export const getQuizByChapter = (req: Request, res: Response<ApiResponse<any>>) => {
  const chapterId = String(req.params.chapterId || '');
  const quiz = QUIZ_DATABASE[chapterId];

  if (!quiz) {
    return res.status(404).json({
      success: false,
      error: `No practice quiz registered for chapter: ${chapterId}`,
    });
  }

  return res.json({
    success: true,
    data: quiz,
  });
};

export const submitQuiz = (req: Request, res: Response<ApiResponse<any>>) => {
  const { userId, chapterId, answers } = req.body;

  if (!chapterId || !answers || !Array.isArray(answers)) {
    return res.status(400).json({
      success: false,
      error: 'chapterId and answers array are required',
    });
  }

  const quiz = QUIZ_DATABASE[String(chapterId)];
  if (!quiz) {
    return res.status(404).json({
      success: false,
      error: `Quiz not found for chapter: ${chapterId}`,
    });
  }

  let correctCount = 0;
  const results = quiz.questions.map((q: any, idx: number) => {
    const isCorrect = answers[idx] === q.correctIndex;
    if (isCorrect) correctCount++;
    return {
      questionId: q.id,
      selected: answers[idx],
      correctIndex: q.correctIndex,
      isCorrect,
      explanation: q.explanation,
    };
  });

  const total = quiz.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = correctCount >= quiz.passingScore;

  if (userId) {
    store.saveQuizScore(String(userId), String(chapterId), correctCount, total);
  }

  return res.json({
    success: true,
    data: {
      chapterId,
      score: correctCount,
      total,
      percentage,
      passed,
      results,
    },
  });
};
