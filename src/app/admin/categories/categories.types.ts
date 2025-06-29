export type Product = {
  category: number;
  created_at: string;
  hero_image: string;
  id: string;
  image_url: string;
  max_quantity: number;
  price: number;
  title: string;
  slug: string;
};

export type CategoryWithProducts = {
  created_at: string;
  id: string;
  image_url: string;
  products: Product[];
  name: string;
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
