/* =========================================================
   UMASANKAR PRADHAN
   ONLINE MOCK TEST PORTAL
   COMPLETE SCRIPT.JS
========================================================= */


/* =========================================================
   PASSWORD
========================================================= */

const TEST_PASSWORD = "Umacdp12";


/* =========================================================
   SSD / JT – CDP
========================================================= */

const SSD_JT_QUESTIONS = [

  {
    question: "A teacher observes that a learner performs a complex task successfully when guided through carefully sequenced prompts but struggles when asked to perform it independently. Which interpretation is most appropriate?",
    options: [
      "The learner's current independent performance represents the complete limit of development",
      "Guided performance can reveal emerging competencies that are not yet fully independent",
      "The learner's difficulty necessarily indicates a cognitive deficit",
      "Development occurs independently of social interaction"
    ],
    correct: 1,
    explanation: "Guided performance can reveal abilities that are emerging and can later become independent through appropriate support."
  },

  {
    question: "Two children of the same age demonstrate different levels of language, reasoning and emotional regulation. Which explanation best reflects a contemporary understanding of development?",
    options: [
      "Chronological age determines developmental outcomes",
      "Such differences primarily indicate unequal intelligence",
      "Development is shaped by interactions among biological, social and environmental factors",
      "Children of the same age should demonstrate approximately identical developmental patterns"
    ],
    correct: 2,
    explanation: "Development results from the interaction of biological characteristics, social relationships, experiences and environmental conditions."
  },

  {
    question: "A child repeatedly gives an incorrect explanation of a scientific phenomenon but uses internally consistent reasoning based on previous experiences. What should the teacher do?",
    options: [
      "Explore the learner's existing conception and design experiences that facilitate conceptual restructuring",
      "Ask the learner to memorise the scientifically correct explanation",
      "Ignore the explanation because it is factually incorrect",
      "Penalise the learner for developing an incorrect interpretation"
    ],
    correct: 0,
    explanation: "Conceptual change is supported when teachers identify learners' existing conceptions and create experiences that help reconstruct those ideas."
  },

  {
    question: "A teacher allows learners to manipulate objects before introducing symbolic representations of a mathematical concept. This approach primarily recognises that:",
    options: [
      "Abstract learning should always precede concrete experiences",
      "Symbolic reasoning develops independently of experience",
      "Memorisation is necessary before conceptual understanding",
      "Learning can be supported by connecting concrete experiences with increasingly abstract representations"
    ],
    correct: 3,
    explanation: "Concrete experiences can provide a foundation for moving toward increasingly abstract and symbolic representations."
  },

  {
    question: "Which classroom situation best demonstrates the interaction between maturation and learning?",
    options: [
      "A child's learning is completely determined by biological readiness",
      "Instruction can influence development, while developmental readiness can also affect what can be learned effectively",
      "Environmental experience has no relationship with developmental progress",
      "All developmental changes occur through formal instruction"
    ],
    correct: 1,
    explanation: "Development and learning influence each other. Readiness matters, but appropriate experiences and instruction can also promote development."
  },

  {
    question: "A teacher notices that students remember concepts longer when they connect new ideas with previously acquired knowledge. Which principle is most directly involved?",
    options: [
      "Learning as meaningful construction based on prior knowledge",
      "Learning through punishment",
      "Development through biological maturation alone",
      "Learning through mechanical repetition only"
    ],
    correct: 0,
    explanation: "Meaningful learning occurs when new information is connected with existing knowledge structures."
  },

  {
    question: "A learner changes from using a teacher-provided strategy to independently selecting an appropriate strategy for a new problem. This most strongly indicates development of:",
    options: [
      "External regulation",
      "Rote memory",
      "Self-regulated learning",
      "Passive imitation"
    ],
    correct: 2,
    explanation: "Independent selection and monitoring of strategies are important characteristics of self-regulated learning."
  },

  {
    question: "Which teacher practice is most consistent with a constructivist understanding of learning?",
    options: [
      "Providing one correct procedure before students attempt any problem",
      "Requiring students to reproduce textbook explanations",
      "Avoiding learner discussion to prevent misconceptions",
      "Creating situations where learners test ideas, explain reasoning and revise understanding"
    ],
    correct: 3,
    explanation: "Constructivist learning emphasises active meaning-making, explanation, investigation and revision of understanding."
  },

  {
    question: "A learner performs poorly on a written test but demonstrates accurate conceptual understanding during discussion and practical activities. What is the most appropriate conclusion?",
    options: [
      "The learner lacks conceptual understanding",
      "Written assessment is always more valid than classroom evidence",
      "Multiple sources of evidence should be considered before making a judgement",
      "Practical performance should be excluded because it is subjective"
    ],
    correct: 2,
    explanation: "A sound judgement should consider multiple sources of evidence rather than relying on one assessment method."
  },

  {
    question: "A teacher gradually reduces assistance as learners become more competent at solving a problem. This instructional process is best described as:",
    options: [
      "Summative evaluation",
      "Scaffolding with gradual transfer of responsibility",
      "Fixed ability grouping",
      "External conditioning"
    ],
    correct: 1,
    explanation: "Scaffolding involves temporary support that is gradually withdrawn as learners develop greater independence."
  },

  {
    question: "A child has strong reasoning ability but struggles to express ideas in the language used for classroom instruction. Which interpretation is most appropriate?",
    options: [
      "Language difficulty necessarily indicates weak reasoning ability",
      "The learner should receive lower-level academic tasks",
      "The learner's cognitive ability should be judged solely from written language",
      "Language proficiency and conceptual understanding should be distinguished"
    ],
    correct: 3,
    explanation: "Difficulty in the language of instruction does not necessarily indicate difficulty with reasoning or conceptual understanding."
  },

  {
    question: "Which situation best illustrates developmental continuity with qualitative change?",
    options: [
      "A learner's thinking gradually becomes more complex as new forms of reasoning emerge from earlier competencies",
      "Development consists only of increasing the quantity of memorised information",
      "Development occurs at an identical rate across all domains",
      "Development involves completely unrelated stages with no connection between them"
    ],
    correct: 0,
    explanation: "Development involves continuity from earlier competencies while also involving qualitative transformations in ways of thinking and functioning."
  },

  {
    question: "A teacher provides learners with a difficult problem but gives strategic hints when they reach an impasse. The primary purpose of these hints is to:",
    options: [
      "Replace independent thinking",
      "Reduce the cognitive demand of the task permanently",
      "Support performance while enabling the learner to eventually internalise the strategy",
      "Ensure that every learner follows the same procedure"
    ],
    correct: 2,
    explanation: "Strategic hints provide temporary support while allowing learners to develop and eventually internalise effective strategies."
  },

  {
    question: "A learner can recall a definition but cannot explain it in a new context. This most strongly suggests a limitation in:",
    options: [
      "Transfer and conceptual application",
      "Recognition memory",
      "Sensory processing",
      "Chronological development"
    ],
    correct: 0,
    explanation: "The learner can recall information but has difficulty transferring and applying the concept to a new context."
  },

  {
    question: "Which statement best represents the role of motivation in learning?",
    options: [
      "Motivation alone guarantees successful learning",
      "Motivation has no relationship with classroom engagement",
      "External rewards are always superior to intrinsic interest",
      "Motivation can influence engagement, persistence and strategic effort, while interacting with other learning conditions"
    ],
    correct: 3,
    explanation: "Motivation influences engagement, persistence and effort, but learning also depends on instructional, cognitive and contextual conditions."
  },

  {
    question: "A school admits a learner with a disability but provides no modification to classroom practices, materials or participation structures. Which interpretation is most appropriate?",
    options: [
      "Admission automatically establishes inclusion",
      "Physical placement without meaningful participation does not fully constitute inclusion",
      "Curriculum adaptation is unnecessary once admission is granted",
      "Inclusion requires separate instruction outside the classroom"
    ],
    correct: 1,
    explanation: "Inclusion involves meaningful participation and access, not merely physical placement in a mainstream classroom."
  },

  {
    question: "Which classroom practice most clearly reflects equity?",
    options: [
      "Providing every learner with exactly the same support",
      "Giving additional support only to high-performing learners",
      "Providing appropriate supports according to individual barriers while maintaining meaningful learning opportunities",
      "Reducing academic expectations for all learners"
    ],
    correct: 2,
    explanation: "Equity recognises differences in barriers and provides appropriate support so learners have meaningful opportunities to participate and learn."
  },

  {
    question: "A teacher notices that a learner with a hearing impairment misses important information because all instructions are delivered orally. What is the most appropriate response?",
    options: [
      "Provide accessible forms of communication while maintaining participation in the common learning experience",
      "Exempt the learner from classroom discussions",
      "Transfer the learner permanently to a separate class",
      "Reduce the learner's curriculum to non-verbal activities"
    ],
    correct: 0,
    explanation: "Accessible communication should remove the barrier while keeping the learner meaningfully involved in the common learning experience."
  },

  {
    question: "Which situation represents a barrier created by the environment rather than simply a characteristic of the learner?",
    options: [
      "A learner requires additional processing time",
      "A learner uses an alternative communication method",
      "A learner has difficulty with fine-motor tasks",
      "Essential instructional information is presented only in an inaccessible format"
    ],
    correct: 3,
    explanation: "When essential information is provided in an inaccessible format, the environment creates the barrier to participation."
  },

  {
    question: "A teacher creates heterogeneous groups and assigns meaningful responsibilities to every learner. The most important inclusive purpose is to:",
    options: [
      "Increase competition between ability groups",
      "Promote participation, collaboration and belonging",
      "Reduce the need for teacher intervention",
      "Ensure that higher-achieving students complete the difficult work"
    ],
    correct: 1,
    explanation: "Meaningful roles promote participation, peer interaction, collaboration and a sense of belonging."
  },

  {
    question: "Which statement best distinguishes integration from inclusion?",
    options: [
      "Integration and inclusion are completely identical concepts",
      "Integration focuses primarily on academic assessment",
      "Inclusion requires adapting systems and practices so diverse learners can participate meaningfully",
      "Inclusion requires separate classrooms for learners with additional needs"
    ],
    correct: 2,
    explanation: "Inclusion involves adapting systems, practices and environments to support meaningful participation of diverse learners."
  },

  {
    question: "A school has ramps, accessible toilets and adapted furniture, but students with disabilities rarely participate in group work. What does this demonstrate?",
    options: [
      "Physical accessibility alone does not guarantee social and instructional inclusion",
      "Group work is incompatible with inclusive education",
      "Learners with disabilities should work independently",
      "Infrastructure is irrelevant to inclusion"
    ],
    correct: 0,
    explanation: "Physical accessibility is important, but genuine inclusion also requires meaningful social and instructional participation."
  },

  {
    question: "A teacher anticipates that learners will differ in how they access and demonstrate learning and therefore provides multiple modes of engagement and expression. This is most closely associated with:",
    options: [
      "Ability tracking",
      "Universal Design for Learning",
      "Segregated instruction",
      "Norm-referenced assessment"
    ],
    correct: 1,
    explanation: "Universal Design for Learning anticipates learner variability and provides multiple means of engagement, representation and expression."
  },

  {
    question: "A learner is given a different response format during an assessment because the original format measures a barrier unrelated to the intended construct. What is the primary purpose?",
    options: [
      "To guarantee a higher score",
      "To lower the academic standard",
      "To eliminate assessment altogether",
      "To reduce an irrelevant barrier while preserving the intended learning construct"
    ],
    correct: 3,
    explanation: "An appropriate accommodation removes an irrelevant barrier while preserving what the assessment is intended to measure."
  },

  {
    question: "Which school practice most strongly supports a culture of inclusion?",
    options: [
      "Involving learners in common activities while recognising and responding to diversity",
      "Separating learners according to perceived ability",
      "Designing one standard pathway for every learner",
      "Providing special support only outside ordinary classroom activities"
    ],
    correct: 0,
    explanation: "Inclusive culture involves common participation while recognising learner diversity and responding appropriately to individual needs."
  },

  {
    question: "The rights-based approach to elementary education primarily views children as:",
    options: [
      "Consumers of educational services",
      "Rights-holders entitled to access education",
      "Candidates who must first prove academic readiness",
      "Beneficiaries whose admission depends entirely on institutional convenience"
    ],
    correct: 1,
    explanation: "A rights-based approach recognises children as rights-holders with an entitlement to elementary education."
  },

  {
    question: "A school creates admission procedures that indirectly discourage children from disadvantaged backgrounds. Which concern is most directly raised?",
    options: [
      "Curriculum sequencing",
      "Formative assessment",
      "Teacher autonomy",
      "Equitable access and non-discriminatory participation"
    ],
    correct: 3,
    explanation: "Admission barriers affecting disadvantaged children raise concerns about equitable and non-discriminatory access to education."
  },

  {
    question: "Which principle is most consistent with the idea of free and compulsory elementary education?",
    options: [
      "Elementary education should be treated as a legal entitlement rather than merely an optional privilege",
      "Admission should depend primarily on previous examination performance",
      "Schools should select children according to perceived academic potential",
      "Educational access should depend on the family's ability to pay"
    ],
    correct: 0,
    explanation: "The rights-based framework treats elementary education as a legal entitlement rather than an optional privilege."
  },

  {
    question: "A school refuses to consider a child for admission because the child is perceived as academically weak. From a rights-based perspective, the central issue is:",
    options: [
      "Excessive formative assessment",
      "Overuse of curriculum adaptation",
      "Creation of an exclusionary barrier to educational access",
      "Lack of competitive examination opportunities"
    ],
    correct: 2,
    explanation: "Refusing access based on perceived academic weakness creates an exclusionary barrier inconsistent with equitable educational access."
  },

  {
    question: "Why is the RTE framework significant for elementary education?",
    options: [
      "It establishes education primarily as a competitive market service",
      "It places elementary education within a rights-based legal framework",
      "It makes academic ranking the primary purpose of schooling",
      "It replaces classroom teaching with standardised examinations"
    ],
    correct: 1,
    explanation: "The RTE framework places elementary education within a rights-based legal framework."
  },

  {
    question: "A curriculum includes learners' experiences, community knowledge, disciplinary concepts, classroom activities and assessment processes. This reflects the understanding that curriculum:",
    options: [
      "Is broader than a list of textbook chapters",
      "Consists exclusively of prescribed content",
      "Is identical to the examination syllabus",
      "Concerns only classroom discipline"
    ],
    correct: 0,
    explanation: "Curriculum is broader than textbook content and includes learning experiences, interactions, processes and assessment-related elements."
  },

  {
    question: "A teacher connects a new concept with students' local experiences before introducing formal terminology. This primarily promotes:",
    options: [
      "Mechanical learning",
      "Contextual and meaningful learning",
      "Curriculum fragmentation",
      "Purely teacher-centred instruction"
    ],
    correct: 1,
    explanation: "Connecting new concepts to familiar experiences makes learning more meaningful and contextual."
  },

  {
    question: "Which curriculum decision best demonstrates continuity and progression?",
    options: [
      "Repeating exactly the same content every year",
      "Introducing unrelated concepts in every grade",
      "Organising subsequent learning so that new concepts build on previous understanding",
      "Increasing content volume without considering prior learning"
    ],
    correct: 2,
    explanation: "Continuity and progression require later learning to build meaningfully on previous understanding."
  },

  {
    question: "A curriculum developer selects content only because it appears in a textbook, without considering learner needs or social context. Which important curriculum principle is being neglected?",
    options: [
      "Contextual relevance and learner-centredness",
      "Administrative accountability",
      "Examination standardisation",
      "Content sequencing alone"
    ],
    correct: 0,
    explanation: "Curriculum selection should consider learner needs, context and relevance rather than simply reproducing textbook content."
  },

  {
    question: "A teacher uses local environmental problems as contexts for teaching science, mathematics and language. This approach most strongly reflects:",
    options: [
      "Subject isolation",
      "Contextual and interdisciplinary curriculum transaction",
      "Rote curriculum implementation",
      "Elimination of disciplinary knowledge"
    ],
    correct: 1,
    explanation: "Using a common real-life context across subjects supports contextual and interdisciplinary learning."
  },

  {
    question: "Which relationship between curriculum and pedagogy is most accurate?",
    options: [
      "Pedagogy has no influence on curricular outcomes",
      "Curriculum determines every classroom interaction without interpretation",
      "Pedagogy is concerned only with classroom discipline",
      "Pedagogy translates curricular intentions into concrete learning experiences and interactions"
    ],
    correct: 3,
    explanation: "Pedagogy converts curricular intentions into actual classroom experiences, interactions and learning opportunities."
  },

  {
    question: "A teacher changes the sequence of activities after discovering that students lack prerequisite knowledge. This demonstrates:",
    options: [
      "Responsive curriculum transaction",
      "Curriculum failure",
      "Summative evaluation",
      "Fixed instructional sequencing"
    ],
    correct: 0,
    explanation: "Adjusting instruction based on learners' prerequisite knowledge demonstrates responsive curriculum transaction."
  },

  {
    question: "Which curriculum approach most strongly encourages learners to connect knowledge with real-life situations?",
    options: [
      "Purely content-transmission approach",
      "Experience-based and contextual curriculum",
      "Rote-oriented curriculum",
      "Examination-only curriculum"
    ],
    correct: 1,
    explanation: "Experience-based and contextual curricula explicitly connect knowledge with learners' experiences and real-life situations."
  },

  {
    question: "A curriculum emphasises questioning, investigation, discussion and application rather than memorisation of isolated facts. Which educational orientation is most evident?",
    options: [
      "Passive knowledge transmission",
      "Learner-centred meaning-making",
      "Competitive ranking",
      "Mechanical reproduction"
    ],
    correct: 1,
    explanation: "Questioning, investigation, discussion and application are central to learner-centred meaning-making."
  },

  {
    question: "A teacher selects classroom activities by considering learning objectives, learner experiences, resources and assessment evidence. This demonstrates:",
    options: [
      "Unstructured curriculum planning",
      "Curriculum-objective alignment",
      "Elimination of teacher autonomy",
      "Assessment-independent pedagogy"
    ],
    correct: 3,
    explanation: "Effective planning considers objectives, learning experiences and assessment evidence together."
  },

  {
    question: "A teacher uses students' responses during a lesson to identify misconceptions and immediately adjusts instruction. This is an example of:",
    options: [
      "Formative assessment",
      "Summative evaluation",
      "Norm-referenced assessment",
      "Terminal assessment"
    ],
    correct: 0,
    explanation: "Formative assessment provides evidence during learning that can be used to adjust instruction."
  },

  {
    question: "Which assessment task most strongly measures higher-order application?",
    options: [
      "Reproducing a definition from memory",
      "Listing facts from a textbook",
      "Applying a principle to analyse an unfamiliar classroom situation",
      "Selecting a previously memorised answer"
    ],
    correct: 2,
    explanation: "Applying a principle to an unfamiliar situation requires transfer, analysis and application beyond simple recall."
  },

  {
    question: "A test produces highly consistent results but does not actually measure the intended construct. Which conclusion is most appropriate?",
    options: [
      "The test is valid because it is consistent",
      "The test may be reliable but lack validity for the intended purpose",
      "Reliability and validity are identical",
      "The test must be both unreliable and invalid"
    ],
    correct: 1,
    explanation: "Reliability concerns consistency, whereas validity concerns whether the test measures the intended construct."
  },

  {
    question: "A teacher collects observations, project work, oral responses, portfolios and written tests before judging a learner's progress. This primarily improves:",
    options: [
      "Competitive ranking",
      "Dependence on one method",
      "Speed of assessment",
      "Breadth and triangulation of evidence"
    ],
    correct: 3,
    explanation: "Multiple forms of evidence provide broader information and allow triangulation before making a judgement."
  },

  {
    question: "Which example best represents assessment as learning?",
    options: [
      "Students monitor their own performance against criteria and modify their learning strategies",
      "Teacher assigns a final grade after an examination",
      "School ranks students according to marks",
      "Teacher records attendance as evidence of achievement"
    ],
    correct: 0,
    explanation: "Assessment as learning involves learners actively monitoring, reflecting on and regulating their own learning."
  },

  {
    question: "A teacher gives feedback that identifies the error, explains why it occurred and suggests a strategy for improvement. This is more effective formatively because it:",
    options: [
      "Provides actionable information for subsequent learning",
      "Eliminates the need for learner reflection",
      "Converts formative assessment into summative assessment",
      "Focuses entirely on grading"
    ],
    correct: 0,
    explanation: "Effective formative feedback tells learners what needs improvement and provides information they can use for subsequent learning."
  },

  {
    question: "A learner receives a low score on a written test but performs successfully in practical tasks and oral discussion. What should the teacher do before concluding that the learner lacks the competence?",
    options: [
      "Ignore the practical evidence",
      "Examine multiple sources of evidence and possible assessment barriers",
      "Automatically increase the learner's score",
      "Repeat the same test until the learner passes"
    ],
    correct: 1,
    explanation: "Multiple sources should be examined, including possible barriers associated with the assessment format."
  },

  {
    question: "Which situation most clearly illustrates diagnostic assessment?",
    options: [
      "Giving a final grade after completing a course",
      "Ranking learners from highest to lowest",
      "Identifying specific misconceptions before planning remedial instruction",
      "Reporting annual examination results"
    ],
    correct: 2,
    explanation: "Diagnostic assessment identifies specific learning difficulties or misconceptions so that instruction can be planned accordingly."
  },

  {
    question: "A teacher asks learners to assess their own work using explicit criteria and identify specific areas for improvement. This primarily develops:",
    options: [
      "Self-regulation and metacognition",
      "Dependence on teacher judgement",
      "Norm-referenced competition",
      "Passive learning"
    ],
    correct: 0,
    explanation: "Self-assessment against clear criteria develops reflection, metacognition and self-regulation."
  },

  {
    question: "Which assessment characteristic is most directly concerned with whether an instrument measures what it is intended to measure?",
    options: [
      "Reliability",
      "Validity",
      "Practicality",
      "Objectivity"
    ],
    correct: 1,
    explanation: "Validity concerns the extent to which an assessment measures the intended construct or purpose."
  },

  {
    question: "A test contains difficult reading passages even though reading ability is not part of the intended construct. Learners with weaker language proficiency score lower despite understanding the subject. This creates a problem of:",
    options: [
      "Construct-irrelevant variance",
      "Excessive reliability",
      "Curriculum continuity",
      "Formative assessment"
    ],
    correct: 0,
    explanation: "Construct-irrelevant variance occurs when performance is influenced by factors unrelated to the construct being assessed."
  },

  {
    question: "A teacher uses a portfolio containing work collected over several months along with learner reflections. Which advantage is most distinctive?",
    options: [
      "It captures learning development and progress over time",
      "It eliminates the need for teacher judgement",
      "It measures only short-term memory",
      "It produces automatically standardised scores"
    ],
    correct: 0,
    explanation: "Portfolios can provide evidence of development, progress and reflection across an extended period."
  },

  {
    question: "A teacher finds that most learners can memorise a procedure but cannot explain why it works. What is the most appropriate instructional response?",
    options: [
      "Increase the number of identical exercises",
      "Move immediately to the next topic",
      "Design activities requiring explanation, reasoning and conceptual application",
      "Reduce opportunities for discussion"
    ],
    correct: 2,
    explanation: "Explanation, reasoning and application help learners move beyond procedural memorisation toward conceptual understanding."
  },

  {
    question: "Which assessment question most clearly targets analysis?",
    options: [
      "Define inclusive education.",
      "List three characteristics of formative assessment.",
      "State the meaning of curriculum.",
      "Examine this classroom situation and identify the factors responsible for the learner's difficulty."
    ],
    correct: 3,
    explanation: "Examining a situation and identifying contributing factors requires analysis rather than simple recall."
  },

  {
    question: "A teacher compares a learner's performance against clearly specified learning criteria rather than against classmates. This represents:",
    options: [
      "Criterion-referenced interpretation",
      "Norm-referenced interpretation",
      "Competitive ranking",
      "Peer-referenced grading"
    ],
    correct: 0,
    explanation: "Criterion-referenced interpretation compares performance with predetermined learning criteria rather than with other learners."
  },

  {
    question: "A teacher observes that students have misunderstood a key concept and modifies the next lesson accordingly. Which assessment function is being demonstrated?",
    options: [
      "Certification",
      "Selection",
      "Instructional decision-making through formative evidence",
      "Ranking"
    ],
    correct: 2,
    explanation: "The teacher is using formative evidence to modify instruction and respond to learners' current understanding."
  },

  {
    question: "Which combination provides the strongest evidence for evaluating a learner's complex competency?",
    options: [
      "One final written examination only",
      "Multiple forms of evidence collected across relevant contexts and interpreted against clear criteria",
      "A single oral question",
      "Class attendance alone"
    ],
    correct: 1,
    explanation: "Complex competencies are best evaluated through multiple relevant forms of evidence interpreted against clear criteria."
  },

  {
    question: "A student successfully solves familiar problems but fails when the same concept is presented in a new context. The assessment most clearly reveals difficulty with:",
    options: [
      "Transfer of learning",
      "Basic recognition",
      "Sensory memory",
      "Physical development"
    ],
    correct: 0,
    explanation: "Applying knowledge in a new context is evidence of transfer; difficulty here indicates limited transfer."
  },

  {
    question: "A teacher designs learning objectives, instructional activities and assessment tasks so that all three address the same intended competencies. This principle is known as:",
    options: [
      "Curriculum isolation",
      "Instructional alignment",
      "Ability tracking",
      "Normative classification"
    ],
    correct: 1,
    explanation: "Instructional alignment means objectives, learning activities and assessment are coherently directed toward the same intended competencies."
  },

  {
    question: "A teacher wants to determine whether learners have developed deep conceptual understanding rather than memorised information. Which assessment design is most appropriate?",
    options: [
      "Ask learners to reproduce textbook definitions",
      "Ask learners to memorise additional examples",
      "Ask learners to explain a concept, apply it to a novel situation and justify their reasoning",
      "Ask learners to copy a model answer exactly"
    ],
    correct: 2,
    explanation: "Explaining, applying to a novel situation and justifying reasoning provide stronger evidence of deep conceptual understanding."
  }

];


/* =========================================================
   HINDI – CDP
   आपका बंटी – मन्नू भंडारी
========================================================= */

const HINDI_AAPKA_BUNTY_QUESTIONS = [

  {
    question: "“क्यों रे, तू ऐसी भरी धूप में यहाँ करोंदे तोड़ रहा है?” — यह कथन किसका है और किससे कहा गया है?",
    options: [
      "शकुन ने बंटी से",
      "टीटू ने शन्नो से",
      "वकील चाचा ने बंटी से",
      "कुन्नी ने बंटी से"
    ],
    correct: 0,
    explanation: "करोंदे वाले प्रसंग में बंटी से यह बात उसकी माँ शकुन द्वारा कही जाती है।"
  },

  {
    question: "बंटी को करोंदे के फूल की सुंदर माला बनाने की बात किसने कही थी?",
    options: [
      "कुन्नी",
      "वकील चाचा",
      "चीनू",
      "अमि"
    ],
    correct: 0,
    explanation: "करोंदे के फूल और माला से जुड़ा प्रसंग बंटी के बाल-संसार और उसके परिचित संबंधों को सामने लाता है।"
  },

  {
    question: "बंटी की ममी किस दिन लंच के बाद कॉलेज नहीं जाती थीं?",
    options: [
      "शुक्रवार",
      "शनिवार",
      "रविवार",
      "सोमवार"
    ],
    correct: 1,
    explanation: "शनिवार के दिन लंच के बाद कॉलेज न जाने का उल्लेख बंटी की दिनचर्या के संदर्भ में आता है।"
  },

  {
    question: "बंटी को निम्न में से कौन-सा फूल विशेष रूप से प्रिय लगता था?",
    options: [
      "गुलाब",
      "चमेली",
      "कमल",
      "मोगरा"
    ],
    correct: 3,
    explanation: "मोगरा बंटी की स्मृतियों और भावनात्मक संसार से जुड़ा हुआ है।"
  },

  {
    question: "“ममी-पापा की जो लड़ाई होती है न, उसे तलाक कहते हैं।” — बंटी को यह बात किससे पता चलती है?",
    options: [
      "फूफी से",
      "टीटू से",
      "वकील चाचा से",
      "टीटू की ममी से"
    ],
    correct: 1,
    explanation: "बंटी को तलाक का अर्थ टीटू से बातचीत के माध्यम से पता चलता है।"
  },

  {
    question: "बंटी का पूरा नाम क्या है?",
    options: [
      "अरूप बत्रा",
      "अनूप बत्रा",
      "अरुण बत्रा",
      "अमर बत्रा"
    ],
    correct: 0,
    explanation: "उपन्यास में बंटी का नाम अरूप बत्रा दिया गया है।"
  },

  {
    question: "बंटी किस कक्षा में पढ़ता है?",
    options: [
      "तीसरी",
      "पाँचवीं",
      "चौथी",
      "छठी"
    ],
    correct: 2,
    explanation: "बंटी चौथी कक्षा का बालक है।"
  },

  {
    question: "उपन्यास के आरंभ में बंटी की आयु कितनी बताई गई है?",
    options: [
      "सात वर्ष",
      "आठ वर्ष",
      "दस वर्ष",
      "नौ वर्ष"
    ],
    correct: 3,
    explanation: "उपन्यास के आरंभिक संदर्भ में बंटी लगभग नौ वर्ष का है।"
  },

  {
    question: "टीटू किसके साथ कैरम खेल रहा था?",
    options: [
      "बंटी के साथ",
      "शन्नो के साथ",
      "शकुन के साथ",
      "जया के साथ"
    ],
    correct: 0,
    explanation: "टीटू और बंटी के प्रसंग बाल-मित्रता और बंटी के सामाजिक अनुभवों को सामने लाते हैं।"
  },

  {
    question: "“अब कहेगी कभी लड़की, कर दूँ शूट? गोली से उड़ा दूँगा...” — बंटी यह बात किससे कहता है?",
    options: [
      "शकुन से",
      "टीटू से",
      "फूफी से",
      "किन्नू से"
    ],
    correct: 2,
    explanation: "यह संवाद बंटी और फूफी के बीच के आत्मीय तथा छेड़छाड़ वाले संबंध से संबंधित है।"
  },

  {
    question: "बंटी जब बहुत लाड़ में या बहुत नाराज़ होता है, तब फूफी को किस प्रकार संबोधित करता है?",
    options: [
      "तुम",
      "तू",
      "आप",
      "अम्मा"
    ],
    correct: 1,
    explanation: "बंटी का ‘तू’ कहना उसके फूफी के साथ अत्यंत आत्मीय और घरेलू संबंध को दर्शाता है।"
  },

  {
    question: "“मेरा तो बेटा भी यही है और बेटी भी यही है।” — यह कथन किसका है?",
    options: [
      "फूफी",
      "शकुन",
      "मीरा",
      "टीटू की माँ"
    ],
    correct: 0,
    explanation: "फूफी बंटी के प्रति मातृवत स्नेह और अपनत्व व्यक्त करती है।"
  },

  {
    question: "बंटी की बंदूक वाला प्रसंग मुख्यतः किस बात को उजागर करता है?",
    options: [
      "बंटी की खेल-कूद में रुचि",
      "बंटी की हिंसक प्रवृत्ति",
      "बंटी और फूफी के स्नेहपूर्ण, छेड़छाड़ वाले संबंध",
      "बंटी की पिता के प्रति नाराज़गी"
    ],
    correct: 2,
    explanation: "बंदूक का प्रसंग बंटी और फूफी के बीच के बाल-सुलभ, आत्मीय संबंध को सामने लाता है।"
  },

  {
    question: "बंटी की माँ का नाम क्या है?",
    options: [
      "मीरा",
      "शकुन",
      "कुन्नी",
      "शन्नो"
    ],
    correct: 1,
    explanation: "शकुन बंटी की माँ है और उपन्यास के प्रमुख पात्रों में से एक है।"
  },

  {
    question: "अजय बंटी के जीवन में कौन है?",
    options: [
      "पिता",
      "मामा",
      "चाचा",
      "शिक्षक"
    ],
    correct: 0,
    explanation: "अजय बंटी के पिता हैं।"
  },

  {
    question: "फूफी की भूमिका को पाठ के आधार पर सबसे उपयुक्त रूप में कैसे समझा जा सकता है?",
    options: [
      "केवल घरेलू कर्मचारी",
      "केवल पड़ोस की महिला",
      "बंटी की भावनात्मक संरक्षक और स्नेह का स्रोत",
      "अजय की बहन"
    ],
    correct: 2,
    explanation: "फूफी बंटी के लिए एक महत्वपूर्ण भावनात्मक सहारा और स्नेह का स्रोत है।"
  },

  {
    question: "बंटी को अपने पिता के साथ बिताए समय की कौन-सी वस्तु विशेष रूप से याद आती है?",
    options: [
      "पतंग",
      "मैकेनो",
      "क्रिकेट बैट",
      "साइकिल"
    ],
    correct: 1,
    explanation: "मैकेनो बंटी की अपने पिता के साथ जुड़ी स्मृतियों का महत्वपूर्ण हिस्सा है।"
  },

  {
    question: "दूसरे बच्चों द्वारा छुट्टियों और अपने परिवार की बातें करने पर बंटी के मन में किसकी याद उभरती है?",
    options: [
      "फूफी और मोगरा",
      "शकुन और कॉलेज",
      "पापा, मैकेनो और कलकत्ता",
      "डॉ. जोशी और अमि"
    ],
    correct: 2,
    explanation: "दूसरे बच्चों की पारिवारिक बातें बंटी को अपने पिता, मैकेनो और कलकत्ता से जुड़ी स्मृतियों की ओर ले जाती हैं।"
  },

  {
    question: "बंटी के मन में कलकत्ता का चित्र किससे जुड़ा हुआ है?",
    options: [
      "उसके पिता से",
      "उसकी माँ से",
      "फूफी से",
      "टीटू से"
    ],
    correct: 0,
    explanation: "कलकत्ता बंटी के लिए उसके पिता और उनसे जुड़ी स्मृतियों का प्रतीक बन जाता है।"
  },

  {
    question: "बंटी के लिए दूसरे बच्चों के पारिवारिक अनुभव क्या करते हैं?",
    options: [
      "उसके आत्मविश्वास को बढ़ाते हैं",
      "उसके मन में अपने परिवार को लेकर तुलना और कमी का भाव जगाते हैं",
      "उसे पढ़ाई में प्रेरित करते हैं",
      "उसे खेलों से दूर करते हैं"
    ],
    correct: 1,
    explanation: "दूसरे बच्चों की सामान्य पारिवारिक अनुभूतियाँ बंटी को अपने परिवार की टूटन और कमी अधिक तीव्रता से महसूस कराती हैं।"
  },

  {
    question: "शकुन का पेशा क्या है?",
    options: [
      "डॉक्टर",
      "वकील",
      "कॉलेज की प्रिंसिपल",
      "अध्यापिका"
    ],
    correct: 2,
    explanation: "शकुन कॉलेज की प्रिंसिपल है।"
  },

  {
    question: "शकुन के जीवन में डॉ. जोशी का प्रवेश किस परिवर्तन से जुड़ा है?",
    options: [
      "उसके पुनर्विवाह और नए पारिवारिक जीवन से",
      "उसके नौकरी छोड़ने से",
      "अजय की वापसी से",
      "बंटी के स्कूल बदलने से"
    ],
    correct: 0,
    explanation: "डॉ. जोशी का प्रवेश शकुन के पुनर्विवाह और नए पारिवारिक जीवन से जुड़ा है।"
  },

  {
    question: "डॉ. जोशी के परिवार में बंटी किन बच्चों के संपर्क में आता है?",
    options: [
      "चीनू और टीटू",
      "अमि और जोत",
      "जया और शन्नो",
      "कुन्नी और चीनू"
    ],
    correct: 1,
    explanation: "डॉ. जोशी के परिवार में बंटी अमि और जोत के संपर्क में आता है।"
  },

  {
    question: "अमि और बंटी के बीच मेज-किताबों वाला संघर्ष किस बात को विशेष रूप से प्रकट करता है?",
    options: [
      "केवल सामान्य बाल-झगड़ा",
      "बंटी की खेल में रुचि",
      "नए परिवार में अपने स्थान और अधिकार को लेकर बंटी की संवेदनशीलता",
      "बंटी की पढ़ाई में सफलता"
    ],
    correct: 2,
    explanation: "मेज का विवाद नए परिवार में बंटी के स्थान, अधिकार और अपनत्व की असुरक्षा को प्रकट करता है।"
  },

  {
    question: "“यह मेरी मेज़ है, किसी को नहीं दूँगा मैं अपनी मेज़।” — यह कथन किस पात्र के व्यवहार से संबंधित है?",
    options: [
      "बंटी",
      "अमि",
      "जोत",
      "टीटू"
    ],
    correct: 0,
    explanation: "यह कथन बंटी के अपने स्थान और अधिकार को लेकर तीव्र आग्रह को दर्शाता है।"
  },

  {
    question: "अमि की किताबें बंटी की मेज़ पर आने से उत्पन्न विवाद किस व्यापक स्थिति का प्रतीक माना जा सकता है?",
    options: [
      "केवल पढ़ाई की समस्या",
      "नए घर में स्थान और अधिकार की टकराहट",
      "आर्थिक संघर्ष",
      "विद्यालयी प्रतियोगिता"
    ],
    correct: 1,
    explanation: "मेज का संघर्ष वास्तव में नए पारिवारिक ढाँचे में बंटी के स्थान और अधिकार की समस्या को व्यक्त करता है।"
  },

  {
    question: "शकुन के पुनर्विवाह के बाद बंटी को सबसे अधिक किस बात का भय सताता है?",
    options: [
      "उसकी पढ़ाई समाप्त हो जाएगी",
      "उसकी माँ के जीवन में उसका पुराना स्थान बदल जाएगा",
      "वह खेल नहीं पाएगा",
      "उसे नया स्कूल पसंद नहीं आएगा"
    ],
    correct: 1,
    explanation: "बंटी को डर है कि उसकी माँ के नए जीवन में उसका पुराना महत्व और अपनत्व बदल जाएगा।"
  },

  {
    question: "फूफी के चले जाने का बंटी पर क्या प्रभाव पड़ता है?",
    options: [
      "उसका भावनात्मक सहारा और कम हो जाता है",
      "वह अधिक स्वतंत्र हो जाता है",
      "वह तुरंत अजय के साथ चला जाता है",
      "वह पढ़ाई में प्रथम हो जाता है"
    ],
    correct: 0,
    explanation: "फूफी बंटी के भावनात्मक संसार का महत्वपूर्ण सहारा है; उनके अलग होने से उसकी असुरक्षा बढ़ती है।"
  },

  {
    question: "बंटी का फूफी से संबंध किस अवधारणा का सबसे अच्छा उदाहरण है?",
    options: [
      "औपचारिक अनुशासन",
      "वैकल्पिक भावनात्मक attachment",
      "आर्थिक निर्भरता",
      "सामाजिक प्रतिष्ठा"
    ],
    correct: 1,
    explanation: "फूफी बंटी को भावनात्मक सुरक्षा देती हैं और इस प्रकार वैकल्पिक attachment figure की भूमिका निभाती हैं।"
  },

  {
    question: "बंटी के व्यवहार में जिद और विरोध को सबसे उचित रूप में किस रूप में पढ़ना चाहिए?",
    options: [
      "केवल बदमाशी",
      "केवल अनुशासनहीनता",
      "भीतर के असुरक्षित भावों की अभिव्यक्ति",
      "बौद्धिक कमजोरी"
    ],
    correct: 2,
    explanation: "बंटी की जिद और विरोध उसके भीतर की असुरक्षा, अकेलेपन और बदलते संबंधों की प्रतिक्रिया के रूप में समझे जा सकते हैं।"
  },

  {
    question: "Assertion (A): बंटी अपने माता-पिता के संबंधों को केवल बाहरी घटनाओं के रूप में नहीं देखता। Reason (R): वह उनके व्यवहार से अपने परिवार और अपने भविष्य के बारे में अर्थ निकालता।",
    options: [
      "A और R दोनों सत्य हैं तथा R, A की सही व्याख्या है",
      "A और R दोनों सत्य हैं, लेकिन R सही व्याख्या नहीं है",
      "A सत्य है, R असत्य है",
      "A असत्य है, R सत्य है"
    ],
    correct: 0,
    explanation: "बंटी अपने माता-पिता के संबंधों को अपनी व्यक्तिगत सुरक्षा, परिवार और भविष्य से जोड़कर देखता है।"
  },

  {
    question: "Assertion (A): बंटी की समस्या केवल माता-पिता के अलग होने से उत्पन्न नहीं होती। Reason (R): अलगाव के बाद बनने वाली नई पारिवारिक व्यवस्थाएँ भी उसके पुराने संबंध-बोध को प्रभावित करती हैं।",
    options: [
      "A सत्य, R असत्य",
      "A और R दोनों सत्य तथा R सही व्याख्या है",
      "A असत्य, R सत्य",
      "दोनों असत्य"
    ],
    correct: 1,
    explanation: "माता-पिता का अलगाव प्रारंभिक समस्या है, लेकिन नए पारिवारिक संबंध और व्यवस्थाएँ बंटी की असुरक्षा को आगे प्रभावित करती हैं।"
  },

  {
    question: "निम्न घटनाओं का सही क्रम कौन-सा है? 1. अजय-शकुन का वैवाहिक विघटन 2. शकुन का डॉ. जोशी से संबंध 3. फूफी का अलग होना 4. बंटी का नए पारिवारिक वातावरण से सामना",
    options: [
      "1 → 2 → 3 → 4",
      "2 → 1 → 4 → 3",
      "3 → 1 → 2 → 4",
      "1 → 3 → 4 → 2"
    ],
    correct: 0,
    explanation: "कथा में वैवाहिक विघटन के बाद शकुन के नए संबंध, फिर पुराने भावनात्मक सहारे में बदलाव और नए पारिवारिक वातावरण की जटिलताएँ आती हैं।"
  },

  {
    question: "निम्न में से कौन-सा संबंध सही है?",
    options: [
      "अजय — बंटी की माँ",
      "शकुन — बंटी की माँ",
      "डॉ. जोशी — बंटी के जैविक पिता",
      "फूफी — बंटी की सहपाठी"
    ],
    correct: 1,
    explanation: "शकुन बंटी की माँ है।"
  },

  {
    question: "निम्न में से कौन-सा संबंध गलत है?",
    options: [
      "मीरा — अजय की दूसरी पत्नी",
      "डॉ. जोशी — शकुन के दूसरे पति",
      "टीटू — बंटी का हमउम्र मित्र",
      "चीनू — डॉ. जोशी का पुत्र"
    ],
    correct: 3,
    explanation: "चीनू को डॉ. जोशी का पुत्र बताना गलत संबंध है।"
  },

  {
    question: "निम्न में से कौन-सी घटना बंटी के पुराने भावनात्मक संसार के टूटने को सबसे तीव्र बनाती है?",
    options: [
      "फूफी का उससे अलग होना",
      "टीटू का कैरम खेलना",
      "करोंदे तोड़ना",
      "छुट्टियों की बातचीत"
    ],
    correct: 0,
    explanation: "फूफी बंटी के लिए एक महत्वपूर्ण भावनात्मक सहारा हैं, इसलिए उनका अलग होना उसके पुराने सुरक्षा-बोध को और कमजोर करता है।"
  },

  {
    question: "बंटी के लिए “माँ” का अर्थ केवल जैविक संबंध क्यों नहीं रह जाता?",
    options: [
      "माँ उसके लिए सुरक्षा और अपनत्व का मुख्य आधार भी है",
      "माँ उसे पढ़ाती है",
      "माँ उसे आर्थिक सहायता देती है",
      "माँ उसे खेल सिखाती है"
    ],
    correct: 0,
    explanation: "बंटी के लिए माँ केवल जैविक संबंध नहीं बल्कि सुरक्षा, अपनत्व और भावनात्मक स्थिरता का आधार है।"
  },

  {
    question: "बंटी के पिता के नए जीवन का प्रभाव क्या है?",
    options: [
      "बंटी को लगता है कि पिता फिर से पुराने परिवार में लौटेंगे",
      "बंटी के पुराने परिवार की वापसी की संभावना और जटिल हो जाती है",
      "बंटी फूफी से अधिक जुड़ जाता है",
      "शकुन और अजय तुरंत साथ रहने लगते हैं"
    ],
    correct: 1,
    explanation: "अजय के नए जीवन से बंटी के लिए पुराने पारिवारिक ढाँचे की वापसी और अधिक जटिल हो जाती है।"
  },

  {
    question: "बंटी के लिए “नया परिवार” किस मनोवैज्ञानिक चुनौती का प्रतीक है?",
    options: [
      "नए लोगों को स्वीकार करते हुए अपने पुराने अपनत्व को बचाने की कोशिश",
      "आर्थिक विकास",
      "विद्यालयी प्रतिस्पर्धा",
      "सामाजिक प्रतिष्ठा"
    ],
    correct: 0,
    explanation: "बंटी को नए लोगों और नए संबंधों के बीच अपने पुराने अपनत्व और पहचान को बनाए रखने की कठिनाई होती है।"
  },

  {
    question: "उपन्यास में बंटी की तुलना अन्य बच्चों से करवाने का साहित्यिक प्रभाव क्या है?",
    options: [
      "उसकी सामान्यता सिद्ध करना",
      "उसकी पारिवारिक स्थिति की असामान्यता को उसके अनुभवों के माध्यम से उभारना",
      "उसकी शैक्षिक उपलब्धि दिखाना",
      "उसकी आर्थिक संपन्नता दिखाना"
    ],
    correct: 1,
    explanation: "अन्य बच्चों की सामान्य पारिवारिक स्थितियों की तुलना में बंटी की टूटती पारिवारिक दुनिया अधिक स्पष्ट दिखाई देती है।"
  },

  {
    question: "“आपका बंटी” शीर्षक की सबसे प्रभावी व्यंजना कौन-सी है?",
    options: [
      "बंटी केवल पिता का है",
      "बंटी केवल माँ का है",
      "बंटी के संबंधों में अपनत्व के साथ-साथ विभाजन और असुरक्षा भी निहित है",
      "बंटी परिवार से पूरी तरह अलग है"
    ],
    correct: 2,
    explanation: "शीर्षक बंटी के अस्तित्व पर अधिकार, अपनत्व, विभाजन और असुरक्षा के जटिल संबंधों को संकेतित करता है।"
  },

  {
    question: "उपन्यास का बाल-मनोवैज्ञानिक पक्ष किस तकनीक से अधिक प्रभावी होता है?",
    options: [
      "केवल बाहरी घटनाओं के वर्णन से",
      "बच्चे की आंतरिक प्रतिक्रियाओं, कल्पनाओं और भावनात्मक उलझनों से",
      "केवल ऐतिहासिक संदर्भों से",
      "केवल राजनीतिक संवादों से"
    ],
    correct: 1,
    explanation: "बंटी की आंतरिक प्रतिक्रियाएँ, कल्पनाएँ और भावनात्मक द्वंद्व उपन्यास के बाल-मनोवैज्ञानिक पक्ष को प्रभावी बनाते हैं।"
  },

  {
    question: "बंटी के “बाहर की आँखें” और “भीतर की आँखें” वाला बिंब किस बात की ओर संकेत करता है?",
    options: [
      "उसकी शारीरिक दृष्टि की समस्या",
      "बाहरी वास्तविकता और आंतरिक मानसिक संसार के द्वंद्व की ओर",
      "उसके चित्रकारी कौशल की ओर",
      "उसके विद्यालयी भय की ओर"
    ],
    correct: 1,
    explanation: "यह बिंब बंटी द्वारा देखी जाने वाली बाहरी वास्तविकता और उसके भीतर चल रहे मानसिक संसार के अंतर को संकेतित करता है।"
  },

  {
    question: "बंटी का अपने परिवार की स्थिति को समझने का तरीका किससे सबसे अधिक प्रभावित है?",
    options: [
      "केवल वयस्कों द्वारा दी गई स्पष्ट जानकारी से",
      "देखी-सुनी घटनाओं, संकेतों और अपनी कल्पना से",
      "केवल पाठ्यपुस्तक से",
      "केवल टीटू की सलाह से"
    ],
    correct: 1,
    explanation: "बंटी वयस्कों की स्पष्ट व्याख्या के बजाय देखी-सुनी घटनाओं, संकेतों और अपनी कल्पना से पारिवारिक परिस्थितियों को समझता है।"
  },

  {
    question: "शकुन के चरित्र का सबसे जटिल पक्ष क्या है?",
    options: [
      "वह माँ नहीं बनना चाहती",
      "व्यक्तिगत स्वतंत्रता और मातृत्व के बीच उसका अंतर्विरोध",
      "वह अजय से कभी प्रेम नहीं करती",
      "वह परिवार से बाहर रहना चाहती है"
    ],
    correct: 1,
    explanation: "शकुन के चरित्र में व्यक्तिगत स्वतंत्रता और अपने मातृत्व संबंधी दायित्वों के बीच जटिल तनाव दिखाई देता है।"
  },

  {
    question: "अजय और शकुन के संबंध को केवल व्यक्तिगत असहमति मानना किस पक्ष को कम कर देगा?",
    options: [
      "उनके संबंध का बंटी पर पड़ने वाला मनोवैज्ञानिक प्रभाव",
      "उनके आर्थिक जीवन को",
      "उनके सामाजिक पद को",
      "उनके विद्यालयी जीवन को"
    ],
    correct: 0,
    explanation: "अजय और शकुन का वैवाहिक संघर्ष सीधे बंटी की भावनात्मक सुरक्षा और मानसिक संसार को प्रभावित करता है।"
  },

  {
    question: "बंटी के हॉस्टल भेजे जाने की तैयारी किस बात का संकेत है?",
    options: [
      "समस्या का पूर्ण समाधान",
      "बच्चे को पारिवारिक तनाव से भौतिक रूप से दूर करने का प्रयास",
      "माता-पिता के पुनर्मिलन का",
      "बंटी की शैक्षिक विजय का"
    ],
    correct: 1,
    explanation: "हॉस्टल भेजना बंटी को बदलते और तनावपूर्ण पारिवारिक वातावरण से दूर करने का प्रयास है।"
  },

  {
    question: "हॉस्टल भेजने का निर्णय किस बात को स्पष्ट करता है?",
    options: [
      "स्थान बदलना और मनोवैज्ञानिक समस्या का समाधान एक ही बात नहीं है",
      "बंटी अपने माता-पिता को भूल चुका है",
      "शकुन और अजय फिर साथ हैं",
      "बंटी अपने परिवार से प्रसन्न है"
    ],
    correct: 0,
    explanation: "भौतिक दूरी बनाने से बंटी की आंतरिक भावनात्मक समस्या अपने-आप समाप्त नहीं होती।"
  },

  {
    question: "उपन्यास में “यात्रा” का बिंब किस व्यापक अर्थ में महत्वपूर्ण है?",
    options: [
      "केवल रेल-यात्रा",
      "बंटी के लगातार बदलते पारिवारिक और मानसिक संसार की यात्रा",
      "केवल पर्यटन",
      "केवल विद्यालय जाने की यात्रा"
    ],
    correct: 1,
    explanation: "यात्रा बंटी के बदलते पारिवारिक संबंधों और उसके भीतर चल रहे मानसिक परिवर्तन की व्यापक प्रक्रिया का प्रतीक है।"
  },

  {
    question: "अंतिम भाग में रेल का डिब्बा किस स्थिति से जुड़ा है?",
    options: [
      "बंटी और पापा की एक और यात्रा से",
      "शकुन और डॉ. जोशी की यात्रा से",
      "टीटू और बंटी की यात्रा से",
      "फूफी की यात्रा से"
    ],
    correct: 0,
    explanation: "अंतिम भाग में रेल-यात्रा बंटी और उसके पिता से जुड़े महत्वपूर्ण प्रसंग को सामने लाती है।"
  },

  {
    question: "निम्न में से कौन-सा कथन पाठ के अनुरूप नहीं है?",
    options: [
      "बंटी अपने पारिवारिक परिवर्तनों को गहराई से महसूस करता है",
      "फूफी उसके जीवन में स्नेहपूर्ण भूमिका निभाती है",
      "बंटी नए परिवार में तुरंत पूरी तरह सहज हो जाता है",
      "अजय और शकुन का संबंध बंटी के जीवन को प्रभावित करता है"
    ],
    correct: 2,
    explanation: "बंटी नए परिवार में तुरंत सहज नहीं होता; उसका संघर्ष और असुरक्षा उपन्यास के केंद्रीय मनोवैज्ञानिक पक्ष हैं।"
  },

  {
    question: "निम्न में से कौन-सा कथन सही है?",
    options: [
      "बंटी की समस्या केवल आर्थिक है",
      "बंटी एक संवेदनशील और कुशाग्र बालक के रूप में चित्रित होता है",
      "बंटी का परिवार शुरू से ही संयुक्त परिवार है",
      "बंटी के पिता का कथा में कोई महत्व नहीं है"
    ],
    correct: 1,
    explanation: "बंटी संवेदनशील, जिज्ञासु और तीव्र अनुभव करने वाला बालक है।"
  },

  {
    question: "“बंटी घटनाओं का केंद्र भी है और प्रतिक्रियाओं का भोक्ता भी”—इस कथन का आशय क्या है?",
    options: [
      "कथा में सारी घटनाएँ केवल बंटी स्वयं करता है",
      "कथा की प्रमुख घटनाएँ उसके जीवन को प्रभावित करती हैं और उनकी प्रतिक्रिया भी उसी के भीतर दिखाई देती है",
      "बंटी केवल सहायक पात्र है",
      "बंटी कथानक से बाहर है"
    ],
    correct: 1,
    explanation: "कथा की प्रमुख घटनाएँ बंटी के जीवन को प्रभावित करती हैं और उनका मनोवैज्ञानिक प्रभाव उसके व्यवहार में दिखाई देता है।"
  },

  {
    question: "यदि बंटी के व्यवहार को बाल-मनोविज्ञान की दृष्टि से पढ़ें, तो कौन-सा निष्कर्ष अधिक उचित होगा?",
    options: [
      "उसके व्यवहार को उसके पारिवारिक संदर्भ से अलग करके नहीं समझा जा सकता",
      "हर जिद केवल अनुशासनहीनता है",
      "उसका परिवार उसके व्यक्तित्व को प्रभावित नहीं करता",
      "वह अपनी उम्र से असंबंधित व्यवहार करता है इसलिए उसे दोषी माना जाना चाहिए"
    ],
    correct: 0,
    explanation: "बंटी का व्यवहार उसके बदलते पारिवारिक संबंधों, असुरक्षा और भावनात्मक अनुभवों के संदर्भ में समझना अधिक उचित है।"
  },

  {
    question: "बंटी के जीवन में फूफी और माँ के संबंधों की तुलना से क्या समझ आता है?",
    options: [
      "केवल जैविक माँ ही भावनात्मक सुरक्षा दे सकती है",
      "भावनात्मक सुरक्षा देखभाल और संबंध की गुणवत्ता से भी बनती है",
      "फूफी का कोई महत्व नहीं है",
      "बंटी केवल आर्थिक सहायता चाहता है"
    ],
    correct: 1,
    explanation: "फूफी के माध्यम से स्पष्ट होता है कि भावनात्मक सुरक्षा केवल जैविक संबंध से नहीं बल्कि स्नेहपूर्ण देखभाल से भी बनती है।"
  },

  {
    question: "निम्न में से कौन-सा उपन्यास के प्रमुख themes का सही समूह है?",
    options: [
      "युद्ध, राष्ट्रवाद, औद्योगीकरण",
      "बाल-मनोविज्ञान, दांपत्य-विघटन, परिवार, स्त्री-अस्तित्व",
      "कृषि, अकाल, ग्रामीण अर्थव्यवस्था",
      "अपराध, जासूसी, रहस्य"
    ],
    correct: 1,
    explanation: "उपन्यास का केंद्र बाल-मनोविज्ञान, टूटता दांपत्य, बदलते पारिवारिक संबंध और स्त्री-अस्तित्व के प्रश्न हैं।"
  },

  {
    question: "बंटी की दृष्टि से “तलाक” की सबसे बड़ी त्रासदी क्या है?",
    options: [
      "केवल माता-पिता का अलग रहना",
      "उसके परिचित भावनात्मक संसार और संबंधों का टूटना/बदलना",
      "उसका स्कूल बदलना",
      "उसका आर्थिक स्तर कम होना"
    ],
    correct: 1,
    explanation: "बंटी के लिए तलाक का सबसे गहरा प्रभाव उसके परिचित भावनात्मक संसार और संबंधों के बदलने में दिखाई देता है।"
  },

  {
    question: "निम्न में से कौन-सा कथन शकुन के बारे में सबसे संतुलित है?",
    options: [
      "वह केवल कठोर माँ है",
      "वह केवल स्वार्थी स्त्री है",
      "वह आत्मनिर्भर स्त्री है, लेकिन उसके व्यक्तिगत निर्णयों और मातृत्व के बीच जटिल तनाव मौजूद है",
      "वह उपन्यास की गौण पात्र है"
    ],
    correct: 2,
    explanation: "शकुन को केवल कठोर या स्वार्थी कह देना उसके चरित्र की जटिलता को सीमित कर देता है।"
  },

  {
    question: "उपन्यास का केंद्रीय प्रश्न किस विकल्प में सबसे सटीक रूप में व्यक्त होता है?",
    options: [
      "आधुनिक परिवार में बदलते वयस्क संबंधों के बीच बच्चे की भावनात्मक सुरक्षा का क्या होता है?",
      "बच्चे को कौन-सा विद्यालय चुनना चाहिए?",
      "परिवार को अधिक धन कैसे कमाना चाहिए?",
      "बच्चे को खेल में कैसे सफल होना चाहिए?"
    ],
    correct: 0,
    explanation: "उपन्यास का केंद्रीय मनोवैज्ञानिक प्रश्न बदलते वयस्क संबंधों के बीच बच्चे की भावनात्मक सुरक्षा और पहचान से जुड़ा है।"
  },

  {
    question: "निम्न में से कौन-सा ‘आपका बंटी’ की समग्र साहित्यिक पहचान का सबसे सटीक कथन है?",
    options: [
      "केवल प्रेम-विवाह की कहानी",
      "केवल एक शरारती बच्चे की कहानी",
      "केवल स्त्री-स्वतंत्रता का घोषणापत्र",
      "टूटते दांपत्य और बदलते पारिवारिक संबंधों के बीच बाल-मन की पीड़ा और असुरक्षा का मनोवैज्ञानिक आख्यान"
    ],
    correct: 3,
    explanation: "‘आपका बंटी’ मुख्यतः टूटते दांपत्य और बदलते पारिवारिक संबंधों के बीच एक बच्चे के मानसिक संघर्ष, पीड़ा और असुरक्षा का मनोवैज्ञानिक आख्यान है।"
  }

];


/* =========================================================
   SSB TGT – CDP
========================================================= */

const SSB_TGT_QUESTIONS = [

  {
    question: "A teacher notices that a student can solve a mathematical problem independently after receiving a series of carefully sequenced prompts. Which interpretation is most consistent with a Vygotskian perspective?",
    options: [
      "The prompts reveal the learner's Zone of Proximal Development",
      "The learner has reached complete mastery",
      "The learner lacks the cognitive ability to solve the task",
      "The learner's performance is primarily determined by maturation"
    ],
    correct: 0,
    explanation: "Carefully sequenced prompts provide temporary support within the learner's Zone of Proximal Development."
  },

  {
    question: "A teacher deliberately provides an initially difficult task, but supports the learner only when necessary and gradually withdraws assistance. This is best described as:",
    options: [
      "Conditioning",
      "Scaffolding",
      "Summative assessment",
      "Drill practice"
    ],
    correct: 1,
    explanation: "Scaffolding provides temporary support that is gradually withdrawn as competence develops."
  },

  {
    question: "Which situation most clearly represents a learner's Zone of Proximal Development?",
    options: [
      "A task the learner cannot understand even with support",
      "A task the learner completes automatically",
      "A task the learner can complete with appropriate assistance but not yet independently",
      "A task unrelated to previous learning"
    ],
    correct: 2,
    explanation: "The ZPD concerns what a learner can accomplish with appropriate social support beyond current independent performance."
  },

  {
    question: "A teacher asks students to explain why they selected an answer rather than simply identifying the answer. The primary pedagogical purpose is to assess:",
    options: [
      "Reasoning processes",
      "Handwriting speed",
      "Memory span only",
      "Attendance"
    ],
    correct: 0,
    explanation: "Asking learners to justify an answer reveals their reasoning process."
  },

  {
    question: "A learner modifies an existing mental schema after encountering evidence that contradicts it. In Piagetian terms, this is:",
    options: [
      "Assimilation",
      "Accommodation",
      "Imitation",
      "Conditioning"
    ],
    correct: 1,
    explanation: "Accommodation involves modifying an existing schema to account for new information."
  },

  {
    question: "Which classroom practice is most consistent with constructivism?",
    options: [
      "Students copy the teacher's notes silently",
      "Students memorise definitions before discussing them",
      "Students investigate a problem, generate explanations and revise their ideas",
      "Students reproduce a model answer"
    ],
    correct: 2,
    explanation: "Constructivism emphasises active construction and reconstruction of knowledge."
  },

  {
    question: "A child assumes that a taller glass contains more water even after the same amount is transferred from a shorter glass. This is most characteristic of:",
    options: [
      "Formal operational reasoning",
      "Concrete operational conservation",
      "Preoperational thinking",
      "Post-formal reasoning"
    ],
    correct: 2,
    explanation: "Failure to understand conservation is characteristic of Piaget's preoperational period."
  },

  {
    question: "A learner can classify objects according to multiple dimensions and understand conservation. This indicates movement toward:",
    options: [
      "Sensorimotor thought",
      "Concrete operational thought",
      "Preconceptual thought",
      "Reflexive behaviour"
    ],
    correct: 1,
    explanation: "Classification and conservation are major characteristics of concrete operational thinking."
  },

  {
    question: "A teacher asks students to generate several possible explanations before evaluating them. This primarily encourages:",
    options: [
      "Divergent thinking",
      "Rote memorisation",
      "Conditioned responding",
      "Passive reception"
    ],
    correct: 0,
    explanation: "Generating multiple possible explanations encourages divergent thinking."
  },

  {
    question: "Which classroom situation best demonstrates metacognition?",
    options: [
      "A learner memorises a definition",
      "A learner monitors whether a strategy is working and changes it when necessary",
      "A learner copies a solved example",
      "A learner waits for the teacher's answer"
    ],
    correct: 1,
    explanation: "Metacognition involves monitoring and regulating one's own thinking and learning."
  },

  {
    question: "A teacher gives immediate information about errors while students are still learning a concept. This is primarily:",
    options: [
      "Summative assessment",
      "Formative assessment",
      "Certification",
      "Ranking"
    ],
    correct: 1,
    explanation: "Formative assessment provides information during learning so teaching and learning can be adjusted."
  },

  {
    question: "Which assessment practice best supports learning rather than merely measuring learning?",
    options: [
      "Providing feedback that identifies the next steps for improvement",
      "Publishing class ranks",
      "Giving only a numerical grade",
      "Comparing learners publicly"
    ],
    correct: 0,
    explanation: "Actionable feedback helps learners improve subsequent performance."
  },

  {
    question: "A learner knows a mathematical formula but cannot decide when to use it. The primary difficulty is with:",
    options: [
      "Transfer and strategic knowledge",
      "Sensory memory",
      "Physical maturation",
      "Language acquisition"
    ],
    correct: 0,
    explanation: "Knowing a formula is different from knowing when and how to apply it."
  },

  {
    question: "A teacher asks students to compare two competing explanations and identify evidence supporting each. This most strongly develops:",
    options: [
      "Recall",
      "Critical evaluation",
      "Copying",
      "Mechanical practice"
    ],
    correct: 1,
    explanation: "Comparing explanations and evaluating evidence requires critical evaluation."
  },

  {
    question: "Which statement about intelligence is most consistent with contemporary educational psychology?",
    options: [
      "Intelligence is completely fixed",
      "One test score fully defines intellectual potential",
      "Performance can be influenced by experience, learning opportunities and context",
      "Intelligence is identical to academic marks"
    ],
    correct: 2,
    explanation: "Contemporary perspectives recognise the influence of experience, learning and context on performance."
  },

  {
    question: "A teacher interprets a learner's low performance as evidence of laziness without examining instructional or contextual factors. What is the major problem?",
    options: [
      "Overreliance on an individual-deficit explanation",
      "Excessive scaffolding",
      "Use of formative assessment",
      "Universal Design"
    ],
    correct: 0,
    explanation: "Learner performance should be interpreted within instructional and contextual conditions rather than attributed automatically to personal deficits."
  },

  {
    question: "A student avoids difficult tasks because previous failures have convinced the student that effort will not help. Which concept is most relevant?",
    options: [
      "Learned helplessness",
      "Assimilation",
      "Conservation",
      "Cognitive apprenticeship"
    ],
    correct: 0,
    explanation: "Repeated experiences of uncontrollable failure can contribute to learned helplessness."
  },

  {
    question: "A teacher praises a learner specifically for using an effective strategy rather than praising intelligence. This is most consistent with promoting:",
    options: [
      "Fixed mindset",
      "Growth-oriented beliefs",
      "External dependency",
      "Avoidance motivation"
    ],
    correct: 1,
    explanation: "Emphasising strategy and effort can support beliefs that competence can develop through learning."
  },

  {
    question: "Which example best represents intrinsic motivation?",
    options: [
      "Studying because a prize is promised",
      "Studying to avoid punishment",
      "Studying because the learner enjoys understanding the topic",
      "Studying solely to defeat classmates"
    ],
    correct: 2,
    explanation: "Intrinsic motivation involves engaging in an activity because the activity itself is interesting or satisfying."
  },

  {
    question: "A teacher allows students to select among several project topics while maintaining common learning objectives. This can support:",
    options: [
      "Autonomy and engagement",
      "Ability tracking",
      "Norm-referenced grading",
      "Teacher dependence"
    ],
    correct: 0,
    explanation: "Meaningful choice can support learner autonomy while common objectives maintain academic direction."
  },

  {
    question: "A child learns a behaviour after observing a respected peer receive praise for it. This is most directly explained by:",
    options: [
      "Classical conditioning",
      "Observational learning",
      "Maturation",
      "Trial-and-error without social influence"
    ],
    correct: 1,
    explanation: "Bandura's social learning theory emphasises learning through observation and modelling."
  },

  {
    question: "According to Bandura, self-efficacy refers primarily to:",
    options: [
      "A learner's belief about their capability to perform a task",
      "A learner's IQ score",
      "A teacher's expectations",
      "The difficulty of a curriculum"
    ],
    correct: 0,
    explanation: "Self-efficacy is an individual's belief in their capability to organise and execute actions required for a task."
  },

  {
    question: "Which teacher behaviour is most likely to strengthen students' self-efficacy?",
    options: [
      "Giving only extremely difficult tasks",
      "Providing achievable challenges, feedback and opportunities to experience mastery",
      "Comparing weak learners publicly",
      "Avoiding feedback"
    ],
    correct: 1,
    explanation: "Mastery experiences and constructive feedback are important sources of self-efficacy."
  },

  {
    question: "A teacher groups students flexibly and changes groups according to task demands and learning needs. This is preferable to permanent ability grouping because it:",
    options: [
      "Recognises that competence can vary across contexts",
      "Eliminates assessment",
      "Guarantees identical outcomes",
      "Prevents peer interaction"
    ],
    correct: 0,
    explanation: "Flexible grouping avoids treating ability as a fixed global characteristic."
  },

  {
    question: "Which classroom practice is most likely to reinforce stereotype threat?",
    options: [
      "Communicating that a particular group is naturally poor at a subject",
      "Providing supportive feedback",
      "Using diverse examples",
      "Allowing multiple ways to demonstrate learning"
    ],
    correct: 0,
    explanation: "Negative stereotypes can create psychological pressure that interferes with performance."
  },

  {
    question: "A teacher provides captions, visual instructions and written summaries alongside oral explanations. This most directly supports:",
    options: [
      "Accessibility",
      "Ability tracking",
      "Competition",
      "Summative ranking"
    ],
    correct: 0,
    explanation: "Multiple modes of information improve accessibility for learners with varied needs."
  },

  {
    question: "Universal Design for Learning primarily encourages teachers to:",
    options: [
      "Design one standard pathway",
      "Anticipate learner variability from the beginning",
      "Separate students by disability",
      "Lower expectations"
    ],
    correct: 1,
    explanation: "UDL anticipates learner variability and designs flexible access, engagement and expression."
  },

  {
    question: "A learner with dyslexia understands a concept orally but struggles to demonstrate it through lengthy handwriting. The most appropriate response is to:",
    options: [
      "Assume conceptual weakness",
      "Provide an appropriate alternative response mode when handwriting is not the intended construct",
      "Reduce all learning expectations",
      "Exclude the learner from assessment"
    ],
    correct: 1,
    explanation: "Alternative response modes can remove an irrelevant barrier while preserving the intended learning objective."
  },

  {
    question: "Which statement best reflects inclusive education?",
    options: [
      "Learners must adapt completely to existing systems",
      "Schools should adapt environments and practices to support diverse learners",
      "Learners with disabilities should always be taught separately",
      "Only high achievers should participate in advanced tasks"
    ],
    correct: 1,
    explanation: "Inclusion requires adapting educational systems and practices so diverse learners can participate meaningfully."
  },

  {
    question: "A teacher notices that one student dominates group discussions. Which intervention best promotes equitable participation?",
    options: [
      "Remove the student permanently",
      "Establish structured roles and participation norms",
      "Allow the dominant student to lead every activity",
      "Cancel collaborative work"
    ],
    correct: 1,
    explanation: "Structured roles and participation norms can create more equitable opportunities to contribute."
  },

  {
    question: "A teacher asks students to explain how they reached an answer and then compare strategies. This primarily promotes:",
    options: [
      "Metacognitive awareness",
      "Passive learning",
      "Rote recall",
      "Punishment learning"
    ],
    correct: 0,
    explanation: "Explaining and comparing strategies encourages learners to become aware of their thinking processes."
  },

  {
    question: "Which teacher response to a misconception is most pedagogically appropriate?",
    options: [
      "Immediately label the learner wrong",
      "Elicit the learner's reasoning and create opportunities for conceptual revision",
      "Ignore the misconception",
      "Require memorisation without discussion"
    ],
    correct: 1,
    explanation: "Understanding the reasoning behind a misconception allows the teacher to design meaningful conceptual change."
  },

  {
    question: "A student performs well when a task is broken into steps but struggles when the steps are removed. What should the teacher gradually promote?",
    options: [
      "Permanent dependence on prompts",
      "Internalisation and independent strategy use",
      "Task avoidance",
      "Lower expectations"
    ],
    correct: 1,
    explanation: "Support should gradually be withdrawn so learners internalise strategies and become independent."
  },

  {
    question: "Which example represents higher-order thinking?",
    options: [
      "Recalling a definition",
      "Listing textbook facts",
      "Evaluating competing solutions using evidence",
      "Copying a procedure"
    ],
    correct: 2,
    explanation: "Evaluation using evidence requires higher-order cognitive processing."
  },

  {
    question: "A teacher asks students to design an experiment to test their own hypothesis. This most strongly promotes:",
    options: [
      "Inquiry and scientific reasoning",
      "Mechanical memorisation",
      "Passive observation",
      "Fixed-response learning"
    ],
    correct: 0,
    explanation: "Designing an experiment requires hypothesis formation, planning, evidence and reasoning."
  },

  {
    question: "A learner can explain a concept in the home language but struggles in the instructional language. The teacher should primarily:",
    options: [
      "Interpret the difficulty as lack of intelligence",
      "Use linguistic support while assessing conceptual understanding separately",
      "Remove the learner from the subject",
      "Provide only simpler concepts"
    ],
    correct: 1,
    explanation: "Language proficiency and conceptual understanding should be distinguished."
  },

  {
    question: "Which classroom practice best supports peer learning?",
    options: [
      "Students silently work alone all year",
      "Students explain strategies to one another and jointly solve meaningful problems",
      "Teacher provides all answers",
      "Students compete for every response"
    ],
    correct: 1,
    explanation: "Peer explanation and collaborative problem solving can support social construction of knowledge."
  },

  {
    question: "A teacher asks learners to predict an outcome before conducting an experiment. The main purpose is to:",
    options: [
      "Activate prior conceptions and promote reasoning",
      "Prevent inquiry",
      "Guarantee correct predictions",
      "Replace experimentation"
    ],
    correct: 0,
    explanation: "Prediction activates prior knowledge and creates a basis for comparing expectations with evidence."
  },

  {
    question: "Which assessment is most appropriate for evaluating students' ability to collaborate?",
    options: [
      "A multiple-choice test alone",
      "Observation of collaborative performance using clear criteria",
      "A memory quiz",
      "A spelling test"
    ],
    correct: 1,
    explanation: "Collaborative competence is best assessed through authentic performance evidence."
  },

  {
    question: "A teacher uses rubrics with explicit criteria before students begin a project. This primarily supports:",
    options: [
      "Transparency and self-regulation",
      "Hidden assessment expectations",
      "Random grading",
      "Norm-referenced ranking"
    ],
    correct: 0,
    explanation: "Clear criteria make expectations transparent and support learner monitoring."
  },

  {
    question: "A teacher gives students a chance to revise work after feedback. The most important learning benefit is:",
    options: [
      "Feedback becomes actionable through revision",
      "Assessment becomes irrelevant",
      "Students avoid responsibility",
      "Grades become the only goal"
    ],
    correct: 0,
    explanation: "Revision allows learners to use feedback to improve their work."
  },

  {
    question: "Which situation best represents diagnostic teaching?",
    options: [
      "Teacher identifies misconceptions and then selects targeted instructional strategies",
      "Teacher gives a final certificate",
      "Teacher publishes ranks",
      "Teacher records attendance"
    ],
    correct: 0,
    explanation: "Diagnostic teaching uses evidence of learner difficulties to plan targeted instruction."
  },

  {
    question: "A teacher uses examples from students' communities when teaching abstract concepts. This primarily supports:",
    options: [
      "Contextual meaning-making",
      "Content isolation",
      "Pure abstraction",
      "Competitive learning"
    ],
    correct: 0,
    explanation: "Connecting abstract concepts to familiar contexts can make learning meaningful."
  },

  {
    question: "A learner gives an unusual answer that is logically justified. What should the teacher do first?",
    options: [
      "Reject it because it differs from the expected answer",
      "Ask the learner to explain the reasoning",
      "Penalise creativity",
      "Ignore the response"
    ],
    correct: 1,
    explanation: "The reasoning should be examined before judging an unconventional answer."
  },

  {
    question: "Which practice is most consistent with differentiated instruction?",
    options: [
      "Identical tasks and supports for everyone",
      "Adjusting content, process or product according to learner readiness and needs while maintaining meaningful goals",
      "Permanent separation by ability",
      "Removing challenging content"
    ],
    correct: 1,
    explanation: "Differentiation adjusts learning pathways while maintaining meaningful educational goals."
  },

  {
    question: "A teacher asks students to create a concept map showing relationships among ideas. This primarily assesses:",
    options: [
      "Organisation and integration of knowledge",
      "Handwriting speed",
      "Attendance",
      "Physical development"
    ],
    correct: 0,
    explanation: "Concept maps reveal how learners organise and connect concepts."
  },

  {
    question: "A learner remembers isolated facts but cannot connect them into a coherent explanation. The teacher should emphasise:",
    options: [
      "More isolated memorisation",
      "Conceptual connections and elaboration",
      "Punishment",
      "Faster testing"
    ],
    correct: 1,
    explanation: "Elaboration and conceptual connections help transform isolated facts into integrated knowledge."
  },

  {
    question: "Which teacher feedback is most likely to promote improvement?",
    options: [
      "“You are intelligent.”",
      "“Wrong.”",
      "“Your evidence supports the first claim; now explain how it supports the second.”",
      "“You should have known this.”"
    ],
    correct: 2,
    explanation: "Specific feedback linked to the work provides actionable information for improvement."
  },

  {
    question: "A teacher wants students to become independent learners. Which practice is most appropriate?",
    options: [
      "Make every decision for students",
      "Teach planning, monitoring and reflection strategies",
      "Give answers immediately",
      "Prevent students from evaluating their work"
    ],
    correct: 1,
    explanation: "Planning, monitoring and reflection are central to self-regulated learning."
  },

  {
    question: "A student asks for help before attempting a problem. Which response best promotes productive independence?",
    options: [
      "Give the complete answer",
      "Ask what the student has tried and provide a strategic hint if necessary",
      "Refuse all assistance",
      "Tell another student to solve it"
    ],
    correct: 1,
    explanation: "Strategic prompts encourage the learner to engage in the problem while receiving appropriate support."
  },

  {
    question: "A teacher uses peer assessment with clear criteria and training. What is an important potential benefit?",
    options: [
      "Development of evaluative judgement and reflection",
      "Elimination of teacher responsibility",
      "Guaranteed objectivity",
      "Removal of learning goals"
    ],
    correct: 0,
    explanation: "Well-designed peer assessment can develop learners' evaluative judgement and reflective skills."
  },

  {
    question: "A learner initially believes that all heavy objects sink. The teacher provides carefully selected counterexamples and asks the learner to explain them. This primarily supports:",
    options: [
      "Conceptual restructuring",
      "Pure memorisation",
      "Avoidance of reasoning",
      "Mechanical conditioning"
    ],
    correct: 0,
    explanation: "Contrasting evidence can challenge an existing conception and promote conceptual restructuring."
  },

  {
    question: "Which principle should guide interpretation of classroom assessment results?",
    options: [
      "One score completely defines a learner",
      "Evidence should be interpreted in relation to purpose, context and other relevant information",
      "Lower scores always indicate low ability",
      "Assessment should never be revised"
    ],
    correct: 1,
    explanation: "Assessment evidence gains meaning when interpreted according to purpose, context and multiple sources."
  },

  {
    question: "A teacher changes an assessment format because the original format introduces a barrier unrelated to the intended skill. This is best understood as:",
    options: [
      "An appropriate accommodation",
      "Lowering the construct",
      "Giving an unfair advantage",
      "Removing assessment standards"
    ],
    correct: 0,
    explanation: "An accommodation can remove an irrelevant barrier without changing the intended construct."
  },

  {
    question: "Which classroom environment is most likely to support deep learning?",
    options: [
      "One where mistakes are treated as information for learning and students justify their thinking",
      "One where only correct answers are valued",
      "One where students avoid difficult questions",
      "One where memorisation is the only recognised achievement"
    ],
    correct: 0,
    explanation: "Deep learning is supported by intellectual risk-taking, explanation, feedback and productive treatment of errors."
  },

  {
    question: "A teacher asks students to compare two different solution methods and identify the conditions under which each is useful. This primarily develops:",
    options: [
      "Strategic knowledge",
      "Simple recall",
      "Mechanical imitation",
      "Sensory memory"
    ],
    correct: 0,
    explanation: "Understanding when and why different strategies work develops strategic knowledge."
  },

  {
    question: "Which statement best captures the role of the teacher in a learner-centred classroom?",
    options: [
      "The teacher becomes unnecessary",
      "The teacher designs, mediates and supports learning rather than merely transmitting information",
      "The teacher should never explain concepts",
      "The teacher should allow learning to occur without structure"
    ],
    correct: 1,
    explanation: "Learner-centred teaching does not remove the teacher; it changes the teacher's role toward designing, mediating and supporting learning."
  },

  {
    question: "A teacher encourages students to ask questions that challenge assumptions and demand evidence. This primarily promotes:",
    options: [
      "Critical thinking",
      "Rote learning",
      "Passive obedience",
      "Mechanical repetition"
    ],
    correct: 0,
    explanation: "Questioning assumptions and demanding evidence are central features of critical thinking."
  },

  {
    question: "A teacher notices that students are anxious before an assessment and provides practice opportunities, clear expectations and constructive feedback. This can primarily help by:",
    options: [
      "Increasing uncertainty",
      "Supporting perceived competence and preparedness",
      "Removing all assessment demands",
      "Guaranteeing identical scores"
    ],
    correct: 1,
    explanation: "Practice, clear expectations and constructive feedback can improve preparedness and perceived competence."
  },

  {
    question: "A student explains a correct answer but cannot recognise when the strategy should be used. The teacher should focus on:",
    options: [
      "Declarative knowledge only",
      "Conditional and strategic knowledge",
      "Handwriting",
      "Attendance"
    ],
    correct: 1,
    explanation: "Knowing when and under what conditions to use a strategy is conditional and strategic knowledge."
  },

  {
    question: "A teacher wants to know whether students can use knowledge flexibly. Which task is most suitable?",
    options: [
      "Ask them to repeat the definition",
      "Present a novel problem requiring adaptation of the concept",
      "Ask them to copy notes",
      "Ask them to memorise the chapter"
    ],
    correct: 1,
    explanation: "Novel problems reveal whether learners can transfer and adapt knowledge."
  },

  {
    question: "Which practice most strongly supports learner agency?",
    options: [
      "Giving students meaningful choices and responsibility within clear boundaries",
      "Making all decisions for students",
      "Avoiding learner feedback",
      "Using punishment for every mistake"
    ],
    correct: 0,
    explanation: "Agency develops when learners have meaningful choices and responsibility within supportive structures."
  }

];


/* =========================================================
   DAILY TESTS
========================================================= */

const DAILY_TESTS = {

  "ssd-jt": {
    title: "SSD / JT – CDP",
    date: "20 September 2026",
    day: "Sunday",
    duration: 60,
    questions: SSD_JT_QUESTIONS
  },

  "hindi-cdp": {
    title: "Hindi – CDP",
    date: "20 September 2026",
    day: "Sunday",
    duration: 60,
    questions: HINDI_AAPKA_BUNTY_QUESTIONS
  },

  "ssb-tgt-cdp": {
    title: "SSB TGT – CDP",
    date: "20 September 2026",
    day: "Sunday",
    duration: 60,
    questions: SSB_TGT_QUESTIONS
  }

};


/* =========================================================
   VARIABLES
========================================================= */

let currentTest = null;
let currentQuestion = 0;
let userAnswers = [];
let timerSeconds = 0;
let timerInterval = null;
let studentName = "";


/* =========================================================
   LOGIN
========================================================= */

function studentLogin() {

  const nameInput =
    document.getElementById("student-name");

  const passwordInput =
    document.getElementById("student-password");

  const errorBox =
    document.getElementById("login-error");

  const name =
    nameInput.value.trim();

  const password =
    passwordInput.value;

  errorBox.textContent = "";

  if (name === "") {

    errorBox.textContent =
      "Please enter your name.";

    return;
  }

  if (password === "") {

    errorBox.textContent =
      "Please enter the password.";

    return;
  }

  if (password !== TEST_PASSWORD) {

    errorBox.textContent =
      "Incorrect password.";

    return;
  }

  studentName = name;

  document.getElementById("login-page").style.display =
    "none";

  document.getElementById("home-page").style.display =
    "block";

  const nameDisplay =
    document.getElementById("logged-student-name");

  if (nameDisplay) {

    nameDisplay.textContent =
      studentName;

  }

  updateTodayDate();

}


/* =========================================================
   DATE
========================================================= */

function updateTodayDate() {

  const dateElement =
    document.getElementById("today-date");

  if (!dateElement) return;

  dateElement.textContent =
    "20 September 2026 • Sunday";

}


/* =========================================================
   START TEST
========================================================= */

function startTest(testId) {

  const test =
    DAILY_TESTS[testId];

  if (!test) {

    alert("Test not found.");

    return;
  }

  if (
    !test.questions ||
    test.questions.length === 0
  ) {

    alert(
      "Questions for this test will be added soon."
    );

    return;
  }

  currentTest = test;

  currentQuestion = 0;

  userAnswers =
    new Array(
      test.questions.length
    ).fill(null);

  timerSeconds =
    test.duration * 60;

  document.getElementById("home-page").style.display =
    "none";

  document.getElementById("test-screen").style.display =
    "block";

  renderTest();

  startTimer();

  if (
    document.documentElement.requestFullscreen
  ) {

    document.documentElement
      .requestFullscreen()
      .catch(() => {});

  }

}


/* =========================================================
   RENDER TEST
========================================================= */

function renderTest() {

  const screen =
    document.getElementById("test-screen");

  const q =
    currentTest.questions[currentQuestion];

  let html = "";

  html += `

    <div class="exam-wrapper">

      <div class="exam-header">

        <div>
          <h2>${escapeHTML(currentTest.title)}</h2>
          <p>
            ${escapeHTML(currentTest.date)}
            •
            ${escapeHTML(currentTest.day)}
          </p>
        </div>

        <div class="student-info">
          Student:
          <strong>
            ${escapeHTML(studentName)}
          </strong>
        </div>

        <div class="timer-box">
          <span>TIME LEFT</span>
          <strong id="timer">60:00</strong>
        </div>

      </div>


      <div class="exam-body">

        <div class="question-area">

          <div class="question-number">
            Question
            ${currentQuestion + 1}
            of
            ${currentTest.questions.length}
          </div>

          <div class="question-text">
            ${escapeHTML(q.question)}
          </div>

          <div class="options">

  `;


  q.options.forEach(
    (option, index) => {

      const letter =
        String.fromCharCode(
          65 + index
        );

      const selected =
        userAnswers[currentQuestion] === index
          ? "selected"
          : "";

      html += `

        <button
          class="option-btn ${selected}"
          onclick="selectAnswer(${index})"
        >

          <span class="option-letter">
            ${letter}
          </span>

          <span class="option-text">
            ${escapeHTML(option)}
          </span>

        </button>

      `;

    }
  );


  html += `

          </div>


          <div class="navigation">

            <button
              class="nav-btn"
              onclick="previousQuestion()"
              ${currentQuestion === 0 ? "disabled" : ""}
            >
              ← Previous
            </button>

            <button
              class="nav-btn"
              onclick="nextQuestion()"
            >
              Next →
            </button>

          </div>


          <button
            class="submit-btn"
            onclick="submitTest(false)"
          >
            SUBMIT TEST
          </button>

        </div>


        <aside class="question-panel">

          <h3>Questions</h3>

          <div class="palette">

  `;


  currentTest.questions.forEach(
    (question, index) => {

      let classes =
        "palette-btn";

      if (
        index === currentQuestion
      ) {

        classes +=
          " current";

      }

      if (
        userAnswers[index] !== null
      ) {

        classes +=
          " answered";

      }

      html += `

        <button
          class="${classes}"
          onclick="goToQuestion(${index})"
        >
          ${index + 1}
        </button>

      `;

    }
  );


  html += `

          </div>

          <div class="palette-info">

            <div>
              <span
                class="legend current-legend"
              ></span>
              Current
            </div>

            <div>
              <span
                class="legend answered-legend"
              ></span>
              Answered
            </div>

            <div>
              <span
                class="legend unanswered-legend"
              ></span>
              Unanswered
            </div>

          </div>

        </aside>

      </div>

    </div>

  `;


  screen.innerHTML =
    html;

  updateTimerDisplay();

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(index) {

  userAnswers[currentQuestion] =
    index;

  renderTest();

}


/* =========================================================
   NEXT
========================================================= */

function nextQuestion() {

  if (
    currentQuestion <
    currentTest.questions.length - 1
  ) {

    currentQuestion++;

    renderTest();

  }

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousQuestion() {

  if (
    currentQuestion > 0
  ) {

    currentQuestion--;

    renderTest();

  }

}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function goToQuestion(index) {

  if (
    index < 0 ||
    index >= currentTest.questions.length
  ) {

    return;

  }

  currentQuestion =
    index;

  renderTest();

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

  clearInterval(
    timerInterval
  );

  timerInterval =
    setInterval(() => {

      timerSeconds--;

      updateTimerDisplay();

      if (
        timerSeconds <= 0
      ) {

        clearInterval(
          timerInterval
        );

        submitTest(true);

      }

    }, 1000);

}


/* =========================================================
   TIMER DISPLAY
========================================================= */

function updateTimerDisplay() {

  const timer =
    document.getElementById("timer");

  if (!timer) return;

  const minutes =
    Math.floor(
      timerSeconds / 60
    );

  const seconds =
    timerSeconds % 60;

  timer.textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

}


/* =========================================================
   SUBMIT
========================================================= */

function submitTest(
  autoSubmit = false
) {

  if (!currentTest)
    return;

  if (!autoSubmit) {

    const unanswered =
      userAnswers.filter(
        answer =>
          answer === null
      ).length;

    if (
      unanswered > 0
    ) {

      const confirmSubmit =
        confirm(
          `You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit?`
        );

      if (!confirmSubmit)
        return;

    } else {

      const confirmSubmit =
        confirm(
          "Are you sure you want to submit the test?"
        );

      if (!confirmSubmit)
        return;

    }

  }

  clearInterval(
    timerInterval
  );

  showResult();

}


/* =========================================================
   RESULT
========================================================= */

function showResult() {

  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  currentTest.questions.forEach(
    (question, index) => {

      const answer =
        userAnswers[index];

      if (
        answer === null
      ) {

        unanswered++;

      } else if (
        answer ===
        question.correct
      ) {

        correct++;

      } else {

        wrong++;

      }

    }
  );


  const total =
    currentTest.questions.length;

  const percentage =
    (
      (correct / total) *
      100
    ).toFixed(2);


  let html = `

    <div class="result-wrapper">

      <div class="result-card">

        <div class="result-top">

          <h1>
            TEST COMPLETED
          </h1>

          <p>
            ${escapeHTML(
              currentTest.title
            )}
          </p>

          <h3>
            Student:
            ${escapeHTML(
              studentName
            )}
          </h3>

        </div>


        <div class="score-box">

          <div>
            <strong>
              ${correct}
            </strong>
            <span>
              Correct
            </span>
          </div>

          <div>
            <strong>
              ${wrong}
            </strong>
            <span>
              Wrong
            </span>
          </div>

          <div>
            <strong>
              ${unanswered}
            </strong>
            <span>
              Unanswered
            </span>
          </div>

          <div>
            <strong>
              ${percentage}%
            </strong>
            <span>
              Score
            </span>
          </div>

        </div>


        <div class="result-actions">

          <button
            class="retry-btn"
            onclick="retryTest()"
          >
            RETRY TEST
          </button>

          <button
            class="home-btn"
            onclick="goHome()"
          >
            BACK TO HOME
          </button>

        </div>

      </div>


      <div class="review-section">

        <h2>
          Detailed Review
        </h2>

  `;


  currentTest.questions.forEach(
    (question, index) => {

      const userAnswer =
        userAnswers[index];

      const isCorrect =
        userAnswer ===
        question.correct;

      let status = "";

      if (
        userAnswer === null
      ) {

        status =
          "Not Answered";

      } else if (
        isCorrect
      ) {

        status =
          "Correct";

      } else {

        status =
          "Wrong";

      }


      html += `

        <div class="review-card">

          <div class="review-question">

            <strong>
              Q${index + 1}.
            </strong>

            ${escapeHTML(
              question.question
            )}

          </div>


          <div class="review-answer">

            <p>

              <strong>
                Your Answer:
              </strong>

              ${
                userAnswer === null
                  ? "Not Answered"
                  :
                    String.fromCharCode(
                      65 + userAnswer
                    ) +
                    ". " +
                    escapeHTML(
                      question.options[
                        userAnswer
                      ]
                    )
              }

            </p>


            <p>

              <strong>
                Correct Answer:
              </strong>

              ${String.fromCharCode(
                65 + question.correct
              )}.

              ${escapeHTML(
                question.options[
                  question.correct
                ]
              )}

            </p>


            <p>

              <strong>
                Result:
              </strong>

              ${status}

            </p>


            <p class="explanation">

              <strong>
                Explanation:
              </strong>

              ${escapeHTML(
                question.explanation
              )}

            </p>

          </div>

        </div>

      `;

    }
  );


  html += `

      </div>

    </div>

  `;


  document.getElementById(
    "test-screen"
  ).innerHTML = html;


  if (
    document.fullscreenElement &&
    document.exitFullscreen
  ) {

    document
      .exitFullscreen()
      .catch(() => {});

  }

}


/* =========================================================
   RETRY
========================================================= */

function retryTest() {

  if (!currentTest)
    return;

  currentQuestion = 0;

  userAnswers =
    new Array(
      currentTest.questions.length
    ).fill(null);

  timerSeconds =
    currentTest.duration * 60;

  renderTest();

  startTimer();

  if (
    document.documentElement
      .requestFullscreen
  ) {

    document.documentElement
      .requestFullscreen()
      .catch(() => {});

  }

}


/* =========================================================
   HOME
========================================================= */

function goHome() {

  clearInterval(
    timerInterval
  );

  if (
    document.fullscreenElement &&
    document.exitFullscreen
  ) {

    document
      .exitFullscreen()
      .catch(() => {});

  }

  document.getElementById(
    "test-screen"
  ).style.display =
    "none";

  document.getElementById(
    "home-page"
  ).style.display =
    "block";

  updateTodayDate();

}


/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHTML(text) {

  if (
    text === undefined ||
    text === null
  ) {

    return "";

  }

  return String(text)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}
