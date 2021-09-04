export interface Product {
  id?:                    number;
  name?:                  string;
  slug?:                  string;
  permalink?:             string;
  date_created?:          Date;
  date_created_gmt?:      Date;
  date_modified?:         Date;
  date_modified_gmt?:     Date;
  type?:                  string;
  status?:                string;
  featured?:              boolean;
  catalog_visibility?:    string;
  description?:           string;
  short_description?:     string;
  sku?:                   string;
  price?:                 string;
  regular_price?:         string;
  sale_price?:            string;
  date_on_sale_from?:     null;
  date_on_sale_from_gmt?: null;
  date_on_sale_to?:       null;
  date_on_sale_to_gmt?:   null;
  on_sale?:               boolean;
  purchasable?:           boolean;
  total_sales?:           number;
  virtual?:               boolean;
  downloadable?:          boolean;
  downloads?:             any[];
  download_limit?:        number;
  download_expiry?:       number;
  external_url?:          string;
  button_text?:           string;
  tax_status?:            string;
  tax_class?:             string;
  manage_stock?:          boolean;
  stock_quantity?:        null;
  in_stock?:              boolean;
  backorders?:            string;
  backorders_allowed?:    boolean;
  backordered?:           boolean;
  sold_individually?:     boolean;
  weight?:                string;
  dimensions?:            Dimensions;
  shipping_required?:     boolean;
  shipping_taxable?:      boolean;
  shipping_class?:        string;
  shipping_class_id?:     number;
  reviews_allowed?:       boolean;
  average_rating?:        string;
  rating_count?:          number;
  upsell_ids?:            any[];
  cross_sell_ids?:        any[];
  parent_id?:             number;
  purchase_note?:         string;
  categories?:            Category[];
  tags?:                  any[];
  images?:                Image[];
  attributes?:            any[];
  default_attributes?:    any[];
  variations?:            any[];
  grouped_products?:      number[];
  menu_order?:            number;
  price_html?:            string;
  related_ids?:           any[];
  meta_data?:             MetaDatum[];
  _links?:                Links;
}

export interface Links {
  self?:       Link[];
  collection?: Link[];
}

export interface Link {
  href?: string;
}

export interface Category {
  id?:   number;
  name?: string;
  slug?: string;
}

export interface Dimensions {
  length?: string;
  width?:  string;
  height?: string;
}

export interface Image {
  id?:                number;
  date_created?:      Date;
  date_created_gmt?:  Date;
  date_modified?:     Date;
  date_modified_gmt?: Date;
  src?:               string;
  name?:              string;
  alt?:               string;
  position?:          number;
}

export interface MetaDatum {
  id?:    number;
  key?:   string;
  value?: string;
}

export interface Review {
  id?:                   number;
  date_created?:         Date;
  date_created_gmt?:     Date;
  product_id?:           number;
  status?:               string;
  reviewer?:             string;
  reviewer_email?:       string;
  review?:               string;
  rating?:               number;
  verified?:             boolean;
  reviewer_avatar_urls?: { [key: string]: string };
  _links?:               Links;
}

export interface Links {
  self?:       Link[];
  collection?: Link[];
  up?:         Link[];
}

export interface Link {
  href?: string;
}
