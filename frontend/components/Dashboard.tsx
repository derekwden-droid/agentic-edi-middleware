'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ 
    documents_translated: 0, 
    active_negotiation_agents: 0,
    self_healed_connections: 0,
    pipeline_uptime: "0%"
  });

  useEffect(() => {
    // Communication with FastAPI backend
    fetch('http://127.0.0.1:8000/api/metrics')
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error("Backend offline", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-emerald-400">Agentic EDI Orchestrator</h1>
        <p className="text-slate-400 mt-2">Dynamic Workload Routing & B2B Middleware</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Active Agents</h2>
          <p className="text-4xl font-light mt-3 text-white">{metrics.active_negotiation_agents}</p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Docs Translated</h2>
          <p className="text-4xl font-light mt-3 text-white">{metrics.documents_translated.toLocaleString()}</p>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-xl border border-emerald-900 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full"></div>
          <h2 className="text-xs text-emerald-500 uppercase tracking-widest font-semibold">Self-Healed APIs</h2>
          <p className="text-4xl font-light mt-3 text-emerald-400">{metrics.self_healed_connections}</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-lg">
          <h2 className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Uptime</h2>
          <p className="text-4xl font-light mt-3 text-white">{metrics.pipeline_uptime}</p>
        </div>
      </div>
      
      <div className="mt-10 bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-lg">
        <h3 className="text-lg font-medium mb-4">Live Agent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-emerald-400">Format Auto-Negotiation</p>
              <p className="text-xs text-slate-400">System A (X12) ↔ System B (JSON)</p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Success</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-amber-400">Broken API Detected</p>
              <p className="text-xs text-slate-400">Supplier Endpoint 404 - Rerouting workload</p>
            </div>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">Healing...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
