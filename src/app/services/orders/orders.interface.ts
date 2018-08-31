export interface Order {
    id?: string;
    parent_id?: number;
    number?: string;
    order_key?: string;
    created_via?: string;
    version?: number;
    status?: string;
    currency?: string;
    date_created?: Date;
    date_created_gmt?: Date;
    date_modified?: Date;
    date_modified_gmt?: Date;
    discount_total?: string;
    discount_tax?: string;
    shipping_total?: string;
    shipping_tax?: string;
    cart_tax?: string;
    total?: string;
    total_tax?: string;
    prices_include_tax?: boolean;
    customer_id?: number;
    customer_ip_address?: string;
    customer_user_agent?: string;
    customer_note?: string;
    billing?: Billing;
    shipping?: Shipping;
    payment_method?: string;
    payment_method_title?: string;
    transaction_id?: string;
    date_paid?: Date;
    date_paid_gmt?: Date;
    date_completed?: Date;
    date_completed_gmt?: Date;
    cart_hash?: string;
    meta_data?: Array<any>;
    line_items?: Array<any>;
    tax_lines?: Array<any>;
    shipping_lines?: Array<any>;
    fee_lines?: Array<any>;
    coupon_lines?: Array<any>;
    refunds?: Array<any>;
    set_paid?: boolean;
}

export interface Billing {
    last_name?: string;
    company?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
    email?: string;
    phone?: string;
}

export interface Shipping {
    last_name?: string;
    company?: string;
    address_1?: string;
    address_2?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
}

export interface OrderItem {
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: number;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: Array<any>;
    meta_data: Array<any>;
    sku: string;
    price: string;
}

export interface OrderTax {
    rate_code: string;
    rate_id: string;
    label: string;
    compound: boolean;
    tax_total: string;
    shipping_tax_total: string;
    meta_data: Array<any>;
}
