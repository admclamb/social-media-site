import request from 'supertest';
import { knex } from '../src/db/connection';
import { expect } from 'chai';
import 'jest';
import { app } from '../src/App';

/**
 * US-00 Create, Read, and Update users. Deleting will come later
 * => get top 50 users with highest elo rating
 *
 */
describe('US-00 crud users', () => {
  beforeAll(() => {
    return knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest());
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe('READ GET /users/:user_id', () => {
    test('Should return 404 for user not found', async () => {
      const response = await request(app)
        .get('/users/029332')
        .set('Accept', 'application/json');

      expect(response.status).to.equal(404);
      expect(response.body.error).to.equal('User: 029332 not found');
    });

    test('Should return 200 and user data', async () => {
      const response = await request(app)
        .get('/users/1')
        .set('Accept', 'application/json');

      expect(response.status).to.equal(200);
      expect(response.body.error).to.be.undefined;
      expect(response.body.data.user_id).to.equal(1);
      expect(response.body.data.username).to.equal('testusername');
      expect(response.body.data.email).to.equal('test@email.com');
      expect(response.body.data.password).to.be.undefined;
    });
  });
});
