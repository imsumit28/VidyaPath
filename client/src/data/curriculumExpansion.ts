import type { Chapter, Subject, Topic } from '../types';
import { getPhysicsWallahVideo } from './physicsWallahVideos';

export type ChapterPlan = { title: string; focus: string; concepts: string[] };

const CLASS_10_MATH_VIDEO_URLS: Record<string, string> = {
  'real numbers': 'https://www.youtube.com/live/s7Y976auPwE',
  polynomials: 'https://www.youtube.com/live/nvcaCkJ26Nw',
  'pair of linear equations in two variables': 'https://www.youtube.com/live/Pn8B0kCGArg',
  'quadratic equations': 'https://youtu.be/vHfuTThhW0M',
  'arithmetic progressions': 'https://youtu.be/zPKdZKBG4oQ',
  triangles: 'https://www.youtube.com/live/GY_u1srfGnU',
  'coordinate geometry': 'https://youtu.be/TXDyGK_GdNM',
  'introduction to trigonometry': 'https://www.youtube.com/live/BfV_5K67hHE',
  'some applications of trigonometry': 'https://youtu.be/wdaBwIv7Jso',
  circles: 'https://www.youtube.com/live/wYshjXUHgLA',
  'areas related to circles': 'https://www.youtube.com/live/wYshjXUHgLA',
  'surface areas and volumes': 'https://www.youtube.com/live/nL48cLNpdOE',
  statistics: 'https://www.youtube.com/live/fFncQze5dBc',
  probability: 'https://www.youtube.com/live/AfBPfqSoZ0Y',
};

// Chapter maps follow NCERT's subject sequence. The notes are original study
// summaries of the stated concepts, not reproduced textbook passages.
export const PLANS: Record<string, Record<string, ChapterPlan[]>> = {
  '8': {
    mathematics: [
      ['Rational Numbers','Represent and compare rational numbers.',['Equivalent fractions','Properties of rational number operations','Rational numbers between two numbers']],
      ['Linear Equations in One Variable','Translate statements into equations and solve them.',['Variables on both sides','Transposition and balance','Checking a solution']],
      ['Understanding Quadrilaterals','Classify polygons and use angle properties.',['Interior angle sum','Properties of parallelograms','Regular polygons']],
      ['Practical Geometry','Construct quadrilaterals from sufficient measurements.',['Choosing a construction sequence','Using ruler, compass and protractor','Checking uniqueness']],
      ['Data Handling','Organise data and interpret chance.',['Grouped data and frequency','Pie charts','Probability from equally likely outcomes']],
      ['Squares and Square Roots','Recognise perfect squares and estimate square roots.',['Square patterns','Prime factorisation method','Using long division']],
      ['Cubes and Cube Roots','Identify perfect cubes and extract cube roots.',['Cubes of integers','Prime factorisation in groups of three','Cube roots']],
      ['Comparing Quantities','Apply percentages to commercial arithmetic.',['Discount and marked price','Simple and compound interest','Tax and percentage change']],
      ['Algebraic Expressions and Identities','Add, subtract and multiply algebraic expressions.',['Terms and like terms','Standard identities','Using identities in calculation']],
      ['Visualising Solid Shapes','Read and represent three-dimensional objects.',['Views of solids','Euler relation for polyhedra','Mapping and scale']],
      ['Mensuration','Find surface areas and volumes of familiar solids.',['Area of trapezium and polygons','Surface area of cube, cuboid and cylinder','Volume and capacity']],
      ['Exponents and Powers','Use laws of exponents and standard form.',['Product and quotient laws','Zero and negative exponents','Scientific notation']],
      ['Direct and Inverse Proportions','Model quantities that vary together or oppositely.',['Unitary method','Direct proportion','Inverse proportion']],
      ['Factorisation','Factorise expressions and simplify fractions.',['Common factors','Regrouping terms','Identities and algebraic fractions']],
      ['Introduction to Graphs','Plot points and interpret simple graphs.',['Cartesian plane','Coordinates and quadrants','Reading line graphs']],
      ['Playing with Numbers','Use place value and divisibility to reason about numbers.',['Two-digit and three-digit forms','Divisibility tests','Forming number puzzles']],
    ].map(([title, focus, concepts]) => ({ title: title as string, focus: focus as string, concepts: concepts as string[] })),
    science: [
      ['Crop Production and Management','Study agricultural practices from soil preparation to storage.',['Preparation and sowing','Manure, fertilisers and irrigation','Harvesting and storage']],
      ['Microorganisms: Friend and Foe','Explore useful and harmful microorganisms.',['Food preservation','Microbes in medicine and agriculture','Communicable diseases and prevention']],
      ['Synthetic Fibres and Plastics','Compare manufactured fibres and polymers.',['Rayon, nylon, polyester and acrylic','Thermoplastics and thermosetting plastics','Responsible plastic use']],
      ['Materials: Metals and Non-Metals','Relate material properties to everyday uses.',['Physical properties','Reactions with oxygen, water and acids','Uses and exceptions']],
      ['Coal and Petroleum','Understand fossil fuels and their conservation.',['Formation of fossil fuels','Refining and products','Finite resources and conservation']],
      ['Combustion and Flame','Explain combustion and control of fire.',['Ignition temperature','Types of combustion','Flame zones and fuel efficiency']],
      ['Conservation of Plants and Animals','Connect biodiversity with habitat protection.',['Deforestation and its effects','Protected areas','Endemic and endangered species']],
      ['Cell: Structure and Functions','Relate cell structures to their roles.',['Cell membrane and cytoplasm','Nucleus and chromosomes','Plant and animal cells']],
      ['Reproduction in Animals','Compare modes of animal reproduction.',['Fertilisation and development','Viviparous and oviparous animals','Asexual reproduction']],
      ['Reaching the Age of Adolescence','Understand puberty and health.',['Changes at puberty','Hormones and endocrine glands','Personal hygiene and balanced nutrition']],
      ['Force and Pressure','Describe forces and their effects.',['Contact and non-contact forces','Pressure in solids, liquids and gases','Atmospheric pressure']],
      ['Friction','Explain friction and ways to change it.',['Factors affecting friction','Useful and harmful friction','Fluid friction']],
      ['Sound','Connect vibration with sound and hearing.',['Vibrating objects','Amplitude, frequency and pitch','Human ear and noise pollution']],
      ['Chemical Effects of Electric Current','Investigate conduction through liquids.',['Conductors and insulators','Chemical effects and electroplating','Testing conductivity safely']],
      ['Some Natural Phenomena','Learn about lightning and earthquakes.',['Charging by rubbing','Lightning and safety','Earthquakes and preparedness']],
      ['Light','Trace reflection and vision.',['Laws of reflection','Multiple images and dispersion','Human eye and care']],
      ['Stars and the Solar System','Observe celestial objects and their motions.',['Moon phases','Planets and satellites','Constellations and artificial satellites']],
      ['Pollution of Air and Water','Identify causes and reduce pollution.',['Air pollutants and greenhouse effect','Water contamination and treatment','Prevention and civic action']],
    ].map(([title, focus, concepts]) => ({ title: title as string, focus: focus as string, concepts: concepts as string[] })),
    english: [
      ['The Best Christmas Present in the World','Read the story through its letter frame and Christmas truce.',['Narrative frame','War and shared humanity','Connie’s memory and the ending']],['The Tsunami','Study accounts of survival and response.',['Multiple perspectives','Observation and preparedness','Resilience after disaster']],['Glimpses of the Past','Interpret a visual history of colonial India.',['Company rule','Resistance and reform','How images tell history']],['Bepin Choudhury’s Lapse of Memory','Follow a story built on memory and deception.',['Bepin’s character','Clues and irony','The reveal']],['The Summit Within','Explore the inner challenge behind mountaineering.',['Physical and mental endurance','Leadership','Reflection after achievement']],['This is Jody’s Fawn','Discuss responsibility and compassion.',['Jody’s promise','Care for wildlife','Character choices']],['A Visit to Cambridge','Read a conversation about disability and achievement.',['Stephen Hawking’s outlook','Questioning and respect','Access and independence']],['A Short Monsoon Diary','Notice nature through diary entries.',['Seasonal change','Personification','Diary form']],['The Great Stone Face—I','Track Ernest’s belief and character.',['Prophecy','Community expectations','Character and values']],['The Great Stone Face—II','Complete Ernest’s story and its central idea.',['Public recognition','Moral resemblance','Meaning of greatness']],
    ].map(([title, focus, concepts]) => ({ title: title as string, focus: focus as string, concepts: concepts as string[] })),
    'social-science': [
      ['How, When and Where','Use dates, sources and periodisation critically.',['Colonial records','Archives and surveys','Limits of period labels']],['From Trade to Territory','Trace the East India Company’s political expansion.',['Plassey and Buxar','Company administration','Resistance and annexation']],['Ruling the Countryside','Study revenue systems and rural change.',['Permanent Settlement','Ryotwari and Mahalwari','Indigo cultivation and peasant resistance']],['Tribals, Dikus and the Vision of a Golden Age','Examine tribal life and colonial change.',['Forest laws','Shifting cultivation','Birsa Munda and resistance']],['When People Rebel: 1857 and After','Understand causes and consequences of the uprising.',['Military and political grievances','Centres and leaders','Crown rule after 1857']],['Civilising the “Native”, Educating the Nation','Compare colonial education debates.',['Orientalist and Anglicist views','Macaulay and education policy','Nationalist education ideas']],['Women, Caste and Reform','Study social reform debates in the nineteenth century.',['Women’s education','Caste critique','Reformers and changing laws']],['The Making of the National Movement: 1870s–1947','Follow the growth of organised nationalism.',['Congress and early demands','Mass movements','Independence and partition']],['India After Independence','Review challenges of building a democratic nation.',['Integration of princely states','Linguistic reorganisation','Planning and democracy']],['Resources','Classify resources and plan their use.',['Natural and human resources','Conservation','Sustainable development']],['Land, Soil, Water, Natural Vegetation and Wildlife Resources','Explain distribution and conservation.',['Soil formation and erosion','Water scarcity','Biodiversity protection']],['Mineral and Power Resources','Compare minerals and energy sources.',['Distribution and extraction','Conventional energy','Renewables and conservation']],['Agriculture','Relate farming to climate and land use.',['Subsistence and commercial farming','Major crops','Agricultural development']],['Industries','Understand location and types of industries.',['Industrial systems','Factors of location','Industrial regions and pollution']],['Human Resources','Study population as a resource.',['Distribution and density','Population change','Quality of population']],['The Indian Constitution','Understand constitutional principles and rights.',['Federalism and parliamentary government','Separation of powers','Fundamental Rights']],['Understanding Secularism','Explain how the state treats religions equally.',['Freedom of religion','Principled distance','Indian constitutional safeguards']],['Why Do We Need a Parliament?','Connect elections with representation and accountability.',['Constituencies and representation','Lok Sabha and Rajya Sabha','Questioning the government']],['Understanding Laws','Explore how laws are made and challenged.',['Rule of law','Parliamentary lawmaking','Public protest and change']],['Judiciary','Trace the court system and access to justice.',['Independent judiciary','Court hierarchy','Public Interest Litigation']],['Understanding Our Criminal Justice System','Follow the process after a crime is reported.',['Police investigation','Fair trial and evidence','Rights of accused and victim']],['Understanding Marginalisation','Examine how communities face exclusion.',['Adivasi communities','Stereotypes and discrimination','Constitutional safeguards']],['Confronting Marginalisation','Study legal and civic responses to discrimination.',['SC/ST safeguards','Manual scavenging laws','Community action']],['Public Facilities','Assess access to essential services.',['Water, sanitation and health','Public provision','Equality and accountability']],['Law and Social Justice','Connect regulation with workers and consumers.',['Minimum wages and safety','Environmental regulation','Enforcement and accountability']],
    ].map(([title, focus, concepts]) => ({ title: title as string, focus: focus as string, concepts: concepts as string[] })),
  },
  '9': {
    science: ['Matter in Our Surroundings','Is Matter Around Us Pure?','Atoms and Molecules','Structure of the Atom','The Fundamental Unit of Life','Tissues','Motion','Force and Laws of Motion','Gravitation','Work and Energy','Sound','Improvement in Food Resources'].map((title) => ({ title, focus: `Build the NCERT concepts and applications in ${title.toLowerCase()}.`, concepts: [`Key terms and models in ${title.toLowerCase()}`, 'Observations, diagrams and examples', 'NCERT-style reasoning and applications'] })),
    mathematics: ['Number Systems','Polynomials','Coordinate Geometry','Linear Equations in Two Variables','Introduction to Euclid’s Geometry','Lines and Angles','Triangles','Quadrilaterals','Circles','Heron’s Formula','Surface Areas and Volumes','Statistics'].map((title) => ({ title, focus: `Develop definitions, methods and problem-solving in ${title.toLowerCase()}.`, concepts: [`Core definitions in ${title.toLowerCase()}`, 'Reasoning and worked applications', 'Exercise practice and checking results'] })),
    english: [['The Fun They Had','Compare future schooling with classroom learning.',['Margie and Tommy','Technology and learning','Irony in the ending']],['The Sound of Music','Read two biographies of musical achievement.',['Evelyn Glennie','Bismillah Khan','Persistence and practice']],['The Little Girl','Understand a child’s changing view of her father.',['Kezia’s fear','The father’s actions','Perspective and empathy']],['A Truly Beautiful Mind','Trace Einstein’s science and humanism.',['Scientific work','Pacifism','Biography and legacy']],['The Snake and the Mirror','Analyse humour and suspense in a first-person story.',['The doctor’s vanity','The snake encounter','Comic timing']],['My Childhood','Read an autobiographical account of childhood and values.',['Family and community','Prejudice','Role models']],['Packing','Explore comic narration and mishaps.',['Narrator and companions','Exaggeration','Humour']],['Reach for the Top','Study determination in two life stories.',['Santosh Yadav','Maria Sharapova','Ambition and sacrifice']],['The Bond of Love','Reflect on human-animal relationships.',['Bruno the sloth bear','Care and responsibility','Narrative viewpoint']],['Kathmandu','Observe a city through a traveller’s impressions.',['Contrasting shrines','Street life','Sensory detail']]] .map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
    'social-science': ['The French Revolution','Socialism in Europe and the Russian Revolution','Nazism and the Rise of Hitler','Forest Society and Colonialism','Pastoralists in the Modern World','India – Size and Location','Physical Features of India','Drainage','Climate','Natural Vegetation and Wildlife','Population','What is Democracy? Why Democracy?','Constitutional Design','Electoral Politics','Working of Institutions','Democratic Rights','The Story of Village Palampur','People as Resource','Poverty as a Challenge','Food Security in India'].map((title) => ({ title, focus: `Study the evidence, ideas and key relationships in ${title}.`, concepts: ['Key terms, people and processes','Use maps, sources or data where relevant','Explain causes, effects and examples'] })),
  },
  '10': {
    mathematics: [
      ['Real Numbers','Use prime factorisation to reason about HCF, LCM and irrational numbers.',['Fundamental Theorem of Arithmetic','HCF and LCM from prime factors','Proofs of irrationality']],
      ['Polynomials','Connect zeroes of a polynomial with its algebraic factors.',['Zeroes of linear and quadratic polynomials','Relationship between zeroes and coefficients','Graphical interpretation']],
      ['Pair of Linear Equations in Two Variables','Represent and solve two simultaneous linear conditions.',['Graphical solutions','Substitution and elimination','Consistency and number of solutions']],
      ['Quadratic Equations','Model problems with quadratic equations and interpret their roots.',['Factorisation and completing the square','Quadratic formula','Discriminant and nature of roots']],
      ['Arithmetic Progressions','Recognise constant-difference sequences and calculate their terms and sums.',['Common difference','nth term','Sum of first n terms']],
      ['Triangles','Use similarity to establish relationships between corresponding sides.',['Basic Proportionality Theorem','Similarity criteria','Pythagoras theorem']],
      ['Coordinate Geometry','Use coordinates to find lengths and divide line segments.',['Distance formula','Section formula','Coordinate applications']],
      ['Introduction to Trigonometry','Define trigonometric ratios for acute angles and use their identities.',['Sine, cosine and tangent','Reciprocal ratios','Trigonometric identities']],
      ['Some Applications of Trigonometry','Use angles of elevation and depression to solve height and distance problems.',['Line of sight','Elevation and depression','Right-triangle modelling']],
      ['Circles','Relate tangents to radii and compare tangent segments from an external point.',['Tangent perpendicular to radius','Equal tangent lengths','Geometric proofs']],
      ['Areas Related to Circles','Find lengths and areas involving arcs, sectors and combinations of circles.',['Circumference and area','Arc length and sector area','Composite figures']],
      ['Surface Areas and Volumes','Calculate measures for combinations of solids and converted shapes.',['Curved and total surface area','Volume of combined solids','Unit conversion']],
      ['Statistics','Summarise grouped data using standard measures of central tendency.',['Mean of grouped data','Median and cumulative frequency','Mode']],
      ['Probability','Calculate probabilities for simple events using equally likely outcomes.',['Sample space','Complementary events','Experimental and theoretical probability']],
    ].map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
    science: [
      ['Chemical Reactions and Equations','Represent chemical changes and explain how atoms are conserved.',['Writing and balancing equations','Combination, decomposition and displacement','Oxidation and reduction']],
      ['Acids, Bases and Salts','Explain indicator changes, neutralisation and the properties of common salts.',['Indicators and pH','Reactions of acids and bases','Common salts and their uses']],
      ['Metals and Non-metals','Relate physical and chemical properties to reactivity and everyday uses.',['Reactivity series','Reactions with oxygen, water and acids','Ionic compounds and extraction']],
      ['Carbon and its Compounds','Connect carbon’s bonding to the variety and properties of organic compounds.',['Covalent bonding and catenation','Homologous series and functional groups','Ethanol, ethanoic acid and soaps']],
      ['Life Processes','Trace the essential processes that keep organisms alive.',['Nutrition','Respiration','Transport and excretion']],
      ['Control and Coordination','Explain how nervous and hormonal systems coordinate responses.',['Neuron and reflex arc','Brain and spinal cord','Plant and animal hormones']],
      ['How do Organisms Reproduce?','Compare reproductive strategies and explain how they support continuity of life.',['Asexual reproduction','Human reproductive systems','Reproductive health and contraception']],
      ['Heredity','Explain how traits are inherited and how sex is determined in humans.',['Mendelian inheritance','Dominant and recessive traits','Sex determination']],
      ['Light: Reflection and Refraction','Apply ray diagrams and laws to mirrors and lenses.',['Reflection and mirror formula','Refraction and refractive index','Lens formula and magnification']],
      ['The Human Eye and the Colourful World','Describe vision, common defects and the formation of natural optical phenomena.',['Accommodation and eye defects','Prism and dispersion','Scattering of light']],
      ['Electricity','Relate current, potential difference and resistance in electric circuits.',['Ohm’s law','Series and parallel circuits','Electrical power and heating']],
      ['Magnetic Effects of Electric Current','Describe magnetic fields due to currents and the operation of electric devices.',['Field lines and right-hand thumb rule','Force on a current-carrying conductor','Motor, generator and domestic circuits']],
      ['Our Environment','Explain ecosystem interactions and the movement of matter and energy.',['Food chains and trophic levels','Biodegradable and non-biodegradable waste','Ozone layer and waste management']],
    ].map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
    english: [
      ['A Letter to God & Dust of Snow','Compare Lencho’s faith and the story’s irony with Frost’s small moment of renewal in nature.',['Lencho’s crop loss and letter','The postmaster’s kindness and ironic misunderstanding','Crow, hemlock tree and a changed mood']],
      ['Nelson Mandela: Long Walk to Freedom','Read Mandela’s account of the inauguration and reflect on courage, freedom and responsibility.',['Apartheid and the struggle for equality','Twin obligations and courage','The inauguration and its symbolism']],
      ['Fire and Ice','Interpret Frost’s short poem about destructive human impulses.',['Fire and desire','Ice and hatred','Imagery and compressed form']],
      ['Two Stories about Flying','Follow two accounts of fear overcome through flight.',['His First Flight','The Black Aeroplane','Courage and uncertainty']],
      ['A Tiger in the Zoo','Contrast a caged tiger’s life with its natural freedom.',['Confinement and anger','The wild habitat','Repetition and imagery']],
      ['From the Diary of Anne Frank','Explore a young writer’s self-expression, loneliness and classroom experience.',['The diary as confidante','Anne’s view of talkative nature','Mr Keesing and the essays']],
      ['How to Tell Wild Animals','Enjoy a humorous poem that plays with familiar animal descriptions.',['Comic exaggeration','Rhyme and rhythm','Recognising the animals']],
      ['The Hundred Dresses I','Understand Wanda’s isolation and the class’s treatment of her.',['Wanda’s claim about dresses','Maddie and Peggy','Bullying and empathy']],
      ['The Ball Poem','Consider loss and a child’s first lesson in accepting it.',['The lost ball','Learning to live with loss','Symbolism and tone']],
      ['The Hundred Dresses II','Follow the consequences of the class’s behaviour and Wanda’s response.',['The contest drawings','A letter from Wanda','Regret and responsibility']],
      ['Amanda!','Read a child’s imagined escapes as a response to constant instruction.',['Commands and daydreams','The mermaid and Rapunzel','Voice and contrast']],
      ['Glimpses of India','Travel through three portraits of Indian culture and place.',['A Baker from Goa','Coorg','Tea from Assam']],
      ['The Trees','Interpret the movement of trees as an image of freedom and renewal.',['The house and the forest','Personification','Movement and change']],
      ['Mijbil the Otter','Read Maxwell’s account of friendship with an unusual pet.',['Mijbil’s habits','Travel and adjustment','Observation and affection']],
      ['Fog','Understand how a brief image makes fog feel like a living presence.',['Cat comparison','Stillness and movement','Imagery']],
      ['Madam Rides the Bus','Follow Valli’s independent bus journey and growing understanding.',['Planning the ride','The journey and its sights','The dead cow and changed mood']],
      ['The Tale of Custard the Dragon','Enjoy a comic ballad about bravery and appearance.',['Custard and the other pets','The pirate encounter','Ballad form and irony']],
      ['The Sermon at Benares','Learn how Kisa Gotami’s grief changes through the Buddha’s teaching.',['The mustard seed task','Universality of death','Acceptance and compassion']],
      ['For Anne Gregory','Reflect on love, appearance and inner worth.',['Hair and physical beauty','Human and divine love','Dialogue and contrast']],
      ['The Proposal','Explore a one-act comedy driven by pride, property and quarrels.',['Lomov and Natalya','The land and dog arguments','Farce and social satire']],
      ['A Triumph of Surgery','Understand how care and routine restore Tricki’s health.',['Tricki’s overfeeding and illness','The veterinary treatment','Mrs Pumphrey’s affection and excess']],
      ['The Thief’s Story','Follow a young thief’s choice to begin again after Anil’s trust.',['Hari Singh’s motives','The stolen money and return','Trust, education and change']],
      ['The Midnight Visitor','Enjoy a suspense story in which intelligence defeats an armed intruder.',['Ausable’s calm improvisation','The balcony story','Fowler’s surprise']],
      ['A Question of Trust','See how a careful thief is deceived by an even more confident criminal.',['Horace Danby’s habits','The woman posing as the owner','Irony and the failed theft']],
      ['Footprints Without Feet','Trace Griffin’s scientific discovery and the harm caused by his choices.',['Invisibility and its limits','Griffin’s behaviour','The difference between knowledge and responsibility']],
      ['The Making of a Scientist','Study how curiosity, persistence and guidance shape Richard Ebright’s work.',['Early interests and collecting','Science projects and mentors','Research habits']],
      ['The Necklace','Examine how pride and appearances lead to a decade of hardship.',['Mathilde’s dissatisfaction','The lost necklace','Irony and the cost of appearances']],
      ['Bholi','Follow Bholi’s growth from a frightened child to a self-respecting young woman.',['Neglect and education','The teacher’s encouragement','Her decision at the wedding']],
      ['The Book That Saved the Earth','Read a comic play about Martians who misinterpret a book of nursery rhymes.',['Think-Tank’s assumptions','The invasion plan','Books, language and misunderstanding']],
    ].map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
    'social-science': [
      ['The Rise of Nationalism in Europe','Trace how revolutionary ideas, cultural movements and political struggles shaped European nation-states.',['French Revolution and the nation','Liberal nationalism and culture','Unification of Germany and Italy']],
      ['Nationalism in India','Follow the growth of mass nationalism and the different groups that shaped it.',['Satyagraha and Non-Cooperation','Civil Disobedience and Salt March','Participation, limits and symbols']],
      ['The Making of a Global World','Study how trade, migration, technology and empire connected economies over time.',['Pre-modern connections','Nineteenth-century trade and migration','Depression and post-war change']],
      ['The Age of Industrialisation','Examine how industrial production transformed work, markets and daily life.',['Proto-industrialisation','Factories and workers','Industrial growth in India']],
      ['Print Culture and the Modern World','Explore how print changed communication, religion, politics and public debate.',['Printing in Europe and India','New readers and reform','Print, censorship and nationalism']],
      ['Resources and Development','Classify resources and connect planning with sustainable development.',['Resource types and development','Land, soil and conservation','Planning and sustainable use']],
      ['Forest and Wildlife Resources','Understand biodiversity loss and the ways communities conserve forests and wildlife.',['Flora and fauna','Causes of depletion','Conservation and community action']],
      ['Water Resources','Explain water scarcity and compare ways to manage water.',['Demand and multipurpose projects','Rainwater harvesting','Conservation and conflicts']],
      ['Agriculture','Connect farming systems and crops with climate, soil and national development.',['Types of farming','Cropping patterns','Technological and institutional reforms']],
      ['Minerals and Energy Resources','Locate mineral and energy resources and weigh their uses and conservation.',['Occurrence of minerals','Conventional energy','Renewable energy and conservation']],
      ['Manufacturing Industries','Show how industries add value and influence jobs, trade and the environment.',['Industrial location','Major industries','Industrial pollution and control']],
      ['Lifelines of National Economy','Explain how transport, communication and trade connect people and regions.',['Roadways, railways and waterways','Communication and trade','Tourism and national integration']],
      ['Power Sharing','Compare ways democratic systems distribute power among groups and institutions.',['Belgium and Sri Lanka','Forms of power sharing','Why sharing matters']],
      ['Federalism','Explain how constitutional powers are divided across levels of government.',['Features of federalism','Language policy and decentralisation','India’s federal practice']],
      ['Gender, Religion and Caste','Examine how social differences enter politics and how equality is protected.',['Gender division','Communalism and secularism','Caste and politics']],
      ['Political Parties','Understand why parties matter and how they can be strengthened.',['Party functions and systems','Challenges to parties','Reform proposals']],
      ['Outcomes of Democracy','Assess democracy through accountability, responsiveness, equality and dignity.',['Accountable government','Economic and social outcomes','Dignity and freedom']],
      ['Development','Compare development goals and use income and other measures critically.',['Different goals','National development','Income and sustainability']],
      ['Sectors of the Indian Economy','Classify economic activity and examine employment and public provision.',['Primary, secondary and tertiary sectors','Employment and underemployment','Public and organised sectors']],
      ['Money and Credit','Explain how money enables exchange and how credit affects borrowers.',['Modern forms of money','Banks and credit','Formal and informal borrowing']],
      ['Globalisation and the Indian Economy','Trace how production, investment and trade link countries and affect workers and consumers.',['Multinational production','Liberalisation and trade','Benefits and challenges']],
      ['Consumer Rights','Recognise consumer protections and the institutions that support informed choices.',['Consumer rights and responsibilities','Standards and labels','Redressal and consumer awareness']],
    ].map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
  },
  '11': {
    mathematics: ['Sets','Relations and Functions','Trigonometric Functions','Complex Numbers and Quadratic Equations','Linear Inequalities','Permutations and Combinations','Binomial Theorem','Sequences and Series','Straight Lines','Conic Sections','Introduction to Three-dimensional Geometry','Limits and Derivatives','Statistics','Probability'].map((title)=>({title,focus:`Build the definitions and methods of ${title.toLowerCase()}.`,concepts:['Definitions and notation','Derivations and worked examples','Applications and exercise problems']})),
    physics: ['Units and Measurements','Motion in a Straight Line','Motion in a Plane','Laws of Motion','Work, Energy and Power','System of Particles and Rotational Motion','Gravitation','Mechanical Properties of Solids','Mechanical Properties of Fluids','Thermal Properties of Matter','Thermodynamics','Kinetic Theory','Oscillations','Waves'].map((title)=>({title,focus:`Connect physical models, equations and experiments in ${title.toLowerCase()}.`,concepts:['Physical quantities and assumptions','Graphs, equations and units','Experimental or real-world applications']})),
    chemistry: ['Some Basic Concepts of Chemistry','Structure of Atom','Classification of Elements and Periodicity in Properties','Chemical Bonding and Molecular Structure','Chemical Thermodynamics','Equilibrium','Redox Reactions','Organic Chemistry: Some Basic Principles and Techniques','Hydrocarbons'].map((title)=>({title,focus:`Understand the models and applications introduced in ${title.toLowerCase()}.`,concepts:['Core terms and representations','Equations, trends or mechanisms','NCERT numerical and reasoning practice']})),
    biology: ['The Living World','Biological Classification','Plant Kingdom','Animal Kingdom','Morphology of Flowering Plants','Anatomy of Flowering Plants','Structural Organisation in Animals','Cell: The Unit of Life','Biomolecules','Cell Cycle and Cell Division','Photosynthesis in Higher Plants','Respiration in Plants','Plant Growth and Development','Breathing and Exchange of Gases','Body Fluids and Circulation','Excretory Products and their Elimination','Locomotion and Movement','Neural Control and Coordination','Chemical Coordination and Integration'].map((title)=>({title,focus:`Relate structure, function and evidence in ${title.toLowerCase()}.`,concepts:['Important structures and terminology','Processes and their sequence','Diagrams, comparisons and applications']})),
    english: [['The Portrait of a Lady','Trace a grandmother-grandson relationship over time.',['Village and city phases','Faith and routine','Narrative voice']],['We’re Not Afraid to Die… if We Can All Be Together','Study courage during a sea voyage crisis.',['Storm and damage','Teamwork','Family resilience']],['Discovering Tut: The Saga Continues','Connect archaeology with scientific investigation.',['Tutankhamun','CT scanning','Evidence and interpretation']],['The Ailing Planet: The Green Movement’s Role','Understand sustainable development arguments.',['Environmental movements','Population and consumption','Sustainable future']],['The Adventure','Explore history and alternate realities in fiction.',['Rajendra’s experience','Scientific speculation','Narrative structure']],['Silk Road','Read a travel account of a Himalayan journey.',['Landscape and altitude','Cultural encounters','Travel writing']]] .map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
  },
  '12': {
    mathematics: ['Relations and Functions','Inverse Trigonometric Functions','Matrices','Determinants','Continuity and Differentiability','Applications of Derivatives','Integrals','Applications of Integrals','Differential Equations','Vector Algebra','Three-dimensional Geometry','Linear Programming','Probability'].map((title)=>({title,focus:`Develop methods and applications for ${title.toLowerCase()}.`,concepts:['Definitions and notation','Key results and worked methods','Applications and board-style practice']})),
    physics: ['Electric Charges and Fields','Electrostatic Potential and Capacitance','Current Electricity','Moving Charges and Magnetism','Magnetism and Matter','Electromagnetic Induction','Alternating Current','Electromagnetic Waves','Ray Optics and Optical Instruments','Wave Optics','Dual Nature of Radiation and Matter','Atoms','Nuclei','Semiconductor Electronics'].map((title)=>({title,focus:`Connect physical principles, diagrams and quantitative methods in ${title.toLowerCase()}.`,concepts:['Physical model and key definitions','Equations, units and diagrams','Applications and numerical reasoning']})),
    chemistry: ['Solutions','Electrochemistry','Chemical Kinetics','The d- and f-Block Elements','Coordination Compounds','Haloalkanes and Haloarenes','Alcohols, Phenols and Ethers','Aldehydes, Ketones and Carboxylic Acids','Amines','Biomolecules'].map((title)=>({title,focus:`Study the concepts and applications of ${title.toLowerCase()}.`,concepts:['Key definitions and patterns','Equations, structures or mechanisms','Properties, applications and NCERT questions']})),
    biology: ['Sexual Reproduction in Flowering Plants','Human Reproduction','Reproductive Health','Principles of Inheritance and Variation','Molecular Basis of Inheritance','Evolution','Human Health and Disease','Microbes in Human Welfare','Biotechnology: Principles and Processes','Biotechnology and its Applications','Organisms and Populations','Ecosystem','Biodiversity and Conservation'].map((title)=>({title,focus:`Explain biological processes and evidence in ${title.toLowerCase()}.`,concepts:['Structures, terms and diagrams','Processes and cause-effect relationships','Examples, applications and NCERT reasoning']})),
    english: [['The Last Lesson','Explore language, identity and regret in Daudet’s story.',['Franz’s changing attitude','M. Hamel’s farewell','Language and occupation']],['Lost Spring','Examine childhood poverty through two lives.',['Saheb and rag-picking','Mukesh and bangle work','Social structures']],['Deep Water','Follow the narrator’s recovery from fear.',['Early experiences','Training and persistence','Overcoming fear']],['The Rattrap','Analyse a tale of temptation and kindness.',['The peddler’s worldview','The crofter and ironmaster','Edla’s compassion']],['Indigo','Study Gandhi’s work with Champaran peasants.',['Sharecropping','Inquiry and action','Leadership and self-reliance']],['Poets and Pancakes','Read a humorous account of a film studio.',['Gemini Studios','Workplace personalities','Satire and memoir']],['The Interview','Consider the form and debate around interviews.',['Interview craft','Umberto Eco','Different viewpoints']],['Going Places','Understand adolescent dreams and reality.',['Sophie’s ambitions','Fantasy and truth','Character relationships']],['The Tiger King','Read political satire through a fable.',['Prophecy','Power and pride','Irony']],['The Enemy','Discuss duty and humanity in wartime.',['Dr Sadao’s dilemma','Hana’s role','Compassion across conflict']],['On the Face of It','Explore isolation, appearance and friendship.',['Derry and Mr Lamb','Disability and prejudice','Change through conversation']]] .map(([title, focus, concepts])=>({title:title as string,focus:focus as string,concepts:concepts as string[]})),
  },
};

const additionalPlans = (...items: [string, string, string[]][]): ChapterPlan[] =>
  items.map(([title, focus, concepts]) => ({ title, focus, concepts }));

// Additional chapters from the paired NCERT readers and poetry sections.
export const EXTRA_PLANS: Record<string, Record<string, ChapterPlan[]>> = {
  '8': { english: additionalPlans(
    ['The Ant and the Cricket','A fable about planning, work and consequences.',['The cricket’s summer','The ant’s refusal','The moral']],
    ['Geography Lesson','An aerial view changes the speaker’s understanding of human divisions.',['Changing perspective','Borders and conflict','Contrast']],
    ['Macavity: The Mystery Cat','A comic portrait of a cat who evades every accusation.',['Macavity as “Master Criminal”','Exaggeration','Rhythm and humour']],
    ['The Last Bargain','A speaker discovers meaningful work and freedom.',['The king, strong man and fair maid','The child’s offer','Freedom and fulfilment']],
    ['The School Boy','A child’s joy in nature contrasts with rigid schooling.',['Morning in nature','The classroom','Bird and plant comparisons']],
    ['When I Set Out for Lyonnesse','A mysterious journey brings an inward transformation.',['The journey','The speaker’s change','Sound and atmosphere']],
    ['On the Grasshopper and Cricket','Nature’s music continues through every season.',['Grasshopper in summer','Cricket in winter','The continuity of song']],
    ['The Duck and the Kangaroo','A playful conversation imagines a journey and a new friendship.',['The duck’s wish to travel','The kangaroo’s conditions','Rhyme and dialogue']],
    ['How the Camel Got His Hump','A humorous origin tale about idleness and its consequences.',['The camel’s refusal to work','The Djinn’s solution','The “humph”']],
    ['Children at Work','Velu’s first day in Chennai reveals the realities of street work.',['Migration and poverty','Jaya’s work','Survival and dignity']],
    ['The Selfish Giant','Generosity transforms a garden and its owner.',['The wall and endless winter','The children’s return','The Giant’s change']],
    ['The Treasure Within','Hameed Daud’s strengths emerge through practical learning.',['School difficulties','A teacher’s insight','Different kinds of intelligence']],
    ['Princess September','A story about affection, freedom and possessiveness.',['The singing bird','The sisters’ advice','The bird’s freedom']],
    ['The Fight','A rivalry between Ranji and Suraj becomes a friendship.',['The pool dispute','Their contest','Respect and companionship']],
    ['The Open Window','Vera’s confident invention creates a comic misunderstanding.',['Framton Nuttel’s nerves','Vera’s story','The final twist']],
    ['Jalebis','A boy weighs temptation, money and responsibility.',['The coins and sweets','The prayer','Conscience and consequences']],
    ['The Comet—I','Professor Shonku’s discovery reveals a danger to Earth.',['The comet’s approach','Scientific observation','The threat']],
    ['The Comet—II','Scientists coordinate a plan to avert a collision.',['Deven’s calculations','International cooperation','Science and suspense']],
  ) },
  '9': { english: additionalPlans(
    ['If I Were You','Gerrard uses quick thinking to escape an intruder.',['The intruder’s plan','Gerrard’s invented identity','Drama and suspense']],
    ['The Road Not Taken','A speaker reflects on choice and the stories people tell about their paths.',['Two paths','Choice and uncertainty','Retrospective voice']],
    ['Wind','The wind becomes a test of resilience.',['Destructive force','Weak and strong structures','The speaker’s advice']],
    ['Rain on the Roof','Rain at night stirs memories of the speaker’s mother.',['The sound of rain','Memory','Sound imagery']],
    ['The Lake Isle of Innisfree','A speaker longs for a quiet life close to nature.',['The imagined cabin','Natural sounds','Inner refuge']],
    ['A Legend of the Northland','A narrative poem about generosity and greed.',['Saint Peter and the woman','Refusal to share','Transformation']],
    ['No Men Are Foreign','Shared human needs make hostility self-defeating.',['Common needs','Shared earth','Rejecting hatred']],
    ['On Killing a Tree','A tree’s resilience makes its destruction a violent process.',['The tree’s growth','The failed cut','Uprooting']],
    ['The Snake Trying','A snake appears as a vulnerable creature fleeing human attack.',['The snake’s movement','The pursuing stick','Compassion for wildlife']],
    ['A Slumber Did My Spirit Seal','A quiet elegy reflects on loss and nature.',['Loss and stillness','The earth’s motion','Elegiac tone']],
    ['The Lost Child','A child’s fairground desires give way to the need for family after separation.',['The fair','Separation','Family']],
    ['The Adventures of Toto','A mischievous pet monkey disrupts a household and train journey.',['Toto’s tricks','The journey','Keeping a wild animal']],
    ['Iswaran the Storyteller','Iswaran’s dramatic ghost story unsettles Mahendra.',['Iswaran’s style','The ghost tale','Imagination and belief']],
    ['In the Kingdom of Fools','A fable contrasts foolish rule with practical wisdom.',['The king’s orders','The guru and disciple','Justice and common sense']],
    ['The Happy Prince','The Prince and the Swallow show compassion through sacrifice.',['The statue’s jewels','The Swallow’s choices','Kindness and value']],
    ['Weathering the Storm in Ersama','Prashant shows leadership in the aftermath of a cyclone.',['The storm’s impact','Community relief','Courage and service']],
    ['The Last Leaf','Hope and sacrifice help a sick young artist recover.',['Johnsy’s belief','Behrman’s painting','The last leaf']],
    ['A House Is Not a Home','A fire and a new school reshape a teenager’s sense of belonging.',['Loss','Isolation','The cat’s return']],
    ['The Beggar','Lushkoff changes through work and Olga’s compassion.',['Sergei’s offer','Olga’s help','Dignity and reform']],
  ) },
  '11': { english: additionalPlans(
    ['Landscape of the Soul','Compare Eastern and Western artistic traditions and ways of seeing.',['Wu Daozi’s painting','Chinese perspective','European realism']],
    ['The Browning Version','A schoolroom scene reveals the complicated relationship between a teacher and student.',['Taplow and Crocker-Harris','The Greek play','Respect and character']],
    ['A Photograph','A photograph makes the speaker reflect on time, memory and loss.',['The beach photograph','The mother’s laughter','Silence and grief']],
    ['The Laburnum Top','A quiet tree comes alive when a goldfinch arrives.',['The still tree','The bird and its young','Sound and movement']],
    ['The Voice of the Rain','Rain describes its journey through a personified conversation.',['Rain’s cycle','Personification','Renewal']],
    ['Childhood','The speaker asks when childhood ended and independent thought began.',['Loss of innocence','Reason and hypocrisy','The forgotten self']],
    ['Father to Son','A parent reflects on distance and the wish to rebuild a relationship.',['Misunderstanding','Shared home','Reconciliation']],
    ['The Summer of the Beautiful White Horse','Two cousins face a choice between family honour and temptation.',['Aram and Mourad','The horse','Honesty and belonging']],
    ['The Address','A daughter confronts the objects and memories left after wartime loss.',['Mrs Dorling','The familiar belongings','Choosing to let go']],
    ['Ranga’s Marriage','A humorous narrator recounts a village matchmaking scheme.',['Ranga’s return','Shastri’s plan','Narrative humour']],
    ['Albert Einstein at School','Einstein questions rote learning and an inflexible school system.',['Einstein’s curiosity','The history exam','Learning and authority']],
    ['Mother’s Day','A family comedy shows the value of recognising a mother’s work.',['Mrs Pearson’s routine','The personality exchange','Respect at home']],
    ['Birth','A doctor’s difficult night becomes a moment of professional renewal.',['Andrew’s exhaustion','The delivery','Persistence and hope']],
    ['The Tale of Melon City','A verse satire examines arbitrary justice and passive leadership.',['The arch and the trial','The king’s execution','The melon and the crowd']],
  ) },
  '12': { english: additionalPlans(
    ['My Mother at Sixty-six','A brief journey brings the speaker face to face with ageing and separation.',['The sleeping mother','The young trees and children','The repeated farewell']],
    ['Keeping Quiet','The poet imagines a pause that could encourage reflection and peace.',['Silence and stillness','Human activity','Renewal, not death']],
    ['A Thing of Beauty','Beauty offers enduring comfort amid hardship.',['Beautiful things','Nature’s gifts','The endless fountain']],
    ['A Roadside Stand','A rural family waits for fair opportunity while facing urban indifference.',['The stand and passing cars','Economic inequality','The speaker’s anger']],
    ['Aunt Jennifer’s Tigers','Aunt Jennifer’s embroidery contrasts with the constraints of her marriage.',['The fearless tigers','Aunt Jennifer’s hands','Art and oppression']],
    ['The Third Level','A man’s search for escape blurs fantasy, memory and reality.',['Charley’s discovery','Galesburg','The letter and ambiguity']],
    ['Journey to the End of the Earth','An Antarctic visit connects climate, deep time and human impact.',['Antarctica’s history','Ecosystem fragility','Climate change']],
    ['Evans Tries an O-Level','A carefully planned prison escape exposes gaps in official security.',['Evans’s disguise','The exam operation','The final deception']],
    ['Memories of Childhood','Two autobiographical accounts confront cultural and caste discrimination.',['Zitkala-Sa’s resistance to a forced haircut','Bama’s encounter with caste discrimination','Identity, dignity and education']],
  ) },
};

function makeTopic(subject: Subject, grade: string, plan: ChapterPlan, index: number): Topic {
  const pwVideo = getPhysicsWallahVideo(grade, subject.id, plan.title);
  const class10MathVideoUrl = grade === '10' && subject.id === 'mathematics'
    ? CLASS_10_MATH_VIDEO_URLS[plan.title.trim().toLocaleLowerCase()]
    : undefined;
  const selectedVideoUrl = class10MathVideoUrl || pwVideo.videoUrl;
  const selectedVideoId = class10MathVideoUrl?.match(/(?:youtu\.be\/|youtube\.com\/(?:live\/|embed\/|watch\?v=))([^?&/]+)/)?.[1];
  const isMath = subject.id.includes('math');
  const isScience = subject.id.includes('sci') || subject.id.includes('phy') || subject.id.includes('chem') || subject.id.includes('bio');

  // 1. Objectives (4 rigorous, active-learning milestones)
  const objectives = [
    `Master foundational definitions, terminology, and notation in ${plan.title}.`,
    `Understand the core conceptual mechanism: ${plan.focus}`,
    `Analyze and solve standard NCERT problems involving ${plan.concepts.slice(0, 2).join(' and ')}.`,
    `Apply systematic verification methods, avoid common board exam pitfalls, and present solutions clearly.`,
  ];

  // 2. Core Formulas / Principles tailored to discipline
  const keyFormulasOrConcepts = isMath
    ? [
        {
          label: `${plan.title} — Governing Definition`,
          formulaOrRule: `Standard Form & Domain Constraints for ${plan.title}`,
          note: `Ensure all boundary values and domain restrictions are checked before applying transformation identities.`,
        },
        {
          label: `${plan.concepts[0] || 'Core Analytical Theorem'}`,
          formulaOrRule: `Algebraic Verification: LHS ≡ RHS under specified conditions`,
          note: `Step-by-step deduction rule tested frequently in multi-mark NCERT and board questions.`,
        },
        {
          label: `${plan.concepts[1] || 'Identity / Property'}`,
          formulaOrRule: `Invariant relation for ${plan.title}`,
          note: `Simplification shortcut to reduce computation time and verify final numerical answers.`,
        },
      ]
    : isScience
    ? [
        {
          label: `${plan.title} — Fundamental Law`,
          formulaOrRule: `Governing physical / chemical law for ${plan.title}`,
          note: `Relates physical quantities with strict adherence to SI units and dimensional homogeneity.`,
        },
        {
          label: `${plan.concepts[0] || 'Conservation & Equilibrium Principle'}`,
          formulaOrRule: `System Invariant: Input = Output + Dissipation (or balanced state)`,
          note: `Essential conceptual checkpoint when modeling experiments or solving numerical problems.`,
        },
        {
          label: `${plan.concepts[1] || 'Empirical Verification'}`,
          formulaOrRule: `Observable Criteria for ${plan.title}`,
          note: `Experimental signature observed during laboratory demonstrations and board practicals.`,
        },
      ]
    : [
        {
          label: `${plan.title} — Thematic Premise`,
          formulaOrRule: `Central Thesis of ${plan.title}`,
          note: `The overarching idea that drives narrative development, character choices, and structural pacing.`,
        },
        {
          label: `${plan.concepts[0] || 'Analytical Motif'}`,
          formulaOrRule: `Literary Device & Textual Evidence`,
          note: `Identify specific quotes and imagery that reinforce the central message.`,
        },
      ];

  // 3. Multi-Section Detailed Study Notes
  const studyNotes = [
    {
      sectionTitle: `1. Foundational Architecture & Core Theory — ${plan.title}`,
      content: [
        `In Class ${grade} ${subject.name}, "${plan.title}" serves as an essential milestone. The core conceptual focus centers on: ${plan.focus}`,
        ...plan.concepts.map(
          (concept, i) =>
            `• ${concept}: This represents key pillar ${i + 1} of the chapter. To master this concept, students must understand not just the rote definition, but how it connects logically to surrounding principles. In NCERT and board evaluations, examiners expect clear explanations supported by diagrams, step-by-step reasoning, or algebraic proof.`
        ),
        `Understanding these concepts sequentially eliminates confusion and provides the foundation required for advanced applications in subsequent chapters.`,
      ],
      calloutBox: {
        type: 'remember' as const,
        title: 'Core Conceptual Rule',
        text: `Always begin problem-solving by writing down the given values, required unknowns, and underlying definition or theorem before carrying out calculations.`,
      },
    },
    {
      sectionTitle: `2. Step-by-Step Methodology & Problem-Solving Algorithms`,
      content: [
        `When approaching questions from "${plan.title}" in assignments and examinations, follow this structured 4-step framework:`,
        `1. Identify and Categorize: Determine which specific case or condition applies to the problem statement. State the governing theorem or definition explicitly.`,
        `2. Establish Equations / Logical Steps: Translate the verbal statement into standard mathematical expressions, chemical equations, or analytical arguments.`,
        `3. Execute Calculation / Derivation: Carry out the algebraic or physical reasoning step-by-step. Keep intermediate calculations tidy and label each milestone.`,
        `4. Check Validity and Units: Verify whether the final result is physically plausible, within the mathematical domain, and accompanied by correct standard units.`,
      ],
      calloutBox: {
        type: 'tip' as const,
        title: 'Board Scoring Tip',
        text: `In CBSE and state board marking schemes, step-marks are awarded for stating formulas, writing balanced equations, and drawing neat labeled diagrams even if the final arithmetic calculation contains a minor slip.`,
      },
    },
    {
      sectionTitle: `3. Common Student Pitfalls & Error Prevention Strategy`,
      content: [
        `Over years of board examination analysis, students commonly lose marks in "${plan.title}" due to three recurring pitfalls:`,
        `• Sign and Domain Errors: Neglecting negative signs, failing to check division by zero, or ignoring domain constraints (e.g. real numbers vs. integers).`,
        `• Incomplete Justifications: Writing the final answer directly without quoting the specific theorem or rule that justifies the transition.`,
        `• Unit Inconsistency: Mixing centimeters with meters, Celsius with Kelvin, or forgetting exponents in dimensional formulas.`,
        `By deliberately reviewing your work against this checklist, you can easily secure full marks on 3-mark and 5-mark subjective questions.`,
      ],
      calloutBox: {
        type: 'warning' as const,
        title: 'High-Frequency Exam Trap',
        text: `Beware of assumptions not stated in the question! Always justify why a formula or rule applies before using it.`,
      },
    },
  ];

  // 4. Interactive Self-Check Practice Questions
  const practiceQuestions = [
    {
      id: `pq-${grade}-${subject.id}-${index + 1}-1`,
      question: `Explain the fundamental concept of "${plan.concepts[0] || plan.title}" in your own words, stating its primary rule or condition.`,
      hint: `Start by recalling the official NCERT definition, then explain how it applies in a simple textbook example.`,
      solution: `1. Definition: ${plan.concepts[0] || plan.title} is a core principle in ${plan.title} designed to ${plan.focus.toLowerCase()}.\n\n2. Key Condition: To satisfy this principle, the standard governing criteria must be established step-by-step.\n\n3. Application: In board questions, state the principle clearly, define all variables used, and show a brief one-line verification.`,
    },
    {
      id: `pq-${grade}-${subject.id}-${index + 1}-2`,
      question: `What are the crucial step-marks to secure when solving a multi-mark question on "${plan.title}"?`,
      hint: `Think about the 4-step framework: Given/To Prove, Governing Formula/Theorem, Step-by-Step Derivation, and Concluding Unit/Statement.`,
      solution: `To achieve 100% marks on a 3-mark or 5-mark question in this chapter:\n• Step 1: Write 'Given' and 'To Prove / To Find' clearly.\n• Step 2: State the standard formula or theorem for ${plan.title}.\n• Step 3: Show detailed intermediate steps without skipping algebraic or logical transitions.\n• Step 4: Box your final answer with the appropriate unit and a concluding sentence.`,
    },
  ];

  return {
    id: `top-${grade}-${subject.id}-${index + 1}-1`,
    topicNumber: 1,
    title: `${plan.title}: Core Ideas`,
    duration: '20 mins',
    description: plan.focus,
    videoUrl: selectedVideoUrl,
    videoEmbedId: selectedVideoId || pwVideo.videoEmbedId,
    videoSourceNote: pwVideo.videoSourceNote,
    objectives,
    keyFormulasOrConcepts,
    studyNotes,
    practiceQuestions,
  };
}

export function expandCurriculum(subjects: Subject[], grade: string): Subject[] {
  const gradePlans = PLANS[grade];
  if (!gradePlans) return subjects;
  return subjects.map((subject) => {
    const plans = [...(gradePlans[subject.id] || []), ...(EXTRA_PLANS[grade]?.[subject.id] || [])];
    if (plans.length === 0) return subject;
    const chapters: Chapter[] = plans.map((plan, index) => {
      const existing = subject.chapters.find((chapter) => chapter.title.trim().toLocaleLowerCase() === plan.title.trim().toLocaleLowerCase());
      const chapterId = existing?.id || `ch-${grade}-${subject.id}-${index + 1}`;
      const quizId = existing?.quizId || `quiz-${grade}-${subject.id}-${index + 1}`;
      return existing
        ? {
            ...existing,
            chapterNumber: index + 1,
            description: existing.description || plan.focus,
            hasQuiz: true,
            quizId: existing.quizId || quizId,
          }
        : {
            id: chapterId,
            chapterNumber: index + 1,
            title: plan.title,
            description: plan.focus,
            estimatedHours: 2.5,
            hasQuiz: true,
            quizId: quizId,
            topics: [makeTopic(subject, grade, plan, index)],
          };
    });
    const expandedSubject = { ...subject, chapters };
    if (grade !== '10' || subject.id !== 'mathematics') return expandedSubject;
    return {
      ...expandedSubject,
      chapters: expandedSubject.chapters.map((chapter) => {
        const videoUrl = CLASS_10_MATH_VIDEO_URLS[chapter.title.trim().toLocaleLowerCase()];
        if (!videoUrl) return chapter;
        const videoEmbedId = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:live\/|embed\/|watch\?v=))([^?&/]+)/)?.[1];
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({ ...topic, videoUrl, videoEmbedId: videoEmbedId || topic.videoEmbedId })),
        };
      }),
    };
  });
}
