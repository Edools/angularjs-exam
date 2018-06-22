import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { HomeComponent } from './home/home.component';
import { RepositoyComponent } from './repositoy/repositoy.component';
import { IssuesComponent } from './issues/issues.component';
import { NotFoundComponent } from './notfound/notfound.component';
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'repository/:owner/:id', component: RepositoyComponent },
    { path: 'repository/:owner/:id/issues/:number', component: IssuesComponent },
    { path: '**', component: NotFoundComponent }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);