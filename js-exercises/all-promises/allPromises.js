const allPromises = async args => {
  if (!Array.isArray(args)) return Promise.resolve();
  let result = [];
  args.forEach(value => {
    if (value instanceof Promise) {
      result.push(process.binding("util").getPromiseDetails(value)[1]);
    } else {
      result.push(value);
    }
  });

  return result;
};

export { allPromises };
