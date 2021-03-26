import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { RNFontDialog, FontDialogProps } from "./RNFontDialog";

class FontDialogConfig extends ComponentConfig {
  tagName: string = RNFontDialog.tagName;
  shouldSetTextContent(nextProps: FontDialogProps): boolean {
    return false;
  }
  createInstance(newProps: FontDialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNFontDialog {
    const widget = new RNFontDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNFontDialog, newProps: FontDialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNFontDialog, updatePayload: any, oldProps: FontDialogProps, newProps: FontDialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up FontDialog inheriting the functionality of nodegui's `QFontDialog`
 * @example
 * ```javascript
 * function FontDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QFontDialogSignals>({
 *    fontSelected(font){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <FontDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const FontDialog = registerComponent<FontDialogProps>(new FontDialogConfig());
