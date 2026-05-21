'use client';

import { useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import { Plus, Trash2 } from 'lucide-react';

type Hero = { tagline: string; headline1: string; headline2: string; headline3: string; description: string; cta_primary: string; cta_secondary: string; stat1_value: string; stat1_label: string; stat2_value: string; stat2_label: string; stat3_value: string; stat3_label: string };
type Stat = { id: number; value: string; label: string; sort_order: number };

export default function HeroAdmin() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [stats, setStats] = useState<Stat[]>([]);
  const [saving, setSaving] = useState(false);
  const [savingStats, setSavingStats] = useState(false);
  const [saved, setSaved] = useState('');

  async function load() {
    const [h, s] = await Promise.all([fetch('/api/admin/hero').then(r => r.json()), fetch('/api/admin/stats').then(r => r.json())]);
    setHero(h); setStats(s);
  }
  useEffect(() => { load(); }, []);

  async function saveHero() {
    setSaving(true);
    await fetch('/api/admin/hero', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(hero) });
    setSaving(false); setSaved('hero'); setTimeout(() => setSaved(''), 2000);
  }

  async function saveStat(s: Stat) {
    setSavingStats(true);
    await fetch(`/api/admin/stats/${s.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: s.value, label: s.label, sort_order: s.sort_order }) });
    setSavingStats(false); setSaved('stats'); setTimeout(() => setSaved(''), 2000);
  }

  async function addStat() {
    const res = await fetch('/api/admin/stats', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: '0', label: 'New Stat', sort_order: stats.length + 1 }) });
    const newStat = await res.json(); setStats(p => [...p, newStat]);
  }

  async function delStat(id: number) { if (!confirm('Delete stat?')) return; await fetch(`/api/admin/stats/${id}`, { method: 'DELETE' }); setStats(p => p.filter(s => s.id !== id)); }

  if (!hero) return <AdminShell><div className="flex items-center justify-center h-64 text-gray-400 text-sm">Loading...</div></AdminShell>;

  const F = (k: keyof Hero, label: string) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type="text" value={hero[k]} onChange={e => setHero(p => p ? { ...p, [k]: e.target.value } : p)}
        className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );

  return (
    <AdminShell>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Hero text */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-900 mb-5">Hero Section</h2>
          {F('tagline', 'Tagline')}
          <div className="grid grid-cols-3 gap-3">
            {F('headline1', 'Headline Line 1')} {F('headline2', 'Headline Line 2')} {F('headline3', 'Headline Line 3')}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea rows={3} value={hero.description} onChange={e => setHero(p => p ? { ...p, description: e.target.value } : p)}
              className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {F('cta_primary', 'Primary CTA Button')} {F('cta_secondary', 'Secondary CTA Button')}
          </div>
          <h3 className="text-sm font-semibold text-gray-700 mt-4 mb-3">Hero Stats (shown inside hero)</h3>
          <div className="grid grid-cols-3 gap-3">
            {F('stat1_value', 'Stat 1 Value')} {F('stat2_value', 'Stat 2 Value')} {F('stat3_value', 'Stat 3 Value')}
            {F('stat1_label', 'Stat 1 Label')} {F('stat2_label', 'Stat 2 Label')} {F('stat3_label', 'Stat 3 Label')}
          </div>
          <button onClick={saveHero} disabled={saving} className="mt-4 px-6 py-2.5 rounded-xl text-white text-sm font-medium disabled:opacity-60" style={{ backgroundColor: '#4285F4' }}>
            {saving ? 'Saving...' : saved === 'hero' ? 'Saved!' : 'Save Hero'}
          </button>
        </div>

        {/* Company stats */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-gray-900">Company Stats (Stats Section)</h2>
            <button onClick={addStat} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: '#4285F4' }}><Plus className="h-3.5 w-3.5" /> Add</button>
          </div>
          <div className="space-y-3">
            {stats.map(s => (
              <div key={s.id} className="flex gap-3 items-center">
                <input value={s.value} onChange={e => setStats(p => p.map(x => x.id === s.id ? { ...x, value: e.target.value } : x))} placeholder="Value" className="w-24 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input value={s.label} onChange={e => setStats(p => p.map(x => x.id === s.id ? { ...x, label: e.target.value } : x))} placeholder="Label" className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={() => saveStat(s)} className="px-3 py-2 rounded-xl text-white text-xs font-medium" style={{ backgroundColor: '#34A853' }}>Save</button>
                <button onClick={() => delStat(s.id)} className="p-2 text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
          </div>
          {saved === 'stats' && <p className="text-xs text-green-600 mt-3">Saved!</p>}
        </div>
      </div>
    </AdminShell>
  );
}
