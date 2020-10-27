type TClsx = {
  [key: string]: boolean;
};
function clsx(props: TClsx) {
  let string = "";
  for (let key in props) {
    if (props[key]) {
      string += key + " ";
    }
  }
  return string.trim();
}
export default clsx;
