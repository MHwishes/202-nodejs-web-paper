const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const refresh = require('../tools/refresh-mongo');
require('should');

describe('sectionController', ()=> {

    beforeEach(()=> {
        refresh();
    });

    it('getAll', (done)=> {
        request
            .get('/section')
            .expect(200)
            .end(done)
    });

    it('getOne', (done)=> {
        request
            .get('/section/587f0f2586653d19297d40c4')
            .expect(200)
            .expect((res)=> {
                res.body._id.should.equal('587f0f2586653d19297d40c4')
            })
            .end(done);
    });

    it('create', (done)=> {
        request
            .post('/section')
            .send({
                '_id': '587f0f2586653d19297d40d3',
                Homeworks: [{
                    '_id': '587f0f2586653d19297d40c5',
                    homework: '587f0f2586653d19297d40c1'
                }, {
                    '_id': '587f0f2586653d19297d40c6',
                    homework: '587f0f2586653d19297d40c2'
                }],
                Paper: '587f0f2586653d19297d40c8'
            })
            .expect(201)
            .end(done);
    });

    it('update', (done)=> {
        request
            .put('/section/587f0f2586653d19297d40d3')
            .send({
                '_id': '587f0f2586653d19297d40d3',
                Homeworks: [{
                    '_id': '587f0f2586653d19297d40c5',
                    homework: '587f0f2586653d19297d40c1'
                }, {
                    '_id': '587f0f2586653d19297d40c6',
                    homework: '587f0f2586653d19297d40c2'
                }],
                Paper: '587f0f2586653d19297d40c7'
            })
            .expect(204)
            .end(done);
    });

    it('delete', (done)=> {
        request
            .delete('/section/587f0f2586653d19297d40d3')
            .expect(204)
            .end(done)
    });

});