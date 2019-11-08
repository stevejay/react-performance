const blockDOMUpdates = (milliseconds: number) => {
  const start = Date.now();

  while (Date.now() - start < milliseconds) {
    // empty body
  }
};

export { blockDOMUpdates };
