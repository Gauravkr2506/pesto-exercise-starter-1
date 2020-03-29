function privateProps(obj, isPrivate) {
  let handler = {
    has: function(target, key) {
      return !!isPrivate(key) ? false : key in target;
    },
    ownKeys: function(target) {
      return Object.keys(target).filter(key => !isPrivate(key));
    },
    set: function(target, prop, value) {
      if (isPrivate(prop)) {
        throw new TypeError(`/Can't set property "_private"/`);
      }
      target[prop] = value;
      return target;
    }
  };
  return new Proxy(obj, handler);
}

export { privateProps };
