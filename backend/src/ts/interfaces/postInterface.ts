export interface PostInterface {
  post_id: number;
  post_header: string;
  post_body: string;
  image_url: string | null;
  user_id: number;
  likes: number;
  special_likes: number;
  saves: number;
  first_name: string;
  last_name: string;
  created_at: Date;
  upadted_at: Date | null;
}
