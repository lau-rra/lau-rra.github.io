const projects = [
    {
        id: 1,
        title: "Designing for the Next Generation",
        subtitle: "Societal Design Project | Aalto University | 2024",
        description: "Aiding our client Yle future-proof its engagement strategies for Gen Alpha (born 2010+) through Lean Service Design. We worked as a team of five students.",
        learnings: `During the validation round, we realized that our initial approach, based on early user interviews, was flawed and had to pivot, ultimately leading to a successful solution.
                    This was the most challenging and intense project I’ve worked on, pushing me to develop not only technical skills but also the ability to balance business objectives with customer needs in a broader societal context.`,
        role: [
            "Led 1/3 of the user interviews and synthesis (affinity mapping, pain point analysis).",
            "Co-designed the MVP’s user flows and prototype in Miro.",
            "Rotated as project manager for 3 weeks, coordinating deadlines and stakeholder check-ins.",
            "Contributed to all phases: research ideation, journey mapping, and final presentation."
          ],
        screenshots: [
            '/images/projectPictures/alpha1.png',
            '/images/projectPictures/alpha2.png',
        ],
        albumname: "Research insights",
        details: [
            { 
                step: 1, 
                title: "Research",
                bullets: [
                  "Conducted 2 interview rounds with Gen Alpha (n=9) + Yle employee.",
                  "Literature review about analyzing studies on Gen A’s media habits."
                ]
            },
            { 
                step: 2, 
                title: "Analysis & Ideation",
                bullets: [
                  "Qualitative coding in Atlas.io for interview analysis.",
                  "Mapped user journeys (Miro) to pinpoint gaps in Yle's reach."
                ]
            },
            { 
                step: 3, 
                title: "Solution design",
                bullets: [
                  "Applied Lean Service Design (business + user needs balance).",
                  "Prototyped MVP in Miro and Illustrator to validate engagement strategies.",
                  "Hold used feedback sessions."
                ]
            },
            { 
                step: 4, 
                title: "Outcome",
                bullets: [
                  "Actionable data-backed recommendations for Yle to improve their engagement with middle schooler.",
                  "MVP to test new interaction methods and build a relationship with Gen Alpha.",
                  "Improved success metrics to track reach and impact."
                ]
            },
        ]
      },
    
    {
      id: 2,
      title: "UI Precision & Scalable Design Systems",
      subtitle: "Creative Digital Concept Design | Aalto University | 2024",
      description: "Redesigning the Aalto Space app to fix UI inconsistencies (poor accessibility) and highlight rooms' unique offerings using Atomic Design.",
      learnings: `This project deepened my hard skills from refining my Figma expertise and applying WCAG standards to developing a cohesive design system. 
              It was a transformation journey: analyzing, replicating, and refining the user experience. 
                  Recreating an existing app challenged me to strike the right balance between innovation and respecting legacy systems, ensuring UI improvements enhanced consistency, accessibility, and scalability without disrupting user familiarity.`,
      screenshots: [
        '/images/projectPictures/og-aaltospace.png',
        '/images/projectPictures/aaltospace-vid.gif',
        '/images/projectPictures/aaltospace-wireframe.png',
        '/images/projectPictures/v1-aaltospace.png',
        '/images/projectPictures/a-desingsystem.png'
      ],
      albumname: "From the original app to an interactive prototype and an improved UI",
      details: [
        { 
          step: 1, 
          title: "Challenge",
          bullets: [
            "Identified 3 key issues: Lacking accessibility, low building visibility and broken interactive states."
          ]
        },
        { 
          step: 2, 
          title: "Process", 
          bullets: [
            "Analyzed existing UI components and user pain points, e.g. by creating task flows.",
            "Created low-fidelity prototypes: sketches and wireframes.",
            "Atomic Design: Built Figma components with variants (e.g., primary/secondary buttons).",
          ]
        },
        { 
          step: 3, 
          title: "Outcome", 
          bullets: [
            "Delivered a scalable design system.",
            "Showcased an interactive prototype.",
            "Redesigned discovery with detailed tags + specialized filters (estimated 30% faster booking).",
            "Accessible UI: Achieved WCAG AAA for text contrast (7:1+) and AA for interactive states (4.5:1+), verified via Stark plugin."
          ]
        }
      ],
    },

    {
        id: 3,
        title: "A User Research Case Study",
        subtitle: "User-Centered Methods for Service and Product Design | Aalto University | 2023",
        description: "Identifying friction points in University of Helsinki Library employees’ workflows and propose service improvements. We were a team of four students.",
        learnings: `During the project, I gained hands-on experience in scripting and conducting user interviews, as well as effectively communicating insights to various stakeholders. 
                  Additionally, I strengthened my skills in creating personas, task flows, customer journeys, and performing task analysis, ensuring a user-centered approach throughout the design process.`,
        role: [
            "Led interview scripting, conducting and analysis (n=3).",
            "Created three Personas, a journey map and a stakeholder map.",
            "Co-presented results to an audience."
          ],
        screenshots: [
            '/images/projectPictures/ucm1.png',
            '/images/projectPictures/ucm2.png',
            '/images/projectPictures/ucm3.png',
            '/images/projectPictures/ucm4.png',
        ],
        albumname: "Applied user-centered research & design methods",
        details: [
            { 
                step: 1, 
                title: "Challenge", 
                bullets: [
                  "Identify friction points in University of Helsinki Library employees’ workflows and propose service improvements.",
                  "Create clear picture for the audience and communciate findings efficiently."
                ]
            },
            { 
                step: 2, 
                title: "Methods", 
                bullets: [
                  "Interviews and observations",
                  "Customer journey mapping with Miro",
                  "Personas and scenarios",
                  "Qualitative analysis methods"
                ]
            },
            { 
                step: 3, 
                title: "Outcome", 
                bullets: [
                  "Identified 1-3 key pain points for each identified user group.",
                  "Provided actionable recommendations, such as streamlined internal communication tools."
                ]
            },
        ]
      }
  ];

  export default projects;