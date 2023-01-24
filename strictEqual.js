export const strictEqual = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else {
    return Object.is(a, b);
  }
};
