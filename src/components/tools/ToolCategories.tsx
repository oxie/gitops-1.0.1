import { 
  GitBranch, Shield, Cloud, Terminal, Activity, 
  Container, Network, Lock, Database, Server,
  Archive, Scale, Settings, Eye, MessageSquare,
  Table, Boxes, Layers, Workflow, ArrowRightLeft
} from 'lucide-react';

export const toolCategories = [
  {
    title: "Cloud Platform",
    description: "Multi-region cloud infrastructure with automated scaling and hybrid deployment support.",
    icon: Cloud,
    items: ["AWS", "Azure", "GCP", "Hybrid Cloud"]
  },
  {
    title: "GitOps",
    description: "Automated delivery pipeline with declarative configs and instant rollback capabilities.",
    icon: GitBranch,
    items: ["FluxCD Ecosystem"]
  },
  {
    title: "Continuous Delivery",
    description: "Automated build, test, and deployment pipelines with advanced orchestration.",
    icon: Workflow,
    items: ["Github", "Jenkins", "Github Workflows"]
  },
  {
    title: "Containerization",
    description: "Production-grade container orchestration with auto-healing and advanced scheduling.",
    icon: Container,
    items: ["Kubernetes", "Containerd", "CRI", "Rancher", "Docker", "Docker Compose"]
  },
  {
    title: "Security",
    description: "Zero-trust framework with encrypted secrets and automated policy enforcement.",
    icon: Shield,
    items: ["External Secrets", "Sealed Secrets", "SOPS", "KubeArmor", "Kyverno", "Falco"]
  },
  {
    title: "SQL Databases",
    description: "Enterprise-grade relational databases with ACID compliance and robust transaction support.",
    icon: Table,
    items: ["PostgreSQL", "MySQL", "MariaDB", "Amazon RDS", "Azure SQL", "Oracle", "TimescaleDB"]
  },
  {
    title: "NoSQL Databases",
    description: "Scalable non-relational databases optimized for flexible schemas and high throughput.",
    icon: Boxes,
    items: ["MongoDB", "Cassandra", "DynamoDB", "Redis", "Elasticsearch", "CouchDB", "Neo4j"]
  },
  {
    title: "Streaming & Messaging",
    description: "Fault-tolerant event streaming with guaranteed delivery and real-time processing.",
    icon: MessageSquare,
    items: ["Apache Kafka", "RabbitMQ", "AWS MSK", "Debezium", "Kafka Connect", "Mirror Maker"]
  },
  {
    title: "Observability",
    description: "Full-stack monitoring with real-time metrics and intelligent alert management.",
    icon: Eye,
    items: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "Loki", "Jaeger"]
  },
  {
    title: "API Gateway & Service Mesh",
    description: "Advanced service mesh with traffic management and blue-green deployment support.",
    icon: Network,
    items: ["Linkerd", "Istio", "Kong", "Envoy", "Traefik"]
  },
  {
    title: "Infrastructure as Code",
    description: "Infrastructure as code with drift detection and automated state management.",
    icon: Settings,
    items: ["Terraform", "Crossplane", "Ansible", "Pulumi"]
  },
  {
    title: "Registries",
    description: "Secure artifact management with vulnerability scanning and access control.",
    icon: Archive,
    items: ["Harbor", "Nexus", "Artifactory", "ECR", "ACR", "GCR"]
  },
  {
    title: "Autoscaling",
    description: "Intelligent resource optimization with predictive scaling and cost management.",
    icon: Scale,
    items: ["Karpenter", "Cluster Autoscaler", "KEDA", "VPA", "HPA", "CAST AI"]
  },
  {
    title: "Platform Engineering",
    description: "Internal Developer Platform tools for streamlined development workflows.",
    icon: Layers,
    items: ["Backstage", "Port", "Cycloid", "Massdrive"]
  },
  {
    title: "Cloud Migration",
    description: "Enterprise workload assessment, planning, and migration with minimal downtime.",
    icon: ArrowRightLeft,
    items: [
      "AWS Migration",
      "EKS",
      "App2Container",
      "CloudEndure",
      "DMS",
      "MGN"
    ]
  }
] as const;