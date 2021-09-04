export interface OrderNote { 
  id?: number;
  date_created?: Date;
  date_created_gmt?: Date;
  note?: string;
  customer_note?: boolean;
}

export interface OrderNoteRes extends OrderNote {
    _links?: any;
}