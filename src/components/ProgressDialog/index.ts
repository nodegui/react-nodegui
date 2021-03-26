import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { RNProgressDialog, ProgressDialogProps } from "./RNProgressDialog";

class ProgressDialogConfig extends ComponentConfig {
  tagName: string = RNProgressDialog.tagName;
  shouldSetTextContent(nextProps: ProgressDialogProps): boolean {
    return false;
  }
  createInstance(newProps: ProgressDialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNProgressDialog {
    const widget = new RNProgressDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNProgressDialog, newProps: ProgressDialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNProgressDialog, updatePayload: any, oldProps: ProgressDialogProps, newProps: ProgressDialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up ProgressDialog inheriting the functionality of nodegui's `QProgressDialog`
 * @example
 * ```javascript
 * function ProgressDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QProgressDialogSignals>({
 *    canceled(){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <ProgressDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const ProgressDialog = registerComponent<ProgressDialogProps>(new ProgressDialogConfig());
