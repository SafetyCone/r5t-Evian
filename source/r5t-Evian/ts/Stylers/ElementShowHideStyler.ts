import { IElementShowHideStyler } from "r5t-Chantilly/Index";
import { Utilities as TailwindUtilities } from "r5t-Tropez/Index";

export class ElementShowHideStyler implements IElementShowHideStyler
{
    ShowElement(element: HTMLElement): void
    {
        TailwindUtilities.Show(element);
    }

    HideElement(element: HTMLElement): void
    {
        TailwindUtilities.Hide(element);
    }
}