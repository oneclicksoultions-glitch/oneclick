'use client';

import { useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import AdminModal from '@/components/admin/AdminModal';
import { Eye } from 'lucide-react';

type T = { id: string; first_name: string; last_name: string; email: string; phone: string; service: string; budget: string; message: string; created_at: string };

const SERVICE_LABELS: Record<string, string> = {
  seo: 'SEO', 'google-ads': 'Google Ads', 'social-media': 'Social Media',
  'web-design': 'Web Design', 'content-marketing': 'Content Marketing',
  'email-marketing': 'Email Marketing', analytics: 'Analytics', 'app-marketing': 'App Marketing', other: 'Other',
};
const BUDGET_LABELS: Record<string, string> = {
  'under-2k': 'Under $2k', '2k-5k': '$2k-$5k', '5k-10k': '$5k-$10k', '10k-25k': '$10k-$25k', '25k-plus': '$25k+',
};

export default function EnquiriesAdmin() {
  const [items, setItems] = useState<T[]>([]);
  const [selected, setSelected] = useState<T | null>(null);

  async function load() { const res = await fetch('/api/admin/enquiries'); const data = await res.json(); setItems(Array.isArray(data) ? data : []); }
  useEffect(() => { load(); }, []);

  return (
    <AdminShell>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enquiries <span className="text-base font-normal text-gray-400 ml-2">{items.length} total</span></h1>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">Name</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 hidden md:table-cell">Email</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 hidden lg:table-cell">Service</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 hidden lg:table-cell">Budget</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">Date</th>
              <th className="px-5 py-3 text-right text-xs font-medium text-gray-500">View</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-50">
              {items.map(t => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{t.first_name} {t.last_name}</td>
                  <td className="px-5 py-3 text-gray-500 hidden md:table-cell">{t.email}</td>
                  <td className="px-5 py-3 text-gray-500 hidden lg:table-cell">{SERVICE_LABELS[t.service] || t.service || '—'}</td>
                  <td className="px-5 py-3 text-gray-500 hidden lg:table-cell">{BUDGET_LABELS[t.budget] || t.budget || '—'}</td>
                  <td className="px-5 py-3 text-gray-400">{new Date(t.created_at).toLocaleDateString('en-AU')}</td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={() => setSelected(t)} className="p-1.5 text-gray-400 hover:text-blue-600"><Eye className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && <tr><td colSpan={6} className="px-5 py-10 text-center text-sm text-gray-400">No enquiries yet.</td></tr>}
            </tbody>
          </table>
        </div>

        {selected && (
          <AdminModal title="Enquiry Details" onClose={() => setSelected(null)}>
            <div className="space-y-3 text-sm">
              {[
                ['Name', `${selected.first_name} ${selected.last_name}`],
                ['Email', selected.email],
                ['Phone', selected.phone || '—'],
                ['Service', SERVICE_LABELS[selected.service] || selected.service || '—'],
                ['Budget', BUDGET_LABELS[selected.budget] || selected.budget || '—'],
                ['Date', new Date(selected.created_at).toLocaleString('en-AU')],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-3">
                  <span className="w-20 shrink-0 text-gray-400">{label}</span>
                  <span className="font-medium text-gray-900">{val}</span>
                </div>
              ))}
              {selected.message && (
                <div className="pt-2">
                  <p className="text-gray-400 mb-1">Message</p>
                  <p className="bg-gray-50 rounded-xl p-4 text-gray-700 leading-relaxed">{selected.message}</p>
                </div>
              )}
              <div className="pt-3">
                <a href={`mailto:${selected.email}`} className="block text-center py-2.5 rounded-xl text-white text-sm font-medium" style={{ backgroundColor: '#4285F4' }}>
                  Reply via Email
                </a>
              </div>
            </div>
          </AdminModal>
        )}
      </div>
    </AdminShell>
  );
}
