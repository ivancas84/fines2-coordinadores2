import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchComponent } from '@component/search/search.component';
import { Display } from '@class/display';
import { Subject, ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { isEmptyObject } from '@function/is-empty-object.function';
import { getSemester } from '@function/get-semester';
import { API_URL } from 'src/app/app.config';

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
    this.display.setConditionByQueryParams(params);
    this.display.addParamIfNot("com_fecha_anio", new Date().getFullYear());
    this.display.addParamIfNot("com_fecha_semestre", getSemester());
    this.display.addParamIfNot("com_sed_centro_educativo", "1");
    this.display.addParamIfNot("com_modalidad", "1");

    this.params$.next(this.display.getParams());
  }

  onSubmit(): void { 
    this.display.setCondition([]);
    this.display.setParams(this.searchForm.value.params);
    window.open(API_URL + "grillaSadCompleta/?" + this.display.encodeURI(), "_blank");
  }

}
