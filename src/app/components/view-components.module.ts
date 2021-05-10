import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeFiveComponent } from 'src/app/themes/multi-page/theme-five/theme-five.component';
import { ThemeFourComponent } from 'src/app/themes/multi-page/theme-four/theme-four.component';
import { ThemeOneComponent } from 'src/app/themes/multi-page/theme-one/theme-one.component';
import { ThemeSixComponent } from 'src/app/themes/multi-page/theme-six/theme-six.component';
import { ThemeThreeComponent } from 'src/app/themes/multi-page/theme-three/theme-three.component';
import { ThemeTwoComponent } from 'src/app/themes/multi-page/theme-two/theme-two.component';
import { ThemeEightComponent } from 'src/app/themes/single-page/theme-eight/theme-eight.component';
import { ThemeElevenComponent } from 'src/app/themes/single-page/theme-eleven/theme-eleven.component';
import { ThemeNineComponent } from 'src/app/themes/single-page/theme-nine/theme-nine.component';
import { ThemeSevenComponent } from 'src/app/themes/single-page/theme-seven/theme-seven.component';
import { ThemeTenComponent } from 'src/app/themes/single-page/theme-ten/theme-ten.component';
import { ThemeTwelveComponent } from 'src/app/themes/single-page/theme-twelve/theme-twelve.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailsLeftSidebarComponent } from './blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { BlogFiveComponent } from './blogs/blog-five/blog-five.component';
import { BlogFourComponent } from './blogs/blog-four/blog-four.component';
import { BlogLeftSidebarComponent } from './blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogOneComponent } from './blogs/blog-one/blog-one.component';
import { BlogRightSidebarComponent } from './blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogSixComponent } from './blogs/blog-six/blog-six.component';
import { BlogThreeColumnComponent } from './blogs/blog-three-column/blog-three-column.component';
import { BlogThreeComponent } from './blogs/blog-three/blog-three.component';
import { BlogTwoColumnComponent } from './blogs/blog-two-column/blog-two-column.component';
import { BlogTwoComponent } from './blogs/blog-two/blog-two.component';
import { BrandingComponent } from './branding/branding.component';
import { BreadcrumbAboutComponent } from './breadcrumb/breadcrumb-about/breadcrumb-about.component';
import { BreadcrumbBlogDetailsLeftSidebarComponent } from './breadcrumb/breadcrumb-blog-details-left-sidebar/breadcrumb-blog-details-left-sidebar.component';
import { BreadcrumbBlogDetailsRightSidebarComponent } from './breadcrumb/breadcrumb-blog-details-right-sidebar/breadcrumb-blog-details-right-sidebar.component';
import { BreadcrumbBlogLeftSidebarComponent } from './breadcrumb/breadcrumb-blog-left-sidebar/breadcrumb-blog-left-sidebar.component';
import { BreadcrumbBlogRightSidebarComponent } from './breadcrumb/breadcrumb-blog-right-sidebar/breadcrumb-blog-right-sidebar.component';
import { BreadcrumbBlogThreeColumnComponent } from './breadcrumb/breadcrumb-blog-three-column/breadcrumb-blog-three-column.component';
import { BreadcrumbBlogTwoColumnComponent } from './breadcrumb/breadcrumb-blog-two-column/breadcrumb-blog-two-column.component';
import { BreadcrumbContactComponent } from './breadcrumb/breadcrumb-contact/breadcrumb-contact.component';
import { BreadcrumbPortfolioGridComponent } from './breadcrumb/breadcrumb-portfolio-grid/breadcrumb-portfolio-grid.component';
import { BreadcrumbPortfolioMasonryComponent } from './breadcrumb/breadcrumb-portfolio-masonry/breadcrumb-portfolio-masonry.component';
import { BreadcrumbPortfolioMinimalComponent } from './breadcrumb/breadcrumb-portfolio-minimal/breadcrumb-portfolio-minimal.component';
import { BreadcrumbPortfolioNoGapComponent } from './breadcrumb/breadcrumb-portfolio-no-gap/breadcrumb-portfolio-no-gap.component';
import { BreadcrumbPricingComponent } from './breadcrumb/breadcrumb-pricing/breadcrumb-pricing.component';
import { BreadcrumbServicesComponent } from './breadcrumb/breadcrumb-services/breadcrumb-services.component';
import { BreadcrumbTeamComponent } from './breadcrumb/breadcrumb-team/breadcrumb-team.component';
import { ContactOneComponent } from './contact/contact-one/contact-one.component';
import { ContactThreeComponent } from './contact/contact-three/contact-three.component';
import { ContactTwoComponent } from './contact/contact-two/contact-two.component';
import { ContentFiveComponent } from './content/content-five/content-five.component';
import { ContentFourComponent } from './content/content-four/content-four.component';
import { ContentOneComponent } from './content/content-one/content-one.component';
import { ContentThreeComponent } from './content/content-three/content-three.component';
import { ContentTwoComponent } from './content/content-two/content-two.component';
import { CtaComponent } from './cta/cta.component';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterThreeComponent } from './footer/footer-three/footer-three.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { GoalComponent } from './goal/goal.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HeaderFourComponent } from './header/header-four/header-four.component';
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { HeaderThreeComponent } from './header/header-three/header-three.component';
import { HeaderTwoComponent } from './header/header-two/header-two.component';
import { HeroFiveComponent } from './hero/hero-five/hero-five.component';
import { HeroFourComponent } from './hero/hero-four/hero-four.component';
import { HeroOneComponent } from './hero/hero-one/hero-one.component';
import { HeroSixComponent } from './hero/hero-six/hero-six.component';
import { HeroThreeComponent } from './hero/hero-three/hero-three.component';
import { HeroTwoComponent } from './hero/hero-two/hero-two.component';
import { AboutComponent } from './inner-pages/about/about.component';
import { ContactComponent } from './inner-pages/contact/contact.component';
import { ErrorComponent } from './inner-pages/error/error.component';
import { PortfolioGridComponent } from './inner-pages/portfolio/portfolio-grid/portfolio-grid.component';
import { PortfolioMasonryComponent } from './inner-pages/portfolio/portfolio-masonry/portfolio-masonry.component';
import { PortfolioMinimalComponent } from './inner-pages/portfolio/portfolio-minimal/portfolio-minimal.component';
import { PortfolioNoGapComponent } from './inner-pages/portfolio/portfolio-no-gap/portfolio-no-gap.component';
import { PricingComponent } from './inner-pages/pricing/pricing.component';
import { ServicesComponent } from './inner-pages/services/services.component';
import { TeamComponent } from './inner-pages/team/team.component';
import { ModalMenuComponent } from './modal/modal-menu/modal-menu.component';
import { ModalSearchComponent } from './modal/modal-search/modal-search.component';
import { PortfolioFiveComponent } from './portfolio/portfolio-five/portfolio-five.component';
import { PortfolioFourComponent } from './portfolio/portfolio-four/portfolio-four.component';
import { PortfolioOneComponent } from './portfolio/portfolio-one/portfolio-one.component';
import { PortfolioSixComponent } from './portfolio/portfolio-six/portfolio-six.component';
import { PortfolioThreeComponent } from './portfolio/portfolio-three/portfolio-three.component';
import { PortfolioTwoComponent } from './portfolio/portfolio-two/portfolio-two.component';
import { PricingFourComponent } from './pricing/pricing-four/pricing-four.component';
import { PricingOneComponent } from './pricing/pricing-one/pricing-one.component';
import { PricingThreeComponent } from './pricing/pricing-three/pricing-three.component';
import { PricingTwoComponent } from './pricing/pricing-two/pricing-two.component';
import { PromoOneComponent } from './promo/promo-one/promo-one.component';
import { PromoTwoComponent } from './promo/promo-two/promo-two.component';
import { ReviewOneComponent } from './reviews/review-one/review-one.component';
import { ReviewThreeComponent } from './reviews/review-three/review-three.component';
import { ReviewTwoComponent } from './reviews/review-two/review-two.component';
import { ScrollupComponent } from './scrollup/scrollup.component';
import { ServiceFiveComponent } from './services/service-five/service-five.component';
import { ServiceFourComponent } from './services/service-four/service-four.component';
import { ServiceOneComponent } from './services/service-one/service-one.component';
import { ServiceSevenComponent } from './services/service-seven/service-seven.component';
import { ServiceSixComponent } from './services/service-six/service-six.component';
import { ServiceThreeComponent } from './services/service-three/service-three.component';
import { ServiceTwoComponent } from './services/service-two/service-two.component';
import { TeamOneComponent } from './team/team-one/team-one.component';
import { TeamTwoComponent } from './team/team-two/team-two.component';
import { VideoComponent } from './video/video.component';
import { NavbarComponent } from '../views/navbar/navbar.component';
import { ViewsModule } from '../views/views.module';
import { DxButtonModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderOneComponent,
    HeaderTwoComponent,
    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    ThemeOneComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    PromoOneComponent,
    PromoTwoComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ContentFourComponent,
    ContentFiveComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    PortfolioOneComponent,
    PortfolioTwoComponent,
    PricingOneComponent,
    PricingTwoComponent,
    PricingThreeComponent,
    ReviewOneComponent,
    ReviewTwoComponent,
    ContactOneComponent,
    ContactTwoComponent,
    CtaComponent,
    FooterOneComponent,
    FooterTwoComponent,
    ModalSearchComponent,
    ModalMenuComponent,
    ScrollupComponent,
    VideoComponent,
    BrandingComponent,
    ServiceSixComponent,
    ReviewThreeComponent,
    HeaderThreeComponent,
    ThemeSevenComponent,
    ThemeEightComponent,
    ThemeNineComponent,
    ThemeTenComponent,
    ThemeElevenComponent,
    ThemeTwelveComponent,
    HeaderFourComponent,
    BreadcrumbAboutComponent,
    BreadcrumbServicesComponent,
    BreadcrumbPortfolioGridComponent,
    BreadcrumbPortfolioMinimalComponent,
    BreadcrumbPortfolioNoGapComponent,
    BreadcrumbPortfolioMasonryComponent,
    BreadcrumbTeamComponent,
    BreadcrumbPricingComponent,
    BreadcrumbContactComponent,
    BreadcrumbBlogTwoColumnComponent,
    BreadcrumbBlogThreeColumnComponent,
    BreadcrumbBlogLeftSidebarComponent,
    BreadcrumbBlogRightSidebarComponent,
    BreadcrumbBlogDetailsLeftSidebarComponent,
    BreadcrumbBlogDetailsRightSidebarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioGridComponent,
    PortfolioMinimalComponent,
    PortfolioNoGapComponent,
    PortfolioMasonryComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    ErrorComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    GoalComponent,
    TeamOneComponent,
    TeamTwoComponent,
    ServiceSevenComponent,
    PortfolioThreeComponent,
    PortfolioFourComponent,
    PortfolioFiveComponent,
    PortfolioSixComponent,
    ContactThreeComponent,
    PricingFourComponent,
    GoogleMapComponent,
    AboutUsComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    FooterThreeComponent,
    BlogFiveComponent,
    BlogSixComponent,
  ],
  imports: [
    CommonModule,
    ViewsModule,
    DxTextBoxModule,
    FormsModule,
    ReactiveFormsModule,
    DxTextAreaModule,
    DxButtonModule
  
  ],
  exports: [
    HeaderOneComponent,
    HeaderTwoComponent,
    HeroOneComponent,
    HeroTwoComponent,
    HeroThreeComponent,
    HeroFourComponent,
    HeroFiveComponent,
    HeroSixComponent,
    ThemeOneComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    PromoOneComponent,
    PromoTwoComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent,
    ContentFourComponent,
    ContentFiveComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    PortfolioOneComponent,
    PortfolioTwoComponent,
    PricingOneComponent,
    PricingTwoComponent,
    PricingThreeComponent,
    ReviewOneComponent,
    ReviewTwoComponent,
    ContactOneComponent,
    ContactTwoComponent,
    CtaComponent,
    FooterOneComponent,
    FooterTwoComponent,
    ModalSearchComponent,
    ModalMenuComponent,
    ScrollupComponent,
    VideoComponent,
    BrandingComponent,
    ServiceSixComponent,
    ReviewThreeComponent,
    HeaderThreeComponent,
    ThemeSevenComponent,
    ThemeEightComponent,
    ThemeNineComponent,
    ThemeTenComponent,
    ThemeElevenComponent,
    ThemeTwelveComponent,
    HeaderFourComponent,
    BreadcrumbAboutComponent,
    BreadcrumbServicesComponent,
    BreadcrumbPortfolioGridComponent,
    BreadcrumbPortfolioMinimalComponent,
    BreadcrumbPortfolioNoGapComponent,
    BreadcrumbPortfolioMasonryComponent,
    BreadcrumbTeamComponent,
    BreadcrumbPricingComponent,
    BreadcrumbContactComponent,
    BreadcrumbBlogTwoColumnComponent,
    BreadcrumbBlogThreeColumnComponent,
    BreadcrumbBlogLeftSidebarComponent,
    BreadcrumbBlogRightSidebarComponent,
    BreadcrumbBlogDetailsLeftSidebarComponent,
    BreadcrumbBlogDetailsRightSidebarComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioGridComponent,
    PortfolioMinimalComponent,
    PortfolioNoGapComponent,
    PortfolioMasonryComponent,
    TeamComponent,
    PricingComponent,
    ContactComponent,
    ErrorComponent,
    BlogTwoColumnComponent,
    BlogThreeColumnComponent,
    BlogLeftSidebarComponent,
    BlogRightSidebarComponent,
    BlogDetailsLeftSidebarComponent,
    BlogDetailsRightSidebarComponent,
    GoalComponent,
    TeamOneComponent,
    TeamTwoComponent,
    ServiceSevenComponent,
    PortfolioThreeComponent,
    PortfolioFourComponent,
    PortfolioFiveComponent,
    PortfolioSixComponent,
    ContactThreeComponent,
    PricingFourComponent,
    GoogleMapComponent,
    AboutUsComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogThreeComponent,
    BlogFourComponent,
    FooterThreeComponent,
    BlogFiveComponent,
    BlogSixComponent,
  ]
})
export class ViewComponentsModule { }
