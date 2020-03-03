import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolidadoComponent } from '@component/consolidado/consolidado/consolidado.component';
import { GrillaSearchComponent } from '@component/grilla-search/grilla-search/grilla-search.component';


const routes: Routes = [
  { path: 'consolidado', component: ConsolidadoComponent, pathMatch: 'full' },
  { path: 'grilla', component: GrillaSearchComponent, pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
