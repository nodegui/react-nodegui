export interface DataWithOffset<T> {
  offset: number;
  data: T;
}

type SetParentFunc<T> = (parent: T, index: number) => void;

/**
 * Extract the keys of type `T` matching type `TType`
 */
type KeysOfType<T, TType> = {
  [Key in keyof T]-?: T[Key] extends TType | undefined ? Key : never;
}[keyof T];

/**
 * Show TypeScript that the fields we're interested in are of type `TType`
 */
type OnlyType<T, TType> = {
  [Key in KeysOfType<T, TType>]?: TType;
};

export const offsetForIndex = <T>(
  index: number,
  items: Array<DataWithOffset<OnlyType<T, number>>>,
  sizeKey: keyof OnlyType<T, number>
) => {
  let offset = 0;

  if (index > 0) {
    const previousChild = items[index - 1];
    offset = previousChild.offset + (previousChild.data[sizeKey] ?? 1);
  }

  return offset;
};

export const updateDisplacedChildren = <TItem, TParent>(
  startIndex: number,
  items: Array<
    DataWithOffset<
      OnlyType<TItem, number> & OnlyType<TItem, SetParentFunc<TParent>>
    >
  >,
  parent: TParent,
  sizeKey: keyof OnlyType<TItem, number>,
  setParentFuncKey: keyof OnlyType<TItem, SetParentFunc<TParent>>
) => {
  let offset = offsetForIndex(startIndex, items, sizeKey);

  for (let i = startIndex; i < items.length; i++) {
    const displacedChild = items[i];

    displacedChild.offset = offset;
    displacedChild.data[setParentFuncKey]?.(parent, offset);

    offset += displacedChild.data[sizeKey] ?? 1;
  }
};
