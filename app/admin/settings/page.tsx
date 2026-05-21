'use client';

import { useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';

type Settings = Record<string, string>;

const FIELDS: { key: string; label: string; section: string }[] = [
  { key: 'phone',           label: 'Phone Number',        section: 'Contact' },
  { key: 'email',           label: 'Email Address',       section: 'Contact' },
  { key: 'address_line1',   label: 'Address Line 1',      section: 'Contact' },
  { key: 'address_line2',   label: 'Address Line 2',      section: 'Contact' },
  { key: 'hours_weekday',   label: 'Weekday Hours',        section: 'Contact' },
  { key: 'hours_weekend',   label: 'Weekend Hours',        section: 'Contact' },
  { key: 'social_linkedin', label: 'LinkedIn URL',         section: 'Social' },
  { key: 'social_facebook', label: 'Facebook URL',         section: 'Social' },
  { key: 'social_instagram',label: 'Instagram URL',        section: 'Social' },
  { key: 'social_twitter',  label: 'Twitter / X URL',      section: 'Social' },
];

export default function SettingsAdmin() {
  const [settings, setSettings] = useState<Settings>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => { fetch('/api/admin/settings').then(r => r.json()).then(setSettings); }, []);

  async function save() {
    setSaving(true);
    await fetch('/api/admin/settings', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(settings) });
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2500);
  }

  const sections = Array.from(new Set(FIELDS.map(f => f.section)));

  return (
    <AdminShell>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Site Settings</h1>
        <div className="space-y-6">
          {sections.map(section => (
            <div key={section} className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-semibold text-gray-900 mb-5">{section} Information</h2>
              {FIELDS.filter(f => f.section === section).map(({ key, label }) => (
                <div key={key} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                    type="text"
                    value={settings[key] || ''}
                    onChange={e => setSettings(p => ({ ...p, [key]: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={save} disabled={saving} className="px-8 py-3 rounded-xl text-white text-sm font-medium disabled:opacity-60" style={{ backgroundColor: '#4285F4' }}>
            {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
          </button>
          {saved && <span className="text-sm text-green-600">Settings saved successfully.</span>}
        </div>
      </div>
    </AdminShell>
  );
}
