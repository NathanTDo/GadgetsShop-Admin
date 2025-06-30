'use server';

import { createClient } from '@/supabase/server';
import { CategoriesWithProductsResponse } from '@/app/admin/categories/categories.types';

const supabase = await createClient();

export const getCategoriesWithProducts =
  async (): Promise<CategoriesWithProductsResponse> => {
    const { data, error } = await supabase
      .from('category')
      .select('*, products:product(*)')
      .returns<CategoriesWithProductsResponse>();

    if (error) {
      throw new Error('Could not fetch categories with products.');
    }
    return data || [];
  };
