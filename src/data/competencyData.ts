
import { Competency } from "@/types/psychometric";

export const competencyLabels: Record<Competency, string> = {
  'emotional-intelligence': 'Emotional Intelligence',
  'resilience': 'Resilience',
  'adaptability': 'Adaptability', 
  'communication': 'Communication',
  'leadership': 'Leadership',
  'problem-solving': 'Problem Solving'
};

export const competencyDescriptions: Record<Competency, string> = {
  'emotional-intelligence': 'Ability to understand and manage emotions effectively',
  'resilience': 'Capacity to bounce back from setbacks and handle stress',
  'adaptability': 'Flexibility to adjust to changing circumstances and environments',
  'communication': 'Effectiveness in expressing ideas and connecting with others',
  'leadership': 'Ability to guide, influence and inspire others',
  'problem-solving': 'Skill in analyzing situations and finding effective solutions'
};

export const getFeedbackBand = (percentage: number): string => {
  if (percentage >= 90) return 'Excellent';
  if (percentage >= 75) return 'Good';
  if (percentage >= 60) return 'Average';
  if (percentage >= 40) return 'Needs Improvement';
  return 'Poor';
};

export const getFeedbackColor = (percentage: number): string => {
  if (percentage >= 90) return 'text-green-600';
  if (percentage >= 75) return 'text-blue-600';
  if (percentage >= 60) return 'text-yellow-600';
  if (percentage >= 40) return 'text-orange-600';
  return 'text-red-600';
};
