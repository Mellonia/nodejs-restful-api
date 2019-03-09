const syncDatabase = require('../bin/sync-database');
const models = require('../models/user');
const should = require('should');
const request = require('supertest');
const app = require('../app');

// describe: 첫번째 파라미터로 테스트 수트 설명 문자열
// it: 테스트 코트 작성 함수
describe('GET /users', () => {
    before('sync database', (done) => {
        syncDatabase().then(() => {
            done();
        })
    })

    const users = [
        { name: 'Elice' },
        { name: 'Ryze' },
        { name: 'Yasuo'}
    ];

    before('insert 3 users into database', (done) => {
        models.User.bulkCreate(users).then(() => done());
    });

    it('should return 200 status code', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    });

    it('shoule return array', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                res.body.should.be.instanceof(Array).and.have.length(3);
                res.body.map(user => {
                    user.should.have.properties('id', 'name');
                    user.id.should.be.a.Number();
                    user.name.should.be.a.String();
                });
                done();
            });
    });

    // after('clear up database', (done) => {
    //     syncDatabase().then(() => done());
    // });
});

// describe('PUT /users/:id', () => {
//     it.only('should return 200 status code', (done) => {
//         request(app)
//             .put('/users/1')
//             .send({
//                 name: 'foo'
//             })
//             .end((err, res) => {
//                 if (err) throw err;
//                 done();
//             });
//     });
// });