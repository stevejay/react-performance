/* eslint-disable import/group-exports */
/* eslint-disable import/no-default-export */

// Warning! Do not put any root level import or exports.
// That would turn the file into a module and disconnect it
// from the global type declaration namespace

declare module "global/window" {
  export default window;
}

declare module "global/document" {
  export default document;
}

declare module "global" {
  export function setTimeout(callback: Function, milliseconds?: number): number;
  export function clearTimeout(id: number): void;
}
