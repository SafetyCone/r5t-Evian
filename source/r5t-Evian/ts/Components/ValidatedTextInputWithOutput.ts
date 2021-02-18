import { HtmlElementHelper } from "r5t-Avignon/Index";
import { ValidatedTextInputWithOutputBase } from "r5t-Chantilly/Index";
import { Utilities as TailwindUtilities } from "r5t-Tropez/Index";

export class ValidatedTextInput extends ValidatedTextInputWithOutputBase
{
    public static readonly ValidColorClasses = "shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500";
    public static readonly InvalidColorClasses = "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 focus:outline-none";


    protected StyleTextInput(textInput: HTMLInputElement, isValid: boolean): void
    {
        if(isValid)
        {
            HtmlElementHelper.RemoveCssClassesString(textInput, ValidatedTextInput.InvalidColorClasses);
            HtmlElementHelper.AddCssClassesString(textInput, ValidatedTextInput.ValidColorClasses);
        }
        else
        {
            HtmlElementHelper.RemoveCssClassesString(textInput, ValidatedTextInput.ValidColorClasses);
            HtmlElementHelper.AddCssClassesString(textInput, ValidatedTextInput.InvalidColorClasses);
        }
    }

    protected ShowOrHideElement(element: HTMLElement, showOrHide: boolean): void
    {
        if(showOrHide)
        {
            TailwindUtilities.Show(element);
        }
        else
        {
            TailwindUtilities.Hide(element);
        }
    }
}