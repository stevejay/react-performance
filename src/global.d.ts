/* eslint-disable import/group-exports */
/* eslint-disable import/no-default-export */

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
