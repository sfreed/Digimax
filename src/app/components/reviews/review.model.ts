import { Button, SectionList } from "../components.model";

export class Review {
    sectionList: SectionList[]=[];
    buttons: Button[]=[];
    singleReview: SingleReview[]=[];
}
export class SingleReview {
    quote: string = "This is the customer quote. This business is so freaking good. I love it so much. This site is AWESOME";
    name: string = "Customer Name";
    title: string = "Customer Title";
    thumbUrl: string = "assets/img/avatar_1.png";
}