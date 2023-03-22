import { integer } from "aws-sdk/clients/cloudfront";
import { Knex } from "knex";
import { ObjectId } from "mongoose";
import { Post } from "../db/models/PostModel";
import { User } from "../db/models/UserModel";
const knex = require("../db/connection");
export class PostService {
  private static manager: Knex = knex;
  public static list(): Promise<any> {
    return PostService.manager("posts").select("*");
  }

  public static listWithAuthor(): Promise<any> {
    return PostService.manager("posts").select("*");
  }

  public static read(_id: ObjectId): Promise<any> {
    return PostService.manager("posts").select("*").where({ _id });
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

  public static destroy(_id: ObjectId): Promise<any> {
    return PostService.manager("posts").where({ _id }).del();
  }
}
