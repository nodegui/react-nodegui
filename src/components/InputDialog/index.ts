import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { RNInputDialog, InputDialogProps } from "./RNInputDialog";

class InputDialogConfig extends ComponentConfig {
  tagName: string = RNInputDialog.tagName;
  shouldSetTextContent(nextProps: InputDialogProps): boolean {
    return false;
  }
  createInstance(newProps: InputDialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNInputDialog {
    const widget = new RNInputDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNInputDialog, newProps: InputDialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNInputDialog, updatePayload: any, oldProps: InputDialogProps, newProps: InputDialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up InputDialog inheriting the functionality of nodegui's `QInputDialog`
 * @example
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QInputDialogSignals>({
 *    textValueChanged(value){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <InputDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const InputDialog = registerComponent<InputDialogProps>(new InputDialogConfig());
