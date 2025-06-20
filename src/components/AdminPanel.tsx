
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Competency, TestConfig } from "@/types/psychometric";
import { competencyLabels } from "@/data/competencyData";
import { Plus, Settings, Users, FileText } from "lucide-react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'create-test' | 'manage-questions'>('dashboard');
  const [testConfig, setTestConfig] = useState<Partial<TestConfig>>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    maxAttempts: 1,
    internalJobCode: '',
    department: '',
    hiringManager: '',
    createdBy: '',
    remarks: '',
    duration: 30,
    shuffleQuestions: false,
    coreCompetencies: [],
    groupByCompetency: false,
    questionsPerPage: 1
  });

  const handleCompetencyToggle = (competency: Competency) => {
    const current = testConfig.coreCompetencies || [];
    if (current.includes(competency)) {
      setTestConfig({
        ...testConfig,
        coreCompetencies: current.filter(c => c !== competency)
      });
    } else {
      setTestConfig({
        ...testConfig,
        coreCompetencies: [...current, competency]
      });
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Candidates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Emotional Agility Assessment</h4>
                <p className="text-sm text-muted-foreground">Created by Dr. Smith • 45 candidates</p>
              </div>
              <Button variant="outline">View Report</Button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Leadership Potential Test</h4>
                <p className="text-sm text-muted-foreground">Created by HR Team • 23 candidates</p>
              </div>
              <Button variant="outline">View Report</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCreateTest = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Build a Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Test Title</Label>
              <Input
                id="title"
                value={testConfig.title}
                onChange={(e) => setTestConfig({ ...testConfig, title: e.target.value })}
                placeholder="e.g., Emotional Agility Assessment"
              />
            </div>
            
            <div>
              <Label htmlFor="internalJobCode">Internal Job Code / ID</Label>
              <Input
                id="internalJobCode"
                value={testConfig.internalJobCode}
                onChange={(e) => setTestConfig({ ...testConfig, internalJobCode: e.target.value })}
                placeholder="e.g., JOB001"
              />
            </div>
            
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={testConfig.department}
                onChange={(e) => setTestConfig({ ...testConfig, department: e.target.value })}
                placeholder="e.g., Engineering"
              />
            </div>
            
            <div>
              <Label htmlFor="hiringManager">Hiring Manager</Label>
              <Input
                id="hiringManager"
                value={testConfig.hiringManager}
                onChange={(e) => setTestConfig({ ...testConfig, hiringManager: e.target.value })}
                placeholder="Manager name"
              />
            </div>
            
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={testConfig.startDate}
                onChange={(e) => setTestConfig({ ...testConfig, startDate: e.target.value })}
              />
            </div>
            
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={testConfig.endDate}
                onChange={(e) => setTestConfig({ ...testConfig, endDate: e.target.value })}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={testConfig.description}
              onChange={(e) => setTestConfig({ ...testConfig, description: e.target.value })}
              placeholder="Purpose and scope of the test"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="remarks">Remarks</Label>
            <Textarea
              id="remarks"
              value={testConfig.remarks}
              onChange={(e) => setTestConfig({ ...testConfig, remarks: e.target.value })}
              placeholder="Notes or test-specific instructions"
              rows={2}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Test Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="duration">Test Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                value={testConfig.duration}
                onChange={(e) => setTestConfig({ ...testConfig, duration: parseInt(e.target.value) })}
              />
            </div>
            
            <div>
              <Label htmlFor="maxAttempts">Max No. of Attempts</Label>
              <Input
                id="maxAttempts"
                type="number"
                value={testConfig.maxAttempts}
                onChange={(e) => setTestConfig({ ...testConfig, maxAttempts: parseInt(e.target.value) })}
              />
            </div>
            
            <div>
              <Label htmlFor="questionsPerPage">Questions per Page</Label>
              <Select
                value={testConfig.questionsPerPage?.toString()}
                onValueChange={(value) => setTestConfig({ ...testConfig, questionsPerPage: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="shuffleQuestions"
              checked={testConfig.shuffleQuestions}
              onCheckedChange={(checked) => setTestConfig({ ...testConfig, shuffleQuestions: checked })}
            />
            <Label htmlFor="shuffleQuestions">Shuffle Questions</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="groupByCompetency"
              checked={testConfig.groupByCompetency}
              onCheckedChange={(checked) => setTestConfig({ ...testConfig, groupByCompetency: checked })}
            />
            <Label htmlFor="groupByCompetency">Group by Competency</Label>
          </div>
          
          <div>
            <Label>Core Competencies</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {Object.entries(competencyLabels).map(([key, label]) => (
                <div key={key} className="flex items-center space-x-2">
                  <Switch
                    id={key}
                    checked={testConfig.coreCompetencies?.includes(key as Competency) || false}
                    onCheckedChange={() => handleCompetencyToggle(key as Competency)}
                  />
                  <Label htmlFor={key} className="text-sm">{label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Button className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Create Test
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Psychometric Test Admin</h1>
            <div className="flex space-x-4">
              <Button
                variant={activeTab === 'dashboard' ? 'default' : 'outline'}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </Button>
              <Button
                variant={activeTab === 'create-test' ? 'default' : 'outline'}
                onClick={() => setActiveTab('create-test')}
              >
                Create Test
              </Button>
              <Button
                variant={activeTab === 'manage-questions' ? 'default' : 'outline'}
                onClick={() => setActiveTab('manage-questions')}
              >
                Manage Questions
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'create-test' && renderCreateTest()}
        {activeTab === 'manage-questions' && (
          <Card>
            <CardHeader>
              <CardTitle>Question Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Question management interface will be implemented here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
