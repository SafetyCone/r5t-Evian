import { ObservableValue } from "r5t-Arbois/Index";
import { HideableElementOneWayBindingV02 as HideableElementBindingV02Base } from "r5t-Chantilly/Index";

import { ElementShowHideStylerV02 } from "../Stylers/ElementShowHideStylerV02";

export class HideableElementBindingV02 extends HideableElementBindingV02Base
{
    constructor(
        element: HTMLElement,
        showElementValue: ObservableValue<boolean>)
    {
        let styler = new ElementShowHideStylerV02();

        super(element, showElementValue, styler);
    }
}