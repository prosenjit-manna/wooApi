export interface OrderNote { 
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  note?: string;
  customer_note?: boolean;
}

export interface OrderNoteRes {
    id?: number;
    date_created?: Date;
    date_created_gmt?: Date;
    note?: string;
    customer_note?: boolean;
    _links?: any;
}