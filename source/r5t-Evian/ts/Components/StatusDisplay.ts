import { StatusDisplayV01 } from "r5t-Chantilly";

import { ElementShowHideStylerV01 } from "../Stylers/ElementShowHideStylerV01";

export class StatusDisplay extends StatusDisplayV01
{
    constructor(
        element: HTMLDivElement)
        {
            let elementShowHideStyler = new ElementShowHideStylerV01();

            super(element, elementShowHideStyler);
        }
}