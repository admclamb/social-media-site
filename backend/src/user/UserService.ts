export class UserService {
  private static manager;

  public static list(): Promise<any> {
    return UserService.manager("users").select("*");
  }

  public static read(_id: string): Promise<any> {
    return UserService.manager("users").select("*").where({ _id }).first();
  }

  public static readWithProfiles(_id: string): Promise<any> {
    return UserService.manager("users as u")
      .join("profiles as p", "u._id", "p.user_id")
      .select("*")
      .where({ _id, user_id: _id });
  }

  public static create(user: any): Promise<any> {
    return UserService.manager("users")
      .insert(user)
      .returning("*")
      .then((posts) => posts[0]);
  }

  public static update(_id: integer, updatedUser: any): Promise<any> {
    return UserService.manager("users")
      .select("*")
      .where({ _id })
      .update(updatedUser, "*");
  }
  public static destroy(_id: string): Promise<any> {
    return UserService.manager("users").where({ _id }).del();
  }
}
