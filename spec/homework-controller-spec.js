const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refresh = require('../tools/refresh-mongo');
require('should');

describe('homeworkController', ()=> {

    beforeEach(()=> {
        refresh();
    });

    it('getAll', (done)=> {
        request
            .get('/homework')
            .expect(200)
            .end(done)
    });

    it('getOne', (done)=> {
        request
            .get('/homework/587f0f2586653d19297d40c1')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c1')
            })
            .end(done);
    });

    it('create', (done)=> {
        request
            .post('/homework')
            .send({
                '_id': '587f0f2586653d19297d40d1',
                makerId: '4'
            })
            .expect(201)
            .end(done);
    });

    it('update', (done)=> {
        request
            .put('/homework/587f0f2586653d19297d40c1')
            .send({
                '_id': '587f0f2586653d19297d40c1',
                makerId: '10'
            })
            .expect(204)
            .end(done);
    });

    it('delete', (done)=> {
        request
            .delete('/homework/587f0f2586653d19297d40c3')
            .expect(204)
            .end(done)
    });

});