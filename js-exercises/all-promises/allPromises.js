const allPromises = args => {
  if (!Array.isArray(args)) return Promise.resolve();
  let result = [];
  args.forEach(value => {
    if (value instanceof Promise) {
      value.then(val => result.push(val));
    } else {
      result.push(value);
    }
  });

  return result;
};

export { allPromises };
