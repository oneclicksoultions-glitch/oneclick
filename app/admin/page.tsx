import { supabaseAdmin } from '@/lib/supabase';
import AdminShell from '@/components/admin/AdminShell';
import { MessageSquare, Users, FileText, Briefcase, Star, FolderOpen } from 'lucide-react';
import Link from 'next/link';

async function getCounts() {
  const [enquiries, team, blog, jobs, testimonials, portfolio] = await Promise.all([
    supabaseAdmin.from('contact_submissions').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('team_members').select('id', { count: 'exact', head: true }).eq('active', true),
    supabaseAdmin.from('blog_posts').select('id', { count: 'exact', head: true }).eq('published', true),
    supabaseAdmin.from('job_listings').select('id', { count: 'exact', head: true }).eq('active', true),
    supabaseAdmin.from('testimonials').select('id', { count: 'exact', head: true }).eq('active', true),
    supabaseAdmin.from('portfolio_items').select('id', { count: 'exact', head: true }).eq('active', true),
  ]);
  return {
    enquiries: enquiries.count ?? 0,
    team: team.count ?? 0,
    blog: blog.count ?? 0,
    jobs: jobs.count ?? 0,
    testimonials: testimonials.count ?? 0,
    portfolio: portfolio.count ?? 0,
  };
}

async function getRecentEnquiries() {
  const { data } = await supabaseAdmin
    .from('contact_submissions')
    .select('id, first_name, last_name, email, service, created_at')
    .order('created_at', { ascending: false })
    .limit(5);
  return data ?? [];
}

export default async function AdminDashboard() {
  const [counts, enquiries] = await Promise.all([getCounts(), getRecentEnquiries()]);

  const cards = [
    { label: 'Enquiries',    value: counts.enquiries,    href: '/admin/enquiries',   icon: MessageSquare, color: '#4285F4' },
    { label: 'Team Members', value: counts.team,         href: '/admin/team',        icon: Users,         color: '#34A853' },
    { label: 'Blog Posts',   value: counts.blog,         href: '/admin/blog',        icon: FileText,      color: '#EA4335' },
    { label: 'Jobs',         value: counts.jobs,         href: '/admin/careers',     icon: Briefcase,     color: '#FBBC04' },
    { label: 'Testimonials', value: counts.testimonials, href: '/admin/testimonials',icon: Star,          color: '#4285F4' },
    { label: 'Case Studies', value: counts.portfolio,    href: '/admin/portfolio',   icon: FolderOpen,    color: '#34A853' },
  ];

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {cards.map(({ label, value, href, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: color + '18' }}>
                <Icon className="h-5 w-5" style={{ color }} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent enquiries */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm text-blue-600 hover:underline">View all</Link>
          </div>
          {enquiries.length === 0 ? (
            <p className="px-6 py-8 text-sm text-gray-400 text-center">No enquiries yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 hidden md:table-cell">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 hidden lg:table-cell">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {enquiries.map((e: any) => (
                  <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-medium text-gray-900">{e.first_name} {e.last_name}</td>
                    <td className="px-6 py-3 text-gray-500 hidden md:table-cell">{e.email}</td>
                    <td className="px-6 py-3 text-gray-500 hidden lg:table-cell capitalize">{e.service?.replace(/-/g,' ') || '—'}</td>
                    <td className="px-6 py-3 text-gray-400">{new Date(e.created_at).toLocaleDateString('en-AU')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
