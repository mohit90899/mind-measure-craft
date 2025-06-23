
export const mockQuestions = [
  {
    id: 1,
    statement: "I find it easy to understand how others are feeling",
    competency: "emotional-intelligence"
  },
  {
    id: 2,
    statement: "I can manage my emotions well under pressure",
    competency: "emotional-intelligence"
  },
  {
    id: 3,
    statement: "I bounce back quickly from setbacks",
    competency: "resilience"
  },
  {
    id: 4,
    statement: "I handle stress without becoming overwhelmed",
    competency: "resilience"
  },
  {
    id: 5,
    statement: "I adjust quickly to new situations",
    competency: "adaptability"
  },
  {
    id: 6,
    statement: "I'm comfortable with change and uncertainty",
    competency: "adaptability"
  },
  {
    id: 7,
    statement: "I express my ideas clearly to others",
    competency: "communication"
  },
  {
    id: 8,
    statement: "I listen actively when others speak",
    competency: "communication"
  },
  {
    id: 9,
    statement: "I enjoy taking charge of group projects",
    competency: "leadership"
  },
  {
    id: 10,
    statement: "I can motivate others to achieve goals",
    competency: "leadership"
  },
  {
    id: 11,
    statement: "I approach problems systematically",
    competency: "problem-solving"
  },
  {
    id: 12,
    statement: "I can think of creative solutions to challenges",
    competency: "problem-solving"
  }
];

export const mockAnswers = [
  { questionId: 1, optionId: 4, value: 1, competency: "emotional-intelligence" as const, weight: 8 },
  { questionId: 2, optionId: 5, value: 2, competency: "emotional-intelligence" as const, weight: 9 },
  { questionId: 3, optionId: 3, value: 0, competency: "resilience" as const, weight: 7 },
  { questionId: 4, optionId: 4, value: 1, competency: "resilience" as const, weight: 8 },
  { questionId: 5, optionId: 5, value: 2, competency: "adaptability" as const, weight: 9 },
  { questionId: 6, optionId: 4, value: 1, competency: "adaptability" as const, weight: 7 },
  { questionId: 7, optionId: 2, value: -1, competency: "communication" as const, weight: 8 },
  { questionId: 8, optionId: 4, value: 1, competency: "communication" as const, weight: 9 },
  { questionId: 9, optionId: 3, value: 0, competency: "leadership" as const, weight: 6 },
  { questionId: 10, optionId: 2, value: -1, competency: "leadership" as const, weight: 7 },
  { questionId: 11, optionId: 5, value: 2, competency: "problem-solving" as const, weight: 8 },
  { questionId: 12, optionId: 4, value: 1, competency: "problem-solving" as const, weight: 9 }
];
