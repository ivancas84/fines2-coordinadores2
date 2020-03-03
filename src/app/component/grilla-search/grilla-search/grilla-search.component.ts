import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchComponent } from '@component/search/search.component';
import { Display } from '@class/display';
import { Subject, ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { isEmptyObject } from '@function/is-empty-object.function';
import { getSemester } from '@function/get-semester';
import { WEB_INFO } from 'src/app/app.config';

@Component({
  selector: 'app-grilla-search',
  templateUrl: './grilla-search.component.html',
})
export class GrillaSearchComponent {

  display: Display;
  /**
   * visualizacion
   */

  params$: Subject<any> =  new ReplaySubject();

  searchForm: FormGroup = this.fb.group({});
  /**
   * Formulario de busqueda
   */
  /**
   * Busqueda a traves de parametros
   * implementacion opcional mediante componente SearchParams
   */ 

  
  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute
  )  {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.initDisplay(params);
      }
    );      
  }

  initDisplay(params){
    this.display = new Display();
    this.display.setByParams(params);
    if(!this.display.params.hasOwnProperty("com_fecha_anio")) this.display.params["com_fecha_anio"] = new Date().getFullYear();
    if(!this.display.params.hasOwnProperty("com_fecha_semestre")) this.display.params["com_fecha_semestre"] = getSemester();
    if(!this.display.params.hasOwnProperty("com_sed_centro_educativo")) this.display.params["com_sed_centro_educativo"] = "1";
    if(!this.display.params.hasOwnProperty("com_modalidad")) this.display.params["com_modalidad"] = "1";

    this.params$.next(this.display.params);
  }

  onSubmit(): void { 
    this.display.condition = [];
    this.display.setParams(this.searchForm.value.params);
    window.open(WEB_INFO + "grillaSadCompleta/?" + this.display.encodeURI().join("&"), "_blank");
  }

}
