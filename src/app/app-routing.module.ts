import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './components/contents/members/members.component'
import { SearchComponent } from './components/contents/search/search.component'

const routes: Routes = [
  { path: 'members', component: MembersComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: '/members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
