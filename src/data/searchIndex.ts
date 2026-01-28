export interface SearchItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  path: string;
  category: string;
}

export const searchIndex: SearchItem[] = [
  // Main Pages
  {
    id: 'home',
    title: 'Home',
    description: 'Accion Data Labs - Transform your data into actionable insights with comprehensive data services',
    keywords: ['home', 'data labs', 'accion', 'data services', 'analytics', 'consulting'],
    path: '/',
    category: 'Main'
  },
  {
    id: 'data-strategy',
    title: 'Data Strategy',
    description: 'Develop comprehensive data strategies aligned with business objectives. Assessment, roadmap, and implementation planning.',
    keywords: ['strategy', 'roadmap', 'assessment', 'planning', 'business alignment', 'data maturity', 'vision'],
    path: '/data-strategy',
    category: 'Services'
  },
  {
    id: 'data-governance',
    title: 'Data Governance',
    description: 'Establish data governance frameworks, policies, standards, and stewardship programs for trusted data.',
    keywords: ['governance', 'policies', 'standards', 'stewardship', 'compliance', 'data quality', 'metadata', 'lineage'],
    path: '/data-governance',
    category: 'Services'
  },
  {
    id: 'master-data-management',
    title: 'Master Data Management',
    description: 'Create a single source of truth with MDM solutions. Customer, product, and reference data management.',
    keywords: ['MDM', 'master data', 'single source of truth', 'customer data', 'product data', 'reference data', 'data quality'],
    path: '/master-data-management',
    category: 'Services'
  },
  {
    id: 'data-transformation',
    title: 'Data Transformation',
    description: 'Transform and modernize your data infrastructure. Migration, integration, and pipeline development.',
    keywords: ['transformation', 'migration', 'modernization', 'ETL', 'ELT', 'pipelines', 'integration', 'data warehouse'],
    path: '/data-transformation',
    category: 'Services'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'Implement generative AI and machine learning solutions. KAPS framework, LLMs, RAG, and AI applications.',
    keywords: ['AI', 'generative AI', 'machine learning', 'ML', 'LLM', 'RAG', 'KAPS', 'ChatGPT', 'copilot', 'automation'],
    path: '/generative-ai',
    category: 'Services'
  },
  {
    id: 'data-practice',
    title: 'Data Practice',
    description: 'Our data practice capabilities, team expertise, and engagement models for data initiatives.',
    keywords: ['practice', 'team', 'expertise', 'engagement', 'consulting', 'delivery', 'methodology'],
    path: '/data-practice',
    category: 'About'
  },
  {
    id: 'technology-stack',
    title: 'Technology Stack',
    description: 'Technology categories and frameworks. Cloud, big data, analytics, warehousing, integration, governance, and AI/ML.',
    keywords: ['technology', 'stack', 'frameworks', 'cloud', 'big data', 'Spark', 'Kafka', 'Hadoop', 'ETL', 'architecture'],
    path: '/technology-stack',
    category: 'Technology'
  },
  {
    id: 'platforms',
    title: 'Data Platforms',
    description: 'Platform expertise across AWS, Azure, Snowflake, Databricks, Google Cloud, Tableau, Collibra, and more.',
    keywords: ['platforms', 'cloud', 'data platforms', 'expertise', 'certifications'],
    path: '/platforms',
    category: 'Platforms'
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Real-world success stories and implementations across industries.',
    keywords: ['case studies', 'success stories', 'implementations', 'clients', 'projects', 'results'],
    path: '/case-studies',
    category: 'About'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with Accion Data Labs for your data initiatives.',
    keywords: ['contact', 'email', 'reach out', 'connect', 'inquiry'],
    path: '/contact',
    category: 'Main'
  },

  // Platform Deep Dives
  {
    id: 'microsoft',
    title: 'Microsoft Azure',
    description: 'Azure data platform expertise. Synapse Analytics, Power BI, Purview, Azure ML, Data Factory.',
    keywords: ['Microsoft', 'Azure', 'Synapse', 'Power BI', 'Purview', 'Azure ML', 'Data Factory', 'cloud'],
    path: '/platforms/microsoft',
    category: 'Platforms'
  },
  {
    id: 'snowflake',
    title: 'Snowflake',
    description: 'Snowflake data cloud expertise. Data warehouse, Snowpark, Cortex AI, data sharing, medallion architecture.',
    keywords: ['Snowflake', 'data warehouse', 'Snowpark', 'Cortex', 'data sharing', 'data cloud', 'medallion'],
    path: '/platforms/snowflake',
    category: 'Platforms'
  },
  {
    id: 'aws',
    title: 'Amazon Web Services (AWS)',
    description: 'AWS data platform expertise. Redshift, S3, Glue, SageMaker, Lake Formation, EMR, Kinesis.',
    keywords: ['AWS', 'Amazon', 'Redshift', 'S3', 'Glue', 'SageMaker', 'Lake Formation', 'EMR', 'Kinesis', 'cloud'],
    path: '/platforms/aws',
    category: 'Platforms'
  },
  {
    id: 'databricks',
    title: 'Databricks',
    description: 'Databricks lakehouse expertise. Delta Lake, Unity Catalog, MLflow, Spark, notebooks, real-time analytics.',
    keywords: ['Databricks', 'lakehouse', 'Delta Lake', 'Unity Catalog', 'MLflow', 'Spark', 'notebooks'],
    path: '/platforms/databricks',
    category: 'Platforms'
  },
  {
    id: 'google-cloud',
    title: 'Google Cloud Platform',
    description: 'GCP data platform expertise. BigQuery, Dataflow, Vertex AI, Looker, Pub/Sub, Data Catalog.',
    keywords: ['Google Cloud', 'GCP', 'BigQuery', 'Dataflow', 'Vertex AI', 'Looker', 'Pub/Sub'],
    path: '/platforms/google-cloud',
    category: 'Platforms'
  },
  {
    id: 'tableau',
    title: 'Tableau',
    description: 'Tableau visual analytics expertise. Dashboards, self-service analytics, embedded analytics, enterprise BI.',
    keywords: ['Tableau', 'visualization', 'dashboards', 'BI', 'business intelligence', 'analytics', 'reports'],
    path: '/platforms/tableau',
    category: 'Platforms'
  },
  {
    id: 'collibra',
    title: 'Collibra',
    description: 'Collibra data governance expertise. Data catalog, lineage, stewardship, data quality, privacy compliance.',
    keywords: ['Collibra', 'governance', 'catalog', 'lineage', 'stewardship', 'data quality', 'compliance'],
    path: '/platforms/collibra',
    category: 'Platforms'
  },
  {
    id: 'cloudera',
    title: 'Cloudera',
    description: 'Cloudera data platform expertise. CDP, hybrid cloud, data engineering, Hadoop, Spark, NiFi.',
    keywords: ['Cloudera', 'CDP', 'hybrid cloud', 'Hadoop', 'Spark', 'NiFi', 'data engineering'],
    path: '/platforms/cloudera',
    category: 'Platforms'
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Platforms',
    description: 'AI/ML platform expertise. SageMaker, Azure ML, Vertex AI, Databricks ML, MLOps, generative AI.',
    keywords: ['AI', 'ML', 'machine learning', 'SageMaker', 'Azure ML', 'Vertex AI', 'MLOps', 'MLflow', 'generative AI'],
    path: '/platforms/ai-ml',
    category: 'Platforms'
  }
];
