import { HideableElement as HideableElementBase } from "r5t-Chantilly/Index";
import { ElementShowHideStyler } from "../Stylers/ElementShowHideStyler";

export class HideableElement extends HideableElementBase
{
    constructor(
        element: HTMLElement,
    )
    {
        let styler = new ElementShowHideStyler();

        super(element, styler);
    }
}