export const categorizeProps = (oldProps: object, newProps: object) => {
  const removedProps: any = Object.assign({}, oldProps);
  Object.keys(newProps).forEach(updatedKey => {
    delete removedProps[updatedKey];
  });
  return {
    updated: newProps,
    removed: removedProps
  };
};
