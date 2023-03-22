const BOOKMARKS_DATA = require("./05-bookmarks.json");

exports.seed = function (knex) {
  // return knex
  //   .raw("TRUNCATE TABLE bookmarks RESTART IDENTITY CASCADE")
  //   .then(function () {
  //     return knex("bookmarks").insert(BOOKMARKS_DATA);
  //   });
};
