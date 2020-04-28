export const toggleWithTimeout = (fn, value, time = 4000) => {
  fn(value);

  setTimeout(() => {
    fn(!value);
  }, time);
}