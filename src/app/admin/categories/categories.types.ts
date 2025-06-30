export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: string;
  price: number;
  maxQuantity: number;
  heroImage: string;
  category: number;
};

export type CategoryWithProducts = {
  created_at: string;
  id: string;
  imageUrl: string;
  products: Product[];
  name: string;
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
