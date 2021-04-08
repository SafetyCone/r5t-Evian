import { PromiseHelper } from "r5t-Avignon";
import { IElementShowHideStylerV02 } from "r5t-Chantilly";
import { Utilities as TailwindUtilities } from "r5t-Tropez";

export class ElementShowHideStylerV02 implements IElementShowHideStylerV02
{
    Show(element: HTMLElement): Promise<void>
    {
        TailwindUtilities.ShowRemoveHidden(element);
        TailwindUtilities.RemoveHiddenAttribute(element);

        return PromiseHelper.Empty;
    }

    Hide(element: HTMLElement): Promise<void>
    {
        TailwindUtilities.HideAddHidden(element);
        TailwindUtilities.AddHiddenAttribute(element);

        return PromiseHelper.Empty;
    }
}