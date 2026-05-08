from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any

app = FastAPI(title="Agentic EDI Backend")

# Vercel frontend CORS communication setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Update with your specific Vercel URL later for tighter security
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DocumentPayload(BaseModel):
    source_system: str
    target_system: str
    unstructured_data: str

# Create a router specifically for the Vercel path prefix
api_router = APIRouter(prefix="/_/backend/api")

@api_router.get("/health")
def health_check():
    return {"status": "operational", "active_agents": 12}

@api_router.post("/translate")
def translate_document(payload: DocumentPayload):
    # Placeholder for Agentic Translation (Unstructured -> Structured X12/JSON)
    return {
        "status": "success", 
        "structured_data": {"mapped_fields": "auto-negotiated"},
        "agent_confidence": 0.98
    }

@api_router.get("/metrics")
def get_metrics():
    return {
        "documents_translated": 8432,
        "active_negotiation_agents": 12,
        "self_healed_connections": 14,
        "pipeline_uptime": "99.99%"
    }

# Include the router in the main app
app.include_router(api_router)

# Keep the base routes just in case you test locally without the prefix
@app.get("/api/metrics")
def get_metrics_local():
    return get_metrics()
# Add this to catch the route WITH a trailing slash just in case Vercel forces it
@api_router.get("/metrics/")
@api_router.get("/metrics")
def get_metrics():
    return {
        "documents_translated": 8432,
        "active_negotiation_agents": 12,
        "self_healed_connections": 14,
        "pipeline_uptime": "99.99%"
    }
