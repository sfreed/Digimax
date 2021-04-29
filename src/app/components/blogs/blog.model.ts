import { Button } from "../components.model";

export class Blog {
    name: string = "Author Name";
    img: string = "assets/img/blog_1.jpg";
    date: string = "Jan 01, 2021";
    url: string = "#";
    title: string = "Blog Title";
    statement: string = "The Blog Statement. An explanation of what this blog is about goes here";
    statementMobile: string = "The shorter Mobile blog statement. "
    facebookUrl: string = "#";
    twitterUrl: string = "#";
    googleUrl: string = "#";
    commentsNum: number = 2;
    blockquote?: string = "This is an example of what a blockquote would look like if included in your blog. These are great for highlighting important Quotes."
    blockquoteMobile?: string = "A shorter version of the blockquote for Mobile devices."
    buttons: Button[]=[];
    categories?: Categories[]=[];
    popular?: Popular[]=[];
}
export class Categories {
    name: string= "Category Name";
    url: string = "#";
    number: number = 5;
}
export class Popular {
    title: string = "Popular Blog Title";
    url: string = "#";
    date: string = "Jan 01, 2021";
    img: string = "assets/img/case_studies_1.jpg";
    tagName: string = "tagname";
    tagUrl: string = "#";
}
