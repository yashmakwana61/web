'use client';

import React from 'react';
import { ServicePageTemplate } from '@/components/service/ServicePageTemplate.jsx';
import { Bot, Clock, Network, Activity } from 'lucide-react';

function RpaServicesPage() {
  const pageData = {
    title: "Robotic Process Automation (RPA)",
    tagline: "Digital workers that never sleep. Scale operations instantly without adding headcount.",
    breadcrumb: "Services / RPA Services",
    metaDescription: "Professional RPA services for Education, Healthcare & Manufacturing. Expert implementation, training & support. Contact us today.",
    metaKeywords: "RPA Services, Robotic Process Automation, Digital Workers, UiPath, Automation Anywhere",
    overview: {
      headline: "Automate the Mundane, Elevate the Human",
      description: "RPA acts as a digital workforce, interacting with your computer systems exactly as a human would—but faster, 24/7, and without errors. Perfect for legacy systems lacking APIs.",
      benefits: [
        "100% data entry accuracy",
        "Connect legacy systems without expensive API development",
        "Free up human employees for strategic tasks",
        "Instant scalability during peak seasons"
      ],
      whyUs: [
        { icon: Bot, title: "Enterprise Scalability", desc: "We build resilient bots that handle UI changes gracefully." },
        { icon: Activity, title: "Rapid Deployment", desc: "Most RPA workflows are deployed within 4 to 6 weeks." }
      ]
    },
    features: [
      { icon: Clock, title: "Unattended Automation", description: "Bots that run on servers in the background, requiring zero human intervention." },
      { icon: Bot, title: "Attended Automation", description: "Digital assistants that work alongside human employees to speed up tasks." },
      { icon: Network, title: "Legacy Integration", description: "Bridging the gap between modern web apps and old terminal systems." },
      { icon: Activity, title: "Centralized Orchestration", description: "Manage, schedule, and monitor your entire bot workforce from one dashboard." }
    ],
    process: [
      { title: "Process Mining", description: "Recording human actions to map out the exact keystrokes and clicks required." },
      { title: "Bot Scripting", description: "Developing robust RPA scripts with exception handling and error logging." },
      { title: "Pilot Testing", description: "Running bots in a staging environment to verify accuracy against edge cases." },
      { title: "Production Deployment", description: "Deploying to the orchestrator and scheduling automated runs." }
    ],
    pricing: [
      { name: "Proof of Concept (PoC)", desc: "Automate one specific process to prove ROI." },
      { name: "Enterprise Bot Factory", desc: "Setting up a Center of Excellence for continuous automation." },
      { name: "Bot Maintenance Support", desc: "Ongoing monitoring and updates when underlying UIs change." }
    ],
    faqs: [
      { q: "Will RPA replace my employees?", a: "RPA replaces repetitive tasks, not people. It frees your staff to focus on customer service, strategy, and complex problem-solving." },
      { q: "What if the application interface changes?", a: "We build bots using robust selectors (not just screen coordinates). If a major UI overhaul occurs, we provide maintenance support to update the script." },
      { q: "Do you use UiPath or Automation Anywhere?", a: "We are tool-agnostic. We implement UiPath, Automation Anywhere, Blue Prism, or open-source Python RPA depending on your budget and needs." }
    ]
  };

  return <ServicePageTemplate data={pageData} />;
}

export default RpaServicesPage;