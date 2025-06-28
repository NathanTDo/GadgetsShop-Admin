import { createClient } from '@/supabase/server';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { ADMIN } from '@/constants/constants';
import { RenderMounted } from '@/components/render-mounter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default async function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  // TODO: Check if user is authenticated and if user is admin

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from('users')
      .select('type')
      .eq('id', user.id)
      .single();

    if (error || !data) {
      console.log('Error fetching user data', error);
      return;
    }

    if (data.type === ADMIN) {
      return redirect('/');
    }
  }

  return (
    <RenderMounted>
      <Header />
      <main className="min-h-[calc(100svh-128px])]">{children}</main>
      <Footer />
    </RenderMounted>
  );
}
