
import { useTest } from "@/contexts/TestContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PersonalityTrait } from "@/types";
import { getTraitDescription } from "@/data/questionsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ResultsPage = () => {
  const { results, resetTest } = useTest();

  if (!results) {
    return <div>Loading results...</div>;
  }

  const traits: PersonalityTrait[] = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism",
  ];

  const chartData = traits.map((trait) => ({
    name: getTraitDescription(trait).title,
    score: results[trait],
  }));

  return (
    <div className="test-container">
      <div className="test-card space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-test-blue-dark">Your Personality Profile</h1>
          <p className="text-test-neutral-dark text-lg">
            Based on your responses, here's an analysis of your personality traits
          </p>
        </div>

        <div className="h-64 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Score']}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
                cursor={{ fill: 'rgba(66, 133, 244, 0.1)' }}
              />
              <Bar 
                dataKey="score" 
                fill="#4285F4" 
                radius={[0, 4, 4, 0]}
                barSize={24}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-test-blue">Trait Breakdown</h2>
          
          {traits.map((trait) => {
            const traitDesc = getTraitDescription(trait);
            const score = results[trait];
            const isHigh = score > 50;
            
            return (
              <Card key={trait} className="overflow-hidden">
                <div className="h-2 bg-test-blue" style={{ width: `${score}%` }} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-test-blue-dark">{traitDesc.title}</h3>
                    <span className="text-lg font-bold text-test-blue">{score}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{traitDesc.description}</p>
                  <div className="p-4 bg-test-blue-light/50 rounded-lg">
                    <p className="text-sm">
                      {isHigh ? traitDesc.highDescription : traitDesc.lowDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-test-purple-light p-6 rounded-lg">
          <h3 className="text-test-purple font-medium mb-2">Remember</h3>
          <p className="text-sm text-gray-700">
            This assessment provides insights based on your responses, but personality is complex and
            multifaceted. These traits exist on a spectrum and can vary based on context and time.
            Consider this a starting point for self-reflection rather than a definitive categorization.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Button 
            onClick={resetTest}
            className="bg-test-blue hover:bg-test-blue-dark text-white px-8"
          >
            Take Test Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
