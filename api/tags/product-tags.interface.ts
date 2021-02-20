export interface ProductTag {
  id?: number;
  name?: string;
  slug?: string;
  description?: string;
  count?: number;
}

export enum TagOrder {
  'desc' = 'desc',
  'asc' = 'asc'
}
export enum TagOrderBy {
  'id'= 'id',
  'include'= 'include',
  'name'= 'name',
  'slug'= 'slug',
  'term_group' = 'term_group',
  'description' = 'description',
  'count' = 'count'
}

export interface TagQuery {
  context?: string;
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: Array<any>;
  include?: Array<any>;
  offset: number;
  order?: TagOrder;
  orderby?: TagOrderBy;
  hide_empty: boolean;
  product: number;
  slug: string;
}
