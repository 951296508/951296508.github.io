import { cC as isArray } from "./index.DiKldNkq.js";
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}
export {
  castArray as c
};
