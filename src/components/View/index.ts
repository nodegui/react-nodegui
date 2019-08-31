import {
  QWidget,
  NodeWidget,
  WindowState,
  CursorShape,
  QCursor,
  QIcon
} from "@nodegui/nodegui";
import { registerComponent } from "../config";

type Geometry = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ViewSize = {
  width: number;
  height: number;
};
type ViewSizeWithFixed = ViewSize & {
  fixed?: boolean;
};
type ViewPos = {
  x: number;
  y: number;
};
export interface ListenerMap {
  [key: string]: (payload?: any) => void;
}
export interface ViewProps {
  visible?: boolean;
  styleSheet?: string;
  style?: string;
  geometry?: Geometry;
  id?: string;
  mouseTracking?: boolean;
  enabled?: boolean;
  windowOpacity?: Number;
  windowTitle?: string;
  windowState?: WindowState;
  cursor?: CursorShape | QCursor;
  windowIcon?: QIcon;
  minSize?: ViewSize;
  maxSize?: ViewSize;
  size?: ViewSizeWithFixed;
  pos?: ViewPos;
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
    set windowTitle(title: string) {
      widget.setWindowTitle(title);
    },
    set windowState(state: WindowState) {
      widget.setWindowState(state);
    },
    set cursor(cursor: CursorShape | QCursor) {
      widget.setCursor(cursor);
    },
    set windowIcon(icon: QIcon) {
      widget.setWindowIcon(icon);
    },
    set minSize(size: ViewSize) {
      widget.setMinimumSize(size.width, size.height);
    },
    set maxSize(size: ViewSize) {
      widget.setMaximumSize(size.width, size.height);
    },
    set size(size: ViewSizeWithFixed) {
      if (size.fixed) {
        widget.setFixedSize(size.width, size.height);
      } else {
        const minSize = newProps.minSize || { width: 0, height: 0 };
        const maxSize = newProps.maxSize || {
          width: 16777215,
          height: 16777215
        };
        widget.setMinimumSize(minSize.width, minSize.height);
        widget.setMaximumSize(maxSize.width, maxSize.height);
        widget.resize(size.width, size.height);
      }
    },
    set pos(position: ViewPos) {
      widget.move(position.x, position.y);
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
