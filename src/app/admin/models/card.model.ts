import { Tag } from "./tag.model";


export class CardComponent {
  dbId?: string;
  name?: string;
  overlay_image?: boolean = false;
  card_type?: string;
  span?: number = 100;
  header?: CardComponentHeader = {...new CardComponentHeader()} ;
  content?: CardComponentContent = {...new CardComponentContent()} ;
  image?: CardComponentImage = {...new CardComponentImage()} ;
  video?: CardComponentVideo = {...new CardComponentVideo()} ;
  iframe?: CardComponentIFrame = {...new CardComponentIFrame()} ;
  custom_item?: CardComponentCustom = {...new CardComponentCustom()} ;
  gallery?: CardComponentGallery = {...new CardComponentGallery()} ;
  testimonial?: CardComponentTestimonial = {...new CardComponentTestimonial()};
  team_member?: CardComponentTeamMember = {...new CardComponentTeamMember()};
  form?: CardComponentForm = {...new CardComponentForm()};
  footer?: CardComponentFooter = {...new CardComponentFooter()} ;
}

export class CardRow {
  distribution: string = 'Even';
  index: number;
  components: CardComponent[] = [];
}

export class CardComponentHeader {
  header_value?: string;
  sub_header_value?: string;
}

export class CardComponentFooter{
  type?: string;
  link_external?: boolean;
  image?: CardComponentImage = {... new CardComponentImage()};
  link?: CardComponentUrl = {... new CardComponentUrl()};
  button_style?: string;
  button_name?: string;
}

export class CardComponentImage {
  name: string;
  url: string;
  height: number;
  width: number;
}

export class CardComponentIFrame {
  name: string;
  url: string;
  height: number;
  width: number;
}

export class CardComponentUrl {
  label: string;
  link: string;
}

export class CardComponentCustom {
  html: string;
  script_source_file?: string;
  custom_script?: string;
}

export class CardComponentContent {
  html: string;
}

export class CardComponentGallery{
  items: GalleryItem[] = [];
  axis?: string = "horizontal";
  height?: number = 400;
}

export class CardComponentForm{
  name: string;
  items: CardComponentFormItem[] = [];
  width: number = 400;
  submitted_form_id: string;
  alignment: string;
  usePlaceholder: boolean;
}

export class CardComponentFormItem{
  label: string;
  field_name: string;
  data_type: string;
  default_value?: string;
  select_values: Tag[] = [];
  check_values: Tag[] = [];
  radio_values: Tag[] = [];
  on_value?: string;
  off_value?: string;
}

export class CardComponentVideo {
  name:string;
  url: string;
  source?: string;
  width?: number = 800;
  height?: number = 450;
}

export class CardComponentTeamMember{
  name: string;
  title: string;
  linkedin: string;
  email: string;
  url: string;
}

export class Card {
  dbId: string;
  name: string;
  rows: CardRow[] = [];
  card_color: string =  '#ffffff';
  card_section: string = 'Card';
}

export class GalleryItem {
  item_type?: string;
  item_name: string ="";
  item_url: string ="";
  item_source: string;
  width_ratio?: number = 1;
  height_ratio?: number = 1;
  item_height?: number;
  item_width?: number;
}

export class CardComponentTestimonial {
  items: TestimonialItem[] = [];
}

export class TestimonialItem {
  name: string = "";
  title: string = "";
  quote: string = "";
  url: string = "";
}
