// Code from: https://stackoverflow.com/a/52373525

type Not<T> = [T] extends [never] ? unknown : never;

type Extractable<T, U> = Not<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  U extends any ? Not<T extends U ? unknown : never> : never
>;

const asEnum = <
  E extends Record<keyof E, string | number>,
  K extends string | number
>(
  e: E,
  k: K & Extractable<E[keyof E], K>
): Extract<E[keyof E], K> => {
  // runtime guard, shouldn't need it at compiler time
  if (Object.values(e).indexOf(k) < 0) {
    throw new Error("Expected one of " + Object.values(e).join(", "));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return k as any; // assertion
};

export { asEnum };
