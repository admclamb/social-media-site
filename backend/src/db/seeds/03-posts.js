const POSTS_DATA = require("./03-posts.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE posts RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("posts").insert(POSTS_DATA);
    });
};
