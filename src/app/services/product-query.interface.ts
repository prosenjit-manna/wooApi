export enum ProductOrder {
  'desc' = 'desc',
  'asc' = 'asc'
}
export enum ProductOrderBy {
  'date'= 'date',
  'id'= 'id',
  'include'= 'include',
  'title'= 'title',
  'slug'= 'slug'
}

export interface ProductQuery {
  context?: string;
  page?: number;
  per_page?: number;
  search?: string;
  after?: string;
  before?: string;
  exclude?: Array<any>;
  include?: Array<any>;
  offset?: number;
  order?: ProductOrder;
  orderby?: ProductOrderBy;
  parent?: Array<string>;
  parent_exclude?: Array<string>;
  slug?: string;
  status?: string;
  type?: string;
  sku?: string;
  featured?: boolean;
  category?: string;
  tag?: string;
  shipping_class?: string;
  attribute?: string;
  attribute_term?: string;
  tax_class?: string;
  in_stock?: boolean;
  on_sale?: boolean;
  min_price?: string;
  max_price?: string;
};