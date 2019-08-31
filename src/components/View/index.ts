import { QWidget, NodeWidget } from "@nodegui/nodegui";
import { registerComponent } from "../config";

type Geometry = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export interface ListenerMap {
  [key: string]: (payload?: any) => void;
}
export interface ViewProps {
  visible?: boolean;
  styleSheet?: string;
  style?: string; // Inline style from NodeGui
  geometry?: Geometry;
  id?: string;
  mouseTracking?: boolean;
  enabled?: boolean;
  windowOpacity?: Number;
  on?: ListenerMap;
  ref?: any;
}

export const setProps = (
  widget: NodeWidget,
  newProps: ViewProps,
  oldProps: ViewProps
) => {
  const setter: ViewProps = {
    set visible(shouldShow: boolean) {
      shouldShow ? widget.show() : widget.hide();
    },
    set styleSheet(styleSheet: string) {
      widget.setStyleSheet(styleSheet);
    },
    set style(inlineStyle: string) {
      if (newProps.styleSheet) {
        console.warn("Both styleSheet and inlineStyle can't be used together");
      }
      widget.setInlineStyle(inlineStyle);
    },
    set geometry(geometry: Geometry) {
      widget.setGeometry(
        geometry.x,
        geometry.y,
        geometry.width,
        geometry.height
      );
    },
    set id(id: string) {
      widget.setObjectName(id);
    },
    set mouseTracking(isMouseTracked: boolean) {
      widget.setMouseTracking(isMouseTracked);
    },
    set enabled(enable: boolean) {
      widget.setEnabled(enable);
    },
    set windowOpacity(opacity: Number) {
      widget.setWindowOpacity(opacity);
    },
    set on(listenerMap: ListenerMap) {
      const listenerMapLatest = Object.assign({}, listenerMap);
      const oldListenerMap = Object.assign({}, oldProps.on);

      Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
        const newEvtListener = listenerMapLatest[eventType];
        if (oldEvtListener !== newEvtListener) {
          widget.removeEventListener(eventType, oldEvtListener);
        } else {
          delete listenerMapLatest[eventType];
        }
      });

      Object.entries(listenerMapLatest).forEach(
        ([eventType, newEvtListener]) => {
          widget.addEventListener(eventType, newEvtListener);
        }
      );
    }
  };
  Object.assign(setter, newProps);
};

export const View = registerComponent<ViewProps>({
  id: "view",
  getContext() {
    return {};
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: (
    newProps,
    rootInstance,
    currentHostContext,
    workInProgress
  ) => {
    const widget = new QWidget();
    setProps(widget, newProps, {});
    return widget;
  },
  finalizeInitialChildren: (instance, newProps, rootInstance, context) => {
    return false;
  },
  commitMount: (instance, newProps, internalInstanceHandle) => {
    return;
  },
  prepareUpdate: (
    instance,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) => {
    return true;
  },
  commitUpdate: (instance, updatePayload, oldProps, newProps, finishedWork) => {
    setProps(instance, newProps, oldProps);
  }
});
