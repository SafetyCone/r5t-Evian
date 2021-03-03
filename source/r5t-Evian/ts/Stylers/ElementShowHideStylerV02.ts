import { PromiseHelper } from "r5t-Avignon/Index";
import { IElementShowHideStylerV02 } from "r5t-Chantilly/Index";
import { Utilities as TailwindUtilities } from "r5t-Tropez/Index";

export class ElementShowHideStylerV02 implements IElementShowHideStylerV02
{
    Show(element: HTMLElement): Promise<void>
    {
        TailwindUtilities.ShowRemoveHidden(element);

        return PromiseHelper.Empty;
    }

    Hide(element: HTMLElement): Promise<void>
    {
        TailwindUtilities.Hide(element);

        return PromiseHelper.Empty;
    }
}