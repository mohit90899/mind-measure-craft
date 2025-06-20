
import { PrinciplesAssessmentResult } from "@/types/principles";

export const mockPrinciplesResult: PrinciplesAssessmentResult = {
  candidateName: "Sarah Johnson",
  completionDate: "2024-06-20",
  primaryArchetype: {
    name: "The Nurturer",
    description: "You are naturally empathetic and supportive, with a strong desire to help others grow and succeed. You excel in creating safe spaces for emotional expression and building meaningful connections with people around you.",
    talents: [
      "Exceptional emotional intelligence and empathy",
      "Natural ability to create psychological safety",
      "Strong listening skills and patience",
      "Intuitive understanding of others' needs",
      "Talent for conflict resolution and mediation"
    ],
    growthNeeds: [
      "Setting healthy boundaries to prevent burnout",
      "Developing assertiveness in difficult situations",
      "Learning to prioritize self-care",
      "Building confidence in decision-making",
      "Strengthening resilience under pressure"
    ],
    score: 85
  },
  secondaryArchetypes: [
    {
      name: "The Collaborator",
      description: "You thrive in team environments and excel at bringing people together toward common goals.",
      talents: [],
      growthNeeds: [],
      score: 72
    },
    {
      name: "The Supporter",
      description: "You naturally provide stability and encouragement to those around you.",
      talents: [],
      growthNeeds: [],
      score: 68
    }
  ],
  leastLikeArchetypes: [
    {
      name: "The Competitor",
      description: "You prefer collaboration over competition and find aggressive approaches uncomfortable.",
      talents: [],
      growthNeeds: [],
      score: 23
    },
    {
      name: "The Independent",
      description: "You value connection and teamwork over solo work and isolation.",
      talents: [],
      growthNeeds: [],
      score: 31
    }
  ],
  cognitiveOrientation: {
    creative: 74,
    deliberative: 89,
    detailedReliable: 81,
    conceptual: 65,
    practical: 72
  },
  interpersonalOrientation: {
    extraverted: 67,
    tough: 34,
    nurturing: 91,
    leadership: 58,
    humorous: 73
  },
  motivationalOrientation: {
    composed: 76,
    autonomous: 52,
    flexible: 83,
    determined: 79
  },
  situationalResponses: [
    {
      situation: "When interacting with others",
      response: "You naturally create a warm, welcoming atmosphere that makes people feel comfortable sharing their thoughts and feelings. You listen actively and respond with genuine care and understanding."
    },
    {
      situation: "As a leader",
      response: "You lead through inspiration and support rather than authority. You focus on developing your team members' strengths and creating an environment where everyone can contribute their best work."
    },
    {
      situation: "When planning",
      response: "You take a collaborative approach to planning, seeking input from others and considering the human impact of decisions. You prefer thorough preparation but remain flexible when circumstances change."
    },
    {
      situation: "When solving problems",
      response: "You approach problems with patience and creativity, often considering multiple perspectives before arriving at solutions. You prioritize solutions that benefit everyone involved."
    },
    {
      situation: "When setting goals",
      response: "You set goals that align with your values and consider the well-being of others. You prefer achievable, meaningful objectives over ambitious targets that might cause stress."
    },
    {
      situation: "On a team",
      response: "You serve as the emotional backbone of the team, helping to maintain morale and resolve conflicts. You excel at recognizing when team members need support and providing it naturally."
    },
    {
      situation: "Under stress",
      response: "You may become overwhelmed when trying to help too many people at once. You benefit from structured support systems and regular self-care practices to maintain your well-being."
    },
    {
      situation: "When learning",
      response: "You learn best in supportive environments where you can ask questions freely. You prefer collaborative learning and enjoy helping others understand new concepts alongside your own learning."
    }
  ]
};
