const COMMENTS_DATA = require("./06-comments.json");

exports.seed = function (knex) {
  // return knex
  //   .raw("TRUNCATE TABLE comments RESTART IDENTITY CASCADE")
  //   .then(function () {
  //     return knex("comments").insert(COMMENTS_DATA);
  //   });
};
