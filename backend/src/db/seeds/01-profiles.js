const USERS_PROFILES_DATA = require("./01-profiles.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE profiles RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("profiles").insert(USERS_PROFILES_DATA);
    });
};
