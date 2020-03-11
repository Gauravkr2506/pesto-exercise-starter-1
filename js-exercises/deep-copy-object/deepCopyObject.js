const deepCopyObject = objToCopy => {
  if (typeof objToCopy != "object" || objToCopy === null) return objToCopy;

  let clone = {};
  if (Array.isArray(objToCopy)) {
    clone = [];
  }

  for (var i in objToCopy) {
    if (objToCopy[i] != null && typeof (objToCopy[i]) == "object")
      clone[i] = deepCopyObject(objToCopy[i]);
    else
      clone[i] = objToCopy[i];
  }

  return clone;
};


module.exports = {
  deepCopyObject
};