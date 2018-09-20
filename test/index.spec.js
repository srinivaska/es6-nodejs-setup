const app = require('../src/server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('/GET SAMPLE API TESTS', () => {
  it('it should display Application Running', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });


  it('it should give reverse string', done => {
    chai
      .request(app)
      .get('/getData')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('reverseString');
        done();
      });
  });
});