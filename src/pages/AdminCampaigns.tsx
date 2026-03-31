import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Plus, Trash2, Megaphone, CheckCircle2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { cn } from '../utils/cn';

interface Campaign {
  id: number;
  title: string;
  description: string;
  active: number;
  created_at: string;
}

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch('/api/campaigns');
      const data = await res.json();
      setCampaigns(data);
    } catch (err) {
      console.error('Failed to fetch campaigns', err);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/campaigns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setTitle('');
        setDescription('');
        setMessage({ type: 'success', text: 'Campaign created successfully!' });
        fetchCampaigns();
      } else {
        setMessage({ type: 'error', text: 'Failed to create campaign.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Error connecting to server.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to deactivate this campaign?')) return;

    try {
      const res = await fetch(`/api/campaigns/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchCampaigns();
      }
    } catch (err) {
      console.error('Failed to delete campaign', err);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Megaphone size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary">Manage Campaigns</h1>
              <p className="text-slate-500">Create and manage your donation drives</p>
            </div>
          </div>
          <Link 
            to="/admin/generate-images"
            className="btn-outline btn-sm group"
          >
            <ImageIcon size={18} className="text-accent group-hover:text-primary transition-colors" />
            Image Generator
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Create Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-1"
          >
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-xl font-serif font-bold text-primary mb-6">New Campaign</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Title</label>
                  <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Winter Warmth Fund"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Briefly describe the goal..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm h-24 resize-none"
                  />
                </div>
                
                {message && (
                  <div className={cn(
                    "p-3 rounded-xl text-xs flex items-center gap-2",
                    message.type === 'success' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                  )}>
                    {message.type === 'success' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                    {message.text}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full"
                >
                  <Plus size={18} />
                  {loading ? 'Creating...' : 'Create Campaign'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* List */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-serif font-bold text-primary mb-6">Active Campaigns</h2>
            {campaigns.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-200 text-center text-slate-400">
                No active campaigns found. Create one to get started.
              </div>
            ) : (
              campaigns.map((campaign, idx) => (
                <motion.div 
                  key={campaign.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex items-start justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-1">{campaign.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">{campaign.description || 'No description provided.'}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Active</span>
                      <span className="text-[10px] text-slate-400">Created: {new Date(campaign.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(campaign.id)}
                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
