export interface Customer {
  id: number;
  date_created: Date;
  date_created_gmt: Date;
  date_modified: Date;
  date_modified_gmt: Date;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  password: string;
  billing: string;
  shipping: string;
  is_paying_customer: boolean;
  orders_count: number;
  total_spent: string;
  avatar_url: string;
  meta_data: Array<any>;
}
