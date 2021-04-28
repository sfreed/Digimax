import { SectionList } from "../components.model";

export class Pricing {
    sectionList: SectionList[]=[];
    title1: string = "Pricing Title";
    statement1: string = "A short statement about this pricing option";
    price1: number = 49;
    frequency: string = "mo";
    feature: string = "A feature of this option";
    badge: string = "Save 20%";
    title2: string = "Pricing Title";
    statement2: string = "A short statement about this pricing option";
    price2: number = 129;
    question?: string = "This is a common question asked?";
    answer?: string = "This is the answer to the question asked above. This section is used for frequently asked questions about the Pricing Plans offered above. "
}