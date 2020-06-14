export const getOffsetToDocument = (elem: any, dir: "left" | "top") => {
  const offset = dir === "left" ? "offsetLeft" : "offsetTop";
  let offsetLeft = 0;
  do {
    if (!isNaN(elem[offset])) {
      offsetLeft += elem[offset];
    }
  } while ((elem = elem.offsetParent));
  return offsetLeft;
};
