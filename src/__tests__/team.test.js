import ErrorRepository from "../js/class/errorRepository";

test('ErrorRepository returns a error', () => {
  const err = new ErrorRepository();
  
  const correct = "продолжайте"

  expect(err.translate(100)).toBe(correct);
});

test('ErrorRepository returns Unknown error', () => {
  const err = new ErrorRepository();
  
  const correct = "Unknown error"

  expect(err.translate(1050)).toBe(correct);
});
