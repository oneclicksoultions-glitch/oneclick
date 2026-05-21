import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getAdminSession } from '@/lib/admin-auth';

async function auth() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return null;
}

export async function GET() {
  const denied = await auth(); if (denied) return denied;
  const { data } = await supabaseAdmin.from('site_settings').select('*');
  const settings: Record<string, string> = {};
  (data ?? []).forEach((row: { key: string; value: string }) => {
    settings[row.key] = row.value;
  });
  return NextResponse.json(settings);
}

export async function PUT(req: NextRequest) {
  const denied = await auth(); if (denied) return denied;
  const body: Record<string, string> = await req.json();
  const upserts = Object.entries(body).map(([key, value]) => ({ key, value }));
  const { error } = await supabaseAdmin.from('site_settings').upsert(upserts, { onConflict: 'key' });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
