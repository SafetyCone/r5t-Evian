import { IElementShowHideStylerV01 } from "r5t-Chantilly";
import { Utilities as TailwindUtilities } from "r5t-Tropez";

export class ElementShowHideStylerV01 implements IElementShowHideStylerV01
{
    ShowElement(element: HTMLElement): void
    {
        TailwindUtilities.ShowRemoveHidden(element);
    }

    HideElement(element: HTMLElement): void
    {
        TailwindUtilities.Hide(element);
    }
}