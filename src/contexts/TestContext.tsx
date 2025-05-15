
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuestionType, UserAnswer, TestResults } from '@/types';
import { questions, calculateResults } from '@/data/questionsData';

type TestContextType = {
  currentQuestionIndex: number;
  questions: QuestionType[];
  userAnswers: UserAnswer[];
  results: TestResults | null;
  testCompleted: boolean;
  testStarted: boolean;
  startTest: () => void;
  answerQuestion: (answer: UserAnswer) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  completeTest: () => void;
  resetTest: () => void;
};

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [results, setResults] = useState<TestResults | null>(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const startTest = () => {
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setResults(null);
    setTestCompleted(false);
  };

  const answerQuestion = (answer: UserAnswer) => {
    const existingAnswerIndex = userAnswers.findIndex(
      (a) => a.questionId === answer.questionId
    );

    if (existingAnswerIndex !== -1) {
      // Update existing answer
      const updatedAnswers = [...userAnswers];
      updatedAnswers[existingAnswerIndex] = answer;
      setUserAnswers(updatedAnswers);
    } else {
      // Add new answer
      setUserAnswers([...userAnswers, answer]);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const completeTest = () => {
    const computedResults = calculateResults(userAnswers);
    setResults(computedResults);
    setTestCompleted(true);
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setResults(null);
    setTestCompleted(false);
    setTestStarted(false);
  };

  return (
    <TestContext.Provider
      value={{
        currentQuestionIndex,
        questions,
        userAnswers,
        results,
        testCompleted,
        testStarted,
        startTest,
        answerQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        completeTest,
        resetTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
