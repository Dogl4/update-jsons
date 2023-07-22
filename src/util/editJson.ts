const styledJson = (listConfigStyle: any, jsonToStyled: any) => {
  for (const block in jsonToStyled.flow) {
    const blockName = jsonToStyled.flow[block].$title.toLowerCase();
    const styleMatchToTitle = listConfigStyle?.find(({ tag }: any) => blockName.includes(tag))

    if (styleMatchToTitle) {
      jsonToStyled.flow[block].addonsSettings = {
        ...styleMatchToTitle
      }
    }
  }
  return jsonToStyled;
};

export {
  styledJson,
};