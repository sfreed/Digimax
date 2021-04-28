import { Button, SectionList } from "../components.model";

export class Content {
    serviceThumbUrl: string = "assets/img/content_thumb.png";
    contentList: ContentList[] = [];
    sectionList: SectionList[] = [];
    buttons: Button[]=[];
    contentImages: ContentImages[]=[];
}
export class ContentList {
    listHeader: string =  "List Item Header";
    listStatement: string = "list item statement";
}
export class ContentImages {
    large: string = "assets/img/profile_icon_1.svg";
    medium: string = "assets/img/profile_icon_3.svg";
    small: string = "assets/img/profile_icon_4.svg";
}
