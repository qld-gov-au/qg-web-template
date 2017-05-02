// import feedbackForm  from '../../src/assets/_project/js/modules/feedback-form.js';

function helloWorld () {
  return 'Hello world!';
}

describe('Hello world', function () {
  it('says hello', function () {
    expect(helloWorld()).toEqual('Hello world!');
  });
});
