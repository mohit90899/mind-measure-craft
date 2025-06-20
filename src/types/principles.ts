
export interface ArchetypeScore {
  name: string;
  description: string;
  talents: string[];
  growthNeeds: string[];
  score: number;
}

export interface CognitiveOrientation {
  creative: number;
  deliberative: number;
  detailedReliable: number;
  conceptual: number;
  practical: number;
}

export interface InterpersonalOrientation {
  extraverted: number;
  tough: number;
  nurturing: number;
  leadership: number;
  humorous: number;
}

export interface MotivationalOrientation {
  composed: number;
  autonomous: number;
  flexible: number;
  determined: number;
}

export interface SituationalResponse {
  situation: string;
  response: string;
}

export interface PrinciplesAssessmentResult {
  candidateName: string;
  completionDate: string;
  primaryArchetype: ArchetypeScore;
  secondaryArchetypes: ArchetypeScore[];
  leastLikeArchetypes: ArchetypeScore[];
  cognitiveOrientation: CognitiveOrientation;
  interpersonalOrientation: InterpersonalOrientation;
  motivationalOrientation: MotivationalOrientation;
  situationalResponses: SituationalResponse[];
}
