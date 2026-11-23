import type { ClassInfo, Subject, ClassId } from '../types';
import { expandCurriculum } from './curriculumExpansion';
import { getPhysicsWallahVideo } from './physicsWallahVideos';

export const CLASSES_LIST: ClassInfo[] = [
  {
    id: '8',
    name: 'Class 8',
    level: 'Middle School Mastery',
    badge: 'Foundation Phase',
    description: 'Build core mathematical logic and scientific curiosity with guided concepts.',
    targetFocus: 'Foundational concepts, basic problem-solving, intuitive scientific principles.',
    subjectsCount: 4,
  },
  {
    id: '9',
    name: 'Class 9',
    level: 'Secondary Bridge',
    badge: 'Concept Builder',
    description: 'Bridge foundational learning with formal rigorous science and algebra frameworks.',
    targetFocus: 'Laws of motion, algebraic geometry, atom structure, structured grammar.',
    subjectsCount: 4,
  },
  {
    id: '10',
    name: 'Class 10',
    level: 'Secondary Benchmark',
    badge: 'Board Preparation',
    description: 'Master core board curricula with step-by-step video roadmaps and practice quizzes.',
    targetFocus: 'Real numbers, trigonometry, chemical reactions, heredity, analytical writing.',
    subjectsCount: 4,
  },
  {
    id: '11',
    name: 'Class 11',
    level: 'Senior Secondary',
    badge: 'Stream Specialization',
    description: 'Deep-dive into specialized Science, Mathematics, and Analytical streams.',
    targetFocus: 'Calculus fundamentals, mechanics, chemical bonding, cell biology.',
    subjectsCount: 5,
  },
  {
    id: '12',
    name: 'Class 12',
    level: 'Senior Benchmark',
    badge: 'Advanced & Board Ready',
    description: 'Comprehensive chapter pathways for board excellence and competitive readiness.',
    targetFocus: 'Electromagnetism, organic synthesis, integral calculus, genetics.',
    subjectsCount: 5,
  },
];

export const CURRICULUM_DATA: Record<ClassId, Subject[]> = {
  '10': [
    {
      id: 'mathematics',
      name: 'Mathematics',
      classId: '10',
      iconName: 'Calculator',
      category: 'STEM',
      color: 'blue',
      description: 'Step-by-step mathematical reasoning from real numbers to quadratic equations and trigonometry.',
      chapters: [
        {
          id: 'ch-10-math-real-numbers',
          chapterNumber: 1,
          title: 'Real Numbers',
              description: 'NCERT Class 10 Mathematics, Chapter 1: prime factorisation, HCF and LCM, and proofs that √2, √3 and √5 are irrational.',
          estimatedHours: 3.5,
          hasQuiz: true,
          quizId: 'quiz-10-math-real-numbers',
          topics: [
            {
              id: 'top-10-math-1-1',
              topicNumber: 1,
              title: 'Introduction to Real Numbers & Number Classification',
              duration: '14 mins',
              description: 'Understand the hierarchy of numbers: natural numbers, integers, rational numbers, and irrational numbers on the real line.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Verified educational reference video on Real Number Systems & Classification.',
              objectives: [
                'Distinguish between rational (p/q) and irrational numbers.',
                'Understand how the set of Real Numbers (R) unifies all measurable quantities.',
                'Review closure and density properties of numbers on the Cartesian number line.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Set Representation',
                  formulaOrRule: 'R = Q ∪ Q\' (Rational ∪ Irrational)',
                  note: 'Every point on the number line represents a unique real number.',
                },
                {
                  label: 'Rational Standard Form',
                  formulaOrRule: 'x = p / q, where p, q ∈ Z and q ≠ 0, gcd(p, q) = 1',
                  note: 'Co-prime integers in lowest terms.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT Class 10, Chapter 1 — How this chapter starts',
                  content: [
                    'In Class 9 you already placed rational and irrational numbers on the real line. Chapter 1 of the Class 10 NCERT Mathematics textbook continues that story by studying two properties of positive integers.',
                    'The latest rationalised NCERT book builds the chapter around the Fundamental Theorem of Arithmetic. Older editions also used Euclid’s division lemma to find HCF; that method is still useful, and VidyaPath keeps a short topic on it.',
                    'The two board-facing uses of unique prime factorisation in this chapter are: (1) proving that numbers such as √2, √3 and √5 are irrational, and (2) deciding whether a rational p/q has a terminating decimal (in editions that still include that section).',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'NCERT idea, in one line',
                    text: 'Primes are the building blocks of every composite number. Once a number is written as a product of primes, that writing is unique except for the order of the factors.',
                  },
                },
                {
                  sectionTitle: 'Sets you must recall before Exercise 1.1',
                  content: [
                    'Natural numbers N = {1, 2, 3, …}; whole numbers W add 0; integers Z include negatives.',
                    'A rational number is of the form p/q with p, q integers and q ≠ 0. An irrational number cannot be written that way (√2, √3, √5, π).',
                    'The real numbers R are all rationals together with all irrationals. Each real number is one point on the number line.',
                    'A prime has exactly two distinct positive divisors, 1 and itself. A composite number has at least one prime factor other than itself.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Board writing tip',
                    text: 'When a question asks you to “express as a product of primes”, write the number in ascending primes with exponents, for example 140 = 2² × 5 × 7.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-1',
                  question: 'Write 0 in the form p/q with integers p and q, q ≠ 0. Is 0 rational?',
                  hint: 'Any non-zero integer is allowed in the denominator.',
                  solution: 'Yes. 0 = 0/1 = 0/5 = 0/(−3). So 0 is rational.',
                },
                {
                  id: 'pq-2',
                  question: 'Classify 4 − √3 as rational or irrational, with a one-line reason in NCERT style.',
                  hint: 'A non-zero rational combined with an irrational stays irrational.',
                  solution: 'Irrational. 4 is rational and √3 is irrational, so their difference cannot be written as p/q.',
                },
                {
                  id: 'pq-2b',
                  question: 'Which of 17, 51 and 91 are prime? Justify using factors, not a calculator list.',
                  hint: 'Check divisibility by primes up to the square root of the number.',
                  solution: '17 is prime. 51 = 3 × 17 and 91 = 7 × 13, so both are composite.',
                },
              ],
            },
            {
              id: 'top-10-math-1-2',
              topicNumber: 2,
              title: "Euclid's Division Lemma & Division Algorithm",
              duration: '18 mins',
              description: "Master the formal statement of Euclid's Division Lemma (a = bq + r) and its algorithmic application to compute HCF of large integers.",
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: "Educational lecture explaining Euclid's Division Algorithm step-by-step.",
              objectives: [
                "State Euclid's Division Lemma with exact boundary conditions for the remainder r.",
                'Apply the Euclidean algorithm iteratively to compute the Highest Common Factor (HCF).',
                'Express remainders until remainder reaches zero to identify the last non-zero divisor.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: "Euclid's Division Lemma",
                  formulaOrRule: 'a = bq + r, where 0 ≤ r < b',
                  note: 'a = dividend, b = divisor, q = quotient, r = remainder.',
                },
                {
                  label: 'Algorithm Stopping Rule',
                  formulaOrRule: 'When r = 0, the divisor at that stage is HCF(a, b)',
                  note: 'Guaranteed to terminate in a finite number of steps.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'Where this sits in NCERT',
                  content: [
                    'The rationalised Class 10 NCERT Mathematics book no longer has a full section on Euclid’s division lemma. The same idea still appears in Class 10 extra practice and in many state-board books, and it is the fastest way to find HCF of two large integers without listing factors.',
                    'Lemma: for positive integers a and b there exist unique integers q (quotient) and r (remainder) such that a = bq + r and 0 ≤ r < b.',
                    'Algorithm: replace the pair (a, b) by the pair (b, r) and repeat. When the remainder becomes 0, the current divisor is HCF(a, b).',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'NCERT-style wording',
                    text: 'Write every step as a = bq + r. Do not skip the last line where r = 0; that line is what names the HCF.',
                  },
                },
                {
                  sectionTitle: 'Worked example in textbook format — HCF(455, 42)',
                  content: [
                    '455 = 42 × 10 + 35',
                    '42 = 35 × 1 + 7',
                    '35 = 7 × 5 + 0',
                    'The last non-zero remainder’s partner divisor is 7, so HCF(455, 42) = 7.',
                  ],
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-3',
                  question: 'Use the division algorithm to find HCF(135, 225).',
                  hint: 'Begin with the larger number as dividend: 225 = 135 × 1 + 90.',
                  solution: '225 = 135 × 1 + 90; 135 = 90 × 1 + 45; 90 = 45 × 2 + 0. HCF = 45.',
                },
                {
                  id: 'pq-3b',
                  question: 'Find HCF(867, 255) by repeated division, then find LCM using HCF × LCM = product.',
                  hint: '867 = 255 × 3 + 102 is the first line.',
                  solution: '867 = 255 × 3 + 102; 255 = 102 × 2 + 51; 102 = 51 × 2 + 0. HCF = 51. LCM = (867 × 255) / 51 = 4335.',
                },
                {
                  id: 'pq-3c',
                  question: 'Show that any positive odd integer is of the form 2q + 1 for some integer q.',
                  hint: 'Apply a = 2q + r with possible remainders 0 and 1.',
                  solution: 'By the lemma, a = 2q or a = 2q + 1. The first case is even, so every odd positive integer is of the form 2q + 1.',
                },
              ],
            },
            {
              id: 'top-10-math-1-3',
              topicNumber: 3,
              title: 'Fundamental Theorem of Arithmetic',
              duration: '16 mins',
              description: 'Understand the unique prime factorization of composite numbers and learn how primes serve as the building blocks of integers.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Visual explanation of prime trees and the uniqueness theorem.',
              objectives: [
                'State the Fundamental Theorem of Arithmetic accurately.',
                'Construct factor trees to decompose composite numbers into prime powers.',
                'Understand why the factorization is unique up to the order of factors.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Theorem Statement',
                  formulaOrRule: 'Every composite number x can be expressed uniquely as: x = p₁^a₁ · p₂^a₂ · ... · pₖ^aₖ',
                  note: 'where p₁ < p₂ < ... < pₖ are primes and exponents aᵢ are positive integers.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT Theorem 1.1 — Fundamental Theorem of Arithmetic',
                  content: [
                    'Every composite number can be expressed as a product of primes, and this factorisation is unique apart from the order of the primes.',
                    'In practice we write primes in increasing order and collect powers: 32760 = 2³ × 3² × 5 × 7 × 13.',
                    'Uniqueness is the important half. If a number’s prime factors are only 2 and 3, no other prime (such as 5) can “secretly” appear.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Why uniqueness is tested',
                    text: 'NCERT Exercise 1.1 uses uniqueness to decide whether a power such as 4ⁿ or 6ⁿ can end with the digit 0.',
                  },
                },
                {
                  sectionTitle: 'NCERT-style argument: can 4ⁿ end with 0?',
                  content: [
                    'A positive integer ends with the digit 0 only if it is divisible by 10, hence by both 2 and 5.',
                    '4ⁿ = (2²)ⁿ = 2²ⁿ, so the only prime in the factorisation is 2.',
                    'By uniqueness, the prime 5 cannot occur. Therefore 4ⁿ never ends with 0 for any natural number n.',
                    'The same argument applies to 6ⁿ = (2 × 3)ⁿ: the primes are only 2 and 3, so 5 is missing and 6ⁿ cannot end with 0.',
                  ],
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-fta-1',
                  question: 'Express 2520 as a product of primes with exponents written in increasing order.',
                  hint: 'Divide by 2 repeatedly, then 3, then 5, then 7.',
                  solution: '2520 = 2³ × 3² × 5 × 7.',
                },
                {
                  id: 'pq-fta-2',
                  question: 'Can 12ⁿ, n a natural number, end with the digit 0? Give the NCERT uniqueness reason.',
                  hint: 'Write 12ⁿ in primes and look for the factor 5.',
                  solution: '12ⁿ = (2² × 3)ⁿ = 2²ⁿ × 3ⁿ. The primes are only 2 and 3. Ending with 0 needs a factor 5, which uniqueness forbids. So no.',
                },
                {
                  id: 'pq-fta-3',
                  question: 'Two students write 60 as 2 × 2 × 3 × 5 and as 2² × 15. Have they broken uniqueness?',
                  hint: '15 is not prime.',
                  solution: 'No. Uniqueness is about prime factors. 2² × 15 is not a prime factorisation. Completing it gives 2² × 3 × 5, the same primes as 2 × 2 × 3 × 5.',
                },
              ],
            },
            {
              id: 'top-10-math-1-4',
              topicNumber: 4,
              title: 'HCF and LCM Applications & Relationship Property',
              duration: '15 mins',
              description: 'Compute HCF and LCM using prime factorization and verify the fundamental relation: HCF(a, b) × LCM(a, b) = a × b.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Worked problem solutions using the product formula.',
              objectives: [
                'Identify HCF as the product of the smallest powers of each common prime factor.',
                'Identify LCM as the product of the greatest powers of each prime factor involved.',
                'Utilize HCF(a, b) × LCM(a, b) = a × b to solve word problems and check answers.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Fundamental Product Property',
                  formulaOrRule: 'HCF(a, b) × LCM(a, b) = a × b',
                  note: 'Note: This formula holds true ONLY for two numbers, not for three or more!',
                },
                {
                  label: 'HCF Rule',
                  formulaOrRule: 'Product of smallest powers of common prime factors',
                  note: 'Minimum power index.',
                },
                {
                  label: 'LCM Rule',
                  formulaOrRule: 'Product of greatest powers of all prime factors',
                  note: 'Maximum power index across all primes.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT method — HCF and LCM from prime powers',
                  content: [
                    'Write each integer as a product of primes.',
                    'HCF = product of the smallest power of every common prime.',
                    'LCM = product of the greatest power of every prime that appears in any of the numbers.',
                    'Illustration: 72 = 2³ × 3² and 120 = 2³ × 3 × 5. HCF = 2³ × 3 = 24. LCM = 2³ × 3² × 5 = 360.',
                    'Check for two numbers: HCF × LCM = 24 × 360 = 8640 and 72 × 120 = 8640.',
                  ],
                  calloutBox: {
                    type: 'warning',
                    title: 'NCERT remark on three numbers',
                    text: 'For three integers, product of the numbers is not equal to HCF × LCM. Always compute HCF and LCM from the primes; do not use the two-number formula.',
                  },
                },
                {
                  sectionTitle: 'Worked pair (textbook pattern)',
                  content: [
                    '96 = 2⁵ × 3 and 404 = 2² × 101.',
                    'HCF = 2² = 4.',
                    'Then LCM = (96 × 404) / 4 = 9696. This is the shortcut NCERT uses once HCF is known.',
                  ],
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-hcf-1',
                  question: 'Find HCF and LCM of 84 and 144 by prime factorisation, then verify HCF × LCM = 84 × 144.',
                  hint: '84 = 2² × 3 × 7 and 144 = 2⁴ × 3².',
                  solution: 'HCF = 2² × 3 = 12. LCM = 2⁴ × 3² × 7 = 1008. 12 × 1008 = 12096 and 84 × 144 = 12096.',
                },
                {
                  id: 'pq-hcf-2',
                  question: 'Find HCF and LCM of 6, 72 and 120. Why is 6 × 72 × 120 not equal to HCF × LCM?',
                  hint: 'Take minimum powers of common primes for HCF; maximum of all primes for LCM.',
                  solution: '6 = 2 × 3, 72 = 2³ × 3², 120 = 2³ × 3 × 5. HCF = 6, LCM = 360. The product identity holds only for two numbers.',
                },
                {
                  id: 'pq-hcf-3',
                  question: 'HCF(306, 657) = 9. Find LCM(306, 657) without listing multiples.',
                  hint: 'Use LCM = ab / HCF.',
                  solution: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338.',
                },
              ],
            },
            {
              id: 'top-10-math-1-5',
              topicNumber: 5,
              title: 'Revisiting Irrational Numbers & Proof by Contradiction',
              duration: '22 mins',
              description: 'Master the rigorous mathematical proof by contradiction technique to prove that √2, √3, and 5 - √3 are irrational.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Step-by-step rigorous proof by contradiction walkthrough.',
              objectives: [
                'State and utilize Theorem: If p is a prime and p divides a², then p divides a.',
                'Execute the 5-step proof by contradiction that √2 is irrational.',
                'Prove combinations of rational and irrational numbers are irrational.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Prime Divisibility Theorem',
                  formulaOrRule: 'If p is prime and p | a², then p | a (where a is positive integer)',
                  note: 'Crucial lemma used in all square-root irrationality proofs.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT lemma used in every √p proof',
                  content: [
                    'If a prime p divides a², then p divides a. This follows from unique prime factorisation: the primes in a² are exactly the primes in a, each with even exponent.',
                    'CBSE still asks the proofs that √2, √3 and √5 are irrational, written by contradiction exactly as in the NCERT examples.',
                  ],
                },
                {
                  sectionTitle: 'Model proof — √2 is irrational (write this pattern for √3 and √5)',
                  content: [
                    'Assume √2 is rational. Then √2 = a/b where a, b are integers, b ≠ 0, and gcd(a, b) = 1.',
                    'Squaring: 2b² = a², so 2 divides a², hence 2 divides a. Write a = 2c.',
                    'Then 2b² = 4c², so b² = 2c². Thus 2 divides b², hence 2 divides b.',
                    'Then 2 is a common factor of a and b, contradicting gcd(a, b) = 1.',
                    'The assumption is false, so √2 is irrational. Replace 2 by 3 or 5 for the other two NCERT proofs.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Marks for combinations',
                    text: 'To prove 3 + 2√5 is irrational, assume it is rational, isolate √5, and use that √5 is already irrational.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-irr-1',
                  question: 'Prove that √5 is irrational, following the NCERT contradiction pattern.',
                  hint: 'Start with √5 = a/b in lowest terms, then show 5 divides both a and b.',
                  solution: 'Assume √5 = a/b with gcd(a, b) = 1. Then 5b² = a² so 5 | a. Let a = 5c. Then b² = 5c² so 5 | b. Contradiction. Hence √5 is irrational.',
                },
                {
                  id: 'pq-irr-2',
                  question: 'Show that 5 − √3 is irrational.',
                  hint: 'Assume it is rational, rearrange to √3 = 5 − that number.',
                  solution: 'If 5 − √3 = r (rational), then √3 = 5 − r, which is rational. But √3 is irrational. Contradiction. So 5 − √3 is irrational.',
                },
                {
                  id: 'pq-irr-3',
                  question: 'Is √4 irrational? Explain using the definition, not the √2 proof.',
                  hint: '√4 is an integer.',
                  solution: '√4 = 2 = 2/1, which is rational. The contradiction proof applies only when the number under the root is not a perfect square.',
                },
              ],
            },
            {
              id: 'top-10-math-1-6',
              topicNumber: 6,
              title: 'Decimal Expansions of Rational Numbers',
              duration: '15 mins',
              description: 'Determine whether a rational number p/q has a terminating or non-terminating repeating decimal without performing long division.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Criteria for terminating decimal expansions based on denominator prime powers.',
              objectives: [
                'State the criterion for terminating decimal expansions in terms of prime factors of q.',
                'Convert terminating decimals into standard form without long division.',
                'Identify non-terminating repeating decimal patterns.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Terminating Decimal Condition',
                  formulaOrRule: 'q = 2ⁿ · 5ᵐ (where n, m are non-negative integers)',
                  note: 'The denominator must have NO prime factors other than 2 or 5 in simplest form.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT test for terminating decimals',
                  content: [
                    'Let x = p/q be in lowest terms (gcd(p, q) = 1).',
                    'If q = 2ⁿ × 5ᵐ for non-negative integers n and m, the decimal of x terminates.',
                    'If q has any other prime factor, the decimal is non-terminating repeating.',
                    'This section was shortened in some rationalised editions, but the same test still appears in sample papers and is the natural application of FTA to fractions.',
                  ],
                },
                {
                  sectionTitle: 'Writing a terminating decimal without long division',
                  content: [
                    '13/125 = 13/5³. Multiply numerator and denominator by 2³: 104/1000 = 0.104.',
                    'Always make the denominator a power of 10 by pairing leftover 2s or 5s.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Cancel first',
                    text: 'Reduce the fraction before testing q. 77/210 looks messy until you cancel 7; then the denominator still has a factor 3, so it does not terminate.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-dec-1',
                  question: 'Without dividing, say which of 13/3125, 17/90 and 29/343 have terminating decimals.',
                  hint: 'Reduce, then look only at primes in the denominator.',
                  solution: '13/3125 = 13/5⁵ terminates. 17/90 has a factor 3 in the denominator (after no useful cancel). 29/343 = 29/7³ does not terminate. Only 13/3125 terminates.',
                },
                {
                  id: 'pq-dec-2',
                  question: 'Write 7/80 as a decimal by converting the denominator into a power of 10.',
                  hint: '80 = 2⁴ × 5, so multiply by 5³.',
                  solution: '7/80 = 7/(2⁴ × 5) = 875 / 10000 = 0.0875.',
                },
                {
                  id: 'pq-dec-3',
                  question: 'Why is 1/6 non-terminating even though 6 is even?',
                  hint: 'Even only guarantees a factor 2, not the absence of 3.',
                  solution: '1/6 = 1/(2 × 3). The extra prime 3 in the denominator forces a repeating decimal (0.1̅6).',
                },
              ],
            },
            {
              id: 'top-10-math-1-7',
              topicNumber: 7,
              title: 'Chapter Revision & Formula Cheat-Sheet',
              duration: '12 mins',
              description: 'Consolidated summary of all definitions, key theorems, common board exam pitfalls, and preparation checklist.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Full chapter synthesis and rapid-fire question review.',
              objectives: [
                'Synthesize all four core themes of Real Numbers into a one-page revision diagram.',
                'Review common algebraic errors in proving irrationality.',
                'Prepare for the Chapter Practice Quiz.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: "Euclid's Lemma",
                  formulaOrRule: 'a = bq + r, 0 ≤ r < b',
                },
                {
                  label: 'Product Formula',
                  formulaOrRule: 'HCF(a, b) × LCM(a, b) = a × b',
                },
                {
                  label: 'Terminating Decimal',
                  formulaOrRule: 'q = 2ⁿ · 5ᵐ in simplest form',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT Chapter 1 checklist',
                  content: [
                    'State the Fundamental Theorem of Arithmetic and write a number as  p₁^a₁ p₂^a₂ … in increasing primes.',
                    'Find HCF and LCM of two integers from prime powers, and use HCF × LCM = product only for two numbers.',
                    'Give the uniqueness argument that 6ⁿ (or 4ⁿ) cannot end with the digit 0.',
                    'Write the contradiction proof that √2, √3 or √5 is irrational, naming gcd(a, b) = 1.',
                    'If asked, decide terminating vs repeating decimals from the primes in q after reducing p/q.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Practice next',
                    text: 'The in-topic questions follow NCERT Exercise 1.1 and the irrationality examples. Then take the chapter quiz — those MCQs are original, written to the same skills.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-rev-1',
                  question: 'In two sentences, how does unique prime factorisation prove both the 6ⁿ-digit-0 result and the √2 proof?',
                  hint: 'Both arguments forbid an extra prime that uniqueness will not allow.',
                  solution: '6ⁿ cannot contain the prime 5, so it cannot be a multiple of 10. In the √2 proof, 2 dividing a² forces 2 to divide a because 2 cannot appear to an odd power in a unique factorisation; that leads to a common factor of a and b.',
                },
              ],
            },
          ],
        },
        {
          id: 'ch-10-math-polynomials',
          chapterNumber: 2,
          title: 'Polynomials',
          description: 'NCERT Class 10 Mathematics, Chapter 2: geometrical meaning of zeroes, and zeroes–coefficient relations for a quadratic.',
          estimatedHours: 4.0,
          hasQuiz: true,
          quizId: 'quiz-10-math-polynomials',
          topics: [
            {
              id: 'top-10-math-2-1',
              topicNumber: 1,
              title: 'Geometrical Meaning of the Zeroes of a Polynomial',
              duration: '17 mins',
              description: 'Visualizing graphs of linear, quadratic, and cubic polynomials and counting x-axis intercepts.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'Relate a zero of p(x) to an x-intercept of y = p(x).',
                'State the maximum number of real zeroes from the degree.',
                'Sketch typical NCERT graphs: line, parabola meeting the x-axis in 0, 1 or 2 points, cubic in at most 3.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Zero of p(x)',
                  formulaOrRule: 'p(α) = 0  ⇔  the graph y = p(x) meets the x-axis at x = α',
                },
                {
                  label: 'Degree bound',
                  formulaOrRule: 'A polynomial of degree n has at most n real zeroes',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT Class 10, Chapter 2 — what a zero looks like',
                  content: [
                    'If p(α) = 0, α is a zero (root) of p. On the graph y = p(x) that point is where the curve cuts or touches the x-axis.',
                    'Linear p(x) = ax + b, a ≠ 0: a straight line, exactly one zero, x = −b/a.',
                    'Quadratic ax² + bx + c, a ≠ 0: a parabola. It may cut the x-axis twice (two distinct real zeroes), touch once (two equal zeroes), or miss it (no real zero). Opening is up if a > 0 and down if a < 0.',
                    'Cubic: the graph can cross the x-axis at most three times. NCERT examples such as x³ − 4x show three intercepts; x³ + x² shows fewer.',
                  ],
                  calloutBox: {
                    type: 'warning',
                    title: 'Syllabus note',
                    text: 'The polynomial division algorithm and cubic coefficient formulae were dropped from the rationalised NCERT. Board questions stay on graphs and on quadratic zeroes.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-poly-1',
                  question: 'The graph of y = x² − 2x − 8 cuts the x-axis at two points. What are the zeroes, and which NCERT picture (upward parabola, two intercepts) is this?',
                  hint: 'Factor: x² − 2x − 8 = (x − 4)(x + 2).',
                  solution: 'Zeroes 4 and −2. It is an upward parabola meeting the x-axis at two distinct points.',
                },
                {
                  id: 'pq-poly-2',
                  question: 'How many real zeroes can y = x² + 4x + 5 have? Justify from the graph or discriminant, in NCERT language.',
                  hint: 'The parabola x² + 4x + 5 = (x + 2)² + 1 never meets y = 0.',
                  solution: 'None. The graph lies entirely above the x-axis, so there is no x-intercept. Equivalently D = 16 − 20 < 0.',
                },
              ],
            },
            {
              id: 'top-10-math-2-2',
              topicNumber: 2,
              title: 'Relationship Between Zeroes and Coefficients of a Quadratic Polynomial',
              duration: '20 mins',
              description: 'Deriving α + β = -b/a and αβ = c/a and forming quadratic polynomials from given zeroes.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'State α + β = −b/a and αβ = c/a for ax² + bx + c.',
                'Find a quadratic (up to a constant k) from given zeroes.',
                'Verify sum and product from a given quadratic, as in NCERT Exercise 2.1 / 2.2.',
              ],
              keyFormulasOrConcepts: [
                { label: 'Sum of Zeroes', formulaOrRule: 'α + β = -b / a' },
                { label: 'Product of Zeroes', formulaOrRule: 'α · β = c / a' },
                { label: 'Forming Polynomial', formulaOrRule: 'k [x² - (α + β)x + αβ]' },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT identities for ax² + bx + c',
                  content: [
                    'If the zeroes are α and β, then p(x) = a(x − α)(x − β) = a[x² − (α + β)x + αβ]. Comparing with ax² + bx + c gives the two formulae.',
                    'Worked pattern: p(x) = 2x² − 8x + 6. Here a = 2, b = −8, c = 6. Sum = −b/a = 4, product = c/a = 3. Check by factoring: 2(x − 1)(x − 3); zeroes 1 and 3; 1 + 3 = 4, 1 × 3 = 3.',
                    'To form a quadratic with zeroes 2 and −3: x² − (sum)x + product = x² − (−1)x + (−6) = x² + x − 6, or any non-zero multiple k(x² + x − 6).',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Exercise style',
                    text: 'If one zero is given, use product or sum to find the other. Example: for x² − 3x + 2, one zero is 1, the other is 2 because product = 2.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-poly-3',
                  question: 'Find the zeroes of 6x² − 3 − 7x, then verify sum and product against −b/a and c/a. (Rewrite in standard form first.)',
                  hint: '6x² − 7x − 3 = (3x + 1)(2x − 3).',
                  solution: 'Zeroes −1/3 and 3/2. Sum = 7/6 = −(−7)/6. Product = −3/6 = −1/2 = c/a.',
                },
                {
                  id: 'pq-poly-4',
                  question: 'Form a quadratic polynomial whose zeroes are 1/4 and −1.',
                  hint: 'k[x² − (sum)x + product].',
                  solution: 'Sum = −3/4, product = −1/4. One polynomial is 4x² + 3x − 1 (clearing the denominator with k = 4).',
                },
                {
                  id: 'pq-poly-5',
                  question: 'If α and β are zeroes of x² − 5x + 6, find α² + β² without finding the roots first.',
                  hint: 'α² + β² = (α + β)² − 2αβ.',
                  solution: 'α + β = 5, αβ = 6, so α² + β² = 25 − 12 = 13. (The zeroes are 2 and 3, which matches.)',
                },
              ],
            },
          ],
        },
        {
          id: 'ch-10-math-quadratic-equations',
          chapterNumber: 3,
          title: 'Quadratic Equations',
          description: 'Standard form ax² + bx + c = 0, factorization method, quadratic formula, and discriminant analysis.',
          estimatedHours: 4.5,
          hasQuiz: true,
          quizId: 'quiz-10-math-quadratic-equations',
          topics: [
            {
              id: 'top-10-math-3-1',
              topicNumber: 1,
              title: 'Standard Form and Solving by Factorisation',
              duration: '18 mins',
              description: 'Splitting the middle term technique and zero product property.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Identify quadratic equations and solve by factoring.'],
              studyNotes: [
                {
                  sectionTitle: 'Standard Form',
                  content: ['An equation of the form ax² + bx + c = 0 where a ≠ 0.'],
                },
              ],
            },
            {
              id: 'top-10-math-3-2',
              topicNumber: 2,
              title: 'Quadratic Formula and Nature of Roots',
              duration: '22 mins',
              description: 'The discriminant D = b² - 4ac and conditions for two distinct real roots, two equal roots, or no real roots.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Use discriminant D to predict nature of roots and compute solutions.'],
              keyFormulasOrConcepts: [
                { label: 'Quadratic Formula', formulaOrRule: 'x = (-b ± √(b² - 4ac)) / (2a)' },
                { label: 'Discriminant', formulaOrRule: 'D = b² - 4ac' },
              ],
              studyNotes: [
                {
                  sectionTitle: 'Nature of Roots',
                  content: [
                    'D > 0: Two distinct real roots.',
                    'D = 0: Two equal real roots (coincident roots).',
                    'D < 0: No real roots.',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'science',
      name: 'Science',
      classId: '10',
      iconName: 'FlaskConical',
      category: 'STEM',
      color: 'blue',
      description: 'Explore chemical reactions, energy changes, light optics, and biological life mechanisms.',
      chapters: [
        {
          id: 'ch-10-sci-chemical-reactions',
          chapterNumber: 1,
          title: 'Chemical Reactions and Equations',
          description: 'NCERT Class 10 Science, Chapter 1: chemical equations, types of reactions, redox, corrosion and rancidity.',
          estimatedHours: 3.2,
          hasQuiz: true,
          quizId: 'quiz-10-sci-chemical-reactions',
          topics: [
            {
              id: 'top-10-sci-1-1',
              topicNumber: 1,
              title: 'Chemical Reactions & Indicators of Chemical Change',
              duration: '15 mins',
              description: 'How to identify a chemical reaction through change in state, colour, gas evolution, or temperature change.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Visual laboratory demonstration of chemical changes and observations.',
              objectives: [
                'State 4 physical observations that indicate a chemical reaction has taken place.',
                'Differentiate between physical change and chemical change.',
                'Write word equations and convert them into chemical formulas.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'General Chemical Equation',
                  formulaOrRule: 'Reactants (Left Hand Side) → Products (Right Hand Side)',
                  note: 'An arrow directed from reactants to products shows reaction direction.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT Chapter 1 opening — when has a reaction occurred?',
                  content: [
                    'Daily changes such as milk souring, an iron tawa rusting, grapes fermenting, cooking, digestion and respiration are chemical changes: the starting substances do not remain the same.',
                    'NCERT Activity 1.1: a cleaned magnesium ribbon burns in air with a dazzling white flame and leaves white magnesium oxide in the watch glass. Word equation: Magnesium + Oxygen → Magnesium oxide.',
                    'Activity with zinc and dilute sulphuric acid: bubbles of hydrogen form and the flask becomes warm.',
                    'Lead nitrate mixed with potassium iodide gives a yellow solid. These lab clues match the four textbook signs: change of state, change of colour, evolution of a gas, change of temperature.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'In-text question (NCERT 1.1)',
                    text: 'Clean the magnesium ribbon with sandpaper first. A thin layer of MgO on stored ribbon would stop the metal from burning properly.',
                  },
                },
                {
                  sectionTitle: 'Word equations before symbols',
                  content: [
                    'Reactants sit on the left of the arrow, products on the right. The arrow shows the direction of change.',
                    'Example: Zinc + Sulphuric acid → Zinc sulphate + Hydrogen.',
                  ],
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-1a',
                  question: 'Why must a magnesium ribbon be cleaned before it is burnt in air?',
                  hint: 'Think about what forms on reactive magnesium stored in air.',
                  solution: 'Magnesium reacts slowly with oxygen and forms a skin of MgO. That oxide is stable and shields the metal. Rubbing with sandpaper exposes fresh magnesium so it can burn.',
                },
                {
                  id: 'pq-sci-1b',
                  question: 'List the four observations NCERT uses as evidence that a chemical reaction has taken place, and give one lab example for gas evolution.',
                  hint: 'State, colour, gas, temperature.',
                  solution: 'Change of state, colour, gas evolution, temperature. Example: zinc granules in dilute H₂SO₄ release hydrogen gas and the tube warms.',
                },
              ],
            },
            {
              id: 'top-10-sci-1-2',
              topicNumber: 2,
              title: 'Balancing Chemical Equations & Law of Conservation of Mass',
              duration: '20 mins',
              description: 'Master the systematic hit-and-trial method to balance equations according to the Law of Conservation of Mass.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Step-by-step balancing walkthrough with atom counts table.',
              objectives: [
                'Explain why a chemical equation must be balanced using mass conservation.',
                'Balance skeleton equations by equalizing atoms of each element on both sides.',
                'Add physical state notations: (s), (l), (g), and (aq).',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Law of Conservation of Mass',
                  formulaOrRule: 'Total mass of reactants = Total mass of products',
                  note: 'Matter can neither be created nor destroyed in a chemical reaction.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT reason for balancing — conservation of mass',
                  content: [
                    'Mass is neither created nor destroyed in a chemical reaction, so the number of atoms of each element must match on both sides of the arrow.',
                    'A skeletal equation uses formulae but may be unbalanced. Mg + O₂ → MgO is skeletal; the balanced form is 2Mg + O₂ → 2MgO.',
                    'Never change a formula inside a box. Only place whole-number coefficients in front.',
                  ],
                },
                {
                  sectionTitle: 'Textbook worked balance — steam on iron',
                  content: [
                    'Skeletal: Fe + H₂O → Fe₃O₄ + H₂',
                    'Balance O with 4H₂O, then H with 4H₂, then Fe with 3Fe.',
                    '3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g). Counts: Fe 3=3, H 8=8, O 4=4.',
                    'State symbols used in NCERT: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'In-text practice',
                    text: 'H₂ + Cl₂ → 2HCl; 3BaCl₂ + Al₂(SO₄)₃ → 3BaSO₄ + 2AlCl₃; 2Na + 2H₂O → 2NaOH + H₂.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-2a',
                  question: 'Balance: HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + H₂O',
                  hint: 'Nitrate and calcium first, then hydrogen and oxygen.',
                  solution: '2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O.',
                },
                {
                  id: 'pq-sci-2b',
                  question: 'Write a balanced equation with state symbols: barium chloride solution reacts with sodium sulphate solution to give insoluble barium sulphate and sodium chloride solution.',
                  hint: 'BaSO₄ is the insoluble solid.',
                  solution: 'BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq).',
                },
                {
                  id: 'pq-sci-2c',
                  question: 'Translate and balance: hydrogen sulphide burns in air to give water and sulphur dioxide.',
                  hint: 'Air supplies O₂.',
                  solution: '2H₂S(g) + 3O₂(g) → 2H₂O(l) + 2SO₂(g).',
                },
              ],
            },
            {
              id: 'top-10-sci-1-3',
              topicNumber: 3,
              title: 'Combination and Decomposition Reactions',
              duration: '18 mins',
              description: 'Compare synthesis/combination reactions with decomposition triggered by heat (thermal), light (photolytic), and electricity (electrolytic).',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'Define Combination Reactions: Two or more reactants form a single product.',
                'Define Decomposition Reactions and identify 3 energy modes (heat, light, electricity).',
                'Write balanced equations for slaking of lime and electrolysis of water.',
              ],
              studyNotes: [
                {
                  sectionTitle: 'Combination (NCERT 1.2)',
                  content: [
                    'Two or more substances form a single product.',
                    'CaO(s) + H₂O(l) → Ca(OH)₂(aq) + heat. Quicklime and water give slaked lime; the reaction is exothermic. This slaked lime is used in whitewashing: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O, leaving a shiny calcium carbonate coat.',
                    'C(s) + O₂(g) → CO₂(g) and 2H₂(g) + O₂(g) → 2H₂O(l) are also combination reactions.',
                  ],
                },
                {
                  sectionTitle: 'Decomposition — heat, light, electricity',
                  content: [
                    'One substance splits into two or more. Often the reverse of combination.',
                    'Thermal: 2FeSO₄(s) --heat→ Fe₂O₃(s) + SO₂(g) + SO₃(g) (green crystals to reddish-brown Fe₂O₃; smell of burning sulphur).',
                    'CaCO₃(s) --heat→ CaO(s) + CO₂(g) (limestone to quicklime in the kiln).',
                    '2Pb(NO₃)₂(s) --heat→ 2PbO(s) + 4NO₂(g) + O₂(g) (brown NO₂).',
                    'Photolytic: 2AgCl(s) --sunlight→ 2Ag(s) + Cl₂(g); silver bromide behaves similarly — the basis of black-and-white photography.',
                    'Electrolytic: 2H₂O(l) --electricity→ 2H₂(g) + O₂(g). Volume of hydrogen collected is twice that of oxygen.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Heat in, heat out',
                    text: 'Exothermic: heat is given out (slaking of lime, respiration, burning of natural gas). Endothermic: heat is absorbed (most thermal decompositions, photosynthesis).',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-3a',
                  question: 'Why is the whitewashing reaction on a wall classified as combination, and why does the wall shine after two or three days?',
                  hint: 'CO₂ from air reacts with slaked lime.',
                  solution: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O is two reactants forming mainly one new solid, CaCO₃. The carbonate layer is hard and shiny.',
                },
                {
                  id: 'pq-sci-3b',
                  question: 'Name the type of decomposition and write the equation for silver chloride in sunlight.',
                  hint: 'Light supplies the energy.',
                  solution: 'Photolytic decomposition: 2AgCl(s) → 2Ag(s) + Cl₂(g) in sunlight. The white solid turns grey as silver metal forms.',
                },
                {
                  id: 'pq-sci-3c',
                  question: 'In electrolysis of water, which gas is collected at the cathode, and in what volume ratio to oxygen?',
                  hint: 'Hydrogen is attracted to the negative electrode.',
                  solution: 'H₂ at the cathode, O₂ at the anode, volume ratio 2 : 1.',
                },
              ],
            },
            {
              id: 'top-10-sci-1-4',
              topicNumber: 4,
              title: 'Displacement and Double Displacement Reactions',
              duration: '16 mins',
              description: 'Understand reactivity series in single displacement and precipitation reactions in double displacement.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'Explain how more reactive elements displace less reactive elements from their salt solution.',
                'Identify insoluble precipitates formed in double displacement reactions.',
              ],
              studyNotes: [
                {
                  sectionTitle: 'Single displacement (NCERT Activity with iron and copper sulphate)',
                  content: [
                    'A more reactive element pushes a less reactive one out of its compound.',
                    'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s). Blue solution fades to pale green; reddish-brown copper coats the nail.',
                    'Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) is the same pattern. Copper cannot displace zinc — reactivity series decides the direction.',
                  ],
                },
                {
                  sectionTitle: 'Double displacement and precipitation',
                  content: [
                    'Two compounds exchange ions.',
                    'Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq). White BaSO₄ is insoluble — a precipitation reaction.',
                    'AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) is another NCERT-style precipitation.',
                    'Neutralisation is a double displacement that produces salt and water, for example NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l).',
                  ],
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-4a',
                  question: 'What colour change is seen when iron nails stand in copper sulphate, and which reaction type is this?',
                  hint: 'Iron is above copper in the reactivity series.',
                  solution: 'Blue CuSO₄ turns pale green FeSO₄ and brown copper deposits. Displacement (single replacement).',
                },
                {
                  id: 'pq-sci-4b',
                  question: 'Identify the precipitate: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). Name the reaction type.',
                  hint: 'NCERT mixes lead nitrate with potassium iodide.',
                  solution: 'Yellow lead iodide precipitates. Double displacement (precipitation).',
                },
              ],
            },
            {
              id: 'top-10-sci-1-5',
              topicNumber: 5,
              title: 'Oxidation, Reduction, and Redox Reactions',
              duration: '17 mins',
              description: 'Defining oxidation as gain of oxygen or loss of hydrogen, reduction as loss of oxygen or gain of hydrogen.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'Identify oxidizing and reducing agents in given reactions.',
                'Understand electron transfer perspective for redox.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Oxidation & Reduction Summary',
                  formulaOrRule: 'Oxidation: +Oxygen / -Hydrogen / -Electrons | Reduction: -Oxygen / +Hydrogen / +Electrons',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: 'NCERT definitions (gain/loss of oxygen or hydrogen)',
                  content: [
                    'Oxidation: gain of oxygen or loss of hydrogen. Reduction: loss of oxygen or gain of hydrogen.',
                    'A reaction with both is a redox reaction. The substance that oxidises the other is the oxidising agent (it itself is reduced).',
                    'CuO + H₂ --heat→ Cu + H₂O: CuO is reduced to Cu; H₂ is oxidised to H₂O. H₂ is the reducing agent; CuO is the oxidising agent.',
                    '2PbO + C → 2Pb + CO₂: carbon is oxidised; lead oxide is reduced. (A frequent NCERT exercise trap is claiming that “lead is reduced” — the oxide is reduced, elemental lead is the product.)',
                    'ZnO + C → Zn + CO is the same redox pattern used in metal extraction.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Exercise 1 Q1 pattern',
                    text: 'In 2PbO(s) + C(s) → 2Pb(s) + CO₂(g), statements “lead is reduced” and “CO₂ is oxidised” are incorrect. Carbon is oxidised and PbO is reduced.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-5a',
                  question: 'In MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, which substance is oxidised and which is reduced?',
                  hint: 'HCl loses hydrogen; MnO₂ loses oxygen.',
                  solution: 'HCl is oxidised to Cl₂ (loss of hydrogen). MnO₂ is reduced to MnCl₂ (loss of oxygen). This is the NCERT laboratory preparation of chlorine, written as a redox process.',
                },
                {
                  id: 'pq-sci-5b',
                  question: 'Classify Fe₂O₃ + 2Al → Al₂O₃ + 2Fe as combination, decomposition, displacement or double displacement.',
                  hint: 'Aluminium replaces iron.',
                  solution: 'Displacement (thermit process). Aluminium is more reactive and displaces iron; it is also a redox reaction.',
                },
              ],
            },
            {
              id: 'top-10-sci-1-6',
              topicNumber: 6,
              title: 'Corrosion, Rancidity, and Everyday Effects',
              duration: '14 mins',
              description: 'Real-world oxidative processes damaging metals and fats/oils, with practical prevention methods.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: [
                'Explain corrosion and write conditions required for rusting of iron.',
                'Describe rancidity and explain why food packaging uses nitrogen gas flushing.',
              ],
              studyNotes: [
                {
                  sectionTitle: 'Corrosion — NCERT everyday chemistry',
                  content: [
                    'Metals are slowly eaten by air, moisture and acids. Iron forms reddish-brown rust (hydrated iron oxide). Silver tarnishes black (Ag₂S). Copper grows a green coating of basic copper carbonate, CuCO₃·Cu(OH)₂.',
                    'Rusting needs both air and water. Painting, oiling, galvanising (zinc coat), alloying (stainless steel) and electroplating slow it down.',
                  ],
                },
                {
                  sectionTitle: 'Rancidity',
                  content: [
                    'Oxidation of fats and oils gives an unpleasant smell and taste.',
                    'NCERT prevention: antioxidants, airtight packing, and flushing chip packets with nitrogen so oxygen cannot attack the oil.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Chapter closing line',
                    text: 'Redox is not only a lab idea: rusting, rancidity, respiration, photosynthesis and many extractions of metals are oxidation–reduction in daily life.',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-sci-6a',
                  question: 'Why are packets of chips flushed with nitrogen rather than ordinary air?',
                  hint: 'Fats oxidise in oxygen.',
                  solution: 'Nitrogen is unreactive. Removing oxygen stops oxidation of the oil, so the chips stay fresh instead of turning rancid.',
                },
                {
                  id: 'pq-sci-6b',
                  question: 'Name the green coating on copper and the condition needed, besides air, for iron to rust.',
                  hint: 'Basic carbonate; moisture.',
                  solution: 'Basic copper carbonate, CuCO₃·Cu(OH)₂. Iron rusts when both oxygen (air) and water are present.',
                },
              ],
            },
          ],
        },
        {
          id: 'ch-10-sci-light',
          chapterNumber: 2,
          title: 'Light – Reflection and Refraction',
          description: 'Spherical mirrors, ray diagrams, mirror formula, Snell law of refraction, and lens power.',
          estimatedHours: 4.2,
          hasQuiz: true,
          quizId: 'quiz-10-sci-light',
          topics: [
            {
              id: 'top-10-sci-2-1',
              topicNumber: 1,
              title: 'Reflection of Light and Spherical Mirrors',
              duration: '22 mins',
              description: 'Concave and convex mirrors, focus, center of curvature, and ray drawing conventions.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Draw ray diagrams for concave and convex mirrors.'],
              studyNotes: [{ sectionTitle: 'Mirrors', content: ['Concave mirrors converge light; convex mirrors diverge light.'] }],
            },
          ],
        },
        {
          id: 'ch-10-sci-life-processes',
          chapterNumber: 3,
          title: 'Life Processes',
          description: 'Autotrophic and heterotrophic nutrition, human respiration, circulatory system, and excretory mechanisms.',
          estimatedHours: 4.5,
          hasQuiz: true,
          quizId: 'quiz-10-sci-life-processes',
          topics: [
            {
              id: 'top-10-sci-3-1',
              topicNumber: 1,
              title: 'Nutrition in Plants and Animals',
              duration: '20 mins',
              description: 'Photosynthesis mechanism, stomatal action, and human digestive system organs and enzymes.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Explain chloroplast photosynthetic stages and digestive enzymes.'],
              studyNotes: [{ sectionTitle: 'Nutrition', content: ['Photosynthesis: 6CO₂ + 12H₂O --[sunlight/chlorophyll]--> C₆H₁₂O₆ + 6O₂ + 6H₂O'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English Language & Literature',
      classId: '10',
      iconName: 'BookOpen',
      category: 'Languages',
      color: 'amber',
      description: 'First Flight prose and poems, Footprints Without Feet supplementary reader, and formal analytical writing skills.',
      chapters: [
        {
          id: 'ch-10-eng-1',
          chapterNumber: 1,
          title: 'A Letter to God & Dust of Snow',
          description: "In ‘A Letter to God’, hail destroys Lencho’s crop, so his faith leads him to write to God for help. The postmaster gathers money for him, but Lencho mistakes the post office staff for thieves—a twist that creates the story’s central irony. In ‘Dust of Snow’, a crow shakes snow from a hemlock tree onto the speaker; this small encounter lifts his mood and shows how an unexpected moment in nature can change a day.",
          estimatedHours: 2.5,
          hasQuiz: true,
          quizId: 'quiz-10-eng-1',
          topics: [
            {
              id: 'top-10-eng-1-1',
              topicNumber: 1,
              title: 'A Letter to God: Story Analysis and Character Sketch of Lencho',
              duration: '18 mins',
              description: 'Themes of extreme faith, irony at the post office, and narrative techniques.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Explain how Lencho’s trust in God leads to the story’s ironic ending.', 'Describe how the crow and hemlock tree shift the speaker’s mood in “Dust of Snow”.'],
              studyNotes: [{ sectionTitle: 'Literary Themes', content: ['Lencho’s faith remains firm even when he misreads the postmaster’s kindness; the reader sees the irony that Lencho does not.', 'In “Dust of Snow”, Frost uses an ordinary winter scene and two traditionally gloomy images to create a moment of renewal.', 'Compare how both texts show a change in outlook: one through dramatic irony, the other through a brief encounter with nature.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'social-science',
      name: 'Social Science',
      classId: '10',
      iconName: 'Globe',
      category: 'Humanities',
      color: 'sky',
      description: 'Rise of Nationalism in Europe, Resources & Development, Federalism, and Economic Development concepts.',
      chapters: [
        {
          id: 'ch-10-sst-1',
          chapterNumber: 1,
          title: 'The Rise of Nationalism in Europe',
          description: 'The French Revolution and the idea of nation, making of nationalism, unification of Germany and Italy.',
          estimatedHours: 3.5,
          hasQuiz: true,
          quizId: 'quiz-10-sst-1',
          topics: [
            {
              id: 'top-10-sst-1-1',
              topicNumber: 1,
              title: 'Frederic Sorrieu Vision & The French Revolution',
              duration: '16 mins',
              description: 'Utopian vision of 1848, Napoleonic Code of 1804, and measures creating collective European identity.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Understand 1804 Civil Code features.'],
              studyNotes: [{ sectionTitle: 'Civil Code of 1804', content: ['Did away with privileges based on birth, established equality before law, secured property rights.'] }],
            },
          ],
        },
      ],
    },
  ],

  '9': [
    {
      id: 'science',
      name: 'Science',
      classId: '9',
      iconName: 'FlaskConical',
      category: 'STEM',
      color: 'blue',
      description: 'Foundations of physics, motion, matter in our surroundings, and cell structure.',
      chapters: [
        {
          id: 'ch-9-sci-motion',
          chapterNumber: 1,
          title: 'Motion',
          description: 'Distance, displacement, uniform and non-uniform speed, velocity, acceleration, and equations of motion.',
          estimatedHours: 3.8,
          hasQuiz: true,
          topics: [
            {
              id: 'top-9-sci-1-1',
              topicNumber: 1,
              title: 'Describing Motion: Distance vs Displacement',
              duration: '15 mins',
              description: 'Scalar vs vector quantities, reference points, and path length.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Calculate displacement along straight and circular paths.'],
              studyNotes: [{ sectionTitle: 'Scalar vs Vector', content: ['Distance is actual path length (scalar); displacement is shortest straight line path (vector).'] }],
            },
            {
              id: 'top-9-sci-1-2',
              topicNumber: 2,
              title: 'Speed, Velocity, and Uniform Acceleration',
              duration: '18 mins',
              description: 'Rate of change of position and velocity; a = (v - u) / t.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Differentiate between speed and velocity; calculate acceleration.'],
              keyFormulasOrConcepts: [
                { label: 'Acceleration', formulaOrRule: 'a = (v - u) / t' },
              ],
              studyNotes: [{ sectionTitle: 'Acceleration', content: ['Uniform acceleration occurs when velocity changes by equal amounts in equal intervals of time.'] }],
            },
            {
              id: 'top-9-sci-1-3',
              topicNumber: 3,
              title: 'Graphical Representation & The Three Equations of Motion',
              duration: '22 mins',
              description: 'Deriving v = u + at, s = ut + ½at², and v² - u² = 2as using velocity-time graphs.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Derive and apply the 3 kinematic equations for uniform acceleration.'],
              keyFormulasOrConcepts: [
                { label: 'Equation 1', formulaOrRule: 'v = u + at' },
                { label: 'Equation 2', formulaOrRule: 's = ut + ½at²' },
                { label: 'Equation 3', formulaOrRule: 'v² - u² = 2as' },
              ],
              studyNotes: [{ sectionTitle: 'Kinematics', content: ['The area under a v-t graph represents distance/displacement travelled.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      classId: '9',
      iconName: 'Calculator',
      category: 'STEM',
      color: 'blue',
      description: 'Number systems, polynomials, coordinate geometry, and linear equations in two variables.',
      chapters: [
        {
          id: 'ch-9-math-numbers',
          chapterNumber: 1,
          title: 'Number Systems',
          description: 'Rationalisation of surds, representing real numbers on the number line, and laws of exponents.',
          estimatedHours: 3.2,
          hasQuiz: true,
          topics: [
            {
              id: 'top-9-math-1-1',
              topicNumber: 1,
              title: 'Irrational Numbers and Real Line Representation',
              duration: '16 mins',
              description: 'Locating √2, √3, and √5 on the number line using Pythagoras theorem.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Construct square root spirals and locate surds geometrically.'],
              studyNotes: [{ sectionTitle: 'Square Root Construction', content: ['Use right angled triangles with legs 1 and 1 to obtain hypotenuse √2.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English',
      classId: '9',
      iconName: 'BookOpen',
      category: 'Languages',
      color: 'amber',
      description: 'Beehive prose, Moments supplementary reader, and creative descriptive composition.',
      chapters: [
        {
          id: 'ch-9-eng-1',
          chapterNumber: 1,
          title: 'The Fun They Had',
          description: "Isaac Asimov's futuristic view of automated mechanical teachers and telebooks in 2157.",
          estimatedHours: 2.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-9-eng-1-1',
              topicNumber: 1,
              title: 'The Fun They Had: Futuristic Education Theme',
              duration: '15 mins',
              description: 'Contrasting computerized solitary schooling with collective school classrooms.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Discuss technological alienation vs collaborative human teaching.'],
              studyNotes: [{ sectionTitle: 'Theme', content: ['Technology-driven isolation versus human-centric school environments.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'social-science',
      name: 'Social Science',
      classId: '9',
      iconName: 'Globe',
      category: 'Humanities',
      color: 'sky',
      description: 'French Revolution, India - Size and Location, What is Democracy, and Village of Palampur economy.',
      chapters: [
        {
          id: 'ch-9-sst-1',
          chapterNumber: 1,
          title: 'The French Revolution',
          description: 'Storming of the Bastille, French society during late 18th century, and the Reign of Terror.',
          estimatedHours: 3.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-9-sst-1-1',
              topicNumber: 1,
              title: 'Estates of the French Society & Outbreak of 1789',
              duration: '18 mins',
              description: 'Feudal burdens on the Third Estate and the Tennis Court Oath.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Identify causes of the 1789 revolution.'],
              studyNotes: [{ sectionTitle: 'Three Estates', content: ['Clergy, Nobility, and Third Estate (commoners, peasants, middle class).'] }],
            },
          ],
        },
      ],
    },
  ],

  '8': [
    {
      id: 'mathematics',
      name: 'Mathematics',
      classId: '8',
      iconName: 'Calculator',
      category: 'STEM',
      color: 'blue',
      description: 'Rational numbers, linear equations in one variable, quadrilaterals, and algebraic identities.',
      chapters: [
        {
          id: 'ch-8-math-1',
          chapterNumber: 1,
          title: 'Rational Numbers',
          description: 'Properties of addition and multiplication: closure, commutativity, associativity, and distributivity.',
          estimatedHours: 2.8,
          hasQuiz: true,
          topics: [
            {
              id: 'top-8-math-1-1',
              topicNumber: 1,
              title: 'Properties of Rational Numbers',
              duration: '15 mins',
              description: 'Closure, commutative, and associative laws over rational arithmetic operations.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Verify arithmetic properties for fractions.'],
              studyNotes: [{ sectionTitle: 'Properties', content: ['Rational numbers are closed under addition, subtraction, and multiplication.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'science',
      name: 'Science',
      classId: '8',
      iconName: 'FlaskConical',
      category: 'STEM',
      color: 'blue',
      description: 'Crop production, microorganisms, synthetic fibers, metals and non-metals, cell structure.',
      chapters: [
        {
          id: 'ch-8-sci-1',
          chapterNumber: 1,
          title: 'Crop Production and Management',
          description: 'Agricultural practices: soil preparation, sowing, manures, fertilizers, irrigation, and storage.',
          estimatedHours: 2.5,
          hasQuiz: true,
          topics: [
            {
              id: 'top-8-sci-1-1',
              topicNumber: 1,
              title: 'Basic Practices of Crop Production',
              duration: '14 mins',
              description: 'Kharif vs Rabi crops and seasonal agricultural workflows.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Differentiate Kharif (monsoon) from Rabi (winter) crops.'],
              studyNotes: [{ sectionTitle: 'Crops', content: ['Kharif: Paddy, maize, soyabean. Rabi: Wheat, gram, pea, mustard.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English',
      classId: '8',
      iconName: 'BookOpen',
      category: 'Languages',
      color: 'amber',
      description: 'Honeydew prose and poetry, It So Happened supplementary reader.',
      chapters: [
        {
          id: 'ch-8-eng-1',
          chapterNumber: 1,
          title: 'The Best Christmas Present in the World',
          description: 'WWI Christmas truce of 1914 between British and German soldiers in No Mans Land.',
          estimatedHours: 2.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-8-eng-1-1',
              topicNumber: 1,
              title: 'The 1914 Truce Letter & Themes of Peace',
              duration: '16 mins',
              description: 'Jim Macpherson letter to Connie and brotherhood across battle lines.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Understand anti-war sentiment in historical letters.'],
              studyNotes: [{ sectionTitle: 'Historical Truce', content: ['Soldiers shared soccer, rations, and carols in No Mans Land.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'social-science',
      name: 'Social Science',
      classId: '8',
      iconName: 'Globe',
      category: 'Humanities',
      color: 'sky',
      description: 'How, When and Where, Resources, The Indian Constitution, and Law and Social Justice.',
      chapters: [
        {
          id: 'ch-8-sst-1',
          chapterNumber: 1,
          title: 'The Indian Constitution',
          description: 'Why do we need a constitution, key features: federalism, parliamentary government, and fundamental rights.',
          estimatedHours: 2.5,
          hasQuiz: true,
          topics: [
            {
              id: 'top-8-sst-1-1',
              topicNumber: 1,
              title: 'Key Features of the Indian Constitution',
              duration: '15 mins',
              description: 'Separation of powers, secularism, and fundamental rights.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Identify 6 Fundamental Rights in the Indian Constitution.'],
              studyNotes: [{ sectionTitle: 'Constitution Pillars', content: ['Right to Equality, Right to Freedom, Cultural and Educational Rights, Constitutional Remedies.'] }],
            },
          ],
        },
      ],
    },
  ],

  '11': [
    {
      id: 'mathematics',
      name: 'Mathematics',
      classId: '11',
      iconName: 'Calculator',
      category: 'STEM',
      color: 'blue',
      description: 'Sets, Relations and Functions, Trigonometric Functions, Permutations & Combinations, Limits & Derivatives.',
      chapters: [
        {
          id: 'ch-11-math-1',
          chapterNumber: 1,
          title: 'Sets and Functions',
          description: 'Set notation, empty sets, Venn diagrams, Cartesian products, domain and range of real functions.',
          estimatedHours: 4.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-11-math-1-1',
              topicNumber: 1,
              title: 'Sets, Subsets, and Venn Diagrams',
              duration: '20 mins',
              description: 'Universal sets, union, intersection, and set difference operations.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Formulate set operations using Venn representations.'],
              studyNotes: [{ sectionTitle: 'Set Theory', content: ['n(A ∪ B) = n(A) + n(B) - n(A ∩ B)'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'physics',
      name: 'Physics',
      classId: '11',
      iconName: 'Atom',
      category: 'STEM',
      color: 'indigo',
      description: 'Units & Measurements, Motion in a Straight Line, Laws of Motion, Work, Energy & Power, Gravitation.',
      chapters: [
        {
          id: 'ch-11-phy-1',
          chapterNumber: 1,
          title: 'Units and Measurements',
          description: 'SI system, dimensional analysis, principle of homogeneity, and error analysis.',
          estimatedHours: 3.5,
          hasQuiz: true,
          topics: [
            {
              id: 'top-11-phy-1-1',
              topicNumber: 1,
              title: 'Dimensional Analysis and Its Applications',
              duration: '19 mins',
              description: 'Checking equation dimensional correctness and deducing formula relationships.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Apply [M^a L^b T^c] dimensional equations.'],
              studyNotes: [{ sectionTitle: 'Dimensional Homogeneity', content: ['Terms on both sides of a physical equation must possess identical dimensions.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      classId: '11',
      iconName: 'FlaskConical',
      category: 'STEM',
      color: 'blue',
      description: 'Some Basic Concepts of Chemistry, Structure of Atom, Periodic Classification, Chemical Bonding.',
      chapters: [
        {
          id: 'ch-11-chem-1',
          chapterNumber: 1,
          title: 'Some Basic Concepts of Chemistry',
          description: 'Mole concept, molar mass, empirical and molecular formulas, and stoichiometry calculations.',
          estimatedHours: 3.8,
          hasQuiz: true,
          topics: [
            {
              id: 'top-11-chem-1-1',
              topicNumber: 1,
              title: 'The Mole Concept and Molar Mass',
              duration: '21 mins',
              description: 'Avogadro constant (6.022 × 10²³), molarity, molality, and mass percentage.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Solve quantitative stoichiometry questions with the mole triangle.'],
              studyNotes: [{ sectionTitle: 'The Mole', content: ['1 mole = 6.022 × 10²³ elementary entities.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'biology',
      name: 'Biology',
      classId: '11',
      iconName: 'Dna',
      category: 'STEM',
      color: 'sky',
      description: 'The Living World, Biological Classification, Plant Kingdom, Cell: The Unit of Life, Human Physiology.',
      chapters: [
        {
          id: 'ch-11-bio-1',
          chapterNumber: 1,
          title: 'Cell: The Unit of Life',
          description: 'Cell theory, prokaryotic and eukaryotic cells, endomembrane system, mitochondria, and nucleus.',
          estimatedHours: 4.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-11-bio-1-1',
              topicNumber: 1,
              title: 'Prokaryotic vs Eukaryotic Cell Architecture',
              duration: '18 mins',
              description: 'Membrane-bound organelles, 70S vs 80S ribosomes, and fluid mosaic model of cell membrane.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Describe Singer & Nicolson fluid mosaic bilayer structure.'],
              studyNotes: [{ sectionTitle: 'Fluid Mosaic Model', content: ['Quasifluid nature of lipid enables lateral movement of proteins within overall bilayer.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English Core',
      classId: '11',
      iconName: 'BookOpen',
      category: 'Languages',
      color: 'amber',
      description: 'Hornbill prose and poetry, Snapshots reader, and professional speech and note-making skills.',
      chapters: [
        {
          id: 'ch-11-eng-1',
          chapterNumber: 1,
          title: 'The Portrait of a Lady',
          description: "Khushwant Singh's autobiographical tribute to his grandmother and shifting relationship phases.",
          estimatedHours: 2.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-11-eng-1-1',
              topicNumber: 1,
              title: 'The Portrait of a Lady: Character and Emotional Arc',
              duration: '16 mins',
              description: 'Village school days versus city life and the silent companionship with sparrows.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Explore intergenerational bonds and character portrayal.'],
              studyNotes: [{ sectionTitle: 'Characterization', content: ['Spiritual fortitude and tender detachment portrayed in the grandmother.'] }],
            },
          ],
        },
      ],
    },
  ],

  '12': [
    {
      id: 'mathematics',
      name: 'Mathematics',
      classId: '12',
      iconName: 'Calculator',
      category: 'STEM',
      color: 'blue',
      description: 'Relations and Functions, Matrices & Determinants, Continuity & Differentiability, Integrals, Vectors & 3D.',
      chapters: [
        {
          id: 'ch-12-math-1',
          chapterNumber: 1,
          title: 'Relations and Functions',
          description: 'Equivalence relations, reflexive/symmetric/transitive proofs, one-one (injective) and onto (surjective) functions.',
          estimatedHours: 4.2,
          hasQuiz: true,
          topics: [
            {
              id: 'top-12-math-1-1',
              topicNumber: 1,
              title: 'Equivalence Relations & Bijective Mapping',
              duration: '22 mins',
              description: 'Rigorous algebraic proofs of reflexive, symmetric, and transitive relations, equivalence classes, and bijective function invertibility.',
              videoUrl: 'https://www.youtube.com/watch?v=3Oa8RpHqxKc',
              videoEmbedId: '3Oa8RpHqxKc',
              videoSourceNote: 'Physics Wallah (NCERT Wallah) • Class 12 Relations and Functions One Shot',
              objectives: [
                'State and apply formal algebraic conditions for reflexivity, symmetry, and transitivity on arbitrary sets.',
                'Prove that a given binary relation is an equivalence relation using rigorous deductive notation.',
                'Determine equivalence classes [a] and verify the Fundamental Partition Theorem of sets.',
                'Verify injectivity (one-to-one) and surjectivity (onto) to prove function bijectivity and invertibility.',
              ],
              keyFormulasOrConcepts: [
                {
                  label: 'Reflexive Relation',
                  formulaOrRule: '∀ a ∈ A, (a, a) ∈ R',
                  note: 'Every element in set A must relate to itself. If even one element fails, R is not reflexive.',
                },
                {
                  label: 'Symmetric Relation',
                  formulaOrRule: '(a, b) ∈ R ⟹ (b, a) ∈ R, ∀ a, b ∈ A',
                  note: 'Order reversal must preserve membership in the relation.',
                },
                {
                  label: 'Transitive Relation',
                  formulaOrRule: '(a, b) ∈ R ∧ (b, c) ∈ R ⟹ (a, c) ∈ R, ∀ a, b, c ∈ A',
                  note: 'Chain linkage: If (a, b) and (b, c) exist in R, then (a, c) must also belong to R.',
                },
                {
                  label: 'Equivalence Relation & Class',
                  formulaOrRule: 'R is reflexive, symmetric & transitive; [a] = {x ∈ A : (x, a) ∈ R}',
                  note: 'Equivalence classes partition set A into mutually disjoint non-empty subsets whose union is A.',
                },
                {
                  label: 'Injective (One-to-One)',
                  formulaOrRule: 'f(x₁) = f(x₂) ⟹ x₁ = x₂, ∀ x₁, x₂ ∈ Domain',
                  note: 'Distinct domain elements map to distinct co-domain values. Horizontal Line Test: touches at most once.',
                },
                {
                  label: 'Surjective (Onto) & Bijective',
                  formulaOrRule: 'Range(f) = Co-domain(f); Bijective ⟺ Injective ∧ Surjective',
                  note: 'Every element in the co-domain has a pre-image in the domain. A function is invertible if and only if it is bijective.',
                },
              ],
              studyNotes: [
                {
                  sectionTitle: '1. Types of Relations & Deductive Proof Framework',
                  content: [
                    'In NCERT Class 12 Mathematics, a relation R from a set A to set A is a subset of the Cartesian product A × A. We classify relations based on three fundamental algebraic tests:',
                    '• Reflexive: A relation R on set A is reflexive if every element relates to itself: (a, a) ∈ R for all a ∈ A. For example, on the set of integers ℤ, the relation R = {(a, b) : a - b is divisible by 3} is reflexive because a - a = 0 = 3(0), which is divisible by 3.',
                    '• Symmetric: If (a, b) ∈ R implies that (b, a) ∈ R for all a, b ∈ A. In our divisibility example, if a - b = 3k (k ∈ ℤ), then b - a = -(a - b) = 3(-k). Since -k is also an integer, (b, a) ∈ R, confirming symmetry.',
                    '• Transitive: If (a, b) ∈ R and (b, c) ∈ R, then (a, c) must belong to R. If a - b = 3k₁ and b - c = 3k₂, adding both equations gives (a - b) + (b - c) = a - c = 3(k₁ + k₂). Since k₁ + k₂ ∈ ℤ, (a, c) ∈ R, proving transitivity.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Equivalence Relation Definition',
                    text: 'A relation R is an Equivalence Relation if and only if it satisfies all three properties simultaneously: Reflexive, Symmetric, and Transitive.',
                  },
                },
                {
                  sectionTitle: '2. Equivalence Classes and the Partition of Sets',
                  content: [
                    'Given an equivalence relation R on a set A, the equivalence class of an element a ∈ A, denoted by [a], is the set of all elements in A that are related to a under R: [a] = {x ∈ A : (x, a) ∈ R}.',
                    'Fundamental Theorem of Equivalence Relations: Any equivalence relation R on a set A partitions A into mutually disjoint equivalence classes such that:',
                    '1. Any two equivalence classes [a] and [b] are either completely identical or disjoint: [a] = [b] or [a] ∩ [b] = ∅.',
                    '2. The union of all equivalence classes yields the entire set A: ⋃ [a] = A.',
                    'Example in ℤ modulo 3: The relation a ≡ b (mod 3) partitions the infinite set of integers ℤ into exactly three disjoint equivalence classes: [0] = {..., -6, -3, 0, 3, 6, ...}, [1] = {..., -5, -2, 1, 4, 7, ...}, and [2] = {..., -4, -1, 2, 5, 8, ...}. Note that [0] ∪ [1] ∪ [2] = ℤ.',
                  ],
                  calloutBox: {
                    type: 'tip',
                    title: 'Exam Pro-Tip on Equivalence Classes',
                    text: 'When asked to find [a], write the membership condition: x ∈ [a] ⟺ (x, a) ∈ R, substitute into the relation definition, and solve for x in set-builder or roster form.',
                  },
                },
                {
                  sectionTitle: '3. Functions: Injective (One-One) & Surjective (Onto) Proof Strategies',
                  content: [
                    'A function f: X → Y assigns to each element x ∈ X a unique element y ∈ Y. In board examinations, questions frequently test whether f is injective, surjective, or bijective:',
                    '• Proving Injectivity (One-to-One): Assume f(x₁) = f(x₂) for arbitrary elements x₁, x₂ in the domain. Perform rigorous algebraic simplification. If you arrive uniquely at x₁ = x₂, then f is one-to-one. If x₁ = ±x₂ (e.g. for f(x) = x² on ℝ), show a counterexample: f(-2) = f(2) = 4 but -2 ≠ 2, so f is NOT injective on ℝ.',
                    '• Proving Surjectivity (Onto): Let y be an arbitrary element in the co-domain Y. Set y = f(x) and express x in terms of y: x = g(y). Check whether this x always exists and belongs to Domain X for every y ∈ Y. If it does, f is surjective (Range = Co-domain). If there exists any y ∈ Y with no valid real pre-image (e.g. y = -1 for f(x) = x² on ℝ), f is NOT surjective.',
                  ],
                  calloutBox: {
                    type: 'warning',
                    title: 'Common Student Mistake in Surjectivity',
                    text: 'Always check the domain and co-domain specifications carefully! f(x) = x² from ℝ → ℝ is neither one-one nor onto, but f(x) = x² from [0, ∞) → [0, ∞) is strictly bijective and invertible.',
                  },
                },
                {
                  sectionTitle: '4. Bijective Mappings, Invertibility & Composite Functions',
                  content: [
                    'A function f: X → Y is called Bijective (or a one-to-one correspondence) if it is both Injective and Surjective.',
                    'Invertibility Criterion: A function f: X → Y is invertible if and only if f is bijective. When f is bijective, there exists an inverse function g: Y → X (denoted f⁻¹) such that (g ∘ f)(x) = x for all x ∈ X (identity on X) and (f ∘ g)(y) = y for all y ∈ Y (identity on Y).',
                    'How to find f⁻¹(x): Step 1: Let y = f(x). Step 2: Solve the equation algebraically for x in terms of y: x = f⁻¹(y). Step 3: Replace y with the independent variable x to write the inverse function formula.',
                  ],
                  calloutBox: {
                    type: 'remember',
                    title: 'Summary Checklist for 5-Mark Board Questions',
                    text: '1. Prove Reflexive (a, a) ∈ R. 2. Prove Symmetric (a, b) ∈ R ⟹ (b, a) ∈ R. 3. Prove Transitive (a, b), (b, c) ∈ R ⟹ (a, c) ∈ R. 4. Conclude R is an Equivalence Relation. 5. State the equivalence classes [a].',
                  },
                },
              ],
              practiceQuestions: [
                {
                  id: 'pq-12-math-1-1',
                  question: 'Show that the relation R on the set of integers ℤ defined by R = {(a, b) : 2 divides (a - b)} is an equivalence relation.',
                  hint: 'Check reflexivity by evaluating a - a, symmetry by factoring a negative sign from a - b, and transitivity by adding (a - b) + (b - c).',
                  solution: '1. Reflexivity: For any a ∈ ℤ, a - a = 0 = 2(0). Since 0 is divisible by 2, (a, a) ∈ R for all a ∈ ℤ. Hence R is reflexive.\n\n2. Symmetry: Let (a, b) ∈ R. Then a - b = 2k for some k ∈ ℤ. Now, b - a = -(a - b) = -2k = 2(-k). Since -k ∈ ℤ, 2 divides (b - a), which implies (b, a) ∈ R. Hence R is symmetric.\n\n3. Transitivity: Let (a, b) ∈ R and (b, c) ∈ R. Then a - b = 2m and b - c = 2n for some m, n ∈ ℤ. Adding both equations: (a - b) + (b - c) = a - c = 2m + 2n = 2(m + n). Since m + n ∈ ℤ, 2 divides (a - c), so (a, c) ∈ R. Hence R is transitive.\n\nSince R is reflexive, symmetric, and transitive, R is an equivalence relation on ℤ.',
                },
                {
                  id: 'pq-12-math-1-2',
                  question: 'Consider the function f: ℝ → ℝ defined by f(x) = 4x + 3. Show that f is invertible and determine the formula for f⁻¹(x).',
                  hint: 'First prove f is one-one by setting f(x₁) = f(x₂). Then prove f is onto by setting y = f(x) and solving for x ∈ ℝ.',
                  solution: '1. One-to-one (Injective): Let x₁, x₂ ∈ ℝ such that f(x₁) = f(x₂). Then 4x₁ + 3 = 4x₂ + 3 ⟹ 4x₁ = 4x₂ ⟹ x₁ = x₂. Thus, f is one-to-one.\n\n2. Onto (Surjective): Let y ∈ ℝ (co-domain). We must find x ∈ ℝ (domain) such that f(x) = y. Set y = 4x + 3 ⟹ 4x = y - 3 ⟹ x = (y - 3) / 4. For every real number y, x = (y - 3) / 4 is a well-defined real number in the domain. Checking: f((y - 3) / 4) = 4((y - 3) / 4) + 3 = y - 3 + 3 = y. Hence f is onto.\n\nSince f is both one-to-one and onto, f is bijective and therefore invertible. The inverse function is f⁻¹(x) = (x - 3) / 4.',
                },
                {
                  id: 'pq-12-math-1-3',
                  question: 'Let R be the equivalence relation on ℤ defined by R = {(a, b) : 4 divides (a - b)}. Write down the equivalence class [0] and [1].',
                  hint: 'Use the definition [a] = {x ∈ ℤ : x - a is a multiple of 4}.',
                  solution: 'By definition, [a] = {x ∈ ℤ : (x, a) ∈ R} = {x ∈ ℤ : x - a = 4k for some k ∈ ℤ}.\n\nFor [0]: x - 0 = 4k ⟹ x = 4k. Thus, [0] = {..., -8, -4, 0, 4, 8, 12, ...} (the set of all integer multiples of 4).\n\nFor [1]: x - 1 = 4k ⟹ x = 4k + 1. Thus, [1] = {..., -7, -3, 1, 5, 9, 13, ...} (integers with remainder 1 when divided by 4).',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'physics',
      name: 'Physics',
      classId: '12',
      iconName: 'Atom',
      category: 'STEM',
      color: 'indigo',
      description: 'Electric Charges and Fields, Electrostatic Potential, Current Electricity, Electromagnetic Induction, Wave Optics.',
      chapters: [
        {
          id: 'ch-12-phy-1',
          chapterNumber: 1,
          title: 'Electric Charges and Fields',
          description: "Coulomb's Law, electric field lines, electric dipole, and Gauss's Law with symmetry applications.",
          estimatedHours: 4.5,
          hasQuiz: true,
          topics: [
            {
              id: 'top-12-phy-1-1',
              topicNumber: 1,
              title: "Coulomb's Law and Electric Dipole Fields",
              duration: '24 mins',
              description: 'Vector form of Coulombs law, axial and equatorial dipole fields.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Derive E_axial = 2kp/r³ and E_equatorial = -kp/r³ for short dipoles.'],
              studyNotes: [{ sectionTitle: "Coulomb's Law", content: ['F = (1 / 4πε₀) · (q₁q₂ / r²) r̂'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      classId: '12',
      iconName: 'FlaskConical',
      category: 'STEM',
      color: 'blue',
      description: 'Solutions, Electrochemistry, Chemical Kinetics, Coordination Compounds, Haloalkanes, Aldehydes & Ketones.',
      chapters: [
        {
          id: 'ch-12-chem-1',
          chapterNumber: 1,
          title: 'Solutions and Colligative Properties',
          description: "Raoult's Law for volatile solutes, ideal and non-ideal solutions, osmotic pressure, and van 't Hoff factor.",
          estimatedHours: 4.0,
          hasQuiz: true,
          topics: [
            {
              id: 'top-12-chem-1-1',
              topicNumber: 1,
              title: "Raoult's Law and Colligative Properties",
              duration: '21 mins',
              description: 'Relative lowering of vapour pressure, elevation of boiling point, and osmotic pressure.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Calculate molecular weights using osmotic pressure π = CRT.'],
              studyNotes: [{ sectionTitle: 'Colligative Properties', content: ['Depend solely on the number of solute particles, not on their nature.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'biology',
      name: 'Biology',
      classId: '12',
      iconName: 'Dna',
      category: 'STEM',
      color: 'sky',
      description: 'Sexual Reproduction in Flowering Plants, Human Reproduction, Principles of Inheritance, Molecular Basis, Biotechnology.',
      chapters: [
        {
          id: 'ch-12-bio-1',
          chapterNumber: 1,
          title: 'Principles of Inheritance and Variation',
          description: "Mendel's laws of inheritance, monohybrid and dihybrid crosses, incomplete dominance, sex determination, and genetic disorders.",
          estimatedHours: 4.4,
          hasQuiz: true,
          topics: [
            {
              id: 'top-12-bio-1-1',
              topicNumber: 1,
              title: "Mendelian Genetics: Laws of Segregation & Independent Assortment",
              duration: '22 mins',
              description: 'Punnett squares, 3:1 phenotypic ratio, 9:3:3:1 dihybrid distribution, and test cross logic.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Solve pedigree and monohybrid cross probabilities.'],
              studyNotes: [{ sectionTitle: 'Segregation', content: ['Alleles do not show any blending and both characters are recovered as such in F2 generation.'] }],
            },
          ],
        },
      ],
    },
    {
      id: 'english',
      name: 'English Core',
      classId: '12',
      iconName: 'BookOpen',
      category: 'Languages',
      color: 'amber',
      description: 'Flamingo prose and poetry, Vistas supplementary reader, and formal report and letter drafting.',
      chapters: [
        {
          id: 'ch-12-eng-1',
          chapterNumber: 1,
          title: 'The Last Lesson',
          description: 'Alphonse Daudet setting in Alsace during the Franco-Prussian War: the linguistic and emotional importance of native tongue.',
          estimatedHours: 2.2,
          hasQuiz: true,
          topics: [
            {
              id: 'top-12-eng-1-1',
              topicNumber: 1,
              title: 'The Last Lesson: Linguistic Chauvinism and Franz Awakening',
              duration: '18 mins',
              description: 'M. Hamel farewell on the blackboard: "Vive La France!" and remorse over neglected education.',
              videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
              objectives: ['Analyze linguistic identity as an emotional safeguard against conquest.'],
              studyNotes: [{ sectionTitle: 'Linguistic Pride', content: ['When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison.'] }],
            },
          ],
        },
      ],
    },
  ],
};

// Classes 8, 9, 10, 11 and 12: Expand NCERT pathways and attach
// verified topic-wise Physics Wallah (PW) video sources across all topics.
for (const grade of ['8', '9', '10', '11', '12'] as const) {
  CURRICULUM_DATA[grade] = expandCurriculum(CURRICULUM_DATA[grade], grade);

  const subjects = CURRICULUM_DATA[grade];
  if (subjects) {
    for (const sub of subjects) {
      for (const ch of sub.chapters) {
        // Class 10 maths chapter links are explicitly assigned by expandCurriculum.
        // Keep those exact URLs for every topic in each chapter.
        if (grade === '10' && sub.id === 'mathematics') continue;
        ch.topics = ch.topics.map((t) => {
          const pwVideo = getPhysicsWallahVideo(grade, sub.id, ch.title || t.title);
          return {
            ...t,
            videoUrl: pwVideo.videoUrl,
            videoEmbedId: pwVideo.videoEmbedId,
            videoSourceNote: pwVideo.videoSourceNote,
          };
        });
      }
    }
  }
}
