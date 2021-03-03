import { HideableElementV02 as HideableElementV02Base } from "r5t-Chantilly";

import { ElementShowHideStylerV02 } from "../Stylers/ElementShowHideStylerV02";

export class HideableElementV02 extends HideableElementV02Base
{
    constructor(
        element: HTMLElement,
    )
    {
        let styler = new ElementShowHideStylerV02();

        super(element, styler);
    }
}