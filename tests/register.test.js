// your test file
const mongoose = require('mongoose');
const server = require('../src/index');
const request = require('supertest');
const connectDB = require('../src/db');

jest.setTimeout(30000); // Increase the timeout to 30 seconds

beforeAll(async () => {
  await connectDB();
});

describe('POST /register', () => {
  it('should save student to database', async () => {
    const response = await request(server)
      .post('/register')
      .send({
        name: 'John Doe',
        examScores: [90,85,100]
      });

    expect(response.status).toBe(201);
  }, 10000); // Increase timeout for this test to 10 seconds
});

afterAll(async () => {
  await mongoose.connection.close(); // close db connection
});
