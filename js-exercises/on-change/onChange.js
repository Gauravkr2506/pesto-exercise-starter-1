const onChange = (object, onChangeFn) => {
  const validator = {
    get: (target, key) => {
      if (typeof target[key] === "object" && target[key] !== null) {
        return new Proxy(target[key], validator);
      } else {
        return target[key];
      }
    },
    set(target, property, value) {
      if (typeof target[property] === "object" && target[key] !== null) {
        return new Proxy(target[property], validator);
      }
      onChangeFn();
      target[property] = value;
      return true;
    },
    defineProperty(target, key, descriptor) {
      onChangeFn();
      Object.defineProperty(target, key, descriptor);
      return target;
    },
    deleteProperty(target, prop) {
      onChangeFn();
      delete target[prop];
      return target;
    }
  };

  return new Proxy(object, validator);
};

export { onChange };
