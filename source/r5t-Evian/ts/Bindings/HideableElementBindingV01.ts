import { ValueChangedNotifier } from "r5t-Arbois";
import { HideableElementBindingV01 as HideableElementBindingV01Base } from "r5t-Chantilly";

import { ElementShowHideStylerV01 } from "../Stylers/ElementShowHideStylerV01";

export class HideableElementBindingV01 extends HideableElementBindingV01Base
{
    constructor(
        element: HTMLElement,
        showElementValue: ValueChangedNotifier<boolean>)
    {
        let styler = new ElementShowHideStylerV01();

        super(element, showElementValue, styler);
    }
}