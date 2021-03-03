import { HtmlListItemList } from "r5t-Arbois/Index";
import { ListDisplayV01 as ListDisplayV01Base } from "r5t-Chantilly/Index";
import { ElementShowHideStylerV01 } from "../Stylers/ElementShowHideStylerV01";

export class ListDisplayV01<TListElement extends HtmlListItemList, TValue>
    extends ListDisplayV01Base<TListElement, TValue>
{
    constructor(
        element: HTMLDivElement,
        listItemProvider: (value: TValue) => Promise<HTMLLIElement>
    )
    {
        let styler = new ElementShowHideStylerV01();

        super(element, listItemProvider, styler);
    }
}