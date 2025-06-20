
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TestResult } from "@/types/psychometric";
import { competencyLabels, getFeedbackBand, getFeedbackColor } from "@/data/competencyData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, Share2, FileText } from "lucide-react";

interface PsychometricTestReportProps {
  result: TestResult;
}

const PsychometricTestReport = ({ result }: PsychometricTestReportProps) => {
  const chartData = result.competencyScores.map((comp) => ({
    name: competencyLabels[comp.competency],
    score: comp.score,
    maxScore: comp.maxScore,
    percentage: comp.percentage,
  }));

  const pieData = result.competencyScores.map((comp, index) => ({
    name: competencyLabels[comp.competency],
    value: comp.percentage,
    color: `hsl(${index * 60}, 70%, 50%)`
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Header */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl mb-2">Psychometric Test Report</CardTitle>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Candidate:</strong> {result.candidateName}</p>
                    <p><strong>Test:</strong> {result.testTitle}</p>
                    <p><strong>Department:</strong> {result.department}</p>
                  </div>
                  <div>
                    <p><strong>Completion Date:</strong> {new Date(result.completionDate).toLocaleDateString()}</p>
                    <p><strong>Job Role:</strong> {result.jobRole}</p>
                    <p><strong>Overall Score:</strong> {result.totalScore}/{result.maxTotalScore}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{result.percentage}%</div>
                <div className={`text-lg ${getFeedbackColor(result.percentage)}`}>
                  {getFeedbackBand(result.percentage)}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Overall Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4">Score Breakdown</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="name" 
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        fontSize={12}
                      />
                      <YAxis />
                      <Tooltip 
                        formatter={(value, name) => [
                          name === 'score' ? `${value}/${chartData.find(d => d.score === value)?.maxScore}` : `${value}%`,
                          name === 'score' ? 'Score' : 'Percentage'
                        ]}
                      />
                      <Bar dataKey="percentage" fill="#4285F4" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Competency Distribution</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section-wise Score Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Section-wise Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Competency</th>
                    <th className="text-center p-3 font-medium">Score</th>
                    <th className="text-center p-3 font-medium">Percentage</th>
                    <th className="text-left p-3 font-medium">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {result.competencyScores.map((comp, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{competencyLabels[comp.competency]}</td>
                      <td className="p-3 text-center">{comp.score}/{comp.maxScore}</td>
                      <td className="p-3 text-center">
                        <span className={`font-medium ${getFeedbackColor(comp.percentage)}`}>
                          {comp.percentage}%
                        </span>
                      </td>
                      <td className="p-3">{comp.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Interpretation */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Interpretation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">{result.interpretation}</p>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Strengths</h4>
                <ul className="list-disc list-inside text-green-700">
                  {result.competencyScores
                    .filter(comp => comp.percentage >= 75)
                    .map((comp, index) => (
                      <li key={index}>
                        Strong {competencyLabels[comp.competency].toLowerCase()} - {comp.remarks}
                      </li>
                    ))}
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">Development Areas</h4>
                <ul className="list-disc list-inside text-orange-700">
                  {result.competencyScores
                    .filter(comp => comp.percentage < 60)
                    .map((comp, index) => (
                      <li key={index}>
                        {competencyLabels[comp.competency]} - Focus on improvement strategies
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share Report
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Detailed Analysis
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-4">
          <p>This report is confidential and intended for the specified recipient only.</p>
          <p>Generated by Positivity Mental Health • India & Singapore</p>
        </div>
      </div>
    </div>
  );
};

export default PsychometricTestReport;
