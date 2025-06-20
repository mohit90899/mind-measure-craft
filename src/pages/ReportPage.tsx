
import PsychometricTestReport from "@/components/PsychometricTestReport";
import { TestResult } from "@/types/psychometric";

// Sample data for demonstration
const sampleResult: TestResult = {
  candidateName: "John Doe",
  completionDate: "2024-01-15",
  testTitle: "Emotional Agility Assessment",
  jobRole: "Software Engineer",
  department: "Engineering",
  totalScore: 62,
  maxTotalScore: 100,
  percentage: 62,
  competencyScores: [
    {
      competency: "resilience",
      score: 22,
      maxScore: 30,
      percentage: 73,
      remarks: "Above Average"
    },
    {
      competency: "adaptability",
      score: 18,
      maxScore: 30,
      percentage: 60,
      remarks: "Average"
    },
    {
      competency: "emotional-intelligence",
      score: 22,
      maxScore: 40,
      percentage: 55,
      remarks: "Needs Improvement"
    }
  ],
  interpretation: "The candidate shows strong resilience and adaptability. However, emotional intelligence-related questions indicate possible challenges in self-awareness and empathy. Overall, the profile suggests high potential with support required in interpersonal areas. The candidate demonstrates good stress management but may benefit from training in emotional regulation and social awareness.",
  answers: []
};

const ReportPage = () => {
  return <PsychometricTestReport result={sampleResult} />;
};

export default ReportPage;
