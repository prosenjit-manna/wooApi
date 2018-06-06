export interface Product {
  id?: number;
  title?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  type?: string;
  status?: string;
  downloadable?: boolean;
  virtual?: boolean;
  permalink?: string;
  sku?: string;
  price?: string;
  regular_price?: string;
  sale_price?: string;
  sale_price_dates_from?: string;
  sale_price_dates_to?: string;
  price_html?: string;
  taxable?: boolean;
  tax_status?: string;
  tax_class?: string;
  managing_stock?: boolean;
  stock_quantity?: number;
  in_stock?: boolean;
  backorders_allowed?: boolean;
  backordered?: boolean;
  backorders?: any;
  sold_individually?: boolean;
  purchaseable?: boolean;
  featured?: boolean;
  visible?: boolean;
  catalog_visibility?: boolean;
  on_sale?: boolean;
  weight?: string;
  dimensions?: Array<any>;
  shipping_required?: boolean;
  shipping_taxable?: boolean;
  shipping_class?: string;
  shipping_class_id?: number;
  description?: string;
  enable_html_description?: string;
  short_description?: string;
  enable_html_short_description?: string;
  reviews_allowed?: boolean;
  average_rating?: string;
  rating_count?: number;
  related_ids?: Array<number>;
  upsell_ids?: Array<number>;
  cross_sell_ids?: Array<any>;
  parent_id?: number;
  categories?: Array<any>;
  tags?: Array<string>;
  images?: Array<any>;
  featured_src?: string;
  attributes?: Array<any>;
  default_attributes?: Array<any>;
  downloads?: Array<any>;
  download_limit?: number;
  download_expiry?: number;
  download_type?: string;
  purchase_note?: string;
  total_sales?: number;
  variations?: Array<any>;
  parent?: Array<any>;
  product_url?: string;
  button_text?: string;
  menu_order?: number;
}

export interface RetriveProductResponse {
  product?: Product;
}

export interface RetriveProductsResponse {
  products?: Product[];
  headers?: Array<any>;
}


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
}

export interface ProductReview {
  id?: number;
  review?: string;
  date_created?: Date;
  date_created_gmt?: Date;
  rating?: number;
  name?: string;
  email?: string;
  verified?: boolean;
}

export interface ProductReviewsResponse {
  product_reviews?: ProductReview[]
}
