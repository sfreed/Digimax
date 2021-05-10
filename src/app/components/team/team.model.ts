import { SectionList } from "../components.model";

export class Team {
    sectionList: SectionList[]=[];
    teamMember: TeamMember[]=[];
}
export class TeamMember {
    name: string = "Team Member Name";
    title: string = "Team Memeber Title";
    imgUrl: string = "assets/img/team_thumb_1.jpg";
}