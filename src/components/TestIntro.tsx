
import { Button } from "@/components/ui/button";
import { useTest } from "@/contexts/TestContext";

const TestIntro = () => {
  const { startTest } = useTest();

  return (
    <div className="test-container">
      <div className="test-card space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-test-blue-dark">Personality Assessment Test</h1>
          <p className="text-test-neutral-dark text-lg">Discover your personality traits with our comprehensive assessment</p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl text-test-blue">About This Test</h2>
          <p>
            This assessment is based on the Big Five personality traits model, a widely accepted framework in psychology
            for understanding human personality dimensions. By answering a series of questions, you'll receive insights
            into your unique personality profile.
          </p>
          
          <h3 className="text-lg text-test-blue">The Test Will Measure:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Openness</span> - Your curiosity and willingness to try new experiences</li>
            <li><span className="font-medium">Conscientiousness</span> - Your organization and reliability</li>
            <li><span className="font-medium">Extraversion</span> - Your sociability and outgoingness</li>
            <li><span className="font-medium">Agreeableness</span> - Your cooperation and compassion</li>
            <li><span className="font-medium">Emotional Stability</span> - Your resilience and emotional reactions</li>
          </ul>
        </div>
        
        <div className="space-y-4 bg-test-blue-light p-4 rounded-lg">
          <h3 className="text-lg text-test-blue">Instructions:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>The test contains 10 questions</li>
            <li>Answer each question honestly - there are no right or wrong answers</li>
            <li>Select the option that best reflects how you typically think, feel, or behave</li>
            <li>Try to avoid neutral responses unless you truly feel neutral</li>
            <li>This test takes approximately 5 minutes to complete</li>
          </ul>
        </div>
        
        <div className="pt-4 flex justify-center">
          <Button 
            onClick={startTest}
            className="bg-test-blue hover:bg-test-blue-dark text-white px-10 py-6 rounded-full text-lg transition-all"
          >
            Start Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestIntro;
