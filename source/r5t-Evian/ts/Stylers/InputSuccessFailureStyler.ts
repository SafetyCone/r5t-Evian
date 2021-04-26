import { HtmlElementHelper } from "r5t-Avignon";
import { ISuccessFailureStylerV02 } from "r5t-Chantilly";

export class InputSuccessFailureStylerV02 implements ISuccessFailureStylerV02
{
    public static readonly NeutralCssClasses = "focus:ring-indigo-500 focus:border-indigo-500";
    public static readonly SuccessCssClasses = "border-green-300 focus:ring-green-500 focus:border-green-500 focus:outline-none";
    public static readonly FailureCssClasses = "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 focus:outline-none";


    public Neutral(element: HTMLElement): void
    {
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.SuccessCssClasses);
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.FailureCssClasses);

        HtmlElementHelper.AddCssClassesString(element, InputSuccessFailureStylerV02.NeutralCssClasses);
    }

    public Success(element: HTMLElement): void
    {
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.NeutralCssClasses);
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.FailureCssClasses);

        HtmlElementHelper.AddCssClassesString(element, InputSuccessFailureStylerV02.SuccessCssClasses);
    }

    public Failure(element: HTMLElement): void
    {
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.SuccessCssClasses);
        HtmlElementHelper.RemoveCssClassesString(element, InputSuccessFailureStylerV02.NeutralCssClasses);

        HtmlElementHelper.AddCssClassesString(element, InputSuccessFailureStylerV02.FailureCssClasses);
    }
}