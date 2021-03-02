import { HtmlListItemList } from "r5t-Arbois/Index";
import { ListDisplayV01 as ListDisplayV01Base } from "r5t-Chantilly/Index";
import { ElementShowHideStyler } from "../Stylers/ElementShowHideStyler";

export class ListDisplayV01<TListElement extends HtmlListItemList, TValue>
    extends ListDisplayV01Base<TListElement, TValue>
{
    constructor(
        element: HTMLDivElement,
        listItemProvider: (value: TValue) => Promise<HTMLLIElement>
    )
    {
        let styler = new ElementShowHideStyler();

        super(element, listItemProvider, styler);
    }
}