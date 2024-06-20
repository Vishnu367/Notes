const fontNames = ['McLaren', 'Rancho', 'Cabin Sketch', 'Cookie', 'Kaushan Script', 'Dancing Script', 'Work Sans', 'Merienda', 'Caveat', 'Indie Flower', 'Roboto', 'KoHo']

const sampleData = {
    "notes": [
      {
        "id": 1,
        "category": "Projects",
        "title": "Project Alpha",
        "content": "Discuss the initial requirements and create the project plan. Ensure that all stakeholders are on the same page regarding the objectives and deliverables. Identify the key milestones and establish a timeline for the project. Assign roles and responsibilities to each team member. Gather initial feedback and make necessary adjustments to the plan. Ensure that resources are allocated efficiently and that there is a clear communication plan in place to keep everyone updated on progress.",
        "createdAt": "2024-06-01T10:00:00"
      },
      {
        "id": 2,
        "category": "Meetings",
        "title": "Team Meeting",
        "content": "Weekly team meeting to discuss project updates and roadblocks. Review the progress of ongoing tasks and identify any issues that need to be addressed. Encourage team members to share their thoughts and provide solutions to problems. Plan the upcoming week and set new targets. Ensure that everyone is clear about their responsibilities and deadlines. Address any concerns or questions from the team. Conclude the meeting with a summary of key points and action items.",
        "createdAt": "2024-06-02T14:00:00"
      },
      {
        "id": 3,
        "category": "Designs",
        "title": "UI Design",
        "content": "Create wireframes for the new user interface. Focus on user experience and ensure that the design is intuitive and easy to navigate. Use feedback from user testing to make improvements. Pay attention to details like font size, color schemes, and layout. Ensure that the design is responsive and works well on different devices. Collaborate with developers to ensure that the design can be implemented effectively. Document the design process and decisions for future reference.",
        "createdAt": "2024-06-03T09:30:00"
      },
      {
        "id": 4,
        "category": "Daily Routine",
        "title": "Morning Routine",
        "content": "Exercise, breakfast, and plan the day. Start with a 30-minute workout to boost energy levels. Have a healthy breakfast to fuel the body for the day ahead. Review the day's schedule and prioritize tasks. Set clear goals for what needs to be accomplished. Take a few minutes to practice mindfulness or meditation to start the day with a clear and focused mind. Make sure to leave some time for breaks and relaxation throughout the day.",
        "createdAt": "2024-06-04T07:00:00"
      },
      {
        "id": 5,
        "category": "Projects",
        "title": "Project Beta",
        "content": "Develop the backend API for the project. Start by defining the API endpoints and the data structures. Ensure that the API is secure and can handle a high volume of requests. Write unit tests to verify the functionality of the API. Use version control to manage changes to the codebase. Collaborate with frontend developers to ensure that the API meets their needs. Document the API endpoints and provide examples of how to use them. Monitor the API for performance and make improvements as needed.",
        "createdAt": "2024-06-05T11:00:00"
      },
      {
        "id": 6,
        "category": "Meetings",
        "title": "Client Call",
        "content": "Discuss the project requirements and deadlines with the client. Start by reviewing the project's goals and objectives. Gather detailed information about the client's needs and expectations. Clarify any ambiguities and ensure that both parties are on the same page. Set realistic deadlines and milestones. Discuss any potential challenges and how they can be addressed. Make sure to document all agreements and follow up with a summary email.",
        "createdAt": "2024-06-06T15:30:00"
      },
      {
        "id": 7,
        "category": "Designs",
        "title": "Logo Design",
        "content": "Brainstorm and create a new logo for the brand. Start by researching the brand's identity and target audience. Gather inspiration from existing logos and design trends. Create several rough sketches and narrow down the options. Refine the chosen design and experiment with different color schemes and fonts. Get feedback from the team and make any necessary adjustments. Ensure that the logo is versatile and works well in different sizes and formats. Finalize the design and prepare it for use in branding materials.",
        "createdAt": "2024-06-07T13:00:00"
      },
      {
        "id": 8,
        "category": "Daily Routine",
        "title": "Evening Routine",
        "content": "Wrap up work, dinner, and relax with a book. Start by reviewing the day's accomplishments and planning for tomorrow. Ensure that all tasks are completed or rescheduled. Have a nutritious dinner to replenish energy levels. Spend some time unwinding with a good book or a hobby. Reflect on the day's events and express gratitude for positive experiences. Prepare for a good night's sleep by creating a relaxing environment and avoiding screens before bed.",
        "createdAt": "2024-06-08T18:00:00"
      },
      {
        "id": 9,
        "category": "Learning",
        "title": "JavaScript Course",
        "content": "Complete module 3 of the JavaScript course. Focus on understanding advanced concepts such as closures, asynchronous programming, and event handling. Work through the provided examples and practice coding exercises. Participate in discussion forums to clarify doubts and share knowledge with peers. Take notes on key concepts and create summary sheets for revision. Apply the learned concepts to a small project to reinforce understanding. Take a quiz at the end of the module to test knowledge.",
        "createdAt": "2024-06-09T12:00:00"
      },
      {
        "id": 10,
        "category": "Fitness",
        "title": "Yoga Session",
        "content": "Attend a 60-minute yoga session. Focus on breathing techniques and mindfulness. Practice various yoga poses to improve flexibility and strength. Pay attention to form and alignment to prevent injuries. Use this time to disconnect from stress and connect with the body. End the session with a relaxation or meditation period. Reflect on the physical and mental benefits of the practice. Set a goal to incorporate yoga into the weekly routine.",
        "createdAt": "2024-06-10T08:00:00"
      },
      {
        "id": 11,
        "category": "Travel",
        "title": "Vacation Planning",
        "content": "Plan a vacation to the mountains. Research potential destinations and accommodation options. Consider factors like budget, travel time, and activities available. Create a detailed itinerary, including travel dates, transportation, and sightseeing plans. Make reservations for flights, hotels, and any special activities. Pack necessary items and ensure that all travel documents are in order. Set up an out-of-office message for work emails. Leave room for spontaneity and relaxation in the schedule.",
        "createdAt": "2024-06-11T16:00:00"
      },
      {
        "id": 12,
        "category": "Projects",
        "title": "Project Gamma",
        "content": "Kick-off meeting for Project Gamma. Introduce the project team and outline the project objectives. Discuss the scope, timeline, and deliverables. Assign roles and responsibilities to each team member. Establish communication channels and frequency of updates. Identify potential risks and discuss mitigation strategies. Gather input from team members and stakeholders. Conclude the meeting with a summary of action items and next steps.",
        "createdAt": "2024-06-12T10:30:00"
      },
      {
        "id": 13,
        "category": "Meetings",
        "title": "Strategy Session",
        "content": "Monthly strategy session with the leadership team. Review the performance of the past month and identify key achievements. Discuss market trends and competitive landscape. Set strategic goals and priorities for the upcoming month. Brainstorm new ideas and initiatives to drive growth. Address any challenges or obstacles that need to be overcome. Ensure that everyone is aligned with the company's vision and mission. Document the key takeaways and action items from the session.",
        "createdAt": "2024-06-13T11:00:00"
      },
      {
        "id": 14,
        "category": "Designs",
        "title": "Website Redesign",
        "content": "Start the website redesign project. Begin with a comprehensive review of the current website. Identify areas for improvement in terms of usability, aesthetics, and performance. Create a new design layout that aligns with the brand's identity. Ensure that the new design is mobile-friendly and optimized for different devices. Get feedback from stakeholders and make revisions as needed. Work closely with developers to implement the new design. Test the website thoroughly before launch.",
        "createdAt": "2024-06-14T14:00:00"
      },
      {
        "id": 15,
        "category": "Daily Routine",
        "title": "Afternoon Walk",
        "content": "Take a 30-minute walk in the park. Use this time to clear the mind and get some fresh air. Observe the surroundings and appreciate nature. Use the walk as an opportunity to reflect on the day so far and plan the rest of the day. Listen to an audiobook or podcast if desired. Make sure to stay hydrated and wear comfortable shoes. Return to work feeling refreshed and more focused.",
        "createdAt": "2024-06-15T13:00:00"
      },
      {
        "id": 16,
        "category": "Learning",
        "title": "Python Workshop",
        "content": "Participate in a full-day Python workshop. Cover advanced topics like data analysis, machine learning, and web development. Work on hands-on projects to apply the learned concepts. Engage with the instructor and other participants to share knowledge and insights. Take detailed notes and ask questions to clarify doubts. Complete the workshop assignments and review the provided materials. Set a goal to use Python in an upcoming project.",
        "createdAt": "2024-06-16T09:00:00"
      },
      {
        "id": 17,
        "category": "Fitness",
        "title": "Strength Training",
        "content": "Follow a 45-minute strength training routine. Focus on major muscle groups like legs, back, and chest. Use free weights and resistance bands for a variety of exercises. Pay attention to proper form and breathing techniques. Track progress by noting the weights used and the number of repetitions. Ensure a balanced workout by including exercises for both upper and lower body. End the session with stretching to improve flexibility and prevent injuries.",
        "createdAt": "2024-06-17T07:30:00"
      },
      {
        "id": 18,
        "category": "Travel",
        "title": "Weekend Getaway",
        "content": "Plan a weekend getaway to the beach. Choose a nearby destination to minimize travel time. Book accommodation with a sea view. Plan activities like beach volleyball, snorkeling, and a sunset cruise. Pack essentials like sunscreen, swimwear, and beach towels. Make dining reservations in advance to avoid long waits. Ensure that the car is in good condition for the trip. Create a playlist for the drive and enjoy the journey.",
        "createdAt": "2024-06-18T17:00:00"
      },
      {
        "id": 19,
        "category": "Projects",
        "title": "Project Delta",
        "content": "Plan the marketing strategy for Project Delta. Identify the target audience and create buyer personas. Research the competitive landscape and identify key differentiators. Develop a messaging framework that highlights the project's unique value proposition. Choose the right channels for promotion, such as social media, email marketing, and content marketing. Create a content calendar and assign tasks to the team. Set measurable goals and track progress using analytics tools. Adjust the strategy based on feedback and results.",
        "createdAt": "2024-06-19T10:00:00"
      },
      {
        "id": 20,
        "category": "Meetings",
        "title": "Quarterly Review",
        "content": "Conduct the quarterly review meeting with all departments. Review the key performance indicators (KPIs) for the past quarter. Identify areas of success and areas that need improvement. Discuss the achievements and challenges faced by each department. Set goals and priorities for the next quarter. Ensure that all departments are aligned with the overall business strategy. Document the key takeaways and action items. Follow up with each department to ensure that the plans are being implemented.",
        "createdAt": "2024-06-20T14:30:00"
      },
      {
        "id": 21,
        "category": "Designs",
        "title": "Brochure Design",
        "content": "Create a new brochure for the upcoming product launch. Start by gathering all necessary information about the product. Focus on creating a visually appealing and informative layout. Use high-quality images and graphics to enhance the design. Write compelling copy that highlights the product's features and benefits. Ensure that the design is consistent with the brand's identity. Get feedback from the marketing team and make revisions as needed. Prepare the final design for printing and distribution.",
        "createdAt": "2024-06-21T11:00:00"
      },
      {
        "id": 22,
        "category": "Daily Routine",
        "title": "Midday Break",
        "content": "Take a 15-minute break in the middle of the day. Use this time to step away from work and recharge. Stretch or do some light exercises to relieve tension. Have a healthy snack to keep energy levels up. Use the break to socialize with colleagues or catch up on personal messages. Avoid checking work emails or engaging in work-related tasks. Return to work feeling refreshed and ready to tackle the remaining tasks of the day.",
        "createdAt": "2024-06-22T12:00:00"
      },
      {
        "id": 23,
        "category": "Learning",
        "title": "Data Science Course",
        "content": "Complete the final project for the data science course. Choose a dataset and define a clear objective for the analysis. Use data cleaning and preprocessing techniques to prepare the data. Apply various data analysis and visualization techniques to uncover insights. Use machine learning algorithms to build predictive models. Document the entire process and present the findings in a report. Review the feedback from the instructor and make improvements. Use the project as a portfolio piece to showcase data science skills.",
        "createdAt": "2024-06-23T10:00:00"
      },
      {
        "id": 24,
        "category": "Fitness",
        "title": "Cardio Workout",
        "content": "Follow a 30-minute cardio workout routine. Start with a 5-minute warm-up to prepare the body. Choose activities like running, cycling, or jumping rope to elevate the heart rate. Maintain a steady pace and focus on breathing. Track the workout duration and intensity using a fitness app. Cool down with light stretching to relax the muscles. Record the workout in a fitness journal to track progress. Set a goal to gradually increase the workout duration or intensity.",
        "createdAt": "2024-06-24T08:00:00"
      },
      {
        "id": 25,
        "category": "Travel",
        "title": "International Trip",
        "content": "Plan an international trip to Europe. Choose a few countries to visit based on interests and budget. Apply for necessary travel visas and ensure that the passport is up to date. Book flights and accommodation well in advance to get the best deals. Create a detailed itinerary that includes sightseeing, dining, and cultural activities. Pack appropriately for the weather and planned activities. Learn a few basic phrases in the local languages. Set up travel insurance for peace of mind.",
        "createdAt": "2024-06-25T09:00:00"
      },
      {
        "id": 26,
        "category": "Projects",
        "title": "Project Epsilon",
        "content": "Develop the content strategy for Project Epsilon. Identify the target audience and their content preferences. Create a content calendar that outlines the topics, formats, and channels to be used. Assign tasks to content creators and set deadlines. Use analytics tools to measure the performance of the content. Adjust the strategy based on the insights gathered from the analytics. Ensure that the content is aligned with the brand's messaging and goals. Document the process and create templates for future use.",
        "createdAt": "2024-06-26T10:30:00"
      },
      {
        "id": 27,
        "category": "Meetings",
        "title": "Brainstorming Session",
        "content": "Hold a brainstorming session with the product development team. Set a clear objective for the session, such as generating ideas for a new feature or solving a specific problem. Encourage open and creative thinking. Use techniques like mind mapping or SWOT analysis to organize ideas. Ensure that everyone has a chance to contribute. Evaluate the ideas based on feasibility and impact. Document the best ideas and create an action plan to implement them.",
        "createdAt": "2024-06-27T11:00:00"
      }
    ]
  }
  