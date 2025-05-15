
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

const ProgressBar = ({ currentStep, totalSteps, className }: ProgressBarProps) => {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between text-sm text-test-neutral-dark">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{progress}% Complete</span>
      </div>
      <div className="h-2 w-full bg-test-neutral rounded-full overflow-hidden">
        <div 
          className="h-full bg-test-blue transition-all duration-300 ease-in-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
