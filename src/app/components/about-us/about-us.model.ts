import { SectionList } from "../components.model";

export class AboutUs {
    aboutThumbUrl: string = "assets/img/about_thumb_1.jpg";
    sectionList: SectionList[]=[];
    counterList: Counter[]=[];
}
export class Counter {
    number: number = 100;
    text: string = "The Title";
}
