export class Template{
    name: string;
    theme: string;
    type: string;
    description:string;
    sections?: string[];
    pages?: string[];
  }
  
  const templates: Template[] = [{
    name: 'Template 1',
    theme: 'theme-one',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 1',
    sections: ['header-1','hero-1','promo-1','content-1','content-4','service-1','portfolio-1','pricing-1',
    'review-1','contact-1','cta','footer-1'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  },{
    name: 'Template 2',
    theme: 'theme-two',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 2',
    sections: ['header-2','hero-2','service-2','video','portfolio-2','content-1','pricing-2',
      'review-1','contact-1','cta','footer-1'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  },{
    name: 'Template 3',
    theme: 'theme-three',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 3',
    sections: ['header-1','hero-3','promo-2','content-2','content-4','service-3','pricing-2',
      'review-2','contact-1','cta','footer-one'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  },{
    name: 'Template 4',
    theme: 'theme-four',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 4',
    sections: ['header-1','hero-4','branding','content-1','content-4','service-4','pricing-2',
      'review-1','contact-1','cta','footer-1'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  },{
    name: 'Template 5',
    theme: 'theme-five',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 5',
    sections: ['header-1','hero-5','service-6','content-3','content-5','pricing-3',
      'review-3','contact-2','cta','footer-2'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  },{
    name: 'Template 6',
    theme: 'theme-six',
    type: 'Multi Page',
    description: 'MultiPage Template based off of Theme 6',
    sections: ['header-1','hero-6','service-5','content-1','content-4','service-1','pricing-2',
      'review-1','contact-1','cta','footer-1'],
    pages: ['home', 'about', 'services', 'pricing', 'contact']
  }];

  export {templates};

  export class SectionType{
    name: string;
  }

  export class Section{
    type: string;
    name: string;
  }

  const sectionType: SectionType[] = [
    {name: 'header'},{name: 'hero'},{name: 'promo'},{name: 'content'},{name: 'service'},{name: 'review'},
    {name: 'portfolio'},{name: 'pricing'},{name: 'team'},{name: 'contact'},
    {name: 'cta'},{name: 'branding'},{name: 'video'},{name: 'footer'},
  ]

  export {sectionType};

  const sections: Section[] = [
    {type: 'header', name: 'header-1'}, {type: 'header', name: 'header-2'},
    {type: 'hero', name: 'hero-1'},{type: 'hero', name: 'hero-2'},{type: 'hero', name: 'hero-3'},{type: 'hero', name: 'hero-4'},{type: 'hero', name: 'hero-5'},
    {type: 'promo', name: 'promo-1'}, {type: 'promo', name: 'promo-2'},
    {type: 'content', name: 'content-1'},{type: 'content', name: 'content-2'},{type: 'content', name: 'content-3'},{type: 'content', name: 'content-4'},{type: 'content', name: 'content-5'},
    {type: 'service', name: 'service-1'},{type: 'service', name: 'service-2'},{type: 'service', name: 'service-3'},{type: 'service', name: 'service-4'},{type: 'service', name: 'service-5'},{type: 'service', name: 'service-5'},
    {type: 'review', name: 'review-1'},{type: 'review', name: 'review-2'},{type: 'review', name: 'review-3'},
    {type: 'portfolio', name: 'portfolio-1'}, {type: 'portfolio', name: 'portfolio-2'},
    {type: 'pricing', name: 'pricing-1'}, {type: 'pricing', name: 'pricing-2'},
    {type: 'contact', name: 'contact-1'}, {type: 'contact', name: 'contact-2'},
    {type: 'team', name: 'team-1'}, {type: 'team', name: 'team-2'},
    {type: 'cta', name: 'cta'}, {type: 'branding', name: 'branding'},{type: 'video', name: 'video'},
    {type: 'footer', name: 'footer-1'}, {type: 'footer', name: 'footer-2'},{type: 'footer', name: 'footer-3'},
  ];

  export {sections};


