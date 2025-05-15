
export type QuestionType = {
  id: number;
  text: string;
  options: AnswerOption[];
  category: PersonalityTrait;
};

export type AnswerOption = {
  id: number;
  text: string;
  value: number;
};

export type UserAnswer = {
  questionId: number;
  optionId: number;
  value: number;
  category: PersonalityTrait;
};

export type PersonalityTrait = 
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

export type TestResults = {
  [key in PersonalityTrait]: number;
};

export type PersonalityTraitDescription = {
  trait: PersonalityTrait;
  title: string;
  description: string;
  highDescription: string;
  lowDescription: string;
};
