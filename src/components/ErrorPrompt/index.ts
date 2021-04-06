import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { RNErrorPrompt, ErrorPromptProps } from "./RNErrorPrompt";

class ErrorPromptConfig extends ComponentConfig {
  tagName: string = RNErrorPrompt.tagName;
  shouldSetTextContent(nextProps: ErrorPromptProps): boolean {
    return false;
  }
  createInstance(newProps: ErrorPromptProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNErrorPrompt {
    const widget = new RNErrorPrompt();
    widget.setProps(newProps, { message: "" });
    return widget;
  }
  commitMount(instance: RNErrorPrompt, newProps: ErrorPromptProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNErrorPrompt, updatePayload: any, oldProps: ErrorPromptProps, newProps: ErrorPromptProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * ErrorPrompt inherits the functionality of nodegui's `QErrorMessage`
 * @property `message` the message that needs to be displayed
 * @example
 * ```javascriptreact
 * function ErrorApplet(){
 *  const [open, setOpen] = useState(false);
 *  return (
 *    <View>
 *      <ErrorPrompt open={open} message="Error message!"/>
 *      <Button text="Error" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const ErrorPrompt = registerComponent<ErrorPromptProps>(new ErrorPromptConfig());
