
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserAnswer } from "@/types/psychometric";
import { competencyLabels } from "@/data/competencyData";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

interface QuestionBreakdownProps {
  answers: UserAnswer[];
  questions: Array<{
    id: number;
    statement: string;
    competency: string;
  }>;
}

const getScoreIcon = (value: number) => {
  if (value >= 1) return <CheckCircle className="w-5 h-5 text-green-600" />;
  if (value <= -1) return <XCircle className="w-5 h-5 text-red-600" />;
  return <MinusCircle className="w-5 h-5 text-yellow-600" />;
};

const getAnswerText = (value: number) => {
  switch (value) {
    case 2: return "Strongly Agree";
    case 1: return "Agree";
    case 0: return "Neutral";
    case -1: return "Disagree";
    case -2: return "Strongly Disagree";
    default: return "Not answered";
  }
};

const QuestionBreakdown = ({ answers, questions }: QuestionBreakdownProps) => {
  // Group answers by competency
  const answersByCompetency = answers.reduce((acc, answer) => {
    const competency = answer.competency;
    if (!acc[competency]) {
      acc[competency] = [];
    }
    acc[competency].push(answer);
    return acc;
  }, {} as Record<string, UserAnswer[]>);

  return (
    <div className="space-y-6">
      {Object.entries(answersByCompetency).map(([competency, competencyAnswers]) => (
        <Card key={competency} className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-positivity-cream">
            <CardTitle className="text-positivity-brown">
              {competencyLabels[competency as keyof typeof competencyLabels]}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {competencyAnswers.map((answer) => {
                const question = questions.find(q => q.id === answer.questionId);
                return (
                  <div key={answer.questionId} className="border-b border-positivity-cream-dark pb-4 last:border-b-0">
                    <div className="flex items-start gap-3">
                      {getScoreIcon(answer.value)}
                      <div className="flex-1">
                        <p className="text-positivity-brown-dark mb-2">
                          {question?.statement}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-positivity-brown">
                            Your response: {getAnswerText(answer.value)}
                          </span>
                          <span className="text-sm text-positivity-brown-dark">
                            Score: {answer.value > 0 ? '+' : ''}{answer.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuestionBreakdown;
