
import { TestProvider } from "@/contexts/TestContext";
import { useTest } from "@/contexts/TestContext";
import TestIntro from "@/components/TestIntro";
import QuestionScreen from "@/components/QuestionScreen";
import ResultsPage from "@/components/ResultsPage";

const TestContainer = () => {
  const { testStarted, testCompleted } = useTest();

  return (
    <div className="min-h-screen bg-gradient-to-b from-test-blue-light to-white py-8">
      {!testStarted && <TestIntro />}
      {testStarted && !testCompleted && <QuestionScreen />}
      {testCompleted && <ResultsPage />}
    </div>
  );
};

const Index = () => {
  return (
    <TestProvider>
      <TestContainer />
    </TestProvider>
  );
};

export default Index;
