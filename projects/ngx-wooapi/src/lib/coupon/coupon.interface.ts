export interface Coupon {
  id?: number,
  code?: string,
  amount?: string,
  date_created?: Date,
  date_created_gmt?: Date,
  date_modified?: Date,
  date_modified_gmt?: Date,
  discount_type?: string,
  description?: string,
  date_expires?: string,
  date_expires_gmt?: string,
  usage_count?: number,
  individual_use?: boolean,
  product_ids?: Array<any>,
  excluded_product_ids?: Array<any>,
  usage_limit?: number,
  usage_limit_per_user?: number,
  limit_usage_to_x_items?: number,
  free_shipping?: boolean,
  product_categories?: Array<any>,
  excluded_product_categories?: Array<any>,
  exclude_sale_items?: boolean,
  minimum_amount?: string,
  maximum_amount?: string,
  email_restrictions?: Array<any>,
  used_by?: Array<any>,
  meta_data?: Array<CouponMeta>
}

export interface CouponMeta { 
  id?: number,
  key?: string,
  value?: string
}