const request = require('supertest');
const server = require('../server');

test('GET /', async () => {
    const res = await request(server).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.message).toBe("Welcome")
})