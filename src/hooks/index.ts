import { useMemo, DependencyList } from "react";

type EventHandlerMap = {
  [key: string]: (...args: any[]) => void;
};

export const useEventHandler = (
  eventHandlerMap: EventHandlerMap,
  deps: DependencyList
) => {
  const handler = useMemo(() => {
    return eventHandlerMap;
  }, deps);
  return handler;
};
