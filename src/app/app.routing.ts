import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MembersRepoComponent } from './members-repo/members-repo.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomepageComponent
  },

  {
  path: 'About',
  component: AboutComponent
  },

  {
  path: 'Admin',
  component: AdminComponent
  },

  {
  path: 'Members',
  component: MembersRepoComponent
  },

  {
  path: 'Members/:id',
  component: MemberDetailsComponent
  },

  {
  path: 'Collegiate',
  component: MembersRepoComponent
  },

  {
  path: 'Chaperone',
  component: MembersRepoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
