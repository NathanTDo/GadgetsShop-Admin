// Check if user is authenticated and if user is admin
// If not, redirect to /auth

import { createClient } from '@/supabase/server';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { ADMIN } from '@/constants/constants';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
      return redirect('/admin');
    }
  }

  return <>{children}</>;
}
