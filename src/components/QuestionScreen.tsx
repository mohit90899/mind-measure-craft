
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTest } from "@/contexts/TestContext";
import ProgressBar from "./ProgressBar";
import { UserAnswer } from "@/types";

const QuestionScreen = () => {
  const { 
    currentQuestionIndex, 
    questions, 
    userAnswers,
    answerQuestion, 
    goToNextQuestion, 
    goToPreviousQuestion,
    completeTest 
  } = useTest();
  
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Find existing answer for this question if it exists
  useEffect(() => {
    const existingAnswer = userAnswers.find(
      (answer) => answer.questionId === currentQuestion.id
    );
    
    if (existingAnswer) {
      setSelectedOption(existingAnswer.optionId);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestion.id, userAnswers]);
  
  const handleOptionSelect = (optionId: number, value: number) => {
    setSelectedOption(optionId);
    
    const answer: UserAnswer = {
      questionId: currentQuestion.id,
      optionId: optionId,
      value: value,
      category: currentQuestion.category
    };
    
    answerQuestion(answer);
  };
  
  const handleNext = () => {
    if (selectedOption !== null) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        if (currentQuestionIndex === questions.length - 1) {
          completeTest();
        } else {
          goToNextQuestion();
        }
        setIsTransitioning(false);
      }, 300);
    }
  };
  
  const handlePrevious = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      goToPreviousQuestion();
      setIsTransitioning(false);
    }, 300);
  };
  
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  return (
    <div className="test-container">
      <ProgressBar 
        currentStep={currentQuestionIndex + 1} 
        totalSteps={questions.length}
        className="mb-6"
      />
      
      <div className={cn("test-card space-y-8", isTransitioning ? "opacity-0" : "opacity-100", "transition-opacity duration-300")}>
        <h2 className="text-center text-test-blue-dark">{currentQuestion.text}</h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className={cn(
                "answer-option",
                selectedOption === option.id ? "selected" : ""
              )}
              onClick={() => handleOptionSelect(option.id, option.value)}
            >
              <div className="w-6 h-6 mr-3 rounded-full border-2 border-test-neutral flex-shrink-0 flex items-center justify-center">
                {selectedOption === option.id && (
                  <div className="w-3 h-3 rounded-full bg-test-blue" />
                )}
              </div>
              <span>{option.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="border-test-blue text-test-blue hover:bg-test-blue hover:text-white"
          >
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="bg-test-blue hover:bg-test-blue-dark text-white"
          >
            {isLastQuestion ? "Complete Test" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
