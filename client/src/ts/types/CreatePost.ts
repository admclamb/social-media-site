export type CreatePost = {
  title: string;
  body: string;
  author_id: number;
  header_image_url?: string;
  tags?: string[];
};
