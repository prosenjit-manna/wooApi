export interface Refund {
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  amount?: string;
  reason?: string;
  refunded_by?: number;
  refunded_payment?: boolean;
  meta_data?: Array<RefundMetadata>;
  line_items?: Array<RefundLineItems>;
  api_refund?: boolean;
}

export interface RefundMetadata {
  id?: number;
  key?: string;
  value?: string;
}

export interface RefundLineItems {
  id?: number;
  name?: string;
  product_id?: number;
  variation_id?: number;
  quantity?: number;
  tax_class?: number;
  subtotal?: string;
  subtotal_tax?: string;
  total?: string;
  total_tax?: string;
  taxes?: Array<any>;
  meta_data?: Array<any>;
  sku?: string;
  price?: string;
}
