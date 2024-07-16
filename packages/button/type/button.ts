import type {ButtonProps, ButtonEmits, Placement} from "element-plus";
import type {EpPropMergeType} from "element-plus/es/utils";

export interface ButtonProp extends ButtonProps{
    time?: number;
    tip?: string;
    placement?: EpPropMergeType<StringConstructor, Placement, unknown> | undefined;
    tipProps?: object;
}
