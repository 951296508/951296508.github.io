import { dg as capitalize$1 } from "./index.CFN6pFAY.js";
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);
export {
  capitalize as c,
  escapeStringRegexp as e
};
