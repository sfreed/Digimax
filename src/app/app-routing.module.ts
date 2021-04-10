import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeOneComponent } from './themes/multi-page/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/multi-page/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/multi-page/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/multi-page/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/multi-page/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/multi-page/theme-six/theme-six.component';
import { ThemeSevenComponent } from './themes/single-page/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/single-page/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/single-page/theme-nine/theme-nine.component';
import { ThemeTenComponent } from './themes/single-page/theme-ten/theme-ten.component';
import { ThemeElevenComponent } from './themes/single-page/theme-eleven/theme-eleven.component';
import { ThemeTwelveComponent } from './themes/single-page/theme-twelve/theme-twelve.component';
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
import { LoginComponent } from './admin/auth/login/login.component';
import { PageOneComponent } from './pages/page-one/page-one.component';

const routes: Routes = [
  {path: '', component: ThemeOneComponent},
  {path: 'theme-two', component: ThemeTwoComponent},
  {path: 'theme-three', component: ThemeThreeComponent},
  {path: 'theme-four', component: ThemeFourComponent},
  {path: 'theme-five', component: ThemeFiveComponent},
  {path: 'theme-six', component: ThemeSixComponent},
  {path: 'theme-seven', component: ThemeSevenComponent},
  {path: 'theme-eight', component: ThemeEightComponent},
  {path: 'theme-nine', component: ThemeNineComponent},
  {path: 'theme-ten', component: ThemeTenComponent},
  {path: 'theme-eleven', component: ThemeElevenComponent},
  {path: 'theme-twelve', component: ThemeTwelveComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio-grid', component: PortfolioGridComponent},
  {path: 'portfolio-minimal', component: PortfolioMinimalComponent},
  {path: 'portfolio-no-gap', component: PortfolioNoGapComponent},
  {path: 'portfolio-masonry', component: PortfolioMasonryComponent},
  {path: 'team', component: TeamComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'blog-two-column', component: BlogTwoColumnComponent},
  {path: 'blog-three-column', component: BlogThreeColumnComponent},
  {path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
  {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
  {path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent},
  {path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent},
  {path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./admin/components/components.module').then(m => m.ComponentsModule) },

  {path: 'preview', component: PageOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
