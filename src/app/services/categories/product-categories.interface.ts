export interface ProductCategory {
  id?: number;
  name?: string;
  slug?: string;
  parent?: number;
  description?: string;
  display?: string;
  image?: ProductCategoryImage;
  menu_order?: number;
  count?: number;
}

export interface ProductCategoryImage {
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  date_modified?: Date;
  date_modified_gmt?: Date;
  src?: string;
  title?: string;
  alt?: string;
}

export enum CategoryOrder {
  'desc' = 'desc',
  'asc' = 'asc'
}
export enum CategoryOrderBy {
  'id'= 'id',
  'include'= 'include',
  'name'= 'name',
  'slug'= 'slug',
  'term_group' = 'term_group',
  'description' = 'description',
  'count' = 'count'
}

export interface CategoryQuery {
  context?: string;
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: Array<any>;
  include?: Array<any>;
  order?: CategoryOrder;
  orderby?: CategoryOrderBy;
  hide_empty: boolean;
  parent: number;
  product: number;
  slug: string;
}
