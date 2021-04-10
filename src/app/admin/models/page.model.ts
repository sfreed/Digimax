import { Card } from "./card.model";

export class Page {
  dbId: string;
  name: string;
  is_external?: boolean = false;
  templateId: number;
  cards?: Card[] = [];
  page_color: string =  '#ffffff';
}

