const fetchJoke = require('../scripts/utils');

test('Should get a string containing Chuck from the API', (done) => {
  fetchJoke().then((joke) => {
    expect(joke.toLowerCase()).toContain('chuck');
    done();
  });
});

