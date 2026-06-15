export const faculty = {
  name: "Dr. Prashant K. Srivastava",
  designation: "Associate Professor & Head",
  department: "Department of Mathematics",
  institution: "Indian Institute of Technology Patna",
  email: "pksri@iitp.ac.in",
  office: "Room 205, Academic Block, IIT Patna, Bihta, Bihar — 801106",
  website: "https://iitp.ac.in/~pksri/",
  iitpProfile: "https://iitp.ac.in/departments/mathematics/faculty/profile?id=115",
  photo: "/professor.png",

  bio: "I work on Mathematical Modeling of Epidemiology and Ecology using differential equations (ordinary, delay and stochastic), focusing on computational & mathematical analysis of nonlinear dynamical behavior. My work also includes data analysis for parameter estimation and prediction of disease outcome.",

  researchAreas: [
    { title: "Mathematical Epidemiology", desc: "SIR/SEIR models, R₀ analysis, optimal vaccination & treatment strategies for HIV, TB, Dengue, COVID-19" },
    { title: "Mathematical Ecology", desc: "Predator-prey dynamics with fear effects, Allee effects, harvesting, bistability & hydra effect" },
    { title: "In-Host Disease Dynamics", desc: "Within-host HIV/CD4+ T-cell modeling, drug therapy, multi-viral strains, HTLV-I infection" },
    { title: "Complementary Sequences", desc: "Zero Correlation Zone arrays, Complete Complementary Codes, applications in wireless communications" },
  ],

  experience: [
    { role: "Associate Professor & Head", place: "IIT Patna", period: "2019 – Present" },
    { role: "Associate Professor", place: "IIT Patna", period: "2015 – 2019" },
    { role: "Assistant Professor", place: "IIT Patna", period: "2010 – 2015" },
  ],

  education: [
    { degree: "Ph.D. in Mathematics", place: "IIT Kanpur", focus: "Mathematical Modeling of HIV Infection" },
    { degree: "M.Sc. in Mathematics", place: "IIT Kanpur" },
  ],

  awards: [
    { year: "2025", title: "Chair, Math-Epi Subgroup — Society for Mathematical Biology (SMB)" },
    { year: "2023", title: "JB Shukla Award — Indian Mathematical Society" },
    { year: "2022", title: "Board of Directors — BIOMAT Consortium" },
    { year: "2017", title: "Elected Fellow — National Academy of Sciences, India (NASI)" },
    { year: "2013", title: "Best Teacher Award — IIT Patna (SBI Sponsored)" },
    { year: "2011", title: "UGC DS Kothari Post Doctoral Fellowship (offered)" },
  ],

  memberships: [
    "Society for Mathematical Biology (SMB) — Chair, Math-Epi Subgroup",
    "BIOMAT Consortium — Board of Directors",
    "Indian Mathematical Society (IMS)",
    "ISMMACS — Joint Secretary",
    "National Academy of Sciences India (NASI) — Elected Fellow",
  ],

  publications: [
    {
      id: 1,
      authors: "S Das, PK Srivastava, P Biswas",
      title: "Nonlinear Dynamics and Hopf-bifurcation in a Tuberculosis Model with Saturated Incidence and Limited Treatment for High-Risk Latent Cases",
      journal: "Int. J. Bifurcation and Chaos",
      year: 2025,
      tags: ["TB", "Bifurcation"],
      takeaway: "Reveals how limited treatment capacity for high-risk TB cases causes Hopf bifurcation, creating periodic epidemic waves that frustrate eradication. Shows that sustained investment above a critical treatment threshold eliminates oscillations entirely.",
    },
    {
      id: 2,
      authors: "T Sarkar, PK Srivastava, P Biswas",
      title: "Modeling Dengue with Saturated Incidence, Vaccination, and Treatment Rates",
      journal: "Nonlinear Dynamics, 113(20), 28511–28553",
      year: 2025,
      tags: ["Dengue", "Vaccination"],
      takeaway: "Proves that dengue can persist even with vaccination if treatment saturates — meaning hospital overflow directly feeds the next wave. Identifies optimal vaccine-treatment ratio for elimination.",
    },
    {
      id: 3,
      authors: "AK Umrao, PK Srivastava",
      title: "Food Chain Model: Cooperative Behavior in Top Predator and its Impact on Prey and Middle Predator Demography with Fear Effect",
      journal: "Int. J. Numerical Methods Heat Fluid Flow, 35, 3795–3828",
      year: 2025,
      tags: ["Ecology", "Fear Effect"],
      takeaway: "Shows that cooperative hunting in apex predators paradoxically stabilises the food chain through fear — prey reduce activity, which buffers middle predators from extinction.",
    },
    {
      id: 4,
      authors: "AK Umrao, PK Srivastava",
      title: "Exploring predator–prey dynamics: Integrating competitor predators, harvesting delay and fear effect on prey",
      journal: "Nonlinear Analysis: Real World Applications, 86, 104391",
      year: 2025,
      tags: ["Ecology", "Delay"],
      takeaway: "Introduces crossing curves approach to show that harvesting delay alone can flip a stable ecosystem into chaos — even when harvest levels seem sustainable.",
    },
    {
      id: 5,
      authors: "Rashi, S Singh, AK Umrao, HP Singh, PK Srivastava",
      title: "Cooperation and harvesting-induced delays in a predator–prey model with prey fear response",
      journal: "Chaos, Solitons & Fractals, 194, 116132",
      year: 2025,
      tags: ["Ecology", "Cooperation"],
      takeaway: "Discovers novel stability switching — the same ecosystem can oscillate, stabilise, then oscillate again as delay increases, violating the common assumption of monotonic instability.",
    },
    {
      id: 6,
      authors: "S Prakash, AK Umrao, PK Srivastava",
      title: "Bifurcation and stability analysis of within host HIV dynamics with multiple infections and intracellular delay",
      journal: "Chaos, 35",
      year: 2025,
      tags: ["HIV", "Bifurcation"],
      takeaway: "Proves that intracellular delay in HIV replication creates a window where antiretroviral drugs are maximally effective — outside this window, viral escape becomes inevitable.",
    },
    {
      id: 7,
      authors: "Tanuja Das, PK Srivastava",
      title: "Do Behavioral Changes and Rubella Vaccination Co-infections Cause Large Epidemics",
      journal: "Bull. Math. Biology",
      year: 2024,
      tags: ["Rubella", "Behavioral"],
      takeaway: "Behavioral relaxation after vaccination (people stop taking precautions) can cause rubella epidemics larger than without vaccination — a cautionary model for public health complacency.",
    },
    {
      id: 8,
      authors: "A Kumar, PK Srivastava, Y Dong, Y Takeuchi",
      title: "Optimal control of infectious disease: Information-induced vaccination and limited treatment",
      journal: "Physica A, 542, 123196",
      year: 2020,
      tags: ["Optimal Control", "Vaccination"],
      takeaway: "Solves the cost-optimisation problem: how much to spend on awareness campaigns vs. treatment when healthcare capacity is finite. Derives explicit schedules for resource allocation.",
    },
    {
      id: 9,
      authors: "A Kumar, PK Srivastava, A Yadav",
      title: "Delayed Information Induces Oscillations in a Dynamical Model for Infectious Disease",
      journal: "Int. J. Biomathematics, 12, 1950020",
      year: 2019,
      tags: ["Information", "Delay"],
      takeaway: "Quantifies exactly how much delay in public health messaging (e.g., delayed COVID reporting) causes epidemic oscillations via Hopf bifurcation — faster reporting directly flattens curves.",
    },
    {
      id: 10,
      authors: "Anuj Kumar, PK Srivastava, Yasuhiro Takeuchi",
      title: "Modeling the role of information and limited optimal treatment on disease prevalence",
      journal: "J. Theoretical Biology, 414, 103–119",
      year: 2017,
      tags: ["Information", "Treatment"],
      takeaway: "Even limited treatment, when optimally timed alongside awareness campaigns, can reduce disease prevalence by 60–80% compared to treatment-only approaches. Information multiplies treatment efficacy.",
    },
    {
      id: 11,
      authors: "PK Srivastava, M Banerjee, P Chandra",
      title: "Dynamical Model of In-Host HIV Infection: With Drug Therapy and Multi-Viral Strains",
      journal: "J. Biological Systems, 20, 303–325",
      year: 2012,
      tags: ["HIV", "Drug Therapy"],
      takeaway: "Predicts conditions under which drug-resistant HIV strains dominate — and shows that early switching between drug regimens prevents resistance emergence better than waiting for viral rebound.",
    },
    {
      id: 12,
      authors: "PK Srivastava, P Chandra",
      title: "Modeling the dynamics of HIV and CD4+ T cells during primary infection",
      journal: "Nonlinear Analysis: Real World Applications, 11, 612–618",
      year: 2010,
      tags: ["HIV", "CD4+"],
      takeaway: "A foundational within-host model establishing the nonlinear tipping point between viral clearance and chronic HIV infection — directly applicable to early-treatment timing decisions.",
    },
    {
      id: 13,
      authors: "PK Srivastava, P Chandra",
      title: "Hopf bifurcation and periodic solutions in a dynamical model for HIV and immune response",
      journal: "Differential Equations and Dynamical Systems, 16, 77–100",
      year: 2008,
      tags: ["HIV", "Hopf Bifurcation"],
      takeaway: "First mathematical proof that HIV viral load oscillations observed clinically arise from Hopf bifurcation in the immune response — providing conditions that predict when oscillations start.",
    },
  ],

  students: {
    graduated: [
      { name: "Dr. Tanuja Das", area: "Infectious Disease Modeling" },
      { name: "Dr. Anuj Kumar", area: "Information & Optimal Disease Control" },
      { name: "Dr. Anuradha Yadav", area: "Infectious Disease Control" },
    ],
    ongoing: [
      { name: "Rajen Kumar", area: "Complementary Sequence Theory" },
      { name: "Anuj Kumar Umrao", area: "Eco-Epidemiology & Predator-Prey" },
      { name: "Rajan Singh", area: "COVID-19 Machine Learning Analysis" },
      { name: "S Das", area: "Tuberculosis Modeling" },
      { name: "T Sarkar", area: "Dengue Fever Dynamics" },
      { name: "S Prakash", area: "Within-Host HIV Dynamics" },
      { name: "Rashi", area: "Predator-Prey with Delay" },
      { name: "Aditya Prakash", area: "Complementary Codes & Signal Processing" },
    ],
  },

  phdInfo: {
    headline: "Looking for motivated PhD students",
    description: "I am actively looking for PhD candidates interested in Mathematical Modeling of Biological Systems — particularly in epidemiology, ecology, and disease dynamics. We work at the intersection of mathematics, biology, and computation.",
    requirements: [
      "Qualified GATE examination in Mathematics or related discipline",
      "Or external fellowship — UGC-JRF, CSIR-JRF, NBHM, or institute fellowship",
      "Strong foundation in differential equations and dynamical systems",
      "Interest in interdisciplinary biological problems",
    ],
    areas: [
      "Mathematical modeling of infectious diseases (TB, Dengue, HIV, COVID-19)",
      "Predator-prey dynamics and ecological modeling",
      "Optimal control theory applied to epidemiology",
      "Delay differential equations in biological systems",
      "Data-driven disease prediction and parameter estimation",
    ],
  },
};

export const chatbotData = {
  greetings: [
    "Hello! I'm Dr. Srivastava's academic assistant. How can I help you today?",
    "Welcome! Ask me anything about Dr. Srivastava's research, publications, PhD opportunities, or how to get in touch.",
  ],
  faqs: [
    {
      keywords: ["research", "area", "work", "field", "interest", "topic", "what does he do", "what do you do"],
      answer: "Dr. Srivastava works in four main areas:\n\n1. **Mathematical Epidemiology** — SIR/SEIR models for HIV, TB, Dengue, COVID-19 with optimal vaccination and treatment strategies\n2. **Mathematical Ecology** — predator-prey dynamics including fear effects, Allee effects, and harvesting strategies\n3. **In-Host Disease Dynamics** — HIV/CD4+ T-cell modeling, drug therapy optimization, multi-viral strain competition\n4. **Complementary Sequences** — Zero Correlation Zone arrays for wireless communications\n\nHis work is published in journals like *Nonlinear Dynamics*, *Chaos*, *J. Theoretical Biology*, and *Physica A*.",
    },
    {
      keywords: ["publication", "paper", "journal", "published", "cite", "citation", "scholar", "how many"],
      answer: "Dr. Srivastava has **65+ publications** in peer-reviewed international journals. Recent papers (2024-2025) include work in *Nonlinear Dynamics*, *Chaos, Solitons & Fractals*, *Nonlinear Analysis: Real World Applications*, and *Bull. Math. Biology*.\n\nHis Google Scholar profile shows **2000+ citations**. You can scroll down on this page to see selected publications with key takeaways.",
    },
    {
      keywords: ["contact", "email", "reach", "phone", "office", "visit", "meet", "appointment", "where"],
      answer: "📧 **Email:** pksri@iitp.ac.in\n🏢 **Office:** Room 205, Academic Block, IIT Patna, Bihta, Bihar — 801106\n🌐 **Website:** https://iitp.ac.in/~pksri/\n\nFor PhD inquiries, email with your CV, GATE score, and a brief note on your research interests.",
    },
    {
      keywords: ["phd", "student", "admission", "candidate", "opportunity", "position", "vacancy", "join", "openings", "hiring", "apply", "recruit"],
      answer: "**Dr. Srivastava is actively recruiting PhD students!**\n\n**Requirements:**\n• Qualified GATE in Mathematics/related discipline, OR\n• External fellowship (UGC-JRF, CSIR-JRF, NBHM)\n• Strong foundation in differential equations\n\n**Current research openings in:**\n• Mathematical modeling of TB, Dengue, HIV, COVID-19\n• Predator-prey dynamics and ecological modeling\n• Delay differential equations in biology\n• Data-driven disease prediction\n\n**How to apply:** Email pksri@iitp.ac.in with your CV, GATE score, and research interests. Scroll down to the PhD section on this page for more details.",
    },
    {
      keywords: ["award", "honor", "recognition", "prize", "achievement", "fellow"],
      answer: "Key recognitions:\n\n🏆 **JB Shukla Award (2023)** — Indian Mathematical Society\n🎖️ **NASI Elected Fellow (2017)** — National Academy of Sciences, India\n📋 **Chair, SMB Math-Epi Subgroup (2025)** — Society for Mathematical Biology\n📋 **Board of Directors, BIOMAT Consortium (2022)**\n🏅 **Best Teacher Award (2013)** — IIT Patna (SBI Sponsored)\n📜 **UGC DS Kothari Post Doctoral Fellowship (2011)** — offered",
    },
    {
      keywords: ["hiv", "aids", "immune", "cd4", "viral", "drug"],
      answer: "Dr. Srivastava's HIV research is foundational. Key contributions:\n\n• **Primary infection model (2010)** — established the tipping point between viral clearance and chronic infection\n• **Drug therapy & multi-strain model (2012)** — predicts when drug resistance emerges\n• **Hopf bifurcation in immune response (2008)** — first math proof that observed viral oscillations arise from bifurcation\n• **Multiple infections with delay (2025)** — identifies the optimal drug-timing window\n\nThese models directly inform early-treatment decisions and drug-switching protocols.",
    },
    {
      keywords: ["covid", "corona", "pandemic", "sars"],
      answer: "Dr. Srivastava's group has worked on COVID-19 data analysis, including biomarker identification and mortality prediction using ML algorithms (published in Lecture Notes in Electrical Engineering, 2022). His student Rajan Singh is currently working on COVID-19 machine learning analysis.",
    },
    {
      keywords: ["ecology", "predator", "prey", "fear", "harvest", "food chain"],
      answer: "The ecology work focuses on predator-prey dynamics:\n\n• **Fear effect** — how prey behavioral changes from predation fear reshape ecosystem stability\n• **Cooperative hunting** — paradoxically stabilises food chains through fear-mediated buffering\n• **Harvesting delay** — can flip stable ecosystems into chaos even at sustainable harvest levels\n• **Crossing curves** — novel approach showing ecosystems can oscillate, stabilise, then oscillate again\n\nRecent papers (2025) in *Nonlinear Analysis: RWA* and *Chaos, Solitons & Fractals*.",
    },
    {
      keywords: ["education", "degree", "qualification", "phd", "background", "iit kanpur"],
      answer: "Dr. Srivastava completed his **Ph.D. from IIT Kanpur** in mathematical modeling of HIV infection. He has been at IIT Patna since 2010, rising from Assistant Professor to Associate Professor & Head of the Mathematics Department.",
    },
    {
      keywords: ["tuberculosis", "tb"],
      answer: "Recent work (2025, accepted in *Int. J. Bifurcation and Chaos*) shows how limited treatment capacity for high-risk TB cases causes Hopf bifurcation — periodic epidemic waves that frustrate eradication. The key finding: sustained investment above a critical treatment threshold eliminates oscillations entirely. Student S Das is currently pursuing this research direction.",
    },
    {
      keywords: ["dengue"],
      answer: "The 2025 paper in *Nonlinear Dynamics* proves that dengue can persist even with vaccination if treatment saturates — hospital overflow feeds the next wave. The model identifies the optimal vaccine-treatment ratio for elimination. Student T Sarkar is continuing this line of research.",
    },
    {
      keywords: ["member", "society", "professional", "organization"],
      answer: "Professional memberships:\n• SMB (Society for Mathematical Biology) — **Chair**, Math-Epi Subgroup\n• BIOMAT Consortium — Board of Directors\n• Indian Mathematical Society\n• ISMMACS — Joint Secretary\n• NASI — Elected Fellow\n• American Mathematical Society",
    },
    {
      keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
      answer: "Hello! Welcome to Dr. Srivastava's academic page. I can help with information about:\n\n• His **research areas** and publications\n• **PhD opportunities** (he's actively hiring!)\n• Awards and recognition\n• Contact information\n\nWhat would you like to know?",
    },
    {
      keywords: ["thank", "thanks", "bye", "goodbye"],
      answer: "You're welcome! If you're interested in PhD positions, don't hesitate to email Dr. Srivastava at pksri@iitp.ac.in. Good luck!",
    },
  ],
  defaultResponse: "I can help with information about Dr. Srivastava's research, publications, PhD opportunities, awards, and contact details. Try asking:\n\n• \"What are his research areas?\"\n• \"Is he hiring PhD students?\"\n• \"How can I contact him?\"\n• \"Tell me about his HIV research\"\n• \"What awards has he won?\"",
  suggestions: [
    "What are his research areas?",
    "Is he hiring PhD students?",
    "Tell me about his publications",
    "How to contact him?",
    "What awards has he received?",
    "Tell me about HIV research",
  ],
};
