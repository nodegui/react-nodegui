import { useMemo, DependencyList } from "react";
import { WidgetEventListeners } from "../components/View/RNView";

export function useEventHandler<Signals>(
  eventHandlerMap: Partial<WidgetEventListeners | Signals>,
  deps: DependencyList
) {
  const handler = useMemo(() => {
    return eventHandlerMap;
  }, deps);
  return handler;
}
