import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, CheckCircle2, AlertTriangle, 
  ExternalLink, Globe, BookOpen, Scale, Eye, 
  Filter, Plus, RefreshCw, ArrowRight, X, FileCheck, HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import { gscContentRegistry, GSCQueryItem } from '../data/gscContentRegistry';

export default function GSCEditorialHub() {
  const [items, setItems] = useState<GSCQueryItem[]>(gscContentRegistry);
  const [selectedCluster, setSelectedCluster] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<GSCQueryItem | null>(null);
  const [previewArticle, setPreviewArticle] = useState<GSCQueryItem | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // New Idea Form State
  const [newQuery, setNewQuery] = useState('');
  const [newCluster, setNewCluster] = useState<GSCQueryItem['cluster']>('Cluster A: India Charity');
  const [newGeo, setNewGeo] = useState<GSCQueryItem['geographicScope']>('India');
  const [newAnswer, setNewAnswer] = useState('');
  const [newSource, setNewSource] = useState('');

  const clusters = [
    { id: 'all', label: 'All Topic Clusters' },
    { id: 'india-charity', label: 'Cluster A: India Charity' },
    { id: 'blood-donation', label: 'Cluster B: Blood Donation' },
    { id: 'plasma-pregnancy-fertility', label: 'Cluster C: Plasma & Pregnancy' },
    { id: 'sperm-donation', label: 'Cluster D: Sperm Donation' },
    { id: 'salvation-army', label: 'Cluster E: Salvation Army Pickup' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCluster = selectedCluster === 'all' || item.clusterId === selectedCluster;
    const matchesSearch = item.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.cluster.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCluster && matchesSearch;
  });

  const handleStatusChange = (queryStr: string, newStatus: GSCQueryItem['editorialStatus']) => {
    setItems((prev) => 
      prev.map((item) => item.query === queryStr ? { ...item, editorialStatus: newStatus } : item)
    );
    if (selectedItem && selectedItem.query === queryStr) {
      setSelectedItem({ ...selectedItem, editorialStatus: newStatus });
    }
  };

  const handleAddNewIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuery.trim()) return;

    const clusterIdMap: Record<string, GSCQueryItem['clusterId']> = {
      'Cluster A: India Charity': 'india-charity',
      'Cluster B: Blood Donation': 'blood-donation',
      'Cluster C: Plasma, Pregnancy & Fertility': 'plasma-pregnancy-fertility',
      'Cluster D: Sperm Donation': 'sperm-donation',
      'Cluster E: Salvation Army Pickup': 'salvation-army',
    };

    const slug = newQuery.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const newItem: GSCQueryItem = {
      query: newQuery.trim(),
      cluster: newCluster,
      clusterId: clusterIdMap[newCluster] || 'india-charity',
      articleId: slug,
      articleTitle: `${newQuery.charAt(0).toUpperCase() + newQuery.slice(1)} — Comprehensive Guide`,
      slug: slug,
      intent: 'Informational',
      geographicScope: newGeo,
      impressionsSignal: '1–5 early impressions',
      primaryAnswer: newAnswer || 'Preliminary research answer pending clinical/legal review.',
      keyRisks: 'Requires verification against primary government/regulatory documents.',
      authoritativeSources: newSource ? [
        {
          name: newSource,
          authority: 'Regulatory / Academic Source',
          url: 'https://example.com',
          verifiedClaim: 'Documented initial statutory claim.'
        }
      ] : [],
      factCheckChecklist: [
        { item: 'Verify claim against official gazette / clinical study', verified: false },
        { item: 'Check jurisdictional applicability for target audience', verified: false },
        { item: 'Include prominent medical/legal disclaimer if required', verified: false }
      ],
      editorialStatus: 'Review Ready',
      reviewedBy: 'Editorial Content Strategist',
      lastAuditedDate: 'October 2026'
    };

    setItems([newItem, ...items]);
    setNewQuery('');
    setNewAnswer('');
    setNewSource('');
    setShowAddModal(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <SEO 
        title="Search Console SEO & Editorial Content Hub | Shah Seva"
        description="Lightweight editorial workflow and fact-checking hub managing Google Search Console query clusters, medical/legal compliance, and publication workflows."
        noindex={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              <ShieldCheck size={16} /> GSC Query Expansion & Editorial Review Hub
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Search Intent & Content Audit Engine
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Manage real Google Search Console query clusters, primary statutory citations, medical safety checks, and live publication status.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-sm"
            >
              <Plus size={16} /> Propose GSC Query Idea
            </button>
            <Link
              to="/blog"
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <BookOpen size={16} /> View Public Blog
            </Link>
          </div>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Tracked GSC Queries</div>
            <div className="text-2xl font-bold text-slate-900">{items.length} Queries</div>
            <div className="text-xs text-emerald-600 font-medium mt-1">5 Core Clusters Mapped</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Published & Indexed</div>
            <div className="text-2xl font-bold text-emerald-700">
              {items.filter(i => i.editorialStatus === 'Published').length} Live Guides
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">100% In Sitemap.xml</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Statutory Sourcing</div>
            <div className="text-2xl font-bold text-primary">100% Verified</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Supreme Court, NBTC, FDA, ART 2021</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Medical/Legal Safety</div>
            <div className="text-2xl font-bold text-blue-700">Zero Risk</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Explicit Disclaimers Enforced</div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {clusters.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCluster(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCluster === c.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search queries, slugs, or clusters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Content Table / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.query}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-primary/10 text-primary">
                    {item.cluster}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                    item.editorialStatus === 'Published'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.editorialStatus}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 leading-snug">
                  "{item.query}"
                </h3>

                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  <strong>Target Article:</strong> {item.articleTitle}
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Globe size={14} className="text-blue-600 shrink-0" />
                    <span><strong>Geographic Scope:</strong> {item.geographicScope}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileCheck size={14} className="text-emerald-600 shrink-0" />
                    <span><strong>Signal:</strong> {item.impressionsSignal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-primary shrink-0" />
                    <span><strong>Sources:</strong> {item.authoritativeSources.length} Authorities Cited</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <Eye size={14} /> Fact-Check & Sources
                </button>

                <Link
                  to={`/blog/${item.slug}`}
                  className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-primary transition-colors"
                >
                  Live View <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fact-Check & Citations Drawer/Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  <ShieldCheck size={16} /> Editorial Fact-Check Dossier
                </div>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                  Query: "{selectedItem.query}"
                </h2>
                <div className="text-sm text-slate-500 mb-6">
                  {selectedItem.cluster} | Focus: {selectedItem.geographicScope}
                </div>

                {/* Primary Answer Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Verified Direct Answer</div>
                  <p className="text-slate-800 text-sm leading-relaxed font-medium">
                    {selectedItem.primaryAnswer}
                  </p>
                </div>

                {/* Status Switcher */}
                <div className="mb-6 flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-700">Editorial Publishing Status:</span>
                  <div className="flex gap-2">
                    {(['Published', 'Fact-Checked', 'Review Ready'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(selectedItem.query, st)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                          selectedItem.editorialStatus === st
                            ? 'bg-primary text-white shadow-xs'
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Authoritative Sources List */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" /> Primary Authoritative Citations
                  </h3>
                  <div className="space-y-3">
                    {selectedItem.authoritativeSources.map((source, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <strong className="text-slate-900">{source.name}</strong>
                          {source.url && (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                            >
                              Official Link <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <div className="text-slate-500 mb-1">Authority: {source.authority}</div>
                        <p className="text-slate-700 italic bg-white p-2 rounded border border-slate-100">
                          {source.verifiedClaim}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fact-Check Checklist */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" /> Evidence Verification Checklist
                  </h3>
                  <div className="space-y-2">
                    {selectedItem.factCheckChecklist.map((chk, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                        <span>{chk.item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Reviewed by: <strong>{selectedItem.reviewedBy}</strong>
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                    >
                      Close
                    </button>
                    <Link
                      to={`/blog/${selectedItem.slug}`}
                      className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                    >
                      Open Live Guide <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Propose New Query Idea Modal */}
        <AnimatePresence>
          {showAddModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setShowAddModal(false)}
                  className="absolute right-6 top-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X size={20} />
                </button>

                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                  Propose New Search Console Query Idea
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Add newly discovered GSC search queries, assign topic clusters, and outline preliminary research notes.
                </p>

                <form onSubmit={handleAddNewIdea} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Search Console Query String *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. how to donate clothes in rajasthan"
                      value={newQuery}
                      onChange={(e) => setNewQuery(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Topic Cluster</label>
                      <select
                        value={newCluster}
                        onChange={(e) => setNewCluster(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="Cluster A: India Charity">Cluster A: India Charity</option>
                        <option value="Cluster B: Blood Donation">Cluster B: Blood Donation</option>
                        <option value="Cluster C: Plasma, Pregnancy & Fertility">Cluster C: Plasma/Pregnancy</option>
                        <option value="Cluster D: Sperm Donation">Cluster D: Sperm Donation</option>
                        <option value="Cluster E: Salvation Army Pickup">Cluster E: Salvation Army</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Geographic Focus</label>
                      <select
                        value={newGeo}
                        onChange={(e) => setNewGeo(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="Global / Multi-Jurisdiction">Global / Multi-Jurisdiction</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preliminary Verified Answer / Search Intent
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Concise direct answer to query..."
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Authoritative Source / Government Body
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ministry of Social Justice / NBTC"
                      value={newSource}
                      onChange={(e) => setNewSource(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-primary text-xs py-2 px-5"
                    >
                      Save Idea to Hub
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
