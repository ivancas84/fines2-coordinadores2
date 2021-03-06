import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { ValidatorsService } from '@service/validators/validators.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';
import { forkJoin, Observable } from 'rxjs';
import { Display } from '@class/display';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grilla-search-params',
  templateUrl: './grilla-search-params.component.html',
})
export class GrillaSearchParamsComponent extends SearchParamsComponent {

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) 
  { super(fb, dd, validators); }

  optPlan$: Observable<{[key:string]: any}>;
  optModalidad$: Observable<{[key:string]: any}>;


  initOptions(): void {
    this.optPlan$ = this.dd.all('plan', new Display);
    this.optModalidad$ = this.dd.all('modalidad', new Display);
  }

  initData(): void {
    this.params$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];

          if(response.sede) {
            var ob = this.dd.getOrNull("sede",response.sede);
            obs.push(ob);
          }

          if(response.comision_siguiente) {
            var ob = this.dd.getOrNull("comision",response.comision_siguiente);
            obs.push(ob);
          }

          if(response.sed_centro_educativo) {
            var ob = this.dd.getOrNull("centro_educativo",response.sed_centro_educativo);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      }
    );
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      com_publicada: null,
      com_fecha_anio: null,
      com_fecha_semestre: null,
      com_modalidad: null,
      com_sed_centro_educativo: null,
    });
    return fg;
  }

}
