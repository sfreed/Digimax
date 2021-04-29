import { Button, SectionList } from "../components.model";

export class Portfolio {
    sectionList: SectionList[] = [];
    buttons: Button[]=[];
    marketing: Marketing[]=[];
}
export class Marketing {
    img: string = "assets/img/case_studies_1.jpg";
    imgUrl: string = "#";
    header: string = "Marketing Header";
    statement: string = "This is the Marketing Statement. A short explanation goes right here.";
    headerUrl: string = "#";
}
