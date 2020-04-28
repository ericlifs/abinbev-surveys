export const emulateFetch = timeout => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}