import { HtmlElementHelper } from "r5t-Avignon";
import { IValidatedTextInputStyler } from "r5t-Chantilly";

export class ValidatedTextInputStyler implements IValidatedTextInputStyler
{
    private static readonly DisabledColorClasses = "disabled:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed";
    public static readonly ValidColorClasses = `shadow-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 ${ValidatedTextInputStyler.DisabledColorClasses}`;
    public static readonly InvalidColorClasses = `border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 focus:outline-none ${ValidatedTextInputStyler.DisabledColorClasses}`; // focus:outline-none is there for minor aesthetics.


    StyleTextInput(textInput: HTMLInputElement, isValid: boolean): void
    {
        if(isValid)
        {
            HtmlElementHelper.RemoveCssClassesString(textInput, ValidatedTextInputStyler.InvalidColorClasses);
            HtmlElementHelper.AddCssClassesString(textInput, ValidatedTextInputStyler.ValidColorClasses);
        }
        else
        {
            HtmlElementHelper.RemoveCssClassesString(textInput, ValidatedTextInputStyler.ValidColorClasses);
            HtmlElementHelper.AddCssClassesString(textInput, ValidatedTextInputStyler.InvalidColorClasses);
        }
    }
}