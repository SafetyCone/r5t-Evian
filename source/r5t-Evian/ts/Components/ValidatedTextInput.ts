import { ElementSelectorAs, HtmlElementHelper, ValidationResult } from "r5t-Avignon/Index";
import { ValidatedTextInputWithOutput } from "r5t-Chantilly/Index";

import { ElementShowHideStyler } from "../Stylers/ElementShowHideStyler";
import { ValidatedTextInputStyler } from "../Stylers/ValidatedTextInputStyler";

export class ValidatedTextInput extends ValidatedTextInputWithOutput
{
    constructor(
        textInput: HTMLInputElement,
        validator: (value: string) => Promise<ValidationResult>,
        event: keyof HTMLElementEventMap = "change",
        wrapperSelector: ElementSelectorAs<HTMLDivElement> = HtmlElementHelper.SelectParentOfParentAs)
        {
            let textInputStyler = new ValidatedTextInputStyler();
            let elementShowHideStyler = new ElementShowHideStyler();

            super(textInput, validator, textInputStyler, elementShowHideStyler, event, wrapperSelector);
        }
}