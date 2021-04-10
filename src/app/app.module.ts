import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './components/header/header-one/header-one.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { HeroOneComponent } from './components/hero/hero-one/hero-one.component';
import { HeroTwoComponent } from './components/hero/hero-two/hero-two.component';
import { HeroThreeComponent } from './components/hero/hero-three/hero-three.component';
import { HeroFourComponent } from './components/hero/hero-four/hero-four.component';
import { HeroFiveComponent } from './components/hero/hero-five/hero-five.component';
import { HeroSixComponent } from './components/hero/hero-six/hero-six.component';
import { ThemeOneComponent } from './themes/multi-page/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/multi-page/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/multi-page/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/multi-page/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/multi-page/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/multi-page/theme-six/theme-six.component';
import { PromoOneComponent } from './components/promo/promo-one/promo-one.component';
import { PromoTwoComponent } from './components/promo/promo-two/promo-two.component';
import { ContentOneComponent } from './components/content/content-one/content-one.component';
import { ContentTwoComponent } from './components/content/content-two/content-two.component';
import { ContentThreeComponent } from './components/content/content-three/content-three.component';
import { ContentFourComponent } from './components/content/content-four/content-four.component';
import { ContentFiveComponent } from './components/content/content-five/content-five.component';
import { ServiceOneComponent } from './components/services/service-one/service-one.component';
import { ServiceTwoComponent } from './components/services/service-two/service-two.component';
import { ServiceThreeComponent } from './components/services/service-three/service-three.component';
import { ServiceFourComponent } from './components/services/service-four/service-four.component';
import { ServiceFiveComponent } from './components/services/service-five/service-five.component';
import { PortfolioOneComponent } from './components/portfolio/portfolio-one/portfolio-one.component';
import { PortfolioTwoComponent } from './components/portfolio/portfolio-two/portfolio-two.component';
import { PricingOneComponent } from './components/pricing/pricing-one/pricing-one.component';
import { PricingTwoComponent } from './components/pricing/pricing-two/pricing-two.component';
import { PricingThreeComponent } from './components/pricing/pricing-three/pricing-three.component';
import { ReviewOneComponent } from './components/reviews/review-one/review-one.component';
import { ReviewTwoComponent } from './components/reviews/review-two/review-two.component';
import { ContactOneComponent } from './components/contact/contact-one/contact-one.component';
import { ContactTwoComponent } from './components/contact/contact-two/contact-two.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footer/footer-two/footer-two.component';
import { ModalSearchComponent } from './components/modal/modal-search/modal-search.component';
import { ModalMenuComponent } from './components/modal/modal-menu/modal-menu.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { VideoComponent } from './components/video/video.component';
import { BrandingComponent } from './components/branding/branding.component';
import { ServiceSixComponent } from './components/services/service-six/service-six.component';
import { ReviewThreeComponent } from './components/reviews/review-three/review-three.component';
import { HeaderThreeComponent } from './components/header/header-three/header-three.component';
import { ThemeSevenComponent } from './themes/single-page/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/single-page/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/single-page/theme-nine/theme-nine.component';
import { ThemeTenComponent } from './themes/single-page/theme-ten/theme-ten.component';
import { ThemeElevenComponent } from './themes/single-page/theme-eleven/theme-eleven.component';
import { ThemeTwelveComponent } from './themes/single-page/theme-twelve/theme-twelve.component';
import { HeaderFourComponent } from './components/header/header-four/header-four.component';
import { BreadcrumbAboutComponent } from './components/breadcrumb/breadcrumb-about/breadcrumb-about.component';
import { BreadcrumbServicesComponent } from './components/breadcrumb/breadcrumb-services/breadcrumb-services.component';
import { BreadcrumbPortfolioGridComponent } from './components/breadcrumb/breadcrumb-portfolio-grid/breadcrumb-portfolio-grid.component';
import { BreadcrumbPortfolioMinimalComponent } from './components/breadcrumb/breadcrumb-portfolio-minimal/breadcrumb-portfolio-minimal.component';
import { BreadcrumbPortfolioNoGapComponent } from './components/breadcrumb/breadcrumb-portfolio-no-gap/breadcrumb-portfolio-no-gap.component';
import { BreadcrumbPortfolioMasonryComponent } from './components/breadcrumb/breadcrumb-portfolio-masonry/breadcrumb-portfolio-masonry.component';
import { BreadcrumbTeamComponent } from './components/breadcrumb/breadcrumb-team/breadcrumb-team.component';
import { BreadcrumbPricingComponent } from './components/breadcrumb/breadcrumb-pricing/breadcrumb-pricing.component';
import { BreadcrumbContactComponent } from './components/breadcrumb/breadcrumb-contact/breadcrumb-contact.component';
import { BreadcrumbBlogTwoColumnComponent } from './components/breadcrumb/breadcrumb-blog-two-column/breadcrumb-blog-two-column.component';
import { BreadcrumbBlogThreeColumnComponent } from './components/breadcrumb/breadcrumb-blog-three-column/breadcrumb-blog-three-column.component';
import { BreadcrumbBlogLeftSidebarComponent } from './components/breadcrumb/breadcrumb-blog-left-sidebar/breadcrumb-blog-left-sidebar.component';
import { BreadcrumbBlogRightSidebarComponent } from './components/breadcrumb/breadcrumb-blog-right-sidebar/breadcrumb-blog-right-sidebar.component';
import { BreadcrumbBlogDetailsLeftSidebarComponent } from './components/breadcrumb/breadcrumb-blog-details-left-sidebar/breadcrumb-blog-details-left-sidebar.component';
import { BreadcrumbBlogDetailsRightSidebarComponent } from './components/breadcrumb/breadcrumb-blog-details-right-sidebar/breadcrumb-blog-details-right-sidebar.component';
import { AboutComponent } from './components/inner-pages/about/about.component';
import { ServicesComponent } from './components/inner-pages/services/services.component';
import { PortfolioGridComponent } from './components/inner-pages/portfolio/portfolio-grid/portfolio-grid.component';
import { PortfolioMinimalComponent } from './components/inner-pages/portfolio/portfolio-minimal/portfolio-minimal.component';
import { PortfolioNoGapComponent } from './components/inner-pages/portfolio/portfolio-no-gap/portfolio-no-gap.component';
import { PortfolioMasonryComponent } from './components/inner-pages/portfolio/portfolio-masonry/portfolio-masonry.component';
import { TeamComponent } from './components/inner-pages/team/team.component';
import { PricingComponent } from './components/inner-pages/pricing/pricing.component';
import { ContactComponent } from './components/inner-pages/contact/contact.component';
import { ErrorComponent } from './components/inner-pages/error/error.component';
import { BlogTwoColumnComponent } from './components/blogs/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { GoalComponent } from './components/goal/goal.component';
import { TeamOneComponent } from './components/team/team-one/team-one.component';
import { TeamTwoComponent } from './components/team/team-two/team-two.component';
import { ServiceSevenComponent } from './components/services/service-seven/service-seven.component';
import { PortfolioThreeComponent } from './components/portfolio/portfolio-three/portfolio-three.component';
import { PortfolioFourComponent } from './components/portfolio/portfolio-four/portfolio-four.component';
import { PortfolioFiveComponent } from './components/portfolio/portfolio-five/portfolio-five.component';
import { PortfolioSixComponent } from './components/portfolio/portfolio-six/portfolio-six.component';
import { ContactThreeComponent } from './components/contact/contact-three/contact-three.component';
import { PricingFourComponent } from './components/pricing/pricing-four/pricing-four.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogOneComponent } from './components/blogs/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/blogs/blog-two/blog-two.component';
import { BlogThreeComponent } from './components/blogs/blog-three/blog-three.component';
import { BlogFourComponent } from './components/blogs/blog-four/blog-four.component';
import { FooterThreeComponent } from './components/footer/footer-three/footer-three.component';
import { BlogFiveComponent } from './components/blogs/blog-five/blog-five.component';
import { BlogSixComponent } from './components/blogs/blog-six/blog-six.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ErrorInterceptor } from './admin/auth/helpers/error.interceptor';
import { AuthService } from './admin/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './views/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

@NgModule({
  declarations: [
    AppComponent,
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

    LoginComponent,

    NavbarComponent,

    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: BUCKET, useValue: '' },

  ],
  exports: [
    PageOneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
