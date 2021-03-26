import { Fiber } from "react-reconciler";
import { AppContainer } from "../../reconciler";
import { ComponentConfig, registerComponent } from "../config";
import { RNColorDialog, ColorDialogProps } from "./RNColorDialog";

class ColorDialogConfig extends ComponentConfig {
  tagName: string = RNColorDialog.tagName;
  shouldSetTextContent(nextProps: ColorDialogProps): boolean {
    return false;
  }
  createInstance(newProps: ColorDialogProps, rootInstance: AppContainer, context: any, workInProgress: Fiber): RNColorDialog {
    const widget = new RNColorDialog();
    widget.setProps(newProps, {});
    return widget;
  }
  commitMount(instance: RNColorDialog, newProps: ColorDialogProps, internalInstanceHandle: any): void {
    if (newProps.visible !== false && newProps.open !== false) {
      instance.show();
    }
    return;
  }
  commitUpdate(instance: RNColorDialog, updatePayload: any, oldProps: ColorDialogProps, newProps: ColorDialogProps, finishedWork: Fiber): void {
    instance.setProps(newProps, oldProps);
  }
}
/**
 * Pop up ColorDialog inheriting the functionality of nodegui's `QColorDialog`
 * @example
 * ```javascript
 * function ColorDialogExample(props){
 *  const [open, setOpen] = useState(false);
 *  const events = useEventHandler<QColorDialogSignals>({
 *    colorSelected(color){
 *        //....do whatever
 *    }
 *  }, [....deps])
 *  return (
 *    <View>
 *      <ColorDialog open={open} on={events}/>
 *      <Button text="open dialog" on={{clicked:()=>setOpen(true)}}/>
 *    </View>
 *  )
 * }
 * ```
 */

export const ColorDialog = registerComponent<ColorDialogProps>(new ColorDialogConfig());
