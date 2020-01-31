import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolidadoComponent } from '@component/consolidado/consolidado/consolidado.component';


const routes: Routes = [
  { path: 'consolidado', component: ConsolidadoComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
