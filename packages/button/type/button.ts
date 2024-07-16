import type {ButtonEmits, ButtonProps} from "element-plus";

export interface ButtonProp extends ButtonProps{
    time: Number;
    tip: String;
    placement: String;
    tipProps: Object;
}

export interface ButtonEmit extends ButtonEmits{

}
