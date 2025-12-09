import React from 'react';
import { Target, TrendingUp, UserCheck, Layout, Heart, ClipboardCheck } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  heroImage: string;
  problem: {
    heading: string;
    text: string;
  };
  agitate: {
    heading: string;
    points: string[];
    quote: string;
  };
  solution: {
    heading: string;
    description: string;
    features: string[];
  };
}

export const servicesData: ServiceData[] = [
  {
    id: 'competitive-analysis',
    title: "Competitive Analysis",
    icon: <Target className="w-8 h-8 text-white" />,
    shortDesc: "We don't just look at websites. We reverse-engineer your competitors' sales playbooks, pricing models, and talent strategies.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    problem: {
      heading: "You are losing deals and you don't know why.",
      text: "Your win rates are slipping. Customers are mentioning competitors you didn't consider threats 12 months ago. You have a vague idea of their pricing and features, but you lack the granular intelligence to counter their pitch effectively."
    },
    agitate: {
      heading: "Flying Blind in a Dogfight",
      points: [
        "Your sales team is getting outmaneuvered on objections they weren't prepared for.",
        "You are reacting to competitor features 6 months too late.",
        "Your marketing messaging sounds exactly like everyone else's, fading into the noise.",
        "You are losing key talent to competitors because you don't understand their compensation models."
      ],
      quote: "If you know the enemy and know yourself, you need not fear the result of a hundred battles."
    },
    solution: {
      heading: "Forensic Market Intelligence",
      description: "We go beyond public data. We conduct deep-dive forensic analysis to reverse-engineer your competitors' entire go-to-market strategy. We hand you the playbook to beat them.",
      features: [
        "Secret Shopper Analysis: We stress-test their sales process.",
        "Pricing & Packaging Deconstruction: Uncovering hidden tiers and discount thresholds.",
        "Product Roadmap Prediction: Analyzing hiring patterns to predict their next feature.",
        "Battlecards: Enabling your sales team to kill the competition's pitch before it starts."
      ]
    }
  },
  {
    id: 'org-structure',
    title: "Org Structure Design",
    icon: <Layout className="w-8 h-8 text-white" />,
    shortDesc: "Redesigning your hierarchy for speed and accountability. We eliminate silos that stifle information flow.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    problem: {
      heading: "Your chart is designed for the company you WERE, not the company you ARE.",
      text: "As you've scaled, you've likely bolted on new roles and departments ad-hoc. The result? A Frankenstein structure where decision-making is slow, ownership is unclear, and politics override performance."
    },
    agitate: {
      heading: "The Bottleneck of Bureaucracy",
      points: [
        "Decisions that should take minutes take weeks.",
        "Multiple managers claim credit for success, but no one owns failure.",
        "Information is hoarded in silos instead of shared across teams.",
        "Top performers leave because they see no clear path or are blocked by legacy management."
      ],
      quote: "Structure dictates behavior. If your structure is broken, your culture doesn't stand a chance."
    },
    solution: {
      heading: "Streamlined for Velocity",
      description: "We redesign your organization based on value streams, not just functions. We clarify decision rights and span of control to ensure speed and accountability.",
      features: [
        "Role & Responsibility Audit: Eliminating overlap and ambiguity.",
        "Decision Rights Framework: Clarifying who decides, who advises, and who executes.",
        "Cross-Functional Pods: Structuring teams to deliver value independently.",
        "Succession Planning: Identifying and grooming the next layer of leadership."
      ]
    }
  },
  {
    id: 'c-level-coaching',
    title: "C-Level Coaching",
    icon: <UserCheck className="w-8 h-8 text-white" />,
    shortDesc: "Executive mentorship to align the C-Suite. We turn managers into leaders and founders into CEOs.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032",
    problem: {
      heading: "The 'Founder's Trap' is limiting your scale.",
      text: "The skills that got you to $10M are often the obstacles to reaching $50M. You are stuck in the weeds, micromanaging details, and failing to set a clear, unifying vision for your growing executive team."
    },
    agitate: {
      heading: "The Lonely Top",
      points: [
        "Your C-Suite is misaligned, operating as a group of individuals rather than a team.",
        "You feel you have to be in every meeting for a decision to be made correctly.",
        "You are exhausted, fighting fires instead of building the fire station.",
        "Board meetings have become defensive exercises rather than strategic discussions."
      ],
      quote: "Great CEOs don't build the business. They build the team that builds the business."
    },
    solution: {
      heading: "Executive Evolution",
      description: "We provide high-impact coaching for CEOs and their direct reports. We focus on shifting mindset from 'Doing' to 'Leading' and building a cohesive, high-trust executive team.",
      features: [
        "360-Degree Leadership Assessment: brutally honest feedback.",
        "Strategic Visioning: Moving your horizon from next month to next year.",
        "Conflict Resolution: Turning executive tension into productive debate.",
        "Operational Rhythm: Establishing the meeting cadence that drives accountability."
      ]
    }
  },
  {
    id: 'marketing-sales',
    title: "Marketing & Sales Alignment",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    shortDesc: "Building a unified revenue engine. We fix the handoff processes, incentives, and messaging that cause friction.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
    problem: {
      heading: "Your Revenue Team is at war with itself.",
      text: "Marketing celebrates 'leads generated' while Sales complains about 'lead quality'. Two separate departments with two separate goals, speaking two separate languages, while revenue suffers."
    },
    agitate: {
      heading: "The Handoff Fumble",
      points: [
        "70% of marketing content is never used by sales.",
        "Leads are rotting in the CRM because of slow follow-up processes.",
        "Attribution arguments waste time that should be spent closing deals.",
        "The customer experience feels disjointed—they hear one story from ads and another from reps."
      ],
      quote: "Revenue is a relay race. If you drop the baton, it doesn't matter how fast you ran your leg."
    },
    solution: {
      heading: "One Team. One Revenue Number.",
      description: "We dismantle the wall between Sales and Marketing. We align incentives, definitions, and technology to create a single, high-velocity revenue engine (RevOps).",
      features: [
        "Service Level Agreements (SLA): Defining exactly what constitutes a qualified lead.",
        "Unified Messaging Playbook: Ensuring consistency from ad copy to closing script.",
        "Tech Stack Integration: Ensuring data flows seamlessly between MAP and CRM.",
        "Feedback Loops: Structuring regular reviews where Sales informs Marketing strategy."
      ]
    }
  },
  {
    id: 'culture',
    title: "Company Culture",
    icon: <Heart className="w-8 h-8 text-white" />,
    shortDesc: "Culture is operating system, not perks. We codify your values into hiring, firing, and promotion frameworks.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    problem: {
      heading: "Your culture is accidental, and it's showing.",
      text: "You think culture is ping pong tables and happy hours. Meanwhile, your actual culture—how decisions are made, who gets promoted, and what behaviors are tolerated—is becoming toxic as you scale."
    },
    agitate: {
      heading: "The Toxicity Tax",
      points: [
        "High performers are leaving because low performers are tolerated.",
        "Politics and back-channeling have replaced open communication.",
        "New hires feel lost and disconnected from the mission.",
        "Glassdoor reviews are starting to impact your ability to recruit."
      ],
      quote: "Culture is what happens when you aren't in the room."
    },
    solution: {
      heading: "Culture as an Operating System",
      description: "We treat culture as an engineering problem. We codify your core values into tangible mechanisms: hiring rubrics, performance reviews, and recognition programs.",
      features: [
        "Values Codification: Moving from generic words to observable behaviors.",
        "Hiring Bar Mechanisms: Training interviewers to test for culture add, not just culture fit.",
        "Ritual Design: Creating company traditions that reinforce your mission.",
        "eNPS & Pulse Checks: rigorous measurement of employee engagement."
      ]
    }
  },
  {
    id: 'hr-systems',
    title: "HR Systems & Processes",
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    shortDesc: "Scalable people operations. From onboarding to performance reviews, we build systems that retain top talent.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
    problem: {
      heading: "You are running a 500-person company with 50-person systems.",
      text: "Spreadsheets for compensation planning. Ad-hoc onboarding. Performance reviews that happen 'whenever we have time'. Your lack of infrastructure is a liability."
    },
    agitate: {
      heading: "Operational Debt",
      points: [
        "Onboarding is chaotic, leading to slow ramp times for expensive hires.",
        "You have significant compliance risks you aren't even aware of.",
        "Compensation decisions are inconsistent, leading to pay equity issues.",
        "You lack the data to answer basic questions about headcount and retention."
      ],
      quote: "You can't build a skyscraper on a foundation of sand."
    },
    solution: {
      heading: "Enterprise-Grade People Ops",
      description: "We implement the systems required to manage a workforce at scale. We automate the administrative burden so HR can focus on strategy and people.",
      features: [
        "HRIS Selection & Implementation: Getting the right tech stack in place.",
        "Performance Management Cycles: Structured, fair, and growth-oriented.",
        "Compensation Philosophy: Defining bands and progression paths.",
        "Compliance Audit: Ensuring you are protected as you expand."
      ]
    }
  }
];
