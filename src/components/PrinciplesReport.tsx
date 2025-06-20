
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PrinciplesAssessmentResult } from "@/types/principles";
import CircularProgress from "@/components/CircularProgress";
import { Download, Share2, FileText, Heart } from "lucide-react";

interface PrinciplesReportProps {
  result: PrinciplesAssessmentResult;
}

const PrinciplesReport = ({ result }: PrinciplesReportProps) => {
  return (
    <div className="min-h-screen bg-positivity-cream-light py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        
        {/* Cover Page */}
        <Card className="bg-gradient-to-br from-positivity-cream to-positivity-yellow-light border-positivity-brown-light">
          <CardHeader className="text-center py-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-positivity-brown mr-2" />
              <CardTitle className="text-4xl font-bold text-positivity-brown">
                Positivity YOU
              </CardTitle>
            </div>
            <p className="text-positivity-brown-dark text-lg mb-8">
              Mental Health & Personality Assessment
            </p>
            <div className="bg-positivity-white-warm rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-positivity-brown mb-2">
                {result.candidateName}
              </h2>
              <p className="text-positivity-brown-dark">
                Assessment completed on {new Date(result.completionDate).toLocaleDateString()}
              </p>
            </div>
          </CardHeader>
        </Card>

        {/* Primary Archetype */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-gradient-to-r from-positivity-brown to-positivity-brown-dark text-white">
            <CardTitle className="text-2xl">Your Primary Archetype</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-positivity-brown mb-4">
                {result.primaryArchetype.name}
              </h2>
              <p className="text-lg text-positivity-brown-dark leading-relaxed">
                {result.primaryArchetype.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-positivity-cream p-6 rounded-lg">
                <h3 className="font-semibold text-positivity-brown mb-4 text-lg">
                  Your Talents
                </h3>
                <ul className="space-y-2">
                  {result.primaryArchetype.talents.map((talent, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-positivity-brown rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-positivity-brown-dark">{talent}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-positivity-yellow-light p-6 rounded-lg">
                <h3 className="font-semibold text-positivity-brown mb-4 text-lg">
                  Growth Opportunities
                </h3>
                <ul className="space-y-2">
                  {result.primaryArchetype.growthNeeds.map((need, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-positivity-brown rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-positivity-brown-dark">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Secondary & Least-like Archetypes */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-positivity-white border-positivity-brown-light">
            <CardHeader className="bg-positivity-cream">
              <CardTitle className="text-positivity-brown">Secondary Archetypes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {result.secondaryArchetypes.map((archetype, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-positivity-brown">{archetype.name}</h4>
                  <p className="text-sm text-positivity-brown-dark">{archetype.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="bg-positivity-white border-positivity-brown-light">
            <CardHeader className="bg-positivity-yellow-light">
              <CardTitle className="text-positivity-brown">Least-like Archetypes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {result.leastLikeArchetypes.map((archetype, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-positivity-brown">{archetype.name}</h4>
                  <p className="text-sm text-positivity-brown-dark">{archetype.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Cognitive Orientation */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-positivity-cream">
            <CardTitle className="text-positivity-brown">How You Prefer to Think</CardTitle>
            <p className="text-positivity-brown-dark">Cognitive Orientation</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-8">
              <CircularProgress 
                percentage={result.cognitiveOrientation.creative} 
                label="Creative" 
              />
              <CircularProgress 
                percentage={result.cognitiveOrientation.deliberative} 
                label="Deliberative" 
              />
              <CircularProgress 
                percentage={result.cognitiveOrientation.detailedReliable} 
                label="Detailed & Reliable" 
              />
              <CircularProgress 
                percentage={result.cognitiveOrientation.conceptual} 
                label="Conceptual" 
              />
              <CircularProgress 
                percentage={result.cognitiveOrientation.practical} 
                label="Practical" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Interpersonal Orientation */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-positivity-yellow-light">
            <CardTitle className="text-positivity-brown">How You Engage with Others</CardTitle>
            <p className="text-positivity-brown-dark">Interpersonal Orientation</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-8">
              <CircularProgress 
                percentage={result.interpersonalOrientation.extraverted} 
                label="Extraverted" 
              />
              <CircularProgress 
                percentage={result.interpersonalOrientation.tough} 
                label="Tough" 
              />
              <CircularProgress 
                percentage={result.interpersonalOrientation.nurturing} 
                label="Nurturing" 
              />
              <CircularProgress 
                percentage={result.interpersonalOrientation.leadership} 
                label="Leadership" 
              />
              <CircularProgress 
                percentage={result.interpersonalOrientation.humorous} 
                label="Humorous" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Motivational Orientation */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-positivity-cream">
            <CardTitle className="text-positivity-brown">How You Apply Yourself</CardTitle>
            <p className="text-positivity-brown-dark">Motivational Orientation</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-8">
              <CircularProgress 
                percentage={result.motivationalOrientation.composed} 
                label="Composed" 
              />
              <CircularProgress 
                percentage={result.motivationalOrientation.autonomous} 
                label="Autonomous" 
              />
              <CircularProgress 
                percentage={result.motivationalOrientation.flexible} 
                label="Flexible" 
              />
              <CircularProgress 
                percentage={result.motivationalOrientation.determined} 
                label="Determined" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Situational Responses */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardHeader className="bg-positivity-yellow-light">
            <CardTitle className="text-positivity-brown">How You Respond in Different Situations</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid gap-6">
              {result.situationalResponses.map((response, index) => (
                <div key={index} className="bg-positivity-cream p-6 rounded-lg">
                  <h4 className="font-medium text-positivity-brown mb-3">
                    {response.situation}
                  </h4>
                  <p className="text-positivity-brown-dark leading-relaxed">
                    {response.response}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="bg-positivity-white border-positivity-brown-light">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2 border-positivity-brown text-positivity-brown hover:bg-positivity-cream">
                <Download className="w-4 h-4" />
                Download Report
              </Button>
              <Button variant="outline" className="flex items-center gap-2 border-positivity-brown text-positivity-brown hover:bg-positivity-cream">
                <Share2 className="w-4 h-4" />
                Share Results
              </Button>
              <Button variant="outline" className="flex items-center gap-2 border-positivity-brown text-positivity-brown hover:bg-positivity-cream">
                <FileText className="w-4 h-4" />
                Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-positivity-brown-dark py-4">
          <p>This assessment is confidential and intended for personal growth and self-reflection.</p>
          <p className="flex items-center justify-center mt-2">
            Generated by 
            <Heart className="w-4 h-4 mx-1 text-positivity-brown" />
            <strong>Positivity Mental Health Platform</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesReport;
