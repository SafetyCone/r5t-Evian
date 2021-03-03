import { ElementSelectorAs, HtmlElementHelper, ValidationResult } from "r5t-Avignon";
import { ValidatedTextInputWithOutput } from "r5t-Chantilly";

import { ElementShowHideStylerV01 } from "../Stylers/ElementShowHideStylerV01";
import { ValidatedTextInputStyler } from "../Stylers/ValidatedTextInputStyler";

/**
 * Matches with the InputV01 C# partial.
 */
export class ValidatedTextInput extends ValidatedTextInputWithOutput
{
    constructor(
        textInput: HTMLInputElement,
        validator: (value: string) => Promise<ValidationResult>,
        event: keyof HTMLElementEventMap = "change",
        wrapperSelector: ElementSelectorAs<HTMLDivElement> = HtmlElementHelper.SelectParentOfParentAs)
        {
            let textInputStyler = new ValidatedTextInputStyler();
            let elementShowHideStyler = new ElementShowHideStylerV01();

            super(textInput, validator, textInputStyler, elementShowHideStyler, event, wrapperSelector);
        }
}