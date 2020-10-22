export const getOffsetToDocument = (elem: any, dir: "left" | "top") => {
  const offsetDir: string = dir === "left" ? "offsetLeft" : "offsetTop";
  let offset: number = 0;
  do {
    if (!isNaN(elem[offsetDir])) {
      offset += elem[offsetDir];
    }
  } while ((elem = elem.offsetParent));
  return offset;
};
