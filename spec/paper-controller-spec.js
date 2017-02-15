const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refresh = require('../tools/refresh-mongo');
require('should');

describe('paperController', ()=> {

    beforeEach(()=> {
        refresh();
    });

    it('getAll', (done)=> {
        request
            .get('/paper')
            .expect(200)
            .end(done)
    });

    it('getOne', (done)=> {
        request
            .get('/paper/587f0f2586653d19297d40c7')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c7')
            })
            .end(done);
    });

    it('create', (done)=> {
        request
            .post('/paper')
            .send({
                '_id': '587f0f2586653d19297d40d2',
                makerId: '2'
            })
            .expect(201)
            .end(done);
    });

    it('update', (done)=> {
        request
            .put('/paper/587f0f2586653d19297d40c7')
            .send({
                '_id': '587f0f2586653d19297d40c7',
                makerId: '000'
            })
            .expect(204)
            .end(done);
    });

    it('delete', (done)=> {
        request
            .delete('/paper/587f0f2586653d19297d40c7')
            .expect(204)
            .end(done)
    });

});