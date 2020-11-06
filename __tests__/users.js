const request = require('supertest');
const db = require('../data/config');
const server = require('../server');

beforeEach(async () => {
    await db.seed.run();
})

afterAll( async () => {
    await db.destroy();
})

describe("Tests for the users db", () => {
    it('gets the users', async () => {
        const res = await request(server).get('/users')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveLength(3)
    })

    it('gets the user by id', async () => {
        const res = await request(server).get('/users/1')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.username).toBe('AJ')
    })

    it('Tests the getUserId error', async () => {
        const res = await request(server).get('/users/50')
        expect(res.statusCode).toBe(404)
    })

    it('adds a user', async () => {
        const res = await request(server)
        .post('/users')
        .send({ username: "T" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.username).toBe("T")
    })

    it('deletes the user', async () => {
        const res = await request(server).delete('/users/4')
        expect(res.statusCode).toBe(204);
    })
})