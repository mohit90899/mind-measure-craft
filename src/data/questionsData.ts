import { PersonalityTrait, PersonalityTraitDescription, QuestionType, UserAnswer, TestResults } from "@/types";

export const questions: QuestionType[] = [
  {
    id: 1,
    text: "I enjoy trying new experiences and learning new things.",
    category: "openness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 2,
    text: "I tend to be organized and follow a schedule.",
    category: "conscientiousness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 3,
    text: "I enjoy being the center of attention at social events.",
    category: "extraversion",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 4,
    text: "I prioritize others' needs before my own.",
    category: "agreeableness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 5,
    text: "I worry about things often.",
    category: "neuroticism",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 6,
    text: "I am interested in abstract ideas and theories.",
    category: "openness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 7,
    text: "I complete tasks thoroughly.",
    category: "conscientiousness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 8,
    text: "I initiate conversations with new people easily.",
    category: "extraversion",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 9,
    text: "I trust others easily.",
    category: "agreeableness",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
  {
    id: 10,
    text: "I get stressed easily.",
    category: "neuroticism",
    options: [
      { id: 1, text: "Strongly Disagree", value: 1 },
      { id: 2, text: "Disagree", value: 2 },
      { id: 3, text: "Neutral", value: 3 },
      { id: 4, text: "Agree", value: 4 },
      { id: 5, text: "Strongly Agree", value: 5 },
    ],
  },
];

export const traitDescriptions: PersonalityTraitDescription[] = [
  {
    trait: "openness",
    title: "Openness to Experience",
    description: "Reflects a person's willingness to try new things and their intellectual curiosity.",
    highDescription: "You are curious, creative, and open to new experiences. You enjoy exploring new ideas and challenging traditional concepts.",
    lowDescription: "You prefer routine, familiarity, and concrete thinking. You tend to be more conventional and practical in your approach."
  },
  {
    trait: "conscientiousness",
    title: "Conscientiousness",
    description: "Reflects a person's tendency to be organized, goal-directed, and mindful of details.",
    highDescription: "You are organized, reliable, and detail-oriented. You plan ahead and follow through with your commitments.",
    lowDescription: "You tend to be more flexible, spontaneous, and sometimes disorganized. You may prefer to approach tasks without extensive planning."
  },
  {
    trait: "extraversion",
    title: "Extraversion",
    description: "Reflects a person's tendency to seek stimulation in the company of others and to express positive emotions.",
    highDescription: "You are outgoing, energetic, and draw energy from social interactions. You enjoy being in groups and meeting new people.",
    lowDescription: "You are more reserved and introspective, often preferring solitary activities. You may find social interactions draining."
  },
  {
    trait: "agreeableness",
    title: "Agreeableness",
    description: "Reflects a person's tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others.",
    highDescription: "You are compassionate, trusting, and cooperative. You prioritize social harmony and getting along with others.",
    lowDescription: "You tend to be more skeptical, competitive, and sometimes challenging in social situations. You're often direct in expressing your opinions."
  },
  {
    trait: "neuroticism",
    title: "Emotional Stability",
    description: "Reflects the tendency to experience negative emotions and psychological distress.",
    highDescription: "You may experience more frequent mood swings and feelings of anxiety, worry, or sadness compared to others.",
    lowDescription: "You tend to be emotionally stable and resilient, handling stress well and maintaining a positive outlook even in challenging situations."
  }
];

export const getTraitDescription = (trait: PersonalityTrait): PersonalityTraitDescription => {
  return traitDescriptions.find(desc => desc.trait === trait) || traitDescriptions[0];
};

export const calculateResults = (answers: UserAnswer[]): TestResults => {
  const initialResults: TestResults = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  };

  const countsByCategory: Record<PersonalityTrait, number> = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  };

  // Sum up all values by category
  const results = answers.reduce((acc, answer) => {
    acc[answer.category] += answer.value;
    countsByCategory[answer.category] += 1;
    return acc;
  }, initialResults);

  // Convert to percentages (out of max possible score)
  const traits = Object.keys(results) as PersonalityTrait[];
  const normalizedResults = { ...results };
  
  traits.forEach(trait => {
    const maxPossibleScore = countsByCategory[trait] * 5; // 5 is the max value for each question
    normalizedResults[trait] = Math.round((results[trait] / maxPossibleScore) * 100);
  });

  return normalizedResults;
};
