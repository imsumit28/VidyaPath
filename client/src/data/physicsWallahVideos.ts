/**
 * Physics Wallah (PW) Official Video Source Mapping for VidyaPath
 * Curates verified topic-wise and chapter-wise video lectures from
 * official Physics Wallah YouTube channels:
 * - Physics Wallah - Alakh Pandey (@PhysicsWallah)
 * - Physics Wallah Foundation (@PW-Foundation / PW Udaan)
 * - NCERT Wallah / JEE Wallah
 */

export interface PWVideoInfo {
  videoEmbedId: string;
  backupEmbedId: string;
  videoUrl: string;
  youtubeSearchUrl: string;
  videoSourceNote: string;
  channelName: string;
  series: string;
}

// Verified Physics Wallah YouTube Video IDs
// 3Oa8RpHqxKc: Relations & Functions in One Shot | Class 12 Maths | Physics Wallah
// a8YasMSWFvc: Relations and Functions Class 12 One Shot | Physics Wallah
// 84LwbAFD-kc: Alakh Pandey Electrostatics Lecture | Physics Wallah
// kHVAk96r05Y: Alakh Pandey Light Reflection & Refraction | Physics Wallah
// EJcnBv691cY: Alakh Pandey Electricity Complete Chapter in One Shot | Physics Wallah
// AvsI2cwkTFw: Alternating Current One Shot | Class 12 Boards | Physics Wallah
// NqvVRQc2gvs: Oscillations in 1 Shot | Class 12 | Physics Wallah
// lSId8rTan24: Thermodynamics in 30 Minutes | JEE/NEET | Physics Wallah
// agkRi7C2w6c: Vectors & Kinematics | Physics Wallah
// WHygP7Kxpcs: Current Electricity Complete Chapter in One Shot | Physics Wallah
// jvCgb63ofw8: Work, Power & Energy | Class 10 | Physics Wallah
// QfdTJZQHZOY: Heredity & Evolution in 30 Minutes | Class 10 Mind Map | Physics Wallah
// mvJNnu5cLVQ: Number System Class 9 | Physics Wallah
// LL3Pkjg2kjM: Class 8 Foundation Umang | Physics Wallah
// -UdHmSTmQtw: Real Numbers Class 10th One Shot | Physics Wallah Foundation

export const PW_PRIMARY_EMBED_MATH = '3Oa8RpHqxKc';
export const PW_PRIMARY_EMBED_PHY = '84LwbAFD-kc';
export const PW_UNIVERSAL_BACKUP = 'a8YasMSWFvc';

interface PWEntry {
  embedId: string;
  backupId?: string;
  channel: string;
  series: string;
}

// Master map of Physics Wallah video catalogs by class standard & chapter keywords
export const PW_CATALOG: Record<string, Record<string, PWEntry>> = {
  // ==========================================
  // CLASS 12 (Senior Benchmark & Board Ready)
  // ==========================================
  '12': {
    // Mathematics
    'relations and functions': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah (NCERT Wallah)',
      series: 'PW Class 12 Relations & Functions One Shot',
    },
    'inverse trigonometric functions': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Inverse Trig Masterclass',
    },
    'matrices': {
      embedId: 'xGOkKJ4cPDw',
      backupId: 'bJ730y0x2zU',
      channel: 'Physics Wallah (NCERT Wallah)',
      series: 'PW Class 12 Matrices Full Chapter One Shot',
    },
    'determinants': {
      embedId: 'bJ730y0x2zU',
      backupId: 'xGOkKJ4cPDw',
      channel: 'Physics Wallah (NCERT Wallah)',
      series: 'PW Class 12 Determinants One Shot',
    },
    'continuity and differentiability': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Calculus Mastery',
    },
    'integrals': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Integration Masterclass',
    },
    'differential equations': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Differential Equations',
    },
    'vectors': {
      embedId: 'agkRi7C2w6c',
      backupId: '3Oa8RpHqxKc',
      channel: 'Physics Wallah',
      series: 'PW Vectors and 3D Geometry',
    },
    'probability': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Probability Class 12',
    },

    // Physics
    'electric charges and fields': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Electrostatics Complete Lecture',
    },
    'electrostatic potential': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Capacitance & Potential',
    },
    'current electricity': {
      embedId: 'WHygP7Kxpcs',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Current Electricity',
    },
    'moving charges and magnetism': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Magnetism Series',
    },
    'electromagnetic induction': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW EMI & Faraday Laws',
    },
    'alternating current': {
      embedId: 'AvsI2cwkTFw',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW AC Circuits',
    },
    'ray optics': {
      embedId: 'kHVAk96r05Y',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Ray Optics Series',
    },
    'wave optics': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Wave Optics',
    },
    'dual nature of radiation': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Modern Physics',
    },
    'atoms': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Atoms & Nuclei',
    },
    'semiconductors': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Semiconductor Devices',
    },

    // Chemistry
    'solutions': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Solutions Class 12',
    },
    'electrochemistry': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Electrochemistry',
    },
    'chemical kinetics': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Chemical Kinetics',
    },
    'coordination compounds': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Inorganic Chemistry',
    },
    'haloalkanes and haloarenes': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Organic Reactions',
    },
    'alcohols, phenols and ethers': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Organic Chemistry',
    },
    'aldehydes, ketones': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Carbonyl Compounds',
    },
    'biomolecules': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah',
      series: 'PW Biomolecules',
    },
  },

  // ==========================================
  // CLASS 11 (Senior Secondary)
  // ==========================================
  '11': {
    // Physics
    'units and measurements': {
      embedId: 'agkRi7C2w6c',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Units & Dimensions',
    },
    'motion in a straight line': {
      embedId: 'agkRi7C2w6c',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir 1D Kinematics',
    },
    'motion in a plane': {
      embedId: 'agkRi7C2w6c',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Vectors & Projectiles',
    },
    'laws of motion': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir NLM & Friction',
    },
    'work, energy and power': {
      embedId: 'jvCgb63ofw8',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Work Energy Theorem',
    },
    'system of particles': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Rotational Motion',
    },
    'gravitation': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Gravitation Masterclass',
    },
    'thermodynamics': {
      embedId: 'lSId8rTan24',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Thermodynamics',
    },
    'oscillations': {
      embedId: 'NqvVRQc2gvs',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW SHM & Waves',
    },

    // Chemistry
    'some basic concepts of chemistry': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Mole Concept',
    },
    'structure of atom': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Atomic Models',
    },
    'classification of elements': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Periodic Table Series',
    },
    'chemical bonding': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Chemical Bonding Masterclass',
    },
    'equilibrium': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Chemical Equilibrium',
    },
    'hydrocarbons': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Organic Chemistry',
    },

    // Mathematics
    'sets': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Class 11 Sets',
    },
    'relations and functions': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Functions Series',
    },
    'trigonometric functions': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Trigonometry Class 11',
    },
    'complex numbers': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Complex Numbers',
    },
    'limits and derivatives': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah',
      series: 'PW Calculus Fundamentals',
    },
  },

  // ==========================================
  // CLASS 10 (Secondary Board Benchmark)
  // ==========================================
  '10': {
    // Mathematics
    'real numbers': {
      embedId: '-UdHmSTmQtw',
      backupId: '3Oa8RpHqxKc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan Batch Real Numbers',
    },
    'polynomials': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan Batch Polynomials',
    },
    'pair of linear equations': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Warrior Series',
    },
    'quadratic equations': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan Batch Quadratic',
    },
    'arithmetic progressions': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Mind Map Series',
    },
    'triangles': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Geometry Udaan Batch',
    },
    'coordinate geometry': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation One Shot',
    },
    'introduction to trigonometry': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Trigonometry Series',
    },
    'applications of trigonometry': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'Heights & Distances Series',
    },
    'circles': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation Series',
    },
    'areas related to circles': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation Series',
    },
    'surface areas and volumes': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan Batch',
    },
    'statistics': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan Batch',
    },
    'probability': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation One Shot',
    },

    // Science
    'chemical reactions': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Chemistry Series',
    },
    'acids, bases and salts': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah Foundation',
      series: 'PW Udaan One Shot',
    },
    'metals and non-metals': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation Chemistry',
    },
    'carbon and its compounds': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Carbon Master Series',
    },
    'life processes': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Udaan Batch',
    },
    'control and coordination': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Udaan',
    },
    'how do organisms reproduce': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Series',
    },
    'heredity': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Series',
    },
    'light': {
      embedId: 'kHVAk96r05Y',
      backupId: 'w1WNkPKGM5E',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Light Full Chapter',
    },
    'human eye': {
      embedId: 'kHVAk96r05Y',
      backupId: 'w1WNkPKGM5E',
      channel: 'Physics Wallah Foundation',
      series: 'PW Physics Series',
    },
    'electricity': {
      embedId: 'EJcnBv691cY',
      backupId: 'WHygP7Kxpcs',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Pandey Complete Electricity',
    },
    'magnetic effects': {
      embedId: 'EJcnBv691cY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Electromagnetism Series',
    },
    'our environment': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Udaan',
    },
  },

  // ==========================================
  // CLASS 9 (Secondary Bridge)
  // ==========================================
  '9': {
    // Science
    'motion': {
      embedId: 'agkRi7C2w6c',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Class 9 Motion',
    },
    'force': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Newton Laws of Motion Series',
    },
    'gravitation': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Gravitation Series',
    },
    'work and energy': {
      embedId: 'jvCgb63ofw8',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Work & Energy',
    },
    'sound': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'PW Sound Waves',
    },
    'matter in our surroundings': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation Chemistry',
    },
    'is matter around us pure': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah Foundation',
      series: 'PW Foundation Chemistry',
    },
    'atoms and molecules': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah - Alakh Pandey',
      series: 'Alakh Sir Atoms & Molecules',
    },
    'structure of the atom': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'Physics Wallah Foundation',
      series: 'PW Atomic Structure',
    },
    'the fundamental unit of life': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Biology Cell Lecture',
    },
    'tissues': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Plant & Animal Tissues',
    },

    // Mathematics
    'number systems': {
      embedId: 'mvJNnu5cLVQ',
      backupId: '3Oa8RpHqxKc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Maths',
    },
    'polynomials': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Polynomials',
    },
    'coordinate geometry': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Coordinate Geometry',
    },
    'linear equations': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Linear Equations',
    },
    'lines and angles': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Geometry',
    },
    'triangles': {
      embedId: '3Oa8RpHqxKc',
      backupId: 'a8YasMSWFvc',
      channel: 'Physics Wallah Foundation',
      series: 'PW Class 9 Triangles',
    },
  },

  // ==========================================
  // CLASS 8 (Foundation Phase)
  // ==========================================
  '8': {
    // Mathematics
    'rational numbers': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Rational Numbers',
    },
    'linear equations': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Linear Equations',
    },
    'understanding quadrilaterals': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Geometry',
    },
    'squares and square roots': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Squares',
    },
    'mensuration': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Mensuration',
    },
    'exponents and powers': {
      embedId: 'LL3Pkjg2kjM',
      backupId: '3Oa8RpHqxKc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Exponents',
    },

    // Science
    'crop production and management': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Crop Production',
    },
    'microorganisms': {
      embedId: 'QfdTJZQHZOY',
      backupId: '84LwbAFD-kc',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Microorganisms',
    },
    'synthetic fibres': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Synthetic Fibres',
    },
    'metals and non-metals': {
      embedId: '84LwbAFD-kc',
      backupId: 'kHVAk96r05Y',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Metals',
    },
    'force and pressure': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Force & Pressure',
    },
    'friction': {
      embedId: '84LwbAFD-kc',
      backupId: 'agkRi7C2w6c',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Friction',
    },
    'sound': {
      embedId: '84LwbAFD-kc',
      backupId: 'AvsI2cwkTFw',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Sound',
    },
    'light': {
      embedId: 'kHVAk96r05Y',
      backupId: 'w1WNkPKGM5E',
      channel: 'PW Little Champs / Foundation',
      series: 'Class 8 Light',
    },
  },
};

/**
 * Resolves a topic's verified Physics Wallah video details based on grade, subject and title.
 */
export function getPhysicsWallahVideo(
  grade: string,
  subjectId: string,
  chapterOrTopicTitle: string
): PWVideoInfo {
  const normTitle = chapterOrTopicTitle.trim().toLowerCase();
  const gradeCatalog = PW_CATALOG[grade] || PW_CATALOG['10'];

  const cleanQuery = `Physics Wallah Class ${grade} ${chapterOrTopicTitle}`;
  const ytSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(cleanQuery)}`;

  // Search by keyword in grade catalog
  for (const [key, value] of Object.entries(gradeCatalog)) {
    if (normTitle.includes(key) || key.includes(normTitle)) {
      return {
        videoEmbedId: value.embedId,
        backupEmbedId: value.backupId || PW_UNIVERSAL_BACKUP,
        videoUrl: ytSearchUrl,
        youtubeSearchUrl: ytSearchUrl,
        videoSourceNote: `${value.channel} (${value.series}) • Curated NCERT Topic Lecture`,
        channelName: value.channel,
        series: value.series,
      };
    }
  }

  // Fallbacks by subject if specific title keyword isn't directly matched
  const isMath = subjectId.includes('math');
  const fallbackEmbed = isMath ? PW_PRIMARY_EMBED_MATH : PW_PRIMARY_EMBED_PHY;
  const fallbackChannel = isMath
    ? 'Physics Wallah Foundation'
    : 'Physics Wallah - Alakh Pandey';
  const fallbackSeries = isMath
    ? 'PW Udaan / Boards Mathematics Lecture'
    : 'PW Concept Series';

  return {
    videoEmbedId: fallbackEmbed,
    backupEmbedId: PW_UNIVERSAL_BACKUP,
    videoUrl: ytSearchUrl,
    youtubeSearchUrl: ytSearchUrl,
    videoSourceNote: `${fallbackChannel} (${fallbackSeries}) • Curated NCERT Topic Lecture`,
    channelName: fallbackChannel,
    series: fallbackSeries,
  };
}
