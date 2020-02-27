import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchComponent } from '@component/search/search.component';
import { Display } from '@class/display';
import { Subject, ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { isEmptyObject } from '@function/is-empty-object.function';
import { getSemester } from '@function/get-semester';

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
    if(isEmptyObject(this.display.order)) this.display.order = {
      "sed_numero":"asc",
      "anio":"asc",
      "semestre":"asc",
    }

    if(!this.display.params.hasOwnProperty("fecha_anio")) this.display.params["fecha_anio"] = new Date().getFullYear();
    if(!this.display.params.hasOwnProperty("fecha_semestre")) this.display.params["fecha_semestre"] = getSemester();
    if(!this.display.params.hasOwnProperty("sed_centro_educativo")) this.display.params["sed_centro_educativo"] = "1";
    if(!this.display.params.hasOwnProperty("autorizada")) this.display.params["autorizada"] = "true";

    this.params$.next(this.display.params);
  }

  onSubmit(): void { 
    this.display.condition = [];
    this.display.setParams(this.searchForm.value);
    window.open("http://localhost/fines2-info/grillaSadCompleta/?" + this.display.encodeURI().join("&"), "_blank");

    //this.router.navigateByUrl('/' + emptyUrl(this.router.url) + '?' + this.display.encodeURI().join("&"));
    //console.log(    this.display.encodeURI().join("&"));
    
    //this.searchChange.emit(this.searchForm.value);
  }

}
