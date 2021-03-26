import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import {  RNFileDialog, FileDialogProps } from "./RNFileDialog";

class FileDialogConfig extends ComponentConfig {
  tagName: string=RNFileDialog.tagName;
  shouldSetTextContent(nextProps: FileDialogProps): boolean {
    return false;
  }
  createInstance(newProps: FileDialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNFileDialog {
    const widget = new RNFileDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNFileDialog, newProps: FileDialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNFileDialog, updatePayload: any, oldProps: FileDialogProps, newProps: FileDialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up FileDialog inheriting the functionality of nodegui's `QFileDialog`
 * @example 
 * ```javascript
 * function DialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QFileDialogSignals>({
 *    fileSelected(file){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <FileDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const FileDialog = registerComponent<FileDialogProps>(new FileDialogConfig());