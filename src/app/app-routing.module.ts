import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  SearchDestiniesComponentComponent
} from "./components/search/search-destinies-component/search-destinies-component.component";


const routes: Routes = [
  { path: 'search', component: SearchDestiniesComponentComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
