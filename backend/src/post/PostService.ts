export class PostService {
  private static manager;
  public static list(): Promise<any> {
    return PostService.manager("posts").select("*");
  }

  public static listWithAuthor(): Promise<any> {
    return PostService.manager("posts").select("*");
  }

  public static read(_id: string): Promise<any> {
    return PostService.manager("posts").select("*").where({ _id }).first();
  }

  public static create(post: any): Promise<any> {
    return PostService.manager("posts")
      .insert(post)
      .returning("*")
      .then((posts) => posts[0]);
  }

  public static update(_id: integer, updatedPost: any): Promise<any> {
    return PostService.manager("posts")
      .select("*")
      .where({ _id })
      .update(updatedPost, "*");
  }

  public static destroy(_id: string): Promise<any> {
    return PostService.manager("posts").where({ _id }).del();
  }
}
