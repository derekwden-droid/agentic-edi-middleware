# Agentic EDI & B2B Middleware

An intelligent orchestration layer designed to modernize Electronic Data Interchange (EDI). This platform replaces rigid point-to-point B2B connections and manual data mapping with autonomous multi-agent systems.

## Key Features
- **Agentic Data Negotiation:** Auto-negotiates data formats between disparate business systems.
- **Unstructured to Structured Translation:** Uses LLM-driven agents to parse unstructured documents into structured X12/EDIFACT or JSON payloads.
- **Self-Healing Pipelines:** Real-time monitoring agents detect broken API connections and dynamically reroute or remap payloads to prevent pipeline failures.

## Architecture
- **Frontend:** Next.js dashboard (Vercel-ready) for real-time monitoring of agent negotiations and pipeline health.
- **Backend:** FastAPI for high-performance agent coordination, schema negotiation, and routing logic.

## Getting Started

### Backend (FastAPI)
1. `cd backend`
2. `pip install -r requirements.txt`
3. `uvicorn main:app --reload`

### Frontend (Next.js)
1. `cd frontend`
2. `npm install`
3. `npm run dev`
