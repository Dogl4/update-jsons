const editJson = (file = {}) => {
  for (const key in file) {
    console.log(key)
  }
  return JSON.parse(JSON.stringify(file.toString()))
};

export {
  editJson,
};