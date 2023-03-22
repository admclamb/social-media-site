const ADMINS_DATA = require("./02-admins.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE admins RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("admins").insert(ADMINS_DATA);
    });
};
