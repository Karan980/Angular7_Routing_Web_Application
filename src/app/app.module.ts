import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
import { HooksComponent } from './body/hooks/hooks.component';
import { IssuesComponent } from './body/issues/issues.component';
import { MembersComponent } from './body/members/members.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './body/members/user-data/user-data.component';
import { FilterPipe } from './filter.pipe';
import { ErrorComponent } from './error/error.component';
import { DeleteButtonComponent } from './body/issues/delete-button/delete-button.component';
import { RepoComponent } from './body/repo/repo.component';
const appRoute: Route[] = [
  { path: 'REPO', component: RepoComponent },
  { path: 'ISSUES', component: IssuesComponent },
  { path: 'HOOKS', component: HooksComponent },
  { path: 'MEMBERS', component: MembersComponent },
   { path: '', component: MembersComponent },
   { path: '**', component: ErrorComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoute),HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, SidebarComponent,NavbarComponent, HooksComponent, IssuesComponent, MembersComponent, UserDataComponent, FilterPipe, ErrorComponent, DeleteButtonComponent, RepoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
