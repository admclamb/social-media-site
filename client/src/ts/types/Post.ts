export type Post = {
  post_id: number;
  title: string;
  post_header: string;
  post_body: string;
  image_url: string;
  tags: string[];
  author_id: number;
  likes: number;
  special_likes: number;
  saves: number;
  created_at: Date;
  updated_at: Date;
};
