import marketing1 from "../assets/images/marketingPrj_1.png";
import sales1 from "../assets/images/salesPrj1.png";

export const HERO_CONTENT = `With a deep passion for transforming data into compelling narratives and a proven ability to collaborate seamlessly with cross-functional teams, I excel at delivering impactful insights that drive informed decisions.`;

export const ABOUT_TEXT = [
  "I am a dedicated Data Analyst with 3  years of professional experience across multiple industries. My work spans various domains involving data collection, integration, preparation, and thorough data cleaning to ensure high-quality data analysis.",
  "I have a strong background in ETL(Extract, Transform, Load) processes and am skilled in building insightful Power BI reports and dashboards that translate data into actionable business decisions.",
  "I am highly proficient in data modeling, creating detailed visualizations, and developing KPIs and metrics that align with business objectives.",
  "My passion for transforming data into meaningful stories, coupled with my ability to collaborate with cross-functional teams, sets me apart in the field. I invite you to explore my portfolio and consider how my blend of analytical skills and strategic thinking can contribute to your organization's success.",
];

export const EXPERIENCES = [
  {
    year: "Dec 2021 - Sep 2024",
    role: "Data Analyst",
    company: "Capgemini",
    description: [
      "Designed and maintained interactive Power BI dashboards and visual reports that enhanced stakeholders' understanding of business metrics, leading to data-driven decision-making.",
      "Developed data pipelines for the seamless transfer and integration of data across different platforms, improving process efficiency by 20%.",
      "Leveraged Python and complex SQL queries for data cleaning, analysis, and creating automated scripts to extract, transform, and load data ensuring data quality and accuracy.",
      "Collaborated with cross-functional teams to identify data requirements and support business initiatives, showcasing a proactive approach to problem-solving.",
      "Presented findings and strategic recommendations to stakeholders and senior management, effectively translating technical data into actionable insights.",
    ],
    keyAchievements: [
      "Spearheaded an ETL process redesign that reduced data load time by 15%.",
      "Received recognition for implementing data solutions that improved monthly report generation by 25%.",
    ],
  },
  {
    year: "Jun 2021 - Dec 2021",
    role: "Analyst",
    company: "IMS Health Analytics Services Private Limited",
    description: [
      "Conducted data preparation and analysis using Python and SQL, ensuring that healthcare data was accurate, complete, and fit for analytical purposes.",
      "Supported the development of automated workflows for integrating and processing patient data, improving data accessibility and reducing manual workload.",
      "Designed user-friendly Power BI reports and dashboards that highlighted critical health metrics, aiding in effective decision-making by healthcare professionals.",
      "Proactively identified and corrected inconsistencies in health data sets, maintaining high standards of data reliability and compliance.",
    ],
    keyAchievements: [
      "Contributed to the identification and resolution of critical data discrepancies, enhancing the overall data quality used for healthcare analytics and reporting.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Marketing Dashboard",
    description:
      "An online retail business, is facing reduced customer engagement and conversion rates despite launching several new online marketing campaigns. conduct a detailed analysis and identify areas for improvement in their marketing strategies.",
    image: marketing1,

    technologies: ["SQL", "Power BI", "Python", "DAX"],
    objectives: [
      "Increase Conversion Rates: Identify factors impacting the conversion rate and provide recommendations to improve it.",
      "Enhance Customer Engagement: Determine which types of content drive the highest engagement.",
      "Improve Customer Feedback Scores: Understand common themes in customer reviews and provide actionable insights.",
    ],
    outcomes: [
      "Target High-Performing Product Categories: Focus marketing efforts on products with demonstrated high conversion rates.Implement seasonal promotions or personalized campaigns during peak months (e.g., January and September) to capitalize on these trends.",
      "Revitalize Content Strategy: To turn around declining views and low interaction rates, experiment with more engaging content formats, such as interactive videos or user-generated content.",
    ],
    githubLink: "https://github.com/md-ummar/Marketing-Analysis",
  },
  {
    id: 2,
    title: "Sales Dashboard",
    description:
      "The project aims to transition from static sales reports to interactive and visual dashboards, enabling a more dynamic and detailed analysis of sales performance. The key focus areas will include tracking sales data across various product categories, monitoring customer purchases, and analyzing sales performance over time.",
    image: sales1,

    technologies: ["SQL", "Power BI", "SQL Server"],
    objectives: [
      "Track Sales Performance: Provide insights into how much of each product has been sold, which customers are purchasing those products, and how sales have evolved over time.",
      "Budget Comparison: Compare actual sales performance against the budget (2021 data) to assess how well sales are tracking relative to expectations.",
      "Historical Data Analysis: Focus on sales data from the past two years for meaningful trend analysis and performance reviews.",
    ],
    outcomes: [
      "Improved Decision Making: By comparing actual sales to budgeted figures, decision-makers can identify areas for improvement and allocate resources more effectively.",
      "Historical Trends: Analyzing sales data over the past two years will reveal trends, seasonality, and growth patterns, which can be used to inform future sales strategies.",
    ],
    githubLink: "https://github.com/md-ummar/Sales-data-Analysis",
  },
];
