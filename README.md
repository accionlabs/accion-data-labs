# Accion Data Labs

A comprehensive React application showcasing Accion Labs' data capabilities, services, and expertise across governance, strategy, analytics, and modern data platforms.

## Overview

This application provides detailed information about Accion Labs' data practice, including:
- **Data Governance**: Comprehensive governance framework with 8 key service areas
- **Data Strategy**: Strategic consulting and roadmap development
- **Data Practice**: 250+ data professionals across 5 practice areas
- **Technology Stack**: 120+ technologies and platforms
- **Partnerships**: Premier partnerships with Microsoft, Snowflake, AWS, Databricks, and more
- **Case Studies**: Real-world success stories across industries
- **Data Transformation**: 5 Pillars framework (Model, Quality, Process, Integrations, Analytics)

## Technology Stack

- **React 19**: Modern React with TypeScript
- **TypeScript**: Type-safe development
- **React Router v7**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **D3**: Data visualization (optional)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Build for production
npm run build
```

This creates an optimized production build in the `docs` folder for GitHub Pages deployment.

```bash
# Build to default build folder
npm run build:default
```

### Testing

```bash
# Run tests
npm test
```

## Project Structure

```
accion-data-labs/
├── public/                     # Static files
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/            # Reusable components
│   │   ├── AppLayout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx
│   │   ├── ServiceCard.tsx
│   │   └── CaseStudyCard.tsx
│   ├── pages/                 # Page components
│   │   ├── Home.tsx
│   │   ├── DataGovernance.tsx
│   │   ├── DataStrategy.tsx
│   │   ├── DataPractice.tsx
│   │   ├── TechnologyStack.tsx
│   │   ├── Partnerships.tsx
│   │   ├── DataTransformation.tsx
│   │   ├── CaseStudies.tsx
│   │   └── Contact.tsx
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Main app component
│   ├── index.tsx              # Entry point
│   └── index.css              # Global styles
├── .claude/                   # Claude Code configuration
│   └── settings.local.json
├── convert_pptx_to_pdf.scpt  # PowerPoint to PDF converter
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Utilities

### PowerPoint to PDF Converter

Convert PowerPoint presentations to PDF format for easier sharing and analysis.

**Usage:**

```bash
# Interactive mode - prompts for folder selection
osascript convert_pptx_to_pdf.scpt

# Specify folder path directly
osascript convert_pptx_to_pdf.scpt "/path/to/your/presentations"
```

**Features:**
- Converts both .pptx and .ppt files
- Preserves original filenames
- Saves PDFs in the same folder as source files
- Shows conversion summary with success/error counts
- Handles errors gracefully

## Deployment

### GitHub Pages

The application is configured for GitHub Pages deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Commit and push the `docs` folder:
   ```bash
   git add docs
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Set source to `main` branch and `/docs` folder
   - Save

The application will be available at: `https://accionlabs.github.io/accion-data-labs`

## Content Overview

### Data Governance
- 8 key service areas: Data Catalog, Quality, MDM, Lineage, Security, Privacy, Discovery, Collaboration
- 10+ governance tools including Alation, Collibra, Microsoft Purview
- 5-phase implementation approach

### Data Strategy
- 6 strategic focus areas from vision to culture
- Business value realization framework
- AI and analytics strategy

### Data Practice
- 250+ data professionals
- 5 practice offerings: Big Data, Analytics, BI, EIM, Data Strategy
- 6 technology specialization areas

### Technology Stack
- Cloud platforms: AWS, Azure, GCP, Snowflake, Databricks
- Big Data: Hadoop, Spark, Kafka
- BI & Visualization: Tableau, Power BI, Qlik, Looker
- Data Warehousing: Snowflake, Redshift, BigQuery, Synapse
- ETL & Integration: Informatica, Talend, NiFi
- AI/ML: Python, TensorFlow, PyTorch, SageMaker

### Partnerships
- Premier partnerships: Microsoft, Snowflake, AWS, Databricks, Tableau
- Advanced partnerships: Google Cloud, Collibra
- Partner tier: Cloudera

### Case Studies
- 6 detailed case studies across industries
- Real-world outcomes and technologies used
- Industries served: Financial Services, Healthcare, Retail, Manufacturing, Telecom, Insurance

### Data Transformation
- 5 Pillars framework: Model, Quality, Process, Integrations, Analytics
- 5-phase implementation journey
- Proven benefits: 60-80% performance improvements

## Contributing

This is an internal Accion Labs project. For updates or modifications, please contact the Data Practice team.

## License

Copyright © 2025 Accion Labs. All rights reserved.

## Contact

- **Email**: contact@accionlabs.com
- **Website**: [www.accionlabs.com](https://www.accionlabs.com)
- **LinkedIn**: [linkedin.com/company/accionlabs](https://www.linkedin.com/company/accionlabs)
