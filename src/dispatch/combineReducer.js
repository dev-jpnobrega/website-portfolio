export default reducers => {
  const state = Object.keys(reducers).reduce(
    (acc, key) => ({ ...acc, [key]: reducers[key][0] }),
    {},
  );

  const dispatch = action =>
    Object.keys(reducers)
      .map(key => reducers[key][1])
      .forEach(fn => fn(action));

  return [ state, dispatch ];
};
