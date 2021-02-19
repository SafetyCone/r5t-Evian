import { StatusDisplayV01 } from "r5t-Chantilly/Index";
import { ElementShowHideStyler } from "../Stylers/ElementShowHideStyler";

export class StatusDisplay extends StatusDisplayV01
{
    constructor(
        element: HTMLDivElement)
        {
            let elementShowHideStyler = new ElementShowHideStyler();

            super(element, elementShowHideStyler);
        }
}