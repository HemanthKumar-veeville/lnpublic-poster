// src/assets/content.ts

export const categories = {
    scenario: [
      "Taking the elevator",
      "Ordering coffee",
      "Stuck in traffic",
      "Tying my shoelaces",
      "Watching a pigeon",
      "Missing the bus",
      "Filing expenses",
      "Eating a sandwich",
      "Replying to an email",
      "Using a sticky note",
      "Walking to my car",
      "Organizing my desk",
      "Watering my office plant",
      "Reading a post-it note",
      "Refilling the printer",
    ],
    mindset: [
      "in a growth mindset moment",
      "practicing mindfulness",
      "thinking about success",
      "channeling my inner CEO",
      "disrupting the status quo",
      "leveraging my potential",
      "pivoting my perspective",
      "ideating at scale",
      "maximizing synergies",
      "optimizing my workflow",
      "hacking my productivity",
      "embracing the hustle",
      "scaling my thoughts",
      "implementing agile living",
      "doing a deep dive",
    ],
    character: [
      "a wise janitor",
      "a 5-year-old entrepreneur",
      "my Uber driver (who has 3 PhDs)",
      "a struggling startup founder",
      "my neighbor's dog",
      "a retired Fortune 500 executive",
      "an intern with a vision",
      "a barista turned blockchain expert",
      "my meditation coach (ex-Wall Street)",
      "a squirrel building its acorn portfolio",
      "my AI-powered toaster",
      "a mindfulness guru (former day trader)",
      "a digital nomad hamster",
    ],
    lesson: [
      "taught me more about leadership than my MBA",
      "showed me what true disruption means",
      "revealed the secret to 10x growth",
      "demonstrated the power of networking",
      "proved that success is a mindset",
      "revolutionized my business strategy",
      "unlocked my entrepreneurial DNA",
      "transformed my understanding of agile",
      "redefined my KPIs for life",
      "bootstrapped my emotional intelligence",
      "pivoted my paradigm permanently",
      "10x'd my growth mindset",
      "disrupted my neural pathways",
    ],
    closing: [
      "Time to leverage this insight! 💪",
      "Are YOU ready to level up? 📈",
      "The grind never stops! 💯",
      "Success leaves clues! 🔍",
      "Don't wait for opportunity, create it! 🚀",
      "Your network is your net worth! 🌐",
      "Keep pushing the envelope! ✉️",
      "Thoughts? 🤔",
      "Like and follow for more disruption! 💡",
      "Who's with me on this journey? 🚀",
      "Let's connect and scale together! 🤝",
    ],
    hashtags: [
      "#LinkedInLearning #Mindset #Leadership",
      "#Entrepreneur #GrowthMindset #Success",
      "#Innovation #Disruption #LinkedIn",
      "#BusinessGrowth #Inspiration #Motivation",
      "#NetworkingWhileBreathing #Hustle #Grind",
      "#ThoughtLeadership #PersonalBranding #Winning",
      "#SigmaGrindset #10x #ThoughtLeader",
      "#PersonalDevelopment #MondayMotivation #Hustle",
      "#EntrepreneurMindset #BusinessGuru #Success",
    ],
  };
  
  export const postStyles = {
    inspirational: {
      icon: "🔥",
      name: "Inspirational",
      template: (data: any) => `🔥 Breakthrough Moment Alert! 🔥
  
  Today while ${data.scenario}, ${data.mindset}, I met ${data.character} who ${data.lesson}.
  
  This reminded me that every moment is an opportunity to disrupt, innovate, and synergize.
  
  ${data.closing}
  
  ${data.hashtags}
  
  👉 Follow me for more game-changing insights from everyday moments! 💡`,
    },
    techBro: {
      icon: "🚀",
      name: "Tech Bro",
      template: (data: any) => `🚀 Just shipped this life hack... #BuildInPublic
  
  While ${data.scenario}, I discovered something INSANE...
  
  ${data.character} appeared and ${data.lesson}
  
  Key metrics:
  📈 Mindset: Optimized
  🧠 Productivity: 10x'd
  💪 Network: Leveraged
  
  ${data.closing}
  
  ${data.hashtags}
  
  P.S. Subscribe to my newsletter for more disruption 💡`,
    },
    coach: {
      icon: "🎯",
      name: "Life Coach",
      template: (data: any) => `💭 POWERFUL INSIGHT ALERT 💭
  
  Picture this:
  
  I was ${data.scenario}, when suddenly ${data.character} appeared...
  
  🎯 The Result?
  ${data.lesson}
  
  🧠 Mindset Shift:
  ${data.mindset}
  
  ${data.closing}
  
  ${data.hashtags}
  
  DM me for 1:1 coaching! Limited spots available! 🌟`,
    },
    corporate: {
      icon: "📊",
      name: "Corporate",
      template: (data: any) => `📊 Leveraging Everyday Insights for Maximum ROI 📈
  
  Strategic observation while ${data.scenario}:
  
  Key Learnings:
  1. ${data.character}
  2. ${data.lesson}
  3. ${data.mindset}
  
  Implementing this framework helped me:
  • Optimize core competencies
  • Streamline value propositions
  • Synergize cross-functional initiatives
  
  ${data.closing}
  
  ${data.hashtags}
  
  Like and follow for more corporate wisdom! 👔`,
    },
  };
  