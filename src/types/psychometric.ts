
export type Competency = 
  | 'emotional-intelligence'
  | 'resilience' 
  | 'adaptability'
  | 'communication'
  | 'leadership'
  | 'problem-solving';

export type QuestionType = 'favorable' | 'unfavorable';

export type AnswerOption = {
  id: number;
  text: string;
  value: number; // For Likert scale: SA=2, A=1, N=0, D=-1, SD=-2 (or reversed for unfavorable)
};

export type Question = {
  id: number;
  statement: string;
  weight: number; // 1-10 scale
  competency: Competency;
  type: QuestionType;
  options: AnswerOption[];
};

export type TestConfig = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  maxAttempts: number;
  internalJobCode: string;
  department: string;
  hiringManager: string;
  createdBy: string;
  remarks?: string;
  duration: number; // in minutes
  questionDuration?: number; // in seconds
  shuffleQuestions: boolean;
  coreCompetencies: Competency[];
  groupByCompetency: boolean;
  questionsPerPage: number;
  questions: Question[];
};

export type UserAnswer = {
  questionId: number;
  optionId: number;
  value: number;
  competency: Competency;
  weight: number;
};

export type CompetencyScore = {
  competency: Competency;
  score: number;
  maxScore: number;
  percentage: number;
  remarks: string;
};

export type TestResult = {
  candidateName: string;
  completionDate: string;
  testTitle: string;
  jobRole: string;
  department: string;
  totalScore: number;
  maxTotalScore: number;
  percentage: number;
  competencyScores: CompetencyScore[];
  interpretation: string;
  answers: UserAnswer[];
};

export type FeedbackBand = 'excellent' | 'good' | 'average' | 'needs-improvement' | 'poor';
