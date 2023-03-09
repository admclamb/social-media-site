export type Post = {
  _id: number;
  title: string;
  slug: string;
  body: string;
  header_image_url: string | null;
  tags: string[];
  author_id: number;
  likes: number;
  special_likes: number;
  saves: number;
  created_at: Date;
  updated_at: Date;
};
