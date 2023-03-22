const LIKES_DATA = require("./04-likes.json");

exports.seed = function (knex) {
  // return knex
  //   .raw("TRUNCATE TABLE likes RESTART IDENTITY CASCADE")
  //   .then(function () {
  //     return knex("likes").insert(LIKES_DATA);
  //   });
};
