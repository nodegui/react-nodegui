import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { DialogProps, RNDialog } from "./RNDialog";

class DialogConfig extends ComponentConfig {
  tagName: string=RNDialog.tagName;
  shouldSetTextContent(nextProps: DialogProps): boolean {
    return false;
  }
  finalizeInitialChildren(
    instance: RNDialog,
    newProps: DialogProps,
    rootContainerInstance: AppContainer,
    context: any
  ): boolean {
    return true;
  }
  createInstance(newProps: DialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNDialog {
    const widget = new RNDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNDialog, newProps: DialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNDialog, updatePayload: any, oldProps: DialogProps, newProps: DialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up Dialog inheriting the functionality of nodegui's `QDialog`
 * @param minSize set minimum height, width to prevent errors
 * @example 
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  return (
 *    <View>
 *      <Dialog open={open}>
 *        <View>{....other components}</View>
 *      </Dialog>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const Dialog = registerComponent<DialogProps>(new DialogConfig());