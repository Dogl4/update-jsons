const editJson = (file = {}) => {
  for (const block in file.flow) {
    const blockName = file.flow[block].$title.toLowerCase();
    if (blockName.includes("[select]")) {
      file.flow[block].addonsSettings = {
        shape: "0 0 50% 50%",
        backgroundColor: "#fff9c4",
        textColor:"#000000",
      };
    } else if (blockName.includes("[go to]")) {
      file.flow[block].addonsSettings = {
        backgroundColor: "#bbdefb",
        textColor:"#000000",
        shape: "0 50% 50% 0",
      };
    } else if (blockName.includes("[to]") || blockName.includes("[redirect]")) {
      file.flow[block].addonsSettings = {
        backgroundColor: "#ffe0b2",
        textColor:"#000000",
        shape: "50% 0 0 50%",
      };
    } else if (blockName.includes("[requirements]")) {
      file.flow[block].addonsSettings = {
        textColor:"#b80000",
        backgroundColor: "#000000",
      };
    } else if (blockName.includes("[redirect to]")) {
      file.flow[block].addonsSettings = {
        backgroundColor: "#d1c4e9",
        textColor:"#000000",
        shape: "0 50% 50% 0",
      }
    }
  }
  return file;
};

export {
  editJson,
};