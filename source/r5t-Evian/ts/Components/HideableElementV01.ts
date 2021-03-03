import { HideableElementV01 as HideableElementV01Base } from "r5t-Chantilly/Index";
import { ElementShowHideStylerV01 } from "../Stylers/ElementShowHideStylerV01";

export class HideableElementV01 extends HideableElementV01Base
{
    constructor(
        element: HTMLElement,
    )
    {
        let styler = new ElementShowHideStylerV01();

        super(element, styler);
    }
}