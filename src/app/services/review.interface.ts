export interface ProductReview {
  id: number;
  review: string;
  date_created: Date;
  date_created_gmt: Date;
  rating: number;
  name: string;
  email: string;
  verified: boolean;
}