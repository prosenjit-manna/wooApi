// https://woocommerce.github.io/woocommerce-rest-api-docs/#product-variation-properties

export interface ProductVariation {
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  date_modified?: Date;
  date_modified_gmt?: Date;
  description?: string;
  permalink?: string;
  sku?: string;
  price?: string;
  regular_price?: string;
  sale_price?: string;
  date_on_sale_from?: Date;
  date_on_sale_from_gmt?: Date;
  date_on_sale_to?: Date;
  date_on_sale_to_gmt?: Date;
  on_sale?: boolean;
  status?: string;
  purchasable?: boolean;
  virtual?: boolean;
  downloadable?: boolean;
  downloads?: Array<ProductVariationDownlods>;
  download_limit?: number;
  download_expiry?: number;
  tax_status?: string;
  tax_class?: string;
  manage_stock?: boolean;
  stock_quantity?: number;
  stock_status?: string;
  backorders?: string;
  backorders_allowed?: boolean;
  backordered?: boolean;
  weight?: string;
  dimensions?: ProductVariationDimensions;
  shipping_class?: string;
  shipping_class_id?: string;
  image?: ProductVariationImage;
  attributes?: Array<ProductVariationAttributes>;
  menu_order?: number;
  meta_data?: Array<ProductVariationMetaData>;
}

export interface ProductVariationDownlods {
  id?: string;
  name?: string;
  file?: string;
}

export interface ProductVariationDimensions {
  length?: string;
  width?: string;
  height?: string;
}

export interface ProductVariationImage {
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  date_modified?: Date;
  date_modified_gmt?: Date;
  src?: string;
  name?: string;
  alt?: string;
}

export interface ProductVariationAttributes {
  id?: number;
  name?: string;
  option?: string;
}

export interface ProductVariationMetaData {
  id?: number;
  key?: string;
  value?: string;
}
