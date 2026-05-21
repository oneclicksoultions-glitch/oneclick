'use client';

import { useEffect, useState } from 'react';
import AdminShell from '@/components/admin/AdminShell';
import AdminModal from '@/components/admin/AdminModal';
import { Plus, Pencil, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

type T = { id: number; title: string; excerpt: string; category: string; author: string; read_time: string; color: string; image_url: string; slug: string; published: boolean };
const EMPTY: Omit<T, 'id'> = { title: '', excerpt: '', category: '', author: '', read_time: '5 min read', color: '#4285F4', image_url: '', slug: '', published: true };

export default function BlogAdmin() {
  const [items, setItems] = useState<T[]>([]);
  const [modal, setModal] = useState<null | 'add' | T>(null);
  const [form, setForm] = useState<Omit<T, 'id'>>(EMPTY);
  const [saving, setSaving] = useState(false);

  async function load() { const res = await fetch('/api/admin/blog'); const data = await res.json(); setItems(Array.isArray(data) ? data : []); }
  useEffect(() => { load(); }, []);

  function openAdd() { setForm(EMPTY); setModal('add'); }
  function openEdit(t: T) { setForm({ title: t.title, excerpt: t.excerpt, category: t.category, author: t.author, read_time: t.read_time, color: t.color, image_url: t.image_url || '', slug: t.slug, published: t.published }); setModal(t); }

  async function save() {
    setSaving(true);
    if (modal === 'add') await fetch('/api/admin/blog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    else if (modal && typeof modal === 'object') await fetch(`/api/admin/blog/${modal.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    await load(); setModal(null); setSaving(false);
  }

  async function del(id: number) { if (!confirm('Delete post?')) return; await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' }); await load(); }
  async function toggle(t: T) { await fetch(`/api/admin/blog/${t.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ published: !t.published }) }); await load(); }

  const F = (k: keyof typeof form, label: string, rows?: number) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {rows ? <textarea rows={rows} value={form[k] as string} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        : <input type="text" value={form[k] as string} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))} className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />}
    </div>
  );

  return (
    <AdminShell>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium" style={{ backgroundColor: '#4285F4' }}>
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">Title</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 hidden md:table-cell">Category</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 hidden lg:table-cell">Author</th>
              <th className="px-5 py-3 text-left text-xs font-medium text-gray-500">Published</th>
              <th className="px-5 py-3 text-right text-xs font-medium text-gray-500">Actions</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-50">
              {items.map(t => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900 max-w-xs truncate">{t.title}</td>
                  <td className="px-5 py-3 text-gray-500 hidden md:table-cell">{t.category}</td>
                  <td className="px-5 py-3 text-gray-500 hidden lg:table-cell">{t.author}</td>
                  <td className="px-5 py-3"><button onClick={() => toggle(t)} className={t.published ? 'text-green-500' : 'text-gray-300'}>{t.published ? <ToggleRight className="h-5 w-5" /> : <ToggleLeft className="h-5 w-5" />}</button></td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={() => openEdit(t)} className="p-1.5 text-gray-400 hover:text-blue-600 mr-1"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => del(t.id)} className="p-1.5 text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modal && (
          <AdminModal title={modal === 'add' ? 'Add Blog Post' : 'Edit Blog Post'} onClose={() => setModal(null)}>
            {F('title', 'Title')} {F('excerpt', 'Excerpt', 3)} {F('category', 'Category')} {F('author', 'Author')} {F('read_time', 'Read Time')} {F('slug', 'URL Slug (e.g. my-post-title)')} {F('image_url', 'Image URL (optional)')}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <input type="color" value={form.color} onChange={e => setForm(p => ({ ...p, color: e.target.value }))} className="h-10 w-full rounded-xl border border-gray-200 cursor-pointer" />
            </div>
            <div className="mb-4 flex items-center gap-2">
              <input type="checkbox" id="pub" checked={form.published} onChange={e => setForm(p => ({ ...p, published: e.target.checked }))} className="rounded" />
              <label htmlFor="pub" className="text-sm text-gray-700">Published</label>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setModal(null)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm">Cancel</button>
              <button onClick={save} disabled={saving} className="flex-1 py-2.5 rounded-xl text-white text-sm font-medium disabled:opacity-60" style={{ backgroundColor: '#4285F4' }}>{saving ? 'Saving...' : 'Save'}</button>
            </div>
          </AdminModal>
        )}
      </div>
    </AdminShell>
  );
}
